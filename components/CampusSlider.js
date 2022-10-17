/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function CampusSlider() {
	const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
	return (
		<OwlCarousel
			className="campus-slider owl-theme"
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
			<div className="single-campus-card style2">
				<div className="img">
					<a href="campus-life.html">
						<img
							src="assets/images/campus-life/campus-life-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="campus-content">
					<span>01 Art & Culture</span>
					<a href="campus-life.html">
						<h3>Art, Exercise And Escapism In Nature</h3>
					</a>
				</div>
			</div>
			<div className="single-campus-card style2">
				<div className="img">
					<a href="campus-life.html">
						<img
							src="assets/images/campus-life/campus-life-2.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="campus-content">
					<span>02 Athletics & Fitness</span>
					<a href="campus-life.html">
						<h3>Improve Athletic Performance Tips From Sanu</h3>
					</a>
				</div>
			</div>
			<div className="single-campus-card style2">
				<div className="img">
					<a href="campus-life.html">
						<img
							src="assets/images/campus-life/campus-life-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="campus-content">
					<span>01 Art & Culture</span>
					<a href="campus-life.html">
						<h3>Art, Exercise And Escapism In Nature</h3>
					</a>
				</div>
			</div>
			<div className="single-campus-card style2">
				<div className="img">
					<a href="campus-life.html">
						<img
							src="assets/images/campus-life/campus-life-2.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="campus-content">
					<span>02 Athletics & Fitness</span>
					<a href="campus-life.html">
						<h3>Improve Athletic Performance Tips From Sanu</h3>
					</a>
				</div>
			</div>
			<div className="single-campus-card style2">
				<div className="img">
					<a href="campus-life.html">
						<img
							src="assets/images/campus-life/campus-life-1.jpg"
							alt="Image"
						/>
					</a>
				</div>
				<div className="campus-content">
					<span>01 Art & Culture</span>
					<a href="campus-life.html">
						<h3>Art, Exercise And Escapism In Nature</h3>
					</a>
				</div>
			</div>
		</OwlCarousel>
	);
}

export default CampusSlider;
