import React from "react";
import NavbarComponent from "../Components/Navbar.js";

class Test extends React.Component {
	render() {
		return (
			<div>
				<header className="page-header">
				<NavbarComponent></NavbarComponent>
				</header>
                <div className="main">
               
                    <section id="hero" className="hero section">

                        <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                            <div className="carousel-item active">
                                <img src="assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
                                <div className="container">
                                    <h2>Welcome to Medicio</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <a href="#about" className="btn-get-started">Read More</a>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="assets/img/hero-carousel/hero-carousel-2.jpg" alt="" />
                                <div className="container">
                                    <h2>At vero eos et accusamus</h2>
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                                    <a href="#about" className="btn-get-started">Read More</a>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="assets/img/hero-carousel/hero-carousel-3.jpg" alt="" />
                                <div className="container">
                                    <h2>Temporibus autem quibusdam</h2>
                                    <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                                    <a href="#about" className="btn-get-started">Read More</a>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                            </a>

                            <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                            </a>

                            <ol className="carousel-indicators"></ol>

                        </div>

                    </section>

                </div>
			</div>
		);
	}
}

export default Test;