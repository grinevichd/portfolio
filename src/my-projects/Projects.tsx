import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/style/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/compomemts/title/Title";
import todolistImage from './../assets/image/todolist.jpg'
import socialImage from './../assets/image/social-network.jpg'
import learnImage from './../assets/image/learn.jpg'
import {Fade} from 'react-awesome-reveal';

export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todolistImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const learn = {
        backgroundImage: `url(${learnImage})`,
    };
    return (
        <div className={`${style.projectsBlock}`}>
            <div id={'projects'} className={`${styleContainer.container} ${style.projectContainer}`}>

                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Fade direction={"left"}>
                        <Project style={todo} description="Todolist" shortDescription="One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks."/>
                    </Fade >
                    <Fade direction={"up"}>
                        <Project style={learn} description="Learn cards" shortDescription="the training cards helped you to learn the material effectively by repeating the questions over and over again"/>
                    </Fade >
                    <Fade direction={"right"}>
                        <Project style={social} description="Social network" shortDescription="A social network is an online service for communicating with people who have similar interests or backgrounds and sharing content between them. The primary goal of any social media is to build connections with others"/>
                    </Fade>
                </div>

            </div>

        </div>
    );
};

