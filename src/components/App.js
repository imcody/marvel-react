import React, {Component} from "react";
import Loading from "./loading/Loading";
import Header from "./header/Header";
import RexMainContent from "./rex-main-content/RexMainContent";

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Loading />
                <Header />
                <RexMainContent />
            </div>
        );  
    };
}

export default App;