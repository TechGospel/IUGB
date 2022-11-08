import Link from 'next/link';
import React from 'react';

function finance() {
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Finance</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Fees & Dues</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="academics-area pt-100 bg-light">
				<div className="container">
					{/* <div className="row">
						<div
							className="col-md-6"
							style={{ padding: '0', margin: '0' }}
						>
							<div className="p-3">
								<div>
									<h2>Our Students</h2>
								</div>

								<div
									className="w-75"
									style={{ border: 'solid 4px #e32845' }}
								></div>
								<div className="py-3">
									<p>
										The Great Shepherd University provides
										the opportunity for interactive
										activities with students of affiliated
										Universities in Africa and other parts
										of the world. We are focused on creating
										genuine graduates equipped with
										distinctive academic and professional
										competencies
									</p>
								</div>
							</div>
						</div>
					</div> */}
					<table>
						<thead>
							<td>S/N</td>
							<td>DETAILS</td>
							<td>NAIRA</td>
							<td>REMARKS</td>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Application Form</td>
								<td>₦10,000</td>
								<td>Once</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Acceptance Fees</td>
								<td>₦10,000</td>
								<td>Once</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Development Levy</td>
								<td>₦15,000</td>
								<td>Yearly</td>
							</tr>
							<tr>
								<td>4</td>
								<td>Student Synergy</td>
								<td>₦10,000</td>
								<td>Yearly</td>
							</tr>
							<tr>
								<td>5</td>
								<td>ID Card</td>
								<td>₦1,500</td>
								<td>Yearly</td>
							</tr>
							<tr>
								<td>6</td>
								<td>Matriculation</td>
								<td>₦25,500</td>
								<td>Once</td>
							</tr>
							<tr>
								<td>7</td>
								<td>SUSA Dues (Student Association)</td>
								<td>₦1,000</td>
								<td>Per Semester</td>
							</tr>
							<tr>
								<td>8</td>
								<td>Library</td>
								<td>₦5,000</td>
								<td>Yearly</td>
							</tr>
							<tr>
								<td>9</td>
								<td>Transfer fee (Student on transfer)</td>
								<td>₦50,000</td>
								<td>Once</td>
							</tr>
							<tr>
								<td>10</td>
								<td>internet</td>
								<td>₦10,000</td>
								<td>Yearly</td>
							</tr>
							<tr>
								<td>10</td>
								<td>internet</td>
								<td>₦10,000</td>
								<td>Yearly</td>
							</tr>
							<tr>
								<td>11</td>
								<td>Tuition (7th Semester)</td>
								<td>₦200,000</td>
								<td></td>
							</tr>
							<tr>
								<td>12</td>
								<td>Tuition (8th Semester)</td>
								<td>₦200,000</td>
								<td></td>
							</tr>
							<tr>
								<td>13</td>
								<td>Hostel (7th Semester)</td>
								<td>₦50,000</td>
								<td></td>
							</tr>
							<tr>
								<td>14</td>
								<td>Hostel (8th Semester)</td>
								<td>₦50,000</td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td>Grand Total</td>
								<td>₦652,500</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default finance;
