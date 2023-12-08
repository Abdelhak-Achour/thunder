import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

export function Navbar()
{
    return(
        <>
            <nav>
                <Link to = "/"><img src = {logo} alt = "logo" /></Link>
                <ul>
                    <li>
                        <NavLink to = "/">Acceuil</NavLink>
                        <NavLink to = "/solutions">Solutions?</NavLink>
                        <NavLink to = "/myths">Mythes</NavLink>
                        <NavLink to = "/chat">Chatter avec nous</NavLink>
                        <NavLink to = "/login">Se connecter</NavLink>
                        <NavLink to = "/signup">S'inscrire</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}