import React from "react";

const Book = () => {
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">

                <form action="#" className="form">
                    <div className=" u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                        start booking now
                        </h2>
                    </div>
                    <div className="form__group">
                        <input id="name" className="form__input" type="text" placeholder="full name" required/>
                        <label for="name" className="form__label">full name</label>
                        <input id="email" className="form__input" type="email" placeholder="email" required/>
                        <label for="email" className="form__label">email</label>
                    </div>
                    
                    <div className="form__group u-margin-left-medium">
                        <div className="form__radio-group">
                            <input type="radio" name="size" className="form__radio-input" id="small"/>
                            <label for="small" className="form__radio-label">
                                 <span className="form__radio-button"></span>
                            small group</label>
                        </div>
                        <div className="form__radio-group">
                            <input type="radio" name="size" className="form__radio-input" id="large"/>
                            <label for="large" className="form__radio-label">
                                <span className="form__radio-button"></span>
                            large group</label>
                        </div>
                         
                    </div>
                    <div className="form__group u-margin-left-medium">
                        <button className="btn btn--green">submit &rarr;</button>
                    </div>

                </form>

                </div>
                

            </div>

        </section>
    )
}

export default Book;