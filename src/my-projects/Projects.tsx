import React from 'react';
import style from './Projects.module.css'
import styleContainer from  '../common/style/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/compomemts/title/Title";
import todolistImage from './../assets/image/TODOLIST.png'
export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todolistImage})`,
    };
    return (
        <div className={`${style.projectsBlock}`}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                <Project style={todo} description="Todolist" shortDescription="Краткое описание"/>
                <Project  description="Social network" shortDescription="Краткое описание"/>
                </div>
            </div>

        </div>
    );
};

