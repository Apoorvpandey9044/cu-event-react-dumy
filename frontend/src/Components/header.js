import React from 'react'

export default function Header() {
  return (
     <div className="header-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-10 col-lg-2 order-lg-1">
                        <div className="site-branding">
                            <div className="site-title">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-lg-7 order-3 order-lg-2">
                        <nav className="site-navigation">
                            <div className="hamburger-menu d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block order-2 order-lg-3">
                        <div className="buy-tickets">
                            <a className="btn gradient-bg" href="#">Buy Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
