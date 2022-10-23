/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
	return (
		<div>
			<div className="top-header-area">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<div className="header-left-content">
								<p>
									{' '}
									At IUGB, We are a leading force in what we
									do.
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="header-right-content">
								<div className="list">
									<ul>
										{/*<li>
											<a href="graduate-admission.html">
												Students
											</a>
										</li>*/}
										<li>
											<a href="#">Faculty & Staff</a>
										</li>
										<li>
											<a href="#">Visitors</a>
										</li>

										<li>
											<a href="#">Alumni</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Navbar collapseOnSelect expand="lg" fixedTop="true">
				<Container>
					<Navbar.Brand href="#home">
						<Link href="/">
							<a className="d-flex">
								<img
									src="/logo.png"
									className="main-logo"
									alt="logo"
								/>
							</a>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link href="#features" className="text-dark">
								Home
							</Nav.Link>
							<NavDropdown
								title="About us"
								id="collasible-nav-dropdown"
								className="text-dark"
							>
								<NavDropdown.Item
									href="#action/3.1"
									className="text-dark"
								>
									Our History & Values
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action/3.2"
									className="text-dark"
								>
									Principal Officers
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								title="Academics"
								id="collasible-nav-dropdown"
								className="text-dark"
							>
								<NavDropdown.Item
									href="#action/3.1"
									className="text-dark"
								>
									Accredited Courses & Programmes
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action/3.2"
									className="text-dark"
								>
									Affiliated Courses & Programmes
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								title="Admission"
								id="collasible-nav-dropdown"
								className="text-dark"
							>
								<NavDropdown.Item
									href="#action/3.1"
									className="text-dark"
								>
									How To Apply
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action/3.2"
									className="text-dark"
								>
									Application Form
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown
								title="Registry"
								id="collasible-nav-dropdown"
								className="text-dark"
							>
								<NavDropdown.Item
									href="#action/3.1"
									className="text-dark"
								>
									Undergraduate Programmes
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action/3.2"
									className="text-dark"
								>
									Postgraduate Programmes
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#deets" className="text-dark">
								Finance
							</Nav.Link>

							<NavDropdown
								title="Portal"
								id="collasible-nav-dropdown"
								className="text-dark"
							>
								<NavDropdown.Item
									href="#action/3.1"
									className="text-dark"
								>
									Portal Registration
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action/3.2"
									className="text-dark"
								>
									Portal Login
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/*
			<div className="navbar-area nav-bg-2">
				<div className="mobile-responsive-nav">
					<div className="container">
						<div className="mobile-responsive-menu">
							<div className="logo">
								<Link href="/">
									<a className="d-flex">
										<img
											src="/logo.png"
											className="main-logo"
											alt="logo"
										/>
										<img
											src="/logo.png"
											className="white-logo"
											alt="logo"
										/>
										<h2
											className="px-3 pt-2"
											style={{ fontSize: '1.5em' }}
										>
											IUGB
										</h2>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="desktop-nav">
					<div className="container-fluid">
						<nav className="navbar navbar-expand-md navbar-light">
							<Link href="/">
								<a className="navbar-brand d-flex">
									<img
										src="logo.png"
										className="main-logo"
										alt="logo"
										width={50}
										height={38}
									/>
									<img
										src="logo.png"
										className="white-logo"
										alt="logo"
										width={50}
									/>
									<h4 className="px-3 pt-2">
										l'Institut Universitaire <br />
										le Grand Berger
									</h4>
								</a>
							</Link>

							<div
								className="collapse navbar-collapse mean-menu"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav ms-auto">
									<li className="nav-item">
										<Link href="/">
											<a className="nav-link active">
												Home
											</a>
										</Link>
									</li>
									<li className="nav-item">
										<a
											href="#"
											className="nav-link dropdown-toggle"
										>
											About us
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<a
													href="#"
													className="nav-link"
												>
													Our history & values
												</a>
											</li>
											<li className="nav-item">
												<a
													href="#"
													className="nav-link"
												>
													Principal officers
												</a>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<a
											href="#"
											className="nav-link dropdown-toggle"
										>
											Academics
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link href="/programmes">
													<a className="nav-link">
														Accredited courses &
														Programmes
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<Link href="/affiliatedProgrammes">
													<a className="nav-link">
														Affiliated courses &
														programmes
													</a>
												</Link>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<a
											href="#"
											className="nav-link dropdown-toggle"
										>
											Admission
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link href="/admission">
													<a className="nav-link">
														Admission process
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<Link href="/applicationForm">
													<a className="nav-link">
														Application form
													</a>
												</Link>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<a
											href="#"
											className="nav-link dropdown-toggle"
										>
											Registry
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<a
													href="#"
													className="nav-link"
												>
													Undergraduate programmes
												</a>
											</li>
											<li className="nav-item">
												<a
													href="#"
													className="nav-link"
												>
													Postgraduate programmes
												</a>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<a href="#" className="nav-link ">
											Finance
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link dropdown-toggle"
											href="#"
										>
											Portal
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link href="/register">
													<a className="nav-link">
														Portal registration
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<Link href="/login">
													<a className="nav-link">
														Portal login
													</a>
												</Link>
											</li>
										</ul>
									</li>
								</ul>
								<div className="others-options">
									<div className="icon">
										<i
											className="ri-menu-3-fill"
											data-bs-toggle="modal"
											data-bs-target="#sidebarModal"
										></i>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
				<div className="others-option-for-responsive">
					<div className="container">
						<div className="dot-menu">
							<div className="inner">
								<div className="icon">
									<i
										className="ri-menu-3-fill"
										data-bs-toggle="modal"
										data-bs-target="#sidebarModal"
									></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="sidebarModal modal right fade"
				id="sidebarModal"
				tabIndex="-1"
				role="dialog"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<button
							type="button"
							className="close"
							data-bs-dismiss="modal"
						>
							<i className="ri-close-line"></i>
						</button>
						<div className="modal-body">
							<Link href="/">
								<a>
									<img
										src="logo.png"
										className="main-logo"
										alt="logo"
									/>
									<img
										src="logo.png"
										className="white-logo"
										alt="logo"
									/>
									<h2>IUGB</h2>
								</a>
							</Link>

							<div className="sidebar-content">
								<h3>About Us</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipiscing elit sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<div className="sidebar-btn">
									<a href="#" className="default-btn">
										Let’s Talk
									</a>
								</div>
							</div>
							<div className="sidebar-contact-info">
								<h3>Contact Information</h3>
								<ul className="info-list">
									<li>
										<i className="ri-phone-fill"></i>
										<a href="tel:+22964251703">
											+229-64-25-17-03
										</a>
										<br />
										<a href="tel:+2347062944349">
											+234-706-294-4349
										</a>
									</li>
									<li>
										<i className="ri-mail-line"></i>
										<a href="mailto:hello@iugbuniversity.edu.bj">
											<span
												className="__cf_email__"
												data-cfemail="442c2128282b0437252a316a272b29"
											>
												hello@iugbuniversity.edu.bj
											</span>
										</a>
									</li>
									<li>
										<i className="ri-map-pin-line"></i>
										Porto Novo, Benin
									</li>
								</ul>
							</div>
							<ul className="sidebar-social-list">
								<li>
									<a
										href="https://www.facebook.com/"
										target="_blank"
										rel="noreferrer"
									>
										<i className="flaticon-facebook"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.twitter.com/"
										target="_blank"
										rel="noreferrer"
									>
										<i className="flaticon-twitter"></i>
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com/?lang=en"
										target="_blank"
										rel="noreferrer"
									>
										<i className="flaticon-linkedin"></i>
									</a>
								</li>
								<li>
									<a
										href="https://instagram.com/?lang=en"
										target="_blank"
										rel="noreferrer"
									>
										<i className="flaticon-instagram"></i>
									</a>
								</li>
							</ul>
							<div className="contact-form">
								<h3>Ready to Get Started?</h3>
								<form id="contactForm">
									<div className="row">
										<div className="col-lg-12 col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="name"
													className="form-control"
													required
													data-error="Please enter your name"
													placeholder="Your name"
												/>
												<div className="help-block with-errors"></div>
											</div>
										</div>
										<div className="col-lg-12 col-md-6">
											<div className="form-group">
												<input
													type="email"
													name="email"
													className="form-control"
													required
													data-error="Please enter your email"
													placeholder="Your email address"
												/>
												<div className="help-block with-errors"></div>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<input
													type="text"
													name="phone_number"
													className="form-control"
													required
													data-error="Please enter your phone number"
													placeholder="Your phone number"
												/>
												<div className="help-block with-errors"></div>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea
													name="message"
													className="form-control"
													cols="30"
													rows="6"
													required
													data-error="Please enter your message"
													placeholder="Write your message..."
												></textarea>
												<div className="help-block with-errors"></div>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<button
												type="submit"
												className="default-btn"
											>
												Send Message<span></span>
											</button>
											<div
												id="msgSubmit"
												className="h3 text-center hidden"
											></div>
											<div className="clearfix"></div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>*/}
		</div>
	);
}

export default Header;
