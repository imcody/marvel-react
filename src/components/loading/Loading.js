import React, {Component} from "react";

class Loading extends Component{
    render(){
        return (
            <div className="loading">
                <div className="wrapper">
                    <div className="cssload-loader"></div>
                </div>
            </div>
        );
    }
}

export default Loading