
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { CiHospital1 } from "react-icons/ci";
import "./css/NavBar.css"
const NavBar = () => {
  return (
    <>
    <h1><CiHospital1 />CITY HOSPITAL<CiHospital1 /></h1>
    <nav>
        <aside>
            <h1><CiLogin />
                
            </h1>
        </aside>
        <aside>
            
            <ul>
                <NavLink to ='/' activeClassName="active">
                <li>
                    HOME
                    <AiFillHome />
                </li>
                </NavLink>

                <NavLink to="/viewall" activeClassName="active">
                <li>
                    VIEW-ALL
                    <CiCircleList />
                </li>
                </NavLink>
            </ul>
        </aside>
    </nav>
    </>
  )
}

export default NavBar