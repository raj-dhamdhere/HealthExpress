import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from "../Components/Navbar.js";



import {
    BrowserRouter as Router,
    Route, Link, Switch
} from "react-router-dom";

class About extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <header className="page-header">
                    <NavbarComponent></NavbarComponent>
                </header>


				<section id="about" class="about">
					<div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

						<div class="row">
							<div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
								<img src="assets/img/about.jpg" class="img-fluid" alt="" />
							</div>
							<div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
								<h3>Health Express</h3>
								<p class="fst-italic">
									Health Express Pvt Ltd is a Top Notch health institute which enables users to have remote registration and Flexible Appointment Schedule rather than standing in a Long Queue.
								</p>
								<ul>
									<li><i class="ri-check-double-line"></i> Our goal is to be “flawless” in the eyes of our customers</li>
									<li><i class="ri-check-double-line"></i> We are in Health Care Business but our focus is on our customers Comfort.</li>
									<li><i class="ri-check-double-line"></i> We understand that you want your Healthcare registrations to be fast and Flawless</li>
								</ul>
								<p>
									We maintain a far-reaching network by Doctors who are highly experienced, proficient and available to work throughout the Globe. Our core strengths are years of Practical and operational experience and our internal processes which leverage our best-of-breed Doctoral Services.
								</p>
							</div>
						</div>

					</div>
				</section>

                <footer id="footer">
					<div class="footer-top">
						<div class="container col-lg-10 order-1 order-lg-2">
							<div class="row">

								<div class="col-lg-3 col-md-6">
									<div class="footer-info">
										<h3>Health Express<span>.</span></h3>
										<p>
											Dublin Ireland<br />

											<strong>Email:</strong> infod@gmail.com<br />
										</p>
										<div class="social-links mt-3">
											<a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
											<a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
											<a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
											<a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
											<a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
										</div>
									</div>
								</div>

								<div class="col-lg-2 col-md-6 footer-links">
									<h4>Useful Links</h4>
									<ul>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Disclaimer Policies</a></li>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Security Policies</a></li>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Refund Policies</a></li>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Terms and conditions</a></li>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Privacy policy</a></li>
									</ul>
								</div>

								<div class="col-lg-3 col-md-6 footer-links">
									<h4>Our Services</h4>
									<ul>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Cardiology</a></li>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Pathology</a></li>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Radiology</a></li>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Orthology</a></li>
										<li><i class="bx bx-chevron-right"></i> <a href="/Test">Gynecology</a></li>
									</ul>
								</div>

								<div class="col-lg-4 col-md-6 footer-newsletter">
									<h4>Our Newsletter</h4>
									<p>Dublin Ireland</p>
									<form action="" method="post">
										<input type="email" name="email" /><input type="submit" value="Subscribe" />
									</form>

								</div>
							</div>
						</div>
					</div>

					<div class="container">
						<div class="copyright">
							&copy; Copyright <strong><span>Health Express </span></strong>. All Rights Reserved
						</div>
						<div class="credits">
							Designed by <a href="">Health Express </a>
						</div>
					</div>
				</footer>








            </div>
        )
    }
}

export default About;