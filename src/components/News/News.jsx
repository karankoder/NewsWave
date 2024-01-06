import React, { useState, useEffect } from 'react'
import NewsItems from '../NewsItems/NewsItems'

export default function News(props) {
    const [article, setarticle] = useState([]);
    const [page, setpage] = useState(1);
    const api_key = "1d067471fc9e48da856a03015340cc05";
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${api_key}&pageSize=18&page=${page}`;
    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setarticle(data.articles);
    }
    useEffect(() => {
        fetchData();                                                         
    }, [])
    const handleNext = () => {
        let page_no = page;
        setpage(page_no + 1);
        fetchData();
    }
    const handlePrev = () => {
        setpage(page - 1);
        fetchData();
    }
    return (
        <>
            <div className='container my-3'>
                <h2 className='text-center mt-5 fs-1'>NewsWaves - Top Headlines</h2>
                <div className="row" style={{ marginLeft: '70px' }}>
                    {article.map((element) => {
                        return <div key={element.url} className="col-md-4 mt-5">
                            <NewsItems imageurl={element.urlToImage} title={element.title} description={element.description} url={element.url}></NewsItems>
                        </div>
                    })}
                </div>
                <div className="mt-4 buttons d-flex justify-content-between" style={{ marginLeft: '70px' }}>
                    <button onClick={handlePrev} type="button" className="btn btn-primary" style={{ marginLeft: '11px', width: '100px' }}>Previous</button>
                    <button onClick={handleNext} type="button" className="btn  btn-primary" style={{ marginRight: '95px', width: '100px' }}>Next</button>
                </div>
            </div>
        </>
    )
}