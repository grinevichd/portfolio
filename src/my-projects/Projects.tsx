import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/style/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/compomemts/title/Title";
import todolistImage from './../assets/image/TODOLIST.png'
import {Fade} from 'react-awesome-reveal';

export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todolistImage})`,
    };
    return (
        <div className={`${style.projectsBlock}`}>
            <div id={'projects'} className={`${styleContainer.container} ${style.projectContainer}`}>

                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Fade direction={"left"}>
                        <Project style={todo} description="Todolist" shortDescription="Краткое описание"/>
                    </Fade >
                    <Fade direction={"right"}>
                        <Project description="Social network" shortDescription="Краткое описание"/>
                    </Fade>
                </div>

            </div>

        </div>
    );
};

