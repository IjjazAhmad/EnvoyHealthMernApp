import React, { useState } from 'react'
import { articaImgs } from '../../../assets/images/articleCard'
import { Link } from 'react-router-dom'
export default function Artical() {

    return (
        <>
            <div className="articalSection">
                <div className="cards-1 ">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>Browse our latest articles on healthcare & wellness</h3>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog">
                                    <div className="card-image">
                                        <img className="img" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr">
                                            <div className="author">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats">12 january 2022</div>
                                        </div>
                                        <h4 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h4>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog ">
                                    <div className="card-image">
                                        <img className="img" src={articaImgs.artical1} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr">
                                            <div className="author">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats">12 january 2022</div>
                                        </div>
                                        <h4 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h4>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog">
                                    <div className="card-image">
                                        <img className="img" src={articaImgs.artical3} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr">
                                            <div className="author">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats">12 january 2022</div>
                                        </div>
                                        <h4 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h4>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col my-5 text-center">
                                <button type="button" className="btn btn-secondary rounded-pill px-5 button1">VIEW ALL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



