import React from 'react'
import { browserHistory } from 'react-router';


export default function Button({ children, colorButton, classNameButton, isBackButton }) {

    return (
        <button className={classNameButton + " btn"} style={{ backgroundColor: colorButton }}>{children}</button>
    );
}