import React,{useEffect,useState} from 'react'

export default function NewsItems(props) {
    
    return (
        <div>
            <div className="card" style={{width:"18rem"}}>
                <img src={props.imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}