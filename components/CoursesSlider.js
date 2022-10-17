/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function CoursesSlider() {
	const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
	return (
		<OwlCarousel
			className="courses-slider mb-20 owl-theme"
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
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="courses-details.html">
						<img
							src="assets/images/courses/courses-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile">
						{/* <img
							src="assets/images/courses/admin-1.jpg"
							alt="Image"
						/> */}
						{/*<p>
							With
							<a href="courses-details.html">Jessica Hamson</a>
						</p>*/}
					</div>
					<a href="courses-details.html">
						<h3>Python Programming For Data Science</h3>
					</a>
					{/* <div className="bottom-content">
						<ul className="d-flex justify-content-between">
							<li>
								<ul>
									<li>
										<i className="flaticon-graduation"></i>
										321
									</li>
									<li>
										<i className="flaticon-bubble-chat"></i>
										1.2k
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Free</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="courses-details.html">
						<img
							src="assets/images/courses/courses-2.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile">
						{/* <img
							src="assets/images/courses/admin-2.jpg"
							alt="Image"
						/> */}
						{/*<p>
							With
							<a href="courses-details.html">Christoph Baldwin</a>
						</p>*/}
					</div>
					<a href="courses-details.html">
						<h3>Databases: Advanced Topics In SQL</h3>
					</a>
					{/* <div className="bottom-content">
						<ul className="d-flex justify-content-between">
							<li>
								<ul>
									<li>
										<i className="flaticon-graduation"></i>
										321
									</li>
									<li>
										<i className="flaticon-bubble-chat"></i>
										1.2k
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Free</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="courses-details.html">
						<img
							src="assets/images/courses/courses-3.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile">
						{/* <img
							src="assets/images/courses/admin-3.jpg"
							alt="Image"
						/> */}
						{/*<p>
							With
							<a href="courses-details.html">Morgen Matthias</a>
						</p>*/}
					</div>
					<a href="courses-details.html">
						<h3>Analyzing Data With MS Excel & Excel</h3>
					</a>
					{/* <div className="bottom-content">
						<ul className="d-flex justify-content-between">
							<li>
								<ul>
									<li>
										<i className="flaticon-graduation"></i>
										321
									</li>
									<li>
										<i className="flaticon-bubble-chat"></i>
										1.2k
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Free</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="courses-details.html">
						<img
							src="assets/images/courses/courses-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile">
						{/* <img
							src="assets/images/courses/admin-1.jpg"
							alt="Image"
						/> */}
						{/*<p>
							With
							<a href="courses-details.html">Jessica Hamson</a>
						</p>*/}
					</div>
					<a href="courses-details.html">
						<h3>Python Programming for Data Science</h3>
					</a>
					{/* <div className="bottom-content">
						<ul className="d-flex justify-content-between">
							<li>
								<ul>
									<li>
										<i className="flaticon-graduation"></i>
										321
									</li>
									<li>
										<i className="flaticon-bubble-chat"></i>
										1.2k
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Free</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="courses-details.html">
						<img
							src="assets/images/courses/courses-2.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile">
						{/* <img
							src="assets/images/courses/admin-2.jpg"
							alt="Image"
						/> */}
						{/*<p>
							With
							<a href="courses-details.html">Christoph Baldwin</a>
						</p>*/}
					</div>
					<a href="courses-details.html">
						<h3>Databases: Advanced Topics in SQL</h3>
					</a>
					{/* <div className="bottom-content">
						<ul className="d-flex justify-content-between">
							<li>
								<ul>
									<li>
										<i className="flaticon-graduation"></i>
										321
									</li>
									<li>
										<i className="flaticon-bubble-chat"></i>
										1.2k
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Free</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="courses-details.html">
						<img
							src="assets/images/courses/courses-3.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile">
						{/* <img
							src="assets/images/courses/admin-3.jpg"
							alt="Image"
						/> */}
						{/*<p>
							With
							<a href="courses-details.html">Morgen Matthias</a>
						</p>*/}
					</div>
					<a href="courses-details.html">
						<h3>Analyzing Data With MS Excel & Excel</h3>
					</a>
					{/* <div className="bottom-content">
						<ul className="d-flex justify-content-between">
							<li>
								<ul>
									<li>
										<i className="flaticon-graduation"></i>
										321
									</li>
									<li>
										<i className="flaticon-bubble-chat"></i>
										1.2k
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Free</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="courses-details.html">
						<img
							src="assets/images/courses/courses-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile">
						{/* <img
							src="assets/images/courses/admin-1.jpg"
							alt="Image"
						/> */}
						{/*<p>
							With
							<a href="courses-details.html">Jessica Hamson</a>
						</p>*/}
					</div>
					<a href="courses-details.html">
						<h3>Python Programming for Data Science</h3>
					</a>
					{/* <div className="bottom-content">
						<ul className="d-flex justify-content-between">
							<li>
								<ul>
									<li>
										<i className="flaticon-graduation"></i>
										321
									</li>
									<li>
										<i className="flaticon-bubble-chat"></i>
										1.2k
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Free</a>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
		</OwlCarousel>
	);
}

export default CoursesSlider;
