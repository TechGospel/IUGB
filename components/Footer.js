/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<>
			<div className="footer-area pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-6">
							<div className="footer-logo-area">
								<Link href="/">
									<a>
										<img src="logo.png" alt="Image" />
									</a>
								</Link>

								<h3 style={{ color: '#fff' }}>
									Great Shepherd University
								</h3>
								<div className="contact-list">
									<ul>
										<li>
											<a href="tel:+22964251703">
												+229-64-25-17-03
											</a>
											<br />
											<a href="tel:+2347062944349">
												+234-706-294-4349
											</a>
										</li>
										<li>
											<a href="mailto:hello@iugbuniversity.edu.bj">
												<span
													className="__cf_email__"
													data-cfemail="c5a4a1a8acab85b6a4abb0eba0a1b0"
												>
													hello@iugbuniversity.edu.bj
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="footer-widjet">
								<h3>Campus Life</h3>
								<div className="list">
									<ul>
										<li>
											<a href="#">Accessibility</a>
										</li>
										<li>
											<a href="#">Financial Aid</a>
										</li>

										<li>
											<a href="#">Housing</a>
										</li>
										<li>
											<a href="#">
												Information Technologies
											</a>
										</li>
										<li>
											<a href="#">Student Life</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="footer-widjet">
								<h3>Resources</h3>
								<div className="list">
									<ul>
										<li>
											<a href="#">Academic</a>
										</li>
										<li>
											<a href="#">
												Planning & Administration
											</a>
										</li>
										<li>
											<a href="#">Campus Safety</a>
										</li>

										<li>
											<a href="#">Facility Services</a>
										</li>
										<li>
											<a href="#">Human Resources</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-sm-6">
							<div className="footer-widjet">
								<h3>Academics</h3>
								<div className="list">
									<ul>
										<li>
											<a href="#">Courses</a>
										</li>

										<li>
											<a href="#">Library</a>
										</li>
										<li>
											<a href="#">Time Schedule</a>
										</li>
										<li>
											<a href="#">Apply For Admissions</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="shape">
						<img src="assets/images/shape-1.png" alt="Image" />
					</div>
				</div>
			</div>

			<div className="copyright-area">
				<div className="container">
					<div className="copyright">
						<div className="row">
							<div className="col-lg-6 col-md-4">
								<div className="social-content">
									<ul>
										<li>
											<span>Follow Us On</span>
										</li>
										<li>
											<a
												href="https://www.facebook.com/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="ri-facebook-fill"></i>
											</a>
										</li>
										<li>
											<a
												href="https://www.twitter.com/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="ri-twitter-fill"></i>
											</a>
										</li>
										<li>
											<a
												href="https://instagram.com/?lang=en"
												target="_blank"
												rel="noreferrer"
											>
												<i className="ri-instagram-line"></i>
											</a>
										</li>
										<li>
											<a
												href="https://linkedin.com/?lang=en"
												target="_blank"
												rel="noreferrer"
											>
												<i className="ri-linkedin-fill"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-8">
								<div className="copy">
									<p>
										Designed and Developed by{' '}
										<a
											href="https://faith-adeoti.web.app"
											target="_blank"
											rel="noreferrer"
										>
											TechGospel
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
