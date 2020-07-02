import React from "react"

const Navigation = () => {
    return(
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navigation-checkbox"/>
            <label htmlFor="navigation-checkbox" className="navigation__button">
                <span className="navigation__icon"> &nbsp; </span>
            </label>
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link">about natours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">your benefits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">popular tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">book now</a></li>
                </ul>
            </nav>


        </div>
    )
}

export default Navigation;