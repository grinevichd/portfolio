import React from 'react';
import style from './Project.module.css'


type ProjectPropsType = {
    description : string
    shortDescription : string
    style?: StyleType
    code : string
    demo : string

}
export type StyleType = {
    backgroundImage: string,
}

export const Project = (props:ProjectPropsType) => {

    return (
        <div className={style.project}>
            <div className={style.projectImgItem} style={props.style}>
                <div className={style.buttonContainer}>
                <a href={props.demo}><button className={style.projectBtn} >Demo</button></a>
                <a href={props.code}><button className={style.projectBtn} >Code</button></a>
                </div>
            </div>
            <div className={style.projectInfo}>
            <h3 className={style.description}>{props.description}</h3>
            <div className={style.shortDescription}>{props.shortDescription}</div>
            </div>
        </div>
    );
};
