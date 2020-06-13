import React from "react";
import MainMenu from "./../main-menu/MainMenu";
import Breadcum from "./../breadcum/Breadcum";
import CoursePage from "./../course-page/CoursePage";

function RexMainContent(){
    return (
        <main className="rex-main-content">
            <MainMenu />
            <Breadcum />
            <CoursePage />
        </main>
    );
}

export default RexMainContent;