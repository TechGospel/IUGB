/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function EventsSlider() {
	const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
	return (
		<OwlCarousel
			className="events-slider mb-20  owl-theme"
			margin={10}
			autoplay={true}
			autoplaySpeed={2000}
			responsive={{
				0: {
					items: 1,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 3,
				},
			}}
		>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-2.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Regular WordPress Meetup In New Jersey, USA</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-3.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Monday Night Concert In Lake View,Mountain City</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-2.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-3.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-2.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Regular WordPress Meetup In New Jersey, USA</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-3.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Monday Night Concert In Lake View,Mountain City</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-2.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-3.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="single-events-card style2">
				<div className="events-image">
					<a href="events-details.html">
						<img
							src="assets/images/events/events-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="events-content">
					<a href="events-details.html">
						<h3>Planning And Facilitating Effective Meetings</h3>
					</a>
					<div className="admin-and-date">
						<ul className="d-flex justify-content-between">
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-student-with-graduation-cap"></i>
										Raymond Salazar
									</a>
								</p>
							</li>
							<li>
								<p>
									<a href="events-details.html">
										<i className="flaticon-clock"></i>
										April 10,2022
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</OwlCarousel>
	);
}

export default EventsSlider;
