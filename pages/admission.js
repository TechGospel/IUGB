/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function admission() {
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Admission Process</h1>
						<ul>
							<li>
								<a href="index-2.html">Home</a>
							</li>
							<li>Admission</li>
							<li>Admission process</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="graduate-admission pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="how-to-apply">
								<h2>Detail About How To Apply</h2>
								<p>
									When you apply to the Great Shepherd
									University, we look beyond your predicted
									(or confirmed) grades to understand your
									background, motivation and aspirations for
									pursuing a higher education programme with
									us. Candidates should not be above
									nineteen(19) years of age andshould be
									willing and ready to study both french and
									English languages and pass basic
									examinations(Internal and external )
								</p>
								<div className="apply-list">
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<ul>
												<li>
													<i className="ri-checkbox-circle-line"></i>
													Start Online Submission
												</li>
												<li>
													<i className="ri-checkbox-circle-line"></i>
													Submit The Form
												</li>
												<li>
													<i className="ri-checkbox-circle-line"></i>
													Review The Submission
												</li>
											</ul>
										</div>
										<div className="col-lg-6 col-md-6">
											<ul>
												<li>
													<i className="ri-checkbox-circle-line"></i>
													Gather Necessary Documents
												</li>
												<li>
													<i className="ri-checkbox-circle-line"></i>
													Interviewing Process
												</li>
												<li>
													<i className="ri-checkbox-circle-line"></i>
													Get Admission Decision
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="submit">
									<h3>Submit Your Transcripts</h3>
									<p>
										If you have already achieved O'Level
										results (WAEC,NECO) with five credits
										including Mathematics and English
										Language in a single sitting and you are
										now considering Higher Education study,
										get in touch with our Admissions team
										and see what courses could be available
										to you
									</p>
									<p>
										Any applicant who is not successful can
										ask for feedback on the reason for the
										decision. For most applicants, this will
										be given in their decision letter.
										Requests for feedback should be made in
										writing by letter or email within 30
										days of the notification of the
										decision.
									</p>
									<a href="#" className="default-btn btn">
										Submit Your Transcripts
										<i className="flaticon-next"></i>
									</a>
								</div>
								<div className="financial">
									<h3>Financial Aid</h3>
									<p>
										Funding is available to help with tution
										fees to students who qualify. Kindly
										reach out to our admission office to get
										more information on available
										scholarships and the eligibility
										requirements.
									</p>

									<Link href="/scholarships">
										<a className="default-btn btn">
											Apply For Financial Aid
											<i className="flaticon-next"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="additional-information">
								<h3>Additional Information</h3>
								<div className="list">
									<ul>
										<li>
											<a href="#">Campus Tour</a>
										</li>
										<li>
											<a href="#">Student Life</a>
										</li>
										<li>
											<Link href="/scholarships">
												<a>Scholarship</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default admission;
