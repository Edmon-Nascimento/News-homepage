import logoImg from '../../assets/logo.svg'
import openMenuIcon from '../../assets/icon-menu.svg'
import closeMenuIcon from '../../assets/icon-menu-close.svg'
import { useState } from "react"


function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleMenu(){
        setIsMenuOpen( prev => !prev)
    }

    return(
        <>
            <header>
                <img className="logo" src={logoImg} alt="newspapper-logo" />
                <button className="btn-menu" onClick={()=>{handleMenu()}}>
                    <img src={openMenuIcon} alt=""/>
                </button>

                <nav className="menu-desktop">
                    <a href="#">Home</a>
                    <a href="#">New</a>
                    <a href="#">Popular</a>
                    <a href="#">Trending</a>
                    <a href="#">Categories</a>
                </nav>
                
            </header>

            {isMenuOpen && (
                <div className="overlay active" onClick={handleMenu}></div>
            )}  



            <aside className= {isMenuOpen ? "active" : "inactive"}>
                <div className="btn-container">
                    <button className="btn-menu" onClick={()=>{handleMenu()}}>
                    <img src={closeMenuIcon} alt=""/>
                </button>
                </div>
                <nav className="menu-mobile">
                    <a href="#" onClick={()=>{handleMenu()}}>Home</a>
                    <a href="#" onClick={()=>{handleMenu()}}>New</a>
                    <a href="#" onClick={()=>{handleMenu()}}>Popular</a>
                    <a href="#" onClick={()=>{handleMenu()}}>Trending</a>
                    <a href="#" onClick={()=>{handleMenu()}}>Categories</a>
                </nav>
            </aside>
        </>
    )
}

export default Header