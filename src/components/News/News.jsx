import React, { useState, useEffect } from 'react'
import NewsItems from '../NewsItems/NewsItems'
import Spinner from '../Spinner/Spinner';

export default function News(props) {
    const [article, setarticle] = useState([]);
    const [page, setpage] = useState(1);
    const [totalarticles, settotalarticles] = useState(0)
    const [loader, setloader] = useState(false);
    const api_key = "1d067471fc9e48da856a03015340cc05";
    const fetchData = async (pageNumber) => {
        setloader(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api_key}&pageSize=${props.pageSize}&page=${pageNumber}`;
        const response = await fetch(url);
        const data = await response.json();
        setarticle(data.articles);
        settotalarticles(data.totalResults);
        setloader(false);
    }
    useEffect(() => {
        fetchData(page);                                                      
    }, [])
    const handleNext = () => {
        const nextpage=page+1;
        setpage(nextpage);
        fetchData(nextpage);
    }
    const handlePrev = () => {
        const prevpage=page-1;
        setpage(prevpage);
        fetchData(prevpage);
    }
    return (
        <>
            <div className='container my-5'>
                <h2 className='text-center fs-1' style={{marginTop:'120px'}}>NewsWaves - Top Headlines</h2>
                {loader&& <Spinner></Spinner>}
                {!loader&& <div className="row" style={{ marginLeft: '70px' }}>
                    {article.map((element) => {
                        return <div key={element.url} className="col-md-4 mt-5">
                            <NewsItems imageurl={element.urlToImage} title={element.title} description={element.description} url={element.url} author={element.author} dates={element.publishedAt} source={element.source}></NewsItems>
                        </div>
                    })}
                </div>}
                {!loader&&<div className="mt-4 buttons d-flex justify-content-between" style={{ marginLeft: '70px' }}>
                    <button disabled={page<=1} onClick={handlePrev} type="button" className="btn btn-primary" style={{ marginLeft: '11px', width: '100px' }}>Previous</button>
                    <button disabled={Math.ceil(totalarticles/18)<=page} onClick={handleNext} type="button" className="btn  btn-primary" style={{ marginRight: '95px', width: '100px' }}>Next</button>
                </div>}
            </div>
        </>
    )
}

News.defaultProps={
    country:'in',
    category:'general',
    pageSize:'18'
}