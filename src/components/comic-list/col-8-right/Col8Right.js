import React, {Component} from "react";
import Authors from "../authors/Authors"

class Col8Right extends Component{
    render(){
        return (
            <div className="col-md-8 courses_page-right">
                <div id="products" className="row list-group list-group-page">
                    <div className="item  col-sm-12 courses-list">
                        <div className="block-content row">
                            <div className="courses-img col-md-6">
                                <img height="480" width="325" alt={this.props.Comic.title} src={this.props.Comic.images[0].path+ "." + this.props.Comic.images[0].extension} />
                                <div className="courses-overlay">
                                    <h6>$ {this.props.Comic.prices.price}</h6>
                                </div>
                            </div>
                            <div className="content col-md-6">
                                <div className="tag">
                                    <i className="fa fa-bookmark"></i>
                                </div>
                                <a href="single-courses.html"><h6>{this.props.Comic.title}</h6></a>
                                <div className="entry-meta">
                                    <Authors key={this.props.Comic.creators.items.id} Author={this.props.Comic.creators.items} />
                                    <div className="date">
                                        <p>Starts: Jan 11, 2016</p>
                                    </div>
                                </div>
                                <p className="description">{this.props.Comic.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Col8Right;