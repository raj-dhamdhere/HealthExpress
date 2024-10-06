import React from "react";
import NavbarComponent from "../Components/Navbar.js";

class Test extends React.Component {
	render() {
		return (
			<div>
				<header className="page-header">
					<NavbarComponent></NavbarComponent>
				</header>
				<section id="hero" class="d-flex align-items-center justify-content-center">
					<div class="container" data-aos="fade-up">

						<div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
							<div class="col-xl-8 col-lg-8">
								<img src="assets/img/logoj.png" height="60px" width="500px" class="img-fluid" alt="" />
								<h2></h2>
							</div>
						</div>

						<div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
							<div class="col-xl-2 col-md-4">
								<div class="icon-box">
									<i class="ri-store-line"></i>
									<h3><a href="">Remote Registration</a></h3>
								</div>
							</div>
							<div class="col-xl-2 col-md-4">
								<div class="icon-box">
									<i class="ri-bar-chart-box-line"></i>
									<h3><a href="">Flexible Appointment Scheduling</a></h3>
								</div>
							</div>
							<div class="col-xl-2 col-md-4">
								<div class="icon-box">
									<i class="ri-calendar-todo-line"></i>
									<h3><a href="">Patient Portal Access</a></h3>
								</div>
							</div>
							<div class="col-xl-2 col-md-4">
								<div class="icon-box">
									<i class="ri-paint-brush-line"></i>
									<h3><a href="">Patient Demographics</a></h3>
								</div>
							</div>
							<div class="col-xl-2 col-md-4">
								<div class="icon-box">
									<i class="ri-database-2-line"></i>
									<h3><a href="">Customer Support</a></h3>
								</div>
							</div>
						</div>

					</div>
				</section>

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

				<section id="services" class="services">
					<div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

						<div class="section-title">
							<h2>Services</h2>
							<p>Check our Services</p>
						</div>

						<div class="row">
							<div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
								<div class="icon-box">
									<div class="icon"><i class="bx bxl-dribbble"></i></div>
									<h4><a href="">Remote Registration</a></h4>
									<p>Effortlessly register from the comfort of your home.</p>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
								<div class="icon-box">
									<div class="icon"><i class="bx bx-file"></i></div>
									<h4><a href="">Flexible Appointment Scheduling</a></h4>
									<p>Book, reschedule, or cancel appointments online.Choose your preferred date and time.</p>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
								<div class="icon-box">
									<div class="icon"><i class="bx bx-tachometer"></i></div>
									<h4><a href="">Patient Portal Access</a></h4>
									<p>Manage your health records and view test results securely.</p>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
								<div class="icon-box">
									<div class="icon"><i class="bx bx-world"></i></div>
									<h4><a href="">Patient Demographics</a></h4>
									<p>Enter Your Demographics data and get a unique id for seamless access</p>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
								<div class="icon-box">
									<div class="icon"><i class="bx bx-slideshow"></i></div>
									<h4><a href="">Customer Support</a></h4>
									<p>Access to customer support for technical assistance or inquiries.</p>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
								<div class="icon-box">
									<div class="icon"><i class="bx bx-arch"></i></div>
									<h4><a href="">Frequently Asked Questions (FAQ)</a></h4>
									<p>Find answers to common inquiries about services and processes.</p>
								</div>
							</div>


						</div>

					</div>
				</section>

				<section id="features" class="features">
					<div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

						<div class="row">
							<div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
								<img src="assets/img/features.jpg" class="img-fluid" alt="" />
							</div>
							<div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
								<div class="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
									<i class="bx bx-receipt"></i>
									<h4>Cardiology</h4>
									<p>We focus  on the diagnosis and treatment of heart and vascular conditions to help you achieve optimal cardiovascular health.</p>
								</div>
								<div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
									<i class="bx bx-cube-alt"></i>
									<h4>Pathology</h4>
									<p>We study of diseases, providing critical insights through lab tests and diagnostics to guide effective patient care.</p>
								</div>
								<div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
									<i class="bx bx-images"></i>
									<h4>Neurology</h4>
									<p>We address disorders of the nervous system, offering comprehensive care for conditions affecting the brain, spinal cord, and nerves.</p>
								</div>
								<div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
									<i class="bx bx-shield"></i>
									<h4>Opthamology</h4>
									<p>We Specialize in the diagnosis and treatment of eye disorders, ensuring clear vision and overall eye health.</p>
								</div>
							</div>
						</div>

					</div>
				</section>

				<section id="cta" class="cta">
					<div class="container" data-aos="zoom-in">

						<div class="text-center">
							<h3>Call To Action</h3>
							<p> Our Motto is to Provide Top Notch Support To Our Customers.</p>
							<a class="cta-btn" href="#">Call To Action</a>
						</div>

					</div>
				</section>

				<section id="portfolio" class="portfolio">
					<div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

						<div class="section-title">
							<h2>Portfolio</h2>
							<p>Check our Portfolio</p>
						</div>

						<div class="row" data-aos="fade-up" data-aos-delay="100">
							<div class="col-lg-12 d-flex justify-content-center">
								<ul id="portfolio-flters">
									<li data-filter="*" class="filter-active">All</li>
									<li data-filter=".filter-app">App</li>
									<li data-filter=".filter-card">Card</li>
									<li data-filter=".filter-web">Web</li>
								</ul>
							</div>
						</div>

						<div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

							<div class="col-lg-4 col-md-6 portfolio-item filter-app">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>App 1</h4>
										<p>App</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 portfolio-item filter-web">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>Web 3</h4>
										<p>Web</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 portfolio-item filter-app">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>App 2</h4>
										<p>App</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 portfolio-item filter-card">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>Card 2</h4>
										<p>Card</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 portfolio-item filter-web">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>Web 2</h4>
										<p>Web</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 portfolio-item filter-app">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>App 3</h4>
										<p>App</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 portfolio-item filter-card">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>Card 1</h4>
										<p>Card</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 portfolio-item filter-card">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>Card 3</h4>
										<p>Card</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 portfolio-item filter-web">
								<div class="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
									<div class="portfolio-info">
										<h4>Web 3</h4>
										<p>Web</p>
										<div class="portfolio-links">
											<a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
											<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
										</div>
									</div>
								</div>
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
		);
	}
}

export default Test;