import React from 'react'
import '../nav/Nav.css'

function Nav () {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand navbar-main-font" href="/"> <span className="tighten-c">🌜</span>amille & <span className="tighten-a">🌲</span>lan</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <span className="navbar-text">
                    <a className="nav-link" href="mailto:rwilliams01101@gmail.com?subject=Just%20Saying%20Hi&amp;body=Let us know what's new with you! If you want to come visit us in Norway, just let us know when and you can stay with us. We can't wait to hear from you! - Camille and Alan">
                        Email Us                      
                    </a>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Nav;

