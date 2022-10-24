/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import Cookies from 'js-cookie';

function Header() {
	const router = useRouter();
	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	const handleLogout = () => {
		Cookies.remove('refreshtoken', { path: 'api/auth/accessToken' });
		localStorage.removeItem('firstLogin');
		dispatch({ type: 'AUTH', payload: {} });
		dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } });
		return router.push('/');
	};

	const adminRouter = () => {
		return (
			<>
				<NavDropdown.Item href="/createCourse" className="text-dark">
					Add courses
				</NavDropdown.Item>
				<NavDropdown.Item href="/createProgramme" className="text-dark">
					Add programmes
				</NavDropdown.Item>
			</>
		);
	};

	const loggedRouter = () => {
		return (
			<NavDropdown
				title="My Account"
				id="collasible-nav-dropdown"
				className="text-dark"
				style={{ color: '#000' }}
			>
				<NavDropdown.Item href="/profile" className="text-dark">
					My Profile
				</NavDropdown.Item>
				{auth.user.role === 'admin' && adminRouter()}
				<NavDropdown.Item href="#" className="text-dark">
					<button className="dropdown-item" onClick={handleLogout}>
						Logout
					</button>
				</NavDropdown.Item>
			</NavDropdown>
		);
	};

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
							<Nav.Link href="/" className="text-dark">
								Home
							</Nav.Link>
							<NavDropdown
								title="About us"
								id="collasible-nav-dropdown"
								className="text-dark"
								style={{ color: '000' }}
							>
								<NavDropdown.Item
									href="/About"
									className="text-dark"
								>
									Our History & Values
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#"
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
									href="/programmes"
									className="text-dark"
								>
									Accredited Courses & Programmes
								</NavDropdown.Item>
								<NavDropdown.Item
									href="/affiliatedProgrammes"
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
									href="/admission"
									className="text-dark"
								>
									How To Apply
								</NavDropdown.Item>
								<NavDropdown.Item
									href="/applicationForm"
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
									href="/#"
									className="text-dark"
								>
									Undergraduate Programmes
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#"
									className="text-dark"
								>
									Postgraduate Programmes
								</NavDropdown.Item>
							</NavDropdown>

							{Object.keys(auth).length === 0 ? (
								<NavDropdown
									title="Portal"
									id="collasible-nav-dropdown"
									className="text-dark"
								>
									<NavDropdown.Item
										href="/register"
										className="text-dark"
									>
										Portal Registration
									</NavDropdown.Item>
									<NavDropdown.Item
										href="/login"
										className="text-dark"
									>
										Portal Login
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								loggedRouter()
							)}
							<Nav.Link href="#" className="text-dark">
								Finance
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
