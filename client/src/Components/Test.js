import React from "react";
import NavbarComponent from "./Navbar.js";
import { Link } from "react-router-dom";
const Test = () => {
	return (
		<div>
			<header className="page-header">
				<NavbarComponent />
			</header>
			<section id="hero" className="d-flex align-items-center justify-content-center">
				<div className="container" data-aos="fade-up">
					<div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
						<div className="col-xl-8 col-lg-8">
							<img src="assets/img/logoj.png" height="60px" width="500px" className="img-fluid" alt="Health Express Logo" />
							
						</div>
					</div>
					<div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
						{[
							{ icon: "ri-store-line", text: "Remote Registration Raj" },
							{ icon: "ri-bar-chart-box-line", text: "Flexible Appointment Scheduling" },
							{ icon: "ri-calendar-todo-line", text: "Patient Portal Access" },
							{ icon: "ri-paint-brush-line", text: "Patient Demographics" },
							{ icon: "ri-database-2-line", text: "Customer Support" }
						].map((service, index) => (
							<div className="col-xl-2 col-md-4" key={index}>
								<div className="icon-box">
									<i className={service.icon}></i>
									<h3><a href="/">{service.text}</a></h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="about" className="about">
				<div className="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
							<img src="assets/img/about.jpg" className="img-fluid" alt="About Health Express" />
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
							<h3>Health Express</h3>
							<p className="fst-italic">
								Health Express Pvt Ltd is a Top Notch health institute which enables users to have remote registration and Flexible Appointment Schedule rather than standing in a Long Queue.
							</p>
							<ul>
								<li><i className="ri-check-double-line"></i> Our goal is to be “flawless” in the eyes of our customers</li>
								<li><i className="ri-check-double-line"></i> We are in Health Care Business but our focus is on our customers Comfort.</li>
								<li><i className="ri-check-double-line"></i> We understand that you want your Healthcare registrations to be fast and Flawless</li>
							</ul>
							<p>
								We maintain a far-reaching network by Doctors who are highly experienced, proficient and available to work throughout the Globe. Our core strengths are years of Practical and operational experience and our internal processes which leverage our best-of-breed Doctoral Services.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="services" className="services">
				<div className="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">
					<div className="section-title">
						<h2>Services</h2>
						<p>Check our Services</p>
					</div>
					<div className="row">
						{[
							{ icon: "bx bxl-dribbble", title: "Remote Registration", description: "Effortlessly register from the comfort of your home." },
							{ icon: "bx bx-file", title: "Flexible Appointment Scheduling", description: "Book, reschedule, or cancel appointments online. Choose your preferred date and time." },
							{ icon: "bx bx-tachometer", title: "Patient Portal Access", description: "Manage your health records and view test results securely." },
							{ icon: "bx bx-world", title: "Patient Demographics", description: "Enter Your Demographics data and get a unique id for seamless access." },
							{ icon: "bx bx-slideshow", title: "Customer Support", description: "Access to customer support for technical assistance or inquiries." },
							{ icon: "bx bx-arch", title: "Frequently Asked Questions (FAQ)", description: "Find answers to common inquiries about services and processes." },
						].map((service, index) => (
							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" key={index}>
								<div className="icon-box">
									<div className="icon"><i className={service.icon}></i></div>
									<h4><a href="/">{service.title}</a></h4>
									<p>{service.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="features" className="features">
				<div className="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
							<img src="assets/img/features.jpg" className="img-fluid" alt="Features of Health Express" />
						</div>
						<div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
							{[
								{ icon: "bx bx-receipt", title: "Cardiology", description: "We focus on the diagnosis and treatment of heart and vascular conditions to help you achieve optimal cardiovascular health." },
								{ icon: "bx bx-cube-alt", title: "Pathology", description: "We study of diseases, providing critical insights through lab tests and diagnostics to guide effective patient care." },
								{ icon: "bx bx-images", title: "Neurology", description: "We address disorders of the nervous system, offering comprehensive care for conditions affecting the brain, spinal cord, and nerves." },
								{ icon: "bx bx-shield", title: "Ophthalmology", description: "We specialize in the diagnosis and treatment of eye disorders, ensuring clear vision and overall eye health." },
							].map((feature, index) => (
								<div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150" key={index}>
									<i className={feature.icon}></i>
									<h4>{feature.title}</h4>
									<p>{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="cta" className="cta">
				<div className="container" data-aos="zoom-in">
					<div className="text-center">
						<h3>Call To Action</h3>
						<p>Our Motto is to Provide Top Notch Support To Our Customers.</p>
						<a className="cta-btn" href="/">Call To Action</a>
					</div>
				</div>
			</section>

			<section id="portfolio" className="portfolio">
				<div className="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">
					<div className="section-title">
						<h2>Portfolio</h2>
						<p>Check our Portfolio</p>
					</div>

					<div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
						{[
							{ src: "assets/img/portfolio/portfolio-1.jpg", title: "App 1", type: "App" },
							{ src: "assets/img/portfolio/portfolio-2.jpg", title: "Web 3", type: "Web" },
							{ src: "assets/img/portfolio/portfolio-3.jpg", title: "App 2", type: "App" },
							{ src: "assets/img/portfolio/portfolio-4.jpg", title: "Card 2", type: "Card" },
							{ src: "assets/img/portfolio/portfolio-5.jpg", title: "Web 2", type: "Web" },
							{ src: "assets/img/portfolio/portfolio-6.jpg", title: "App 3", type: "App" },
							{ src: "assets/img/portfolio/portfolio-7.jpg", title: "Card 1", type: "Card" },
							{ src: "assets/img/portfolio/portfolio-8.jpg", title: "Web 1", type: "Web" },
						].map((item, index) => (
							<div className="col-lg-4 col-md-6 portfolio-item filter-app" key={index}>
								<div className="portfolio-wrap">
									<img src={item.src} className="img-fluid" alt={item.title} />
									<div className="portfolio-info">
										<h4>{item.title}</h4>
										<div>
											<a href={item.src} className="portfolio-lightbox" title={item.title} data-glightbox="type: exterior">
												<i className="bx bx-plus"></i>
											</a>
											<a href="/" className="details-link" title="More Details">
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
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
                                        <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                        <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
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
                        Designed by <a href="/">Health Express</a>
                    </div>
                </div>
            </footer>
		</div>
	);
};

export default Test;
