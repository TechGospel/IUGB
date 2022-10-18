/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import CampusSlider from './CampusSlider';
import CoursesSlider from './CoursesSlider';
import EventsSlider from './EventsSlider';
import NewsSlider from './NewsSlider';

function MainContent() {
	return (
		<>
			<div className="campus-information-area pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div
							className="col-lg-6"
							data-aos="fade-right"
							data-aos-easing="ease-in-sine"
							data-aos-duration="1300"
							data-aos-once="true"
						>
							<div className="campus-content">
								<div className="campus-title">
									<h2>Who we are</h2>
									<p>
										IUGB is attracting the best expert
										thinkers, unusual managers, and
										hyper-resourceful technocrats in all
										fields of human endeavours who are
										committed to pioneering excellence.
									</p>
								</div>
								<div className="list">
									<div className="row">
										<div className="col-lg-6">
											<ul>
												<li>
													<i className="ri-check-fill"></i>
													<p>Undergraduate</p>
												</li>
												<li>
													<i className="ri-check-fill"></i>
													<p>Graduate Programs</p>
												</li>
											</ul>
										</div>
										<div className="col-lg-6">
											<ul>
												<li>
													<i className="ri-check-fill"></i>
													<p>International Hubs</p>
												</li>

												<li>
													<i className="ri-check-fill"></i>
													<p>Global Students</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="counter">
									<div className="row">
										<div className="col-lg-4 col-4">
											<div className="counter-card">
												<h1>
													<span
														className="odometer"
														data-count="10"
													>
														10
													</span>
													<span className="target">
														+
													</span>
												</h1>
												<p>Years Of Experience</p>
											</div>
										</div>
										<div className="col-lg-4 col-4">
											<div className="counter-card">
												<h1>
													<span
														className="odometer"
														data-count="2"
													>
														2
													</span>
													<span className="target heading-color">
														k
													</span>
													<span className="target">
														+
													</span>
												</h1>
												<p>Global Students</p>
											</div>
										</div>
										<div className="col-lg-4 col-4">
											<div className="counter-card">
												<h1>
													<span
														className="odometer"
														data-count="8"
													>
														8
													</span>
													<span className="target">
														+
													</span>
												</h1>
												<p>Student Nationalities</p>
											</div>
										</div>
									</div>
								</div>
								<Link href="/applicationForm">
									<a className="default-btn btn">
										Start your application
										<i className="flaticon-next"></i>
									</a>
								</Link>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="estemate-form">
								<h3>Take the first step</h3>
								<form onSubmit={{}}>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Full Name"
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<input
													type="email"
													className="form-control"
													placeholder="Active Email"
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Phone Number"
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Field of study"
												/>
											</div>
										</div>
										{/*<div className="col-lg-12">
											<div className="form-group">
												<textarea
													className="form-control"
													rows="5"
													placeholder="Message"
												></textarea>
											</div>
										</div>*/}
										<div className="col-lg-12">
											<button
												type="submit"
												className="default-btn btn"
											>
												Submit
												<i className="flaticon-paper-plane"></i>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="academic-area pt-100 pb-70 bg-f4f6f9">
				<div className="container">
					<div className="section-title">
						<h2>Academics</h2>
						<p>
							Our programmes cut across various levels tailored to
							suit your need
						</p>
					</div>
					<div className="row justify-content-center">
						<div
							className="col-lg-4 col-md-6"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="200"
							data-aos-once="true"
						>
							<div className="single-academics-card2 bg-1">
								<div className="serial">
									<p>01.</p>
								</div>
								<div className="academic-content">
									<div className="academic-top-content">
										<i className="flaticon-graduation"></i>
										<a href="academics-details.html">
											<h3>Undergraduate Education</h3>
										</a>
									</div>
									<p>
										Kickstart a life long academic journey
										with a recognized and globally
										acceptable institution
									</p>
									<Link href="/">
										<a className="read-more-btn white-color">
											Undergraduate Education
											<i className="flaticon-next"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-6"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="400"
							data-aos-once="true"
						>
							<div className="single-academics-card2 bg-2">
								<div className="serial">
									<p>02.</p>
								</div>
								<div className="academic-content">
									<div className="academic-top-content">
										<i className="flaticon-graduation"></i>
										<a href="academics-details.html">
											<h3>Graduate Education</h3>
										</a>
									</div>
									<p>
										Develop mastery in your chosen field of
										expertise and take a deep dive into a
										world of unlimited knowledge
									</p>
									<Link href="/">
										<a className="read-more-btn white-color">
											Graduate Education
											<i className="flaticon-next"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-6"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="600"
							data-aos-once="true"
						>
							<div className="single-academics-card2 bg-3">
								<div className="serial">
									<p>03.</p>
								</div>
								<div className="academic-content">
									<div className="academic-top-content">
										<i className="flaticon-graduation"></i>
										<a href="academics-details.html">
											<h3>Lifelong Learning</h3>
										</a>
									</div>
									<p>
										Learning never ends. Gain new skills
										that bring productivity and satisfaction
										in your everyday life.
									</p>
									<Link href="/">
										<a className="read-more-btn white-color">
											Professional Education
											<i className="flaticon-next"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="courses-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Our Popular Courses</h2>
						{/*<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut elit tellus luctus nec ullamcorper mattis
						</p>*/}
					</div>
					<CoursesSlider />
				</div>
			</div>

			<div className="campus-life-area ptb-100 bg-f4f6f9">
				<div className="container">
					<div className="section-title">
						<h2>Campus Life</h2>
						{/*<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut elit tellus luctus nec ullamcorper mattis
						</p>*/}
					</div>
					<CampusSlider />
				</div>
			</div>

			{/* <div className="admisssion-area ptb-100">
				<div className="container">
					<div className="admission-content">
						<div className="section-title">
							<h2>Sanu Admission</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipiscing elit ut elit tellus luctus nec
								ullamcorper mattis
							</p>
						</div>
						<div className="admission-image">
							<img
								src="assets/images/admission/admission-2.jpg"
								alt="Image"
							/>
							<div className="icon">
								<a
									className="popup-youtube play-btn"
									href="https://www.youtube.com/watch?v=6WQCJx_vEX4"
								>
									<i className="ri-play-fill"></i>
								</a>
							</div>
						</div>
						<div className="query text-center">
							<a
								href="admission.html"
								className="default-btn btn"
							>
								More on admission
								<i className="flaticon-next"></i>
							</a>
						</div>
					</div>
				</div>
			</div> */}

			{/* <div className="health-care-area ptb-100 bg-f4f6f9">
				<div className="container">
					<div className="section-title">
						<h2>Health Care</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut elit tellus luctus nec ullamcorper mattis
						</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-6">
							<div className="single-health-care-card style1">
								<div className="img">
									<a href="health-care-details.html">
										<img
											src="assets/images/health-care/health-care-4.jpg"
											alt="Image"
										/>
									</a>
								</div>
								<div className="health-care-content">
									<a href="health-care-details.html">
										<h3>
											Happiness Begins With Good Health
										</h3>
									</a>
									<p>
										Lorem ipsum dolor sit amet con sec
										teturo adip iscing elit sed do eiusmod
										tempor insi didunt ut labore et dolore
									</p>
									<a
										href="health-care.html"
										className="read-more-btn"
									>
										Read More on healthcare
										<i className="flaticon-next"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="single-health-care-card style2">
								<div className="img">
									<a href="health-care-details.html">
										<img
											src="assets/images/health-care/health-care-2.jpg"
											alt="Image"
										/>
									</a>
								</div>
								<div className="health-care-content">
									<a href="health-care-details.html">
										<h3>
											When Life Depends On Medical
											Technology
										</h3>
									</a>
									<p>
										Lorem ipsum dolor sit amet con sec
										teturo adip iscing elit sed do eiusmod
										tempor insi didunt ut labore et dolore
									</p>
									<a
										href="health-care.html"
										className="read-more-btn"
									>
										Read More on healthcare
										<i className="flaticon-next"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="more-health-care style2 text-center">
						<p>
							Select From Hundreds of Options.
							<a
								href="health-care.html"
								className="read-more-btn active"
							>
								More on healthcare
								<i className="flaticon-next"></i>
							</a>
						</p>
					</div>
				</div>
			</div> */}

			{/*<div className="events-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Events</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut elit tellus luctus nec ullamcorper mattis
						</p>
					</div>
					<EventsSlider />
				</div>
			</div>*/}

			{/* <div className="podcasts-area pt-100 pb-70 bg-f4f6f9">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="section-title style2">
								<h2>Our Podcasts</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipiscing elit ut elit tellus luctus nec
									ullamcorper mattis
								</p>
							</div>
							<div className="row">
								<div
									className="col-lg-6 col-md-6"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="200"
									data-aos-once="true"
								>
									<div className="single-podcasts-card style2">
										<div className="podcasts-image">
											<img
												src="assets/images/podcasts/podcasts-4.jpg"
												alt="Image"
											/>
											<a
												className="popup-youtube play-btn"
												href="https://www.youtube.com/watch?v=6WQCJx_vEX4"
											>
												<i className="ri-play-fill"></i>
											</a>
										</div>
										<div className="podcast-content">
											<ul className="d-flex justify-content-between">
												<li className="date">
													April 10,2022
												</li>
												<li>Episode:01</li>
											</ul>
											<h3>
												Finding Moments Of Joy In A
												Challenging Year
											</h3>
										</div>
									</div>
								</div>
								<div
									className="col-lg-6 col-md-6"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="400"
									data-aos-once="true"
								>
									<div className="single-podcasts-card style2">
										<div className="podcasts-image">
											<img
												src="assets/images/podcasts/podcasts-5.jpg"
												alt="Image"
											/>
											<a
												className="popup-youtube play-btn"
												href="https://www.youtube.com/watch?v=6WQCJx_vEX4"
											>
												<i className="ri-play-fill"></i>
											</a>
										</div>
										<div className="podcast-content">
											<ul className="d-flex justify-content-between">
												<li className="date">
													April 10,2022
												</li>
												<li>Episode:01</li>
											</ul>
											<h3>
												Arranging And Enjoying life
												Through Work
											</h3>
										</div>
									</div>
								</div>
								<div
									className="col-lg-6 col-md-6"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="600"
									data-aos-once="true"
								>
									<div className="single-podcasts-card style2">
										<div className="podcasts-image">
											<img
												src="assets/images/podcasts/podcasts-6.jpg"
												alt="Image"
											/>
											<a
												className="popup-youtube play-btn"
												href="https://www.youtube.com/watch?v=6WQCJx_vEX4"
											>
												<i className="ri-play-fill"></i>
											</a>
										</div>
										<div className="podcast-content">
											<ul className="d-flex justify-content-between">
												<li className="date">
													April 10,2022
												</li>
												<li>Episode:01</li>
											</ul>
											<h3>
												Proved, Only Action Can Bring
												Success
											</h3>
										</div>
									</div>
								</div>
								<div
									className="col-lg-6 col-md-6"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="800"
									data-aos-once="true"
								>
									<div className="single-podcasts-card style2">
										<div className="podcasts-image">
											<img
												src="assets/images/podcasts/podcasts-7.jpg"
												alt="Image"
											/>
											<a
												className="popup-youtube play-btn"
												href="https://www.youtube.com/watch?v=6WQCJx_vEX4"
											>
												<i className="ri-play-fill"></i>
											</a>
										</div>
										<div className="podcast-content">
											<ul className="d-flex justify-content-between">
												<li className="date">
													April 10,2022
												</li>
												<li>Episode:01</li>
											</ul>
											<h3>
												Finding Happy Moments Through
												Challenges
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="categories style-2">
								<h3>Categories</h3>
								<ul>
									<li>
										<a href="#">
											<i className="flaticon-briefcase"></i>
											Business
										</a>
									</li>
									<li>
										<a href="#">
											<i className="flaticon-fashion"></i>
											Fashion
										</a>
									</li>
									<li>
										<a href="#">
											<i className="flaticon-writing-tool"></i>
											writing
										</a>
									</li>
									<li>
										<a href="#">
											<i className="flaticon-web-development"></i>
											Development
										</a>
									</li>
									<li>
										<a href="#">
											<i className="flaticon-audio-speaker"></i>
											Marketing
										</a>
									</li>
								</ul>
							</div>
							<div className="subscribe-area">
								<div className="top-content">
									<i className="flaticon-email"></i>
									<h3>Subscribe To Newsletter</h3>
									<p>Get updates to news & events</p>
								</div>
								<form
									className="newsletter-form"
									data-toggle="validator"
								>
									<input
										type="email"
										className="form-control"
										placeholder="Your Email"
										name="EMAIL"
										required
										autoComplete="off"
									/>
									<button
										className="default-btn"
										type="submit"
									>
										Subscribe
									</button>
									<div
										id="validator-newsletter"
										className="form-result"
									></div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			{/* <div className="students-stories-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<h2>Check Student stories</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut elit tellus luctus nec ullamcorper mattis
						</p>
					</div>
					<div className="row justify-content-center">
						<div
							className="col-lg-4 col-md-6"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="200"
							data-aos-once="true"
						>
							<div className="single-stories-card style2">
								<div className="stories-content">
									<h3>Why I Choose Sanu_Freshman Student</h3>
								</div>
								<iframe
									src="https://www.youtube.com/embed/dT9uXvsH6EU"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-6"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="400"
							data-aos-once="true"
						>
							<div className="single-stories-card style2">
								<div className="stories-content">
									<h3>
										Why I choose Sanu University And
										Teachers
									</h3>
								</div>
								<iframe
									src="https://www.youtube.com/embed/TM9gjl-8X-E"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-6"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="600"
							data-aos-once="true"
						>
							<div className="single-stories-card style2">
								<div className="stories-content">
									<h3>
										Why I choose Sanu Campus And Environment
									</h3>
								</div>
								<iframe
									src="https://www.youtube.com/embed/yeZpJ6lJC54"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			{/*<div className="lates-news-area ptb-100 bg-f4f6f9">
				<div className="container">
					<div className="section-title">
						<h2>Latest News</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut elit tellus luctus nec ullamcorper mattis
						</p>
					</div>
					<NewsSlider />
				</div>
			</div>*/}
		</>
	);
}

export default MainContent;
