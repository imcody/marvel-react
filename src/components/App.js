import React, {Component} from "react";
import Loading from "./loading/Loading";
import Header from "./header/Header";
import RexMainContent from "./rex-main-content/RexMainContent";
import md5 from 'md5';

class App extends Component{

    componentDidMount(){
        const eventDate = Date.now();
        const privateKey = "ca554d81ee4b387ff9c7e0f0e3683754f570eb9e";
        const publicKey = "df58a9f1af8b007d82f009740fa3a828";
        let apiKey = md5(eventDate + privateKey + publicKey);
        fetch("http://gateway.marvel.com/v1/public/comics?limit=10&ts=" + eventDate + "&apikey=df58a9f1af8b007d82f009740fa3a828&hash=" + apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
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