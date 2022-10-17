import React from 'react';

function applicationForm() {
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Application Form</h1>
						<ul>
							<li>
								<a href="index-2.html">Admission</a>
							</li>
							<li>Application form</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="register-area pt-100 pb-70">
				<div className="container">
					<div className="register">
						<h3>Enrol</h3>
						<form>
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="name"
											className="form-control"
											placeholder="First Name*"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="lname"
											className="form-control"
											placeholder="Last Name*"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="email"
											id="email"
											className="form-control"
											placeholder="Email Address*"
											autoComplete="false"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="phone"
											className="form-control"
											placeholder="Phone no in international format *"
										/>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<input
											type="password"
											id="password2"
											className="form-control"
											placeholder="Password*"
										/>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<input
											type="password"
											id="password3"
											className="form-control"
											placeholder="Confirm Password*"
										/>
									</div>
								</div>
							</div>
							<button
								type="submit"
								className="default-btn btn active"
							>
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default applicationForm;
