import React from 'react';
import style from "./Skill.module.css"
import {StyleType} from "../../my-projects/project/Project";
import { Fade } from 'react-awesome-reveal';

type SkillPropsType = {
    title : string

    style? : StyleType
}

export const Skill = (props: SkillPropsType) => {
    return (
        <Fade  damping={0.5} direction={'up'}>
        <div className={style.skill} >
            <div className={style.icon} style={props.style}/>
            <h3 className={style.skillTitle}>{props.title}</h3>

        </div>
        </Fade>
    );
};

