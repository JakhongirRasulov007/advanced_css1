import React from "react";
import tourPhoto1 from "../img/nat-8.jpg";
import tourPhoto2 from "../img/nat-9.jpg";

const Popup = () => {
    return(
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={tourPhoto1} alt="tour photo" className="popup__img"/>
                    <img src={tourPhoto2} alt="tour photo" className="popup__img"/>
                </div>
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary">start booking now</h2>
                    <h3 className="heading-tertiary">important notes to read &ndash; now</h3>
                    <p className="popup__text">
                        before booking there are several things that you need to take into account.
                        the first and the most impotant thing is that you need to make use that you 
                        are physically fit enough to experience the tour option you choose. Secondly,
                        you should also be certian as to what you eat during the tour. there have been 
                        a few cases when our clients happened to have allergies to certain type of meals
                        we provide. So, please, go agead and familiarize yourself our meal menu, so that
                        you can decide whether it is fine for you. Lastly, please, follow the instructions
                        whenever you are asked!
                    </p>
                    <a href="#" className="btn btn--green">book now</a>

                </div>
            </div>
        </div>
    )
}

export default Popup;