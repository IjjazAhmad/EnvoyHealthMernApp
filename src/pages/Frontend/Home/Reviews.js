import React from 'react'

export default function Reviews() {


    return (
        <>
            <div className="reviewSection py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>What our customers are saying.</h3>
                        </div>
                    </div>
                    <div className="accordion d-flex justify-content-center align-items-center height" id="accordionExample">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="p-3">
                                    <ul className="testimonial-list">
                                        <li>
                                            <div className="card p-3 active" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">

                                                <div className="d-flex flex-row align-items-center">

                                                    <img src="https://i.imgur.com/G1pXs7D.jpg" width="50" className="rounded-circle" />

                                                    <div className="d-flex flex-column ml-2">

                                                        <span className="font-weight-normal">Milton Austin</span>
                                                        <span>Sales Manager, Stack</span>

                                                    </div>

                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="card p-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">

                                                <div className="d-flex flex-row align-items-center">

                                                    <img src="https://i.imgur.com/udGH5tO.jpg" width="50" className="rounded-circle" />

                                                    <div className="d-flex flex-column ml-2">

                                                        <span className="font-weight-normal">John Reeves</span>
                                                        <span>Head of Sales, Asana</span>

                                                    </div>

                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="card p-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">

                                                <div className="d-flex flex-row align-items-center">

                                                    <img src="https://i.imgur.com/Uz4FjGZ.jpg" width="50" className="rounded-circle" />

                                                    <div className="d-flex flex-column ml-2">

                                                        <span className="font-weight-normal">Luke Harper</span>
                                                        <span>Sales Team Lead,Sketch</span>

                                                    </div>

                                                </div>

                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="p-3 carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card-body">
                                            <h4>It was a great experience</h4>
                                            <div className="ratings">

                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>

                                            <p>fgfdisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="card-body">
                                            <h4>Thanks for this great service</h4>
                                            <div className="ratings">

                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>

                                            </div>

                                            <p>Lfdgfdrertrer dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="card-body">
                                            <h4>You all are awesome thanks alot</h4>
                                            <div className="ratings">

                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>

                                            </div>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei454546lore eu fugiat nulla pariatur. Excepteur sint occaecat cupi45435435datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
