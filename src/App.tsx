import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./my-projects/Projects";
import {Work} from "./work/Work";
import {Сontacts} from "./contacts/Сontacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Main/>
            <Skills/>
            <Projects />

            <Сontacts/>
            <Footer/>
        </div>
    );
}

export default App;
