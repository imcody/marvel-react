import React, {Component} from "react";

class Breadcum extends Component{
    constructor(){
        super();
    }
    
    render(){
        return (
            <section className="breadcum">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>COMIC LIST</h4>
                            <div className="pages">
                                <a href="index.html">Home</a> 
                                <span>&#47;</span>
                                <a href="about_page.html">Comic List</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Breadcum;