import React, {Component} from "react";
import Col4Left from "./col-4-left/Col4Left";
import Col8Right from "./col-8-right/Col8Right";
import Comic from "../../data/Comic";

class CoursePage extends Component{
    
    render(){
        return (
            <section className="courses_page">
                <div className="container">
                    <Col4Left />
                    <Col8Right Comic={Comic} />
                </div>
            </section>
        );
    }
}

export default CoursePage;