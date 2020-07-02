import React from "react";
import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

const AboutSection = () =>{
    return(
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    exiting tours for adventurous people
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                   <div className="u-padding-small">
                        <h3 className="heading-tertiary u-margin-bottom-small"> You are gonna fall in love with nature. </h3>
                        <p className="paragraph">
                        I believe that you will never forget the exprience that you are about to have with us.
                        Spending time in nature is proven to be one of the best ways to release tension.Therefore, investing in traveling with us
                        can only be helpful for you.I believe that you will never forget the exprience that you are about to have with us.
                        Spending time in nature is proven to be one of the best ways to release tension.Therefore, investing in traveling with us
                        can only be helpful for you.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small"> You are gonna fall in love with nature. </h3>
                        <p className="paragraph">
                        I believe that you will never forget the exprience that you are about to have with us.
                        Spending time in nature is proven to be one of the best ways to release tension.Therefore, investing in traveling with us
                        can only be helpful for you.
                        </p>
                        <a href="#" className="btn-text">learn more &rarr; </a>
                   </div>
                </div>
                
                <div className="col-1-of-2">
                    <div className = "u-padding-small composition" >

                        <img  src={nat1} alt="image" className="composition__photo  composition__photo--p1 "/>
                        <img  src={nat2} alt="image" className="composition__photo  composition__photo--p2 "/>
                        <img  src={nat3} alt="image" className="composition__photo  composition__photo--p3 "/>
                        

                    </div>
                </div>
            </div>
            

        </section>
    )
}

export default AboutSection;