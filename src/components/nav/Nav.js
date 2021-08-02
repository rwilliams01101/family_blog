import React from 'react'
import '../nav/Nav.css'

function Nav () {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand navbar-main-font" href="#"> 🌲lan & Camille</a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <span class="navbar-text">
                        <a class="nav-link" href="#">
                        Send Us an Email
                        </a>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Nav;