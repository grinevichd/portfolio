import React from 'react';
import style from './Project.module.css'
import styleButton from '../../common/style/Button.module.css'


type ProjectPropsType = {
    description : string
    shortDescription : string
    style?: StyleType

}
export type StyleType = {
    backgroundImage: string,
}

export const Project = (props:ProjectPropsType) => {

    return (
        <div className={style.project}>
            <div className={style.projectImgItem} style={props.style}>
                <a href="#"><button className={style.projectBtn} >Смотреть</button></a>
            </div>
            <div className={style.projectInfo}>
            <h3 className={style.description}>{props.description}</h3>
            <div className={style.shortDescription}>{props.shortDescription}</div>
            </div>
        </div>
    );
};
