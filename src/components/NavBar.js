import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './NavBar.css'
import { IconContext } from 'react-icons'

function NavBar(){
    const [sidebar, setSideBar] = useState(false)
    
    const showSidebar = () => setSideBar(!sidebar)
    
    return (
        <>
        <IconContext.Provider value = {{color:"white"}}>
        <div>
            <div className="navbar">
            <Link to = "#" className = "menu-bar"> 
                <FaIcons.FaBars onClick={showSidebar}></FaIcons.FaBars>
            </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className = "nav-menu-items" onClick={showSidebar} >
                    <li className = "navbar-toggle">
                        <Link to = "#" className = "menu-bar">
                            <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key = {index} className={item.cName}>
                                <Link to = {item.path} > 
                                    {item.icon}
                                    <span>{item.title} </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default NavBar;