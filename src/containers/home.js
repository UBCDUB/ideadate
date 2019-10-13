import React from 'react';
import Main from '../design_doc/ideaDate.png';

import style from './home.module.scss'

const main = () => {
    return (
        <div>
            <img className={style.imgMain} src={Main} alt="main"></img>
        </div>
    )
}
export default main;