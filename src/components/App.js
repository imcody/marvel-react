import React from "react";
import Loading from "./loading/Loading";
import Header from "./header/Header";
import RexMainContent from "./rex-main-content/RexMainContent";

function App(){
    return (
        <div>
            <Loading />
            <Header />
            <RexMainContent />
        </div>
    );
}

export default App;