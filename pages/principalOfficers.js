/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function principalOfficers() {
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Principal Officers</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Principal Officers</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="program-area bg-f4f6f9 pt-100 pb-70">
				<div class="container">
					<div class="section-title">
						<h2>Meet Our Principal Officers</h2>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div class="single-program-card">
								<div class="program-image">
									<a href="#">
										<img
											src="assets/images/vc.jpg"
											alt="Image"
										/>
									</a>
								</div>
								<div class="program-content">
									<h3>
										<a href="#">Dr. Augustine Pekana N.</a>
									</h3>
									<p>
										Vice Chancellor<br></br>
										LLB(Hons), MMP, MLCS & Ph.D.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-program-card">
								<div class="program-image">
									<a href="#">
										<img
											src="assets/images/president.jpg"
											alt="Image"
										/>
									</a>
								</div>
								<div class="program-content">
									<h3>
										<a href="#">Prof. Ganonlon Germain</a>
									</h3>
									<p>
										President/Founder<br></br>
										Great Shepherd University Partner
										Institution in Benin Republic (Esep Le
										Berger)
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-program-card">
								<div class="program-image">
									<a href="#">
										<img
											src="assets/images/registrar.jpg"
											alt="Image"
										/>
									</a>
								</div>
								<div class="program-content">
									<h3>
										<a href="#">Dr. Adebola Akande</a>
									</h3>
									<p>
										Registrar<br></br>
										Bsc, MBA, PH.D, FCIML
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

export default principalOfficers;
