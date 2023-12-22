import React from 'react'
import Hero from '../../../assets/images/blog/hero.png'
import { Link } from 'react-router-dom'
import { articaImgs } from '../../../assets/images/articleCard'

export default function Blog() {
    return (
        <>
            <div className="bolg">
                <div className="container">
                    <div className="hero">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-7">

                                <p className="text-primary">HEALTH TIPS</p>
                                <h1>How to check your <br /> past pediatrician <br /> experience</h1>
                                <p className="w-50">Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has com...</p>
                                <button className="fw-bold btn p-2 px-4 text-primary border border-primary rounded-pill">READ MORE</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5">
                                <img src={Hero} className="w-75" />
                            </div>
                        </div>
                    </div>
                    <div className="search-box">
                        <div className="row mt-5 mb-5 shadow pt-4 p-3">
                            <h3>Envoy Health Articles</h3>
                            <div className="col-10 mt-2">
                                <input type="text" className="w-100 form-control shadow-none rounded-pill" placeholder="Search" />
                            </div>
                            <div className="col-2 mb-3 mt-2">
                                <button className="btn p-2 px-5 text-primary border border-primary rounded-pill">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <h2>Envoy Health Articles</h2>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-8 p-2">
                                <div className="display-none">
                                    <button className="btn my-2 btn-primary text-white mx-3">Trending</button>
                                    <button className="btn my-2 border mx-3">Resume</button>
                                    <button className="btn my-2 border mx-3">Cover Letter</button>
                                    <button className="btn my-2 border mx-3">LinkedIn Profile</button>
                                    <button className="btn my-2 border mx-3">Returning Client</button>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 p-2">
                                <select class="form-select shadow-none w-50 my-2">
                                    <option selected>Trending</option>
                                    <option value="1">Resume</option>
                                    <option value="2">Cover Letter</option>
                                    <option value="3">LinkedIn Profile</option>
                                    <option value="4">Returning Client</option>
                                </select>
                            </div>

                        </div>
                        <div className="row mt-5">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card card-blog p-2">
                                    <div className="card-image">
                                        <img className="w-100" src={articaImgs.artical2} />
                                        <div className="ripple-cont"></div>
                                    </div>
                                    <div className="table">
                                        <div className="ftr d-flex">
                                            <div className="author me-5">
                                                <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised" /> <span>Mary Dunst</span> </a>
                                            </div>
                                            <div className="stats ms-5">12 january 2022</div>
                                        </div>
                                        <h5 className="card-caption mt-3">
                                            How to choose the right pediatrician: 7 things to consider?
                                        </h5>
                                        <p className='lh-sm'>Over the years, I have received a lot of feedback from recruitment agencies and an interesting fact which has...<Link>Read More</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <button className="fw-bold w-25 mx-auto my-2 mt-4 ms-2 btn p-2 px-4 text-primary border border-primary rounded-pill">LOAD MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
