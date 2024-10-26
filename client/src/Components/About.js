import React from 'react';
import NavbarComponent from "./Navbar.js";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <header className="page-header">
                <NavbarComponent />
            </header>

            <section id="about" className="about">
                <div className="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src="assets/img/about.jpg" className="img-fluid" alt="About us" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                            <h3>Health Express</h3>
                            <p className="fst-italic">
                                Health Express Pvt Ltd is a Top Notch health institute which enables users to have remote registration and Flexible Appointment Schedule rather than standing in a Long Queue.
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> Our goal is to be “flawless” in the eyes of our customers.</li>
                                <li><i className="ri-check-double-line"></i> We are in Health Care Business but our focus is on our customers' comfort.</li>
                                <li><i className="ri-check-double-line"></i> We understand that you want your Healthcare registrations to be fast and flawless.</li>
                            </ul>
                            <p>
                                We maintain a far-reaching network of doctors who are highly experienced, proficient, and available to work throughout the globe. Our core strengths are years of practical and operational experience and our internal processes which leverage our best-of-breed Doctoral Services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer">
                <div className="footer-top">
                    <div className="container col-lg-10 order-1 order-lg-2">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>Health Express<span>.</span></h3>
                                    <p>
                                        Dublin, Ireland<br />
                                        <strong>Email:</strong> infod@gmail.com<br />
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Disclaimer Policies</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Security Policies</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Refund Policies</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Terms and Conditions</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Privacy Policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Cardiology</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Pathology</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Radiology</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Orthology</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Test">Gynecology</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Dublin, Ireland</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Health Express</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="#">Health Express</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
