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

import RegisterComponent from "../Components/RegisterForm.js";

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

                <RegisterComponent></RegisterComponent>


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