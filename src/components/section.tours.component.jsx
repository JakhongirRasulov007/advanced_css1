import React from "react";

const Tours = () => {
    return(
        <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    exiting tours for adventurous people
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                          <div className="card__picture card__picture--1">
                            &nbsp;
                          </div>
                          <h4 className="card__heading">
                                sea explorer
                          </h4>
                          <div className="card__details">
                                <ul>
                                    <li>3 day tour</li>
                                    <li>up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>3 day tour</li>
                                    <li>sleep in cozy hotels</li>
                                    <li>difficulty:easy</li>
                                </ul>
                          </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1 ">
                          <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">only</p>
                                <p className="card__price-value">$299</p>

                            </div>
                            <a href="#popup" className="btn btn--white"> Book now</a>

                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                          <div className="card__picture card__picture--2">
                            &nbsp;
                          </div>
                          <h4 className="card__heading">
                               the forest hiker
                          </h4>
                          <div className="card__details">
                                <ul>
                                    <li>7 day tour</li>
                                    <li>up to 40 people</li>
                                    <li>6 tour guides</li>
                                    <li>sleep in provided tents</li>
                                    <li>difficulty:medium</li>
                                </ul>
                          </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2 ">
                          <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">only</p>
                                <p className="card__price-value">$399</p>

                            </div>
                            <a href="#popup" className="btn btn--white"> Book now</a>

                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                          <div className="card__picture card__picture--3">
                            &nbsp;
                          </div>
                          <h4 className="card__heading">
                               the snow adventuror
                          </h4>
                          <div className="card__details">
                                <ul>
                                    <li>5 day tour</li>
                                    <li>up to 10 people</li>
                                    <li>3 tour guides</li>
                                    <li>sleep in provided tents</li>
                                    <li>difficulty:hard</li>
                                </ul>
                          </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3 ">
                          <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">only</p>
                                <p className="card__price-value">$499</p>

                            </div>
                            <a href="#popup" className="btn btn--white"> Book now</a>

                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="u-center-text u-margin-top-big">
                <a href="#" className="btn btn--green"> discover all tours </a>
            </div>

        </section>
    )
}

export default Tours;