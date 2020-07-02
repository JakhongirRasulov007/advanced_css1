import React from "react"
import storyPhoto1 from "../img/nat-8.jpg"
import storyPhoto2 from "../img/nat-9.jpg"
import videoMp4 from "../img/video.mp4"
import videoWebm from "../img/video.webm"

const Stories = () => {
    return(
        <section className="section-stories">

        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={videoMp4} type="video/mp4"/>
                <source src={videoWebm} type="video/webm"/>
                video formats are not supported by your browser...
            </video>

        </div>


            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                   We make peaple genuinly happy!
                </h2>
            </div>

            <div className="row">
                <div className="story">

                    <figure className="story__shape">
                        <img src= {storyPhoto1} alt="tour photo" className="story__img"/>
                        <figcaption className="story__caption">Elithabeth</figcaption>
                    </figure>

                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">The best weekend I've ever had so far with my family.</h3>
                        <p className>this tour helped me to get out of routinely daily life. 
                            Actually, we had a lot of fun doing the things that might have been impossible to do without this tour.
                        </p>
                    </div>
                </div>

                
            </div>

            <div className="row">
                <div className="story">

                    <figure className="story__shape">
                        <img src= {storyPhoto2} alt="tour photo" className="story__img"/>
                        <figcaption className="story__caption">Elithabeth</figcaption>
                    </figure>

                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">The best weekend I've ever had so far with my family.</h3>
                        <p className>this tour helped me to get out of routinely daily life. 
                            Actually, we had a lot of fun doing the things that might have been impossible to do without this tour.
                        </p>
                    </div>
                </div>

            </div>
            <div className="u-center-text">
                <a href="#" className="btn-text ">read all stories &rarr; </a>
            </div>

        </section>
    )
}

export default Stories;