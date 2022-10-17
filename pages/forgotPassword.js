import React from 'react';

function forgotPassword() {
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Recover Password</h1>
						<ul>
							<li>
								<a href="index-2.html">Home</a>
							</li>
							<li>Recover Password</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="password-area pt-100 pb-70">
				<div className="container">
					<div className="password">
						<h3>Forgot Password</h3>
						<form>
							<div className="form-group">
								<input
									type="email"
									id="email"
									className="form-control"
									placeholder="Username Or Email Address*"
								/>
							</div>
							<button
								type="submit"
								className="default-btn btn active"
							>
								Reset Now
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default forgotPassword;
