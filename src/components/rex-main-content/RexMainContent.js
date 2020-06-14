import React, {Component} from "react";
import MainMenu from "./../main-menu/MainMenu";
import Breadcum from "./../breadcum/Breadcum";
import ComicList from "./../comic-list/ComicList";

class RexMainContent extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <main className="rex-main-content">
                <MainMenu />
                <Breadcum />
                <ComicList />
            </main>
        );
    }
}

export default RexMainContent;