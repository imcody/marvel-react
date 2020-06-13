import React from "react";
import Col4Left from "./col-4-left/Col4Left";
import Col8Right from "./col-8-right/Col8Right";

function CoursePage(){
    return (
        <section className="courses_page">
            <div className="container">
                <Col4Left />
                <Col8Right />
            </div>
        </section>
    );
}

export default CoursePage;