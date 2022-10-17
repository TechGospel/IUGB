/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function NewsSlider() {
	const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
	return (
		<OwlCarousel
			className="news-slider owl-theme"
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
			<div className="single-news-card style2">
				<div className="news-img">
					<a href="news-details.html">
						<img src="assets/images/news/news-1.jpg" alt="Image" />
					</a>
				</div>
				<div className="news-content">
					<div className="list">
						<ul>
							<li>
								<i className="flaticon-user"></i>By
								<a href="news-details.html">Admin</a>
							</li>
							<li>
								<i className="flaticon-tag"></i>
								Social Sciences
							</li>
						</ul>
					</div>
					<a href="news-details.html">
						<h3>
							Professor Tom Comments On The volunteer B. Snack
							Brand
						</h3>
					</a>
					<a href="news-details.html" className="read-more-btn">
						read More<i className="flaticon-next"></i>
					</a>
				</div>
			</div>
			<div className="single-news-card style2">
				<div className="news-img">
					<a href="news-details.html">
						<img src="assets/images/news/news-2.jpg" alt="Image" />
					</a>
				</div>
				<div className="news-content">
					<div className="list">
						<ul>
							<li>
								<i className="flaticon-user"></i>By
								<a href="news-details.html">Admin</a>
							</li>
							<li>
								<i className="flaticon-tag"></i>
								Social Sciences
							</li>
						</ul>
					</div>
					<a href="news-details.html">
						<h3>
							How To Use Technology To Adapt Your Talent To The
							World
						</h3>
					</a>
					<a href="news-details.html" className="read-more-btn">
						read More<i className="flaticon-next"></i>
					</a>
				</div>
			</div>
			<div className="single-news-card style2">
				<div className="news-img">
					<a href="news-details.html">
						<img src="assets/images/news/news-3.jpg" alt="Image" />
					</a>
				</div>
				<div className="news-content">
					<div className="list">
						<ul>
							<li>
								<i className="flaticon-user"></i>By
								<a href="news-details.html">Admin</a>
							</li>
							<li>
								<i className="flaticon-tag"></i>
								Social Sciences
							</li>
						</ul>
					</div>
					<a href="news-details.html">
						<h3>
							Here Are The Things To Look For When Selecting
							Course
						</h3>
					</a>
					<a href="news-details.html" className="read-more-btn">
						read More<i className="flaticon-next"></i>
					</a>
				</div>
			</div>
			<div className="single-news-card style2">
				<div className="news-img">
					<a href="news-details.html">
						<img src="assets/images/news/news-1.jpg" alt="Image" />
					</a>
				</div>
				<div className="news-content">
					<div className="list">
						<ul>
							<li>
								<i className="flaticon-user"></i>By
								<a href="news-details.html">Admin</a>
							</li>
							<li>
								<i className="flaticon-tag"></i>
								Social Sciences
							</li>
						</ul>
					</div>
					<a href="news-details.html">
						<h3>
							Professor Tom Comments On The volunteer B. Snack
							Brand
						</h3>
					</a>
					<a href="news-details.html" className="read-more-btn">
						read More<i className="flaticon-next"></i>
					</a>
				</div>
			</div>
			<div className="single-news-card style2">
				<div className="news-img">
					<a href="news-details.html">
						<img src="assets/images/news/news-2.jpg" alt="Image" />
					</a>
				</div>
				<div className="news-content">
					<div className="list">
						<ul>
							<li>
								<i className="flaticon-user"></i>By
								<a href="news-details.html">Admin</a>
							</li>
							<li>
								<i className="flaticon-tag"></i>
								Social Sciences
							</li>
						</ul>
					</div>
					<a href="news-details.html">
						<h3>
							Professor Tom Comments On The volunteer B. Snack
							Brand
						</h3>
					</a>
					<a href="news-details.html" className="read-more-btn">
						read More<i className="flaticon-next"></i>
					</a>
				</div>
			</div>
			<div className="single-news-card style2">
				<div className="news-img">
					<a href="news-details.html">
						<img src="assets/images/news/news-3.jpg" alt="Image" />
					</a>
				</div>
				<div className="news-content">
					<div className="list">
						<ul>
							<li>
								<i className="flaticon-user"></i>By
								<a href="news-details.html">Admin</a>
							</li>
							<li>
								<i className="flaticon-tag"></i>
								Social Sciences
							</li>
						</ul>
					</div>
					<a href="news-details.html">
						<h3>
							Professor Tom Comments On The volunteer B. Snack
							Brand
						</h3>
					</a>
					<a href="news-details.html" className="read-more-btn">
						read More<i className="flaticon-next"></i>
					</a>
				</div>
			</div>
			<div className="single-news-card style2">
				<div className="news-img">
					<a href="news-details.html">
						<img src="assets/images/news/news-2.jpg" alt="Image" />
					</a>
				</div>
				<div className="news-content">
					<div className="list">
						<ul>
							<li>
								<i className="flaticon-user"></i>By
								<a href="news-details.html">Admin</a>
							</li>
							<li>
								<i className="flaticon-tag"></i>
								Social Sciences
							</li>
						</ul>
					</div>
					<a href="news-details.html">
						<h3>
							Professor Tom Comments On The volunteer B. Snack
							Brand
						</h3>
					</a>
					<a href="news-details.html" className="read-more-btn">
						read More<i className="flaticon-next"></i>
					</a>
				</div>
			</div>
		</OwlCarousel>
	);
}

export default NewsSlider;
