import React from "react";
import Authors from "../authors/Authors"

function Col8Right(props){
    console.log(props);
    return (
        <div className="col-md-8 courses_page-right">
            <div id="products" className="row list-group list-group-page">
                <div className="item  col-sm-12 courses-list">
                    <div className="block-content row">
                        <div className="courses-img col-md-6">
                            <img height="480" width="325" alt={props.Comic.title} src={props.Comic.images[0].path+ "." + props.Comic.images[0].extension} />
                            <div className="courses-overlay">
                                <h6>$ {props.Comic.prices.price}</h6>
                            </div>
                        </div>
                        <div className="content col-md-6">
                            <div className="tag">
                                <i className="fa fa-bookmark"></i>
                            </div>
                            <a href="single-courses.html"><h6>{props.Comic.title}</h6></a>
                            <div className="entry-meta">
                                <Authors Author={props.Comic.creators.items} />
                                <div className="date">
                                    <p>Starts: Jan 11, 2016</p>
                                </div>
                            </div>
                            <p className="description">{props.Comic.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Col8Right;