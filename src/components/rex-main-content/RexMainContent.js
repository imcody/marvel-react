import React from "react";
import MainMenu from "./../main-menu/MainMenu";
import Breadcum from "./../breadcum/Breadcum";
import ComicList from "./../comic-list/ComicList";

function RexMainContent(){
    return (
        <main className="rex-main-content">
            <MainMenu />
            <Breadcum />
            <ComicList />
        </main>
    );
}

export default RexMainContent;