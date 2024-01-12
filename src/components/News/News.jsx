import React, { useState, useEffect } from 'react'
import NewsItems from '../NewsItems/NewsItems'
import Spinner from '../Spinner/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
    const [article, setarticle] = useState([]);
    const [page, setpage] = useState(1);
    const [totalarticles, settotalarticles] = useState(0)
    const [loader, setloader] = useState(false);
    const api_key = import.meta.env.VITE_API_KEY;
        const fetchData = async (pageNumber) => {
            setloader(true);
            props.changeProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api_key}&pageSize=${props.pageSize}&page=${pageNumber}`;
            const response = await fetch(url);
            props.changeProgress(40);
            const data = await response.json();
            props.changeProgress(70);
            setarticle(data.articles);
            settotalarticles(data.totalResults);
            props.changeProgress(100);
            setloader(false);
        }
    useEffect(() => {
        fetchData(page);
    }, [])
    const handleNext = async () => {
        const pageNumber=page+1;
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api_key}&pageSize=${props.pageSize}&page=${pageNumber}`;
        const response = await fetch(url);
        const data = await response.json();
        // setloader(false);
        setarticle(prevArticles => prevArticles.concat(data.articles));
        settotalarticles(data.totalResults);
        setpage(page+1);
    }
    const capitaliseFirstLetter=(s)=>{
       return s.slice(0,1).toUpperCase()+s.slice(1)
    }
    return (
        <>
            <div className='container my-5'> 
                <h2 className='text-center fs-1' style={{ marginTop: '120px' }}>NewsWave-Top {capitaliseFirstLetter(props.category)} Headlines</h2>
                {loader && <Spinner></Spinner>}
                <InfiniteScroll
                    dataLength={article.length}
                    next={handleNext}
                    hasMore={article.length !== totalarticles}
                    loader={!loader && <Spinner></Spinner>}
                >
                    <div className="container">
                        <div className="row" style={{ marginLeft: '70px' }}>
                            {article.map((element) => {
                                return <div key={element.url} className="col-md-4 mt-5">
                                    <NewsItems imageurl={element.urlToImage} title={element.title} description={element.description} url={element.url} author={element.author} dates={element.publishedAt} source={element.source}></NewsItems>
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div >
        </>
    )
}

News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: '18'
}