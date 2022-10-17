import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function OwlCarousel() {
	const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
	return (
		<OwlCarousel
			className="hero-slider2 owl-theme"
			items={1}
			loop
			margin={10}
			dots={false}
			autoplay={true}
			autoplaySpeed={2000}
		>
			<div className="slider-item banner-bg-4">
				<div className="container-fluid">
					<div className="slider-content">
						<h1>Start Your Beautiful & Bright Future From Here</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit. Ut elit tellus luctus nec ullamcorper mattis
							pulvinar dapibus dolor sit amet consec
						</p>
						<a href="courses.html" className="default-btn btn">
							Start a Journey <i className="flaticon-next"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="slider-item banner-bg-5">
				<div className="container-fluid">
					<div className="slider-content">
						<h1>Explore Your Potential & Talents In IUGB</h1>
						<p>
							We focus on the total transformation of human
							capacity using qualified team of staff and modern
							technological devices.
						</p>
						<a href="courses.html" className="default-btn btn">
							Start a Journey <i className="flaticon-next"></i>
						</a>
					</div>
				</div>
			</div>
		</OwlCarousel>
	);
}

export default OwlCarousel;
