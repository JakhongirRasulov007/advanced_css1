import React from "react"
import logo from "../img/logo-green-2x.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="logo" className="footer__logo"/>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">careers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">privacy policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">teams</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                    this web page was initially created by <a href="#" className="footer__link">Jonas Schmendman  </a>
                    who is an instructor in udemy  <br/>
                       <a href="" className="footer__link">
                    
                       copyright policy &copy; </a>
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;