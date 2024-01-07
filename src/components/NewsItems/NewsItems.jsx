import React,{useEffect,useState} from 'react'
import image from '../../assets/no_image.avif';


export default function NewsItems(props) {
    let a="No description";
    return (
        <div>
            <div className="card" style={{width:"18rem"}}>
                <img src={props.imageurl?props.imageurl:image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description?props.description:a}</p>
                    <p className="card-text"><small className="text-muted">By {props.author?props.author:"Unknown"} on {new Date(props.dates).toGMTString()} </small></p>
                    <div className="d-flex justify-content-between">
                    <a style={{backgroundColor: '#7373ff',color:'white'}} href={props.url} target="_blank" className="btn">Read More</a>
                    <span style={{height:'20px'}} className="mt-2 badge rounded-pill text-bg-dark">{props.source.name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
