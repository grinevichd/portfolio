import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./my-projects/Projects";
import {Сontacts} from "./contacts/Сontacts";
import Footer from "./footer/Footer";
import ScrollToTop from 'react-scroll-to-top';
import img from './assets/image/arrow.svg'


function App() {
    const style = {
        background : "#fff",
        borderRadius : "50%",
        backgroundImage : `url(${img})`,
        backgroundPosition: '50% 50%',
        backgroundSize : 20,
        backgroundRepeat : 'no-repeat'
    }
    return (
        <div className="App">
            <Main/>
            <Skills/>
            <Projects />
            <Сontacts/>
            <Footer/>
            <ScrollToTop smooth className={'App'} style={style} svgPath={img}/>
        </div>


    );
}

export default App;


