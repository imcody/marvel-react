import React from "react";

function Col8Right(){
    return (
        <div class="col-md-8 courses_page-right">
            <div id="products" class="row list-group list-group-page">
                <div class="item  col-sm-12 courses-list">
                    <div class="block-content row">
                        <div class="courses-img col-md-6">
                            <img src="http://placehold.it/365x221" alt="" />
                            <div class="courses-overlay">
                                <h6>$43</h6>
                            </div>
                        </div>
                        <div class="content col-md-6">
                            <div class="tag">
                                <i class="fa fa-bookmark"></i>
                            </div>
                            <a href="single-courses.html"><h6>introduction to Marketing</h6></a>
                            <div class="entry-meta">
                                <div class="author">
                                    <p>By <a href="#">Eric Grimson</a></p>
                                </div>
                                <div class="date">
                                    <p>Starts: Jan 11, 2016</p>
                                </div>
                            </div>
                            <p class="description">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Col8Right;