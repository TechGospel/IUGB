/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function Gallery() {
	return (
		<>
			<div className="page-banner-area bg-1">
				<div className="container">
					<div className="page-banner-content">
						<h1>Gallery </h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Gallery</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="events-area pt-100 pb-70">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div class="single-events-card style-4">
								<div class="events-image">
									<a href="#">
										<img
											src="assets/images/gallery/NYSC1.jpeg"
											alt="Image"
										/>
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-events-card style-4">
								<div class="events-image">
									<a href="#">
										<img
											src="assets/images/gallery/matric.jpg"
											alt="Image"
										/>
									</a>
								</div>
								{/* <div class="events-content">
									<div class="admin">
										<p><a href="#"><i class="flaticon-student-with-graduation-cap"></i>Raymond Salazar</a></p> 
									</div>
									<a href="#">
										<h3>
											Regular WordPress Meetup In New
											Jersey, USA
										</h3>
									</a> 
								</div> */}
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-events-card style-4">
								<div class="events-image">
									<a href="#">
										<img
											src="assets/images/gallery/convo3.jpg"
											alt="Image"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <div class="paginations">
						<ul>
							<li>
								<a href="#">
									<i class="flaticon-back"></i>
								</a>
							</li>
							<li>
								<a href="#">01</a>
							</li>
							<li>
								<a href="#">02</a>
							</li>
							<li>
								<a href="#">03</a>
							</li>
							<li>
								<a href="events.html" class="active">
									<i class="flaticon-next"></i>
								</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default Gallery;
