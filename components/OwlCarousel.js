/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Link from 'next/link';
function OwlCarousel() {
	const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
	return (
		<OwlCarousel
			className="hero-slider2 owl-theme"
			items={1}
			loop
			dots={false}
			autoplay={true}
			autoplaySpeed={2000}
		>
			<div className="slider-item banner-bg-4">
				<div className="banner-overlay">
					<div className="container-fluid">
						<div className="slider-content">
							<h1>
								Welcome to l'Institut Universitaire le Grand
								Berger
							</h1>
							<p>
								We are inspiring a better future through
								well-rounded human capacity building and
								upskiling.
							</p>
							<Link href="/programmes">
								<a className="default-btn btn text-light">
									Start your Journey{' '}
									<i className="flaticon-next"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="slider-item banner-bg-5">
				<div className="banner-overlay">
					<div className="container-fluid">
						<div className="slider-content">
							<h1>
								Welcome to l'Institut Universitaire le Grand
								Berger
							</h1>
							<p>
								We focus on the total transformation of human
								capacity using qualified team of staff and
								modern technological devices.
							</p>
							<Link href="/programmes">
								<a className="default-btn btn text-light">
									Start your Journey{' '}
									<i className="flaticon-next"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</OwlCarousel>
	);
}

export default OwlCarousel;
