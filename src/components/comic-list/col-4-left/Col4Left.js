import React, {Component} from "react";

class Col4Left extends Component{
    
    render(){
        return (
            <div className="col-md-4">
                <aside className="widget widget_archive">
                    <h5>Availability</h5>
                    <ul>
                        <li><a href="#current">Current</a>&nbsp;204</li>
                        <li><a href="#Starting">Starting Soon</a>&nbsp;155</li>
                        <li><a href="#Upcoming">Upcoming</a>&nbsp;149</li>
                        <li><a href="#Self-Paced">Self-Paced</a>&nbsp;453</li>
                        <li><a href="#Archived">Archived</a>&nbsp;33</li>
                    </ul>
                </aside>
                <aside className="widget featured-section">
                    <h5>FEATURED COURSES</h5>
                    <div className="instructor-content">
                        <div className="instructor-img">
                            <img src="http://placehold.it/83x82" alt="" />
                        </div>
                        <div className="instruction-sidbar-title">
                            <a href="#Water"><h6>Water Management</h6></a>
                            <span className="date">Starts: Jan 11, 2016</span>
                            <p>By <a href="#Eric">Eric Grimson</a></p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    {/* Keep the clearfix when adding div below */}
                </aside>
            </div>
        );
    }
}

export default Col4Left;