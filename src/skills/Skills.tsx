import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/style/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from '../common/compomemts/title/Title';
import reactIcon from '../assets/image/icons8-react.svg'
import typeScriptIcon from '../assets/image/icons8-typescript.svg'
import javaScriptIcon from '../assets/image/icons8-javascript.svg'
import reduxIcon from '../assets/image/icons8-redux.svg'
import jestIcon from '../assets/image/jest-seeklogo.com.svg'
import gitIcon from '../assets/image/icons8-git.svg'
import muiIcon from '../assets/image/icons8-material-ui.svg'
import {propsStyleGenerator} from "../lib/propsStyleGenerator";
import {Fade} from "react-awesome-reveal";

export const Skills = () => {
    const react = propsStyleGenerator(reactIcon)
    const typeScript = propsStyleGenerator(typeScriptIcon)
    const javaScript = propsStyleGenerator(javaScriptIcon)
    const redux = propsStyleGenerator(reduxIcon)
    const jest = propsStyleGenerator(jestIcon)
    const git = propsStyleGenerator(gitIcon)
    const mui = propsStyleGenerator(muiIcon)
    return (
        <div className={style.skillsBlock} id='skills'>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                {/*<h2 className={style.title}>Skills</h2>*/}

                <Title title={'Skills'}/>
                <div className={style.skillsDescription}>I have tried out lots of different technologies and am always open to new things. Here are the ones I have got most experience with:</div>
                <div className={style.skills}>
                    <Fade>
                    <Skill title="React"

                           style={react}
                    />
                    <Skill title="TypeScript"

                           style={typeScript}
                    />
                    <Skill title="JavaScript"

                            style={javaScript}
                    />
                    <Skill title="Redux"

                            style={redux}
                    />
                    <Skill title="Jest"

                            style={jest}
                    />
                        <Skill title="Git"

                            style={git}
                    />
                        <Skill title="Material UI"

                               style={mui}
                        />
                    </Fade>
                </div>


            </div>
        </div>
    );
};

