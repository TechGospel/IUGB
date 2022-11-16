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
					<a href="#">
						<img
							src="assets/images/courses/courses-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile"></div>
					<a href="#">
						<h3>Computer Science</h3>
					</a>
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="#">
						<img
							src="assets/images/courses/bizadmin.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile"></div>
					<a href="#">
						<h3>Business Administration</h3>
					</a>
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="#">
						<img src="assets/images/courses/hr.jpg" alt="Image" />
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile"></div>
					<a href="#">
						<h3>HR Management</h3>
					</a>
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="#">
						<img src="assets/images/courses/acct.jpg" alt="Image" />
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile"></div>
					<a href="#">
						<h3>Accountancy</h3>
					</a>
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="#">
						<img
							src="assets/images/courses/psychology.webp"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile"></div>
					<a href="#">
						<h3>Psychology</h3>
					</a>
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="#">
						<img
							src="assets/images/courses/international-relations.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile"></div>
					<a href="#">
						<h3>International Relations</h3>
					</a>
				</div>
			</div>
			<div className="single-courses-card style2">
				<div className="courses-img">
					<a href="#">
						<img
							src="assets/images/courses/economics.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="courses-content">
					<div className="admin-profile"></div>
					<a href="#">
						<h3>Economics, Banking & Finance</h3>
					</a>
				</div>
			</div>
		</OwlCarousel>
	);
}

export default CoursesSlider;
