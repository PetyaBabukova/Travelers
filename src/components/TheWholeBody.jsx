export default function TheWholeBody() {
    return (
        <div>







            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style="max-width: 900px;">
                                    <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                    <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style="max-width: 900px;">
                                    <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                    <h1 className="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark" style="width: 45px; height: 45px;">
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark" style="width: 45px; height: 45px;">
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>


            <div className="container-fluid booking mt-5 pb-5">
                <div className="container pb-5">
                    <div className="bg-light shadow" style="padding: 30px;">
                        <div className="row align-items-center" style="min-height: 60px;">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="mb-3 mb-md-0">
                                            <select className="custom-select px-4" style="height: 47px;">
                                                <option selected>Destination</option>
                                                <option value="1">Destination 1</option>
                                                <option value="2">Destination 1</option>
                                                <option value="3">Destination 1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3 mb-md-0">
                                            <div className="date" id="date1" data-target-input="nearest">
                                                <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Depart Date" data-target="#date1" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3 mb-md-0">
                                            <div className="date" id="date2" data-target-input="nearest">
                                                <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3 mb-md-0">
                                            <select className="custom-select px-4" style="height: 47px;">
                                                <option selected>Duration</option>
                                                <option value="1">Duration 1</option>
                                                <option value="2">Duration 1</option>
                                                <option value="3">Duration 1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary btn-block" type="submit" style="height: 47px; margin-top: -2px;">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6" style="min-height: 500px;">
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="img/about.jpg" style="object-fit: cover;" />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                                <h6 className="text-primary text-uppercase" style="letter-spacing: 5px;">About Us</h6>
                                <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                                <div className="row mb-4">
                                    <div className="col-6">
                                        <img className="img-fluid" src="img/about-1.jpg" alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src="img/about-2.jpg" alt="" />
                                    </div>
                                </div>
                                <a href="" className="btn btn-primary mt-1">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid pb-5">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
                                    <i className="fa fa-2x fa-money-check-alt text-white"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="">Competitive Pricing</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
                                    <i className="fa fa-2x fa-award text-white"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="">Best Services</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
                                    <i className="fa fa-2x fa-globe text-white"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="">Worldwide Coverage</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style="letter-spacing: 5px;">Destination</h6>
                        <h1>Explore Top Destination</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-1.jpg" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">United States</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-2.jpg" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">United Kingdom</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-3.jpg" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">Australia</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-4.jpg" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">India</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-5.jpg" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">South Africa</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-6.jpg" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">Indonesia</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style="letter-spacing: 5px;">Services</h6>
                        <h1>Tours & Travel Services</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                                <h5 className="mb-2">Travel Guide</h5>
                                <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
                                <h5 className="mb-2">Ticket Booking</h5>
                                <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-hotel mx-auto mb-4"></i>
                                <h5 className="mb-2">Hotel Booking</h5>
                                <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style="letter-spacing: 5px;">Packages</h6>
                        <h1>Pefect Tour Packages</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="img/package-1.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                                    </div>
                                    <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$350</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="img/package-2.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                                    </div>
                                    <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$350</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="img/package-3.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                                    </div>
                                    <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$350</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="img/package-4.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                                    </div>
                                    <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$350</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="img/package-5.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                                    </div>
                                    <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$350</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img className="img-fluid" src="img/package-6.jpg" alt="" />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                                    </div>
                                    <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                            <h5 className="m-0">$350</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-registration py-5" style="margin: 90px 0;">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h6 className="text-primary text-uppercase" style="letter-spacing: 5px;">Mega Offer</h6>
                                <h1 className="text-white"><span className="text-primary">30% OFF</span> For Honeymoon</h1>
                            </div>
                            <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor</p>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-primary text-center p-4">
                                    <h1 className="text-white m-0">Sign Up Now</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-white p-5">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control p-4" placeholder="Your name" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control p-4" placeholder="Your email" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select px-4" style="height: 47px;">
                                                <option selected>Select a destination</option>
                                                <option value="1">destination 1</option>
                                                <option value="2">destination 1</option>
                                                <option value="3">destination 1</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style="letter-spacing: 5px;">Guides</h6>
                        <h1>Our Travel Guides</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Guide Name</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Guide Name</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Guide Name</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-4.jpg" alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Guide Name</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style="letter-spacing: 5px;">Testimonial</h6>
                        <h1>What Say Our Clients</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="text-center pb-4">
                            <img className="img-fluid mx-auto" src="img/testimonial-1.jpg" style="width: 100px; height: 100px;" />
                            <div className="testimonial-text bg-white p-4 mt-n5">
                                <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 className="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <img className="img-fluid mx-auto" src="img/testimonial-2.jpg" style="width: 100px; height: 100px;" />
                            <div className="testimonial-text bg-white p-4 mt-n5">
                                <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 className="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <img className="img-fluid mx-auto" src="img/testimonial-3.jpg" style="width: 100px; height: 100px;" />
                            <div className="testimonial-text bg-white p-4 mt-n5">
                                <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 className="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <img className="img-fluid mx-auto" src="img/testimonial-4.jpg" style="width: 100px; height: 100px;" />
                            <div className="testimonial-text bg-white p-4 mt-n5">
                                <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 className="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style="letter-spacing: 5px;">Our Blog</h6>
                        <h1>Latest From Our Blog</h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                        <span className="text-primary px-2">|</span>
                                        <a className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="">Dolor justo sea kasd lorem clita justo diam amet</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                        <span className="text-primary px-2">|</span>
                                        <a className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="">Dolor justo sea kasd lorem clita justo diam amet</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-3.jpg" alt="" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                        <span className="text-primary px-2">|</span>
                                        <a className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="">Dolor justo sea kasd lorem clita justo diam amet</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style="margin-top: 90px;">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <a href="" className="navbar-brand">
                            <h1 className="text-primary"><span className="text-white">TRAVEL</span>ER</h1>
                        </a>
                        <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
                        <h6 className="text-white text-uppercase mt-4 mb-3" style="letter-spacing: 5px;">Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Our Services</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Destination</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Services</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Packages</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Guides</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Testimonial</a>
                            <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2"></i>Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Usefull Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Destination</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Services</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Packages</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Guides</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Testimonial</a>
                            <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2"></i>Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Contact Us</h5>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <h6 className="text-white text-uppercase mt-4 mb-3" style="letter-spacing: 5px;">Newsletter</h6>
                        <div className="w-100">
                            <div className="input-group">
                                <input type="text" className="form-control border-light" style="padding: 25px;" placeholder="Your Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-3">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white-50">Copyright &copy; <a href="#">Domain</a>. All Rights Reserved.</a>
                    </p>
                </div>
                <div className="col-lg-6 text-center text-md-right">
                    <p className="m-0 text-white-50">Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>

            <div />
            )
}