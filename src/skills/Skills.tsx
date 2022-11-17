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
import {propsStyleGenerator} from "../lib/propsStyleGenerator";

export const Skills = () => {
    const react = propsStyleGenerator(reactIcon)
    const typeScript = propsStyleGenerator(typeScriptIcon)
    const javaScript = propsStyleGenerator(javaScriptIcon)
    const redux = propsStyleGenerator(reduxIcon)
    const jest = propsStyleGenerator(jestIcon)
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                {/*<h2 className={style.title}>Skills</h2>*/}
                <Title title={'Skills'}/>
                <div className={style.skills}>

                    <Skill title="React"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea eius harum laudantium mollitia, omnis quidem rem rerum veniam voluptas. Commodi dolore earum esse, expedita magnam maxime vero. Id, recusandae!"}
                           style={react}
                    />
                    <Skill title="TypeScript"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea eius harum laudantium mollitia, omnis quidem rem rerum veniam voluptas. Commodi dolore earum esse, expedita magnam maxime vero. Id, recusandae!"}
                           style={typeScript}
                    />
                    <Skill title="JavaScript"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea eius harum laudantium mollitia, omnis quidem rem rerum veniam voluptas. Commodi dolore earum esse, expedita magnam maxime vero. Id, recusandae!"}
                            style={javaScript}
                    />
                    <Skill title="Redux"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea eius harum laudantium mollitia, omnis quidem rem rerum veniam voluptas. Commodi dolore earum esse, expedita magnam maxime vero. Id, recusandae!"}
                            style={redux}
                    />
                    <Skill title="Jest"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea eius harum laudantium mollitia, omnis quidem rem rerum veniam voluptas. Commodi dolore earum esse, expedita magnam maxime vero. Id, recusandae!"}
                            style={jest}
                    />
                </div>
            </div>
        </div>
    );
};

