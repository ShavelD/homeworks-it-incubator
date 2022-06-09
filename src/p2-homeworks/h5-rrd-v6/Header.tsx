import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.container}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.pre_junior}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.junior}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.junior_plus}>Junior-plus</NavLink>
        </div>
    )
}

export default Header
