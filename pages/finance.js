import Link from "next/link";
import React from "react";

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
                            <td>CFA</td>
                            <td>REMARKS</td>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Student Form</td>
                                <td>12,000</td>
                                <td>One Off</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Registration Form</td>
                                <td>40,000</td>
                                <td>Per Session</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>ID Card</td>
                                <td>5,000</td>
                                <td>Per Session</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Matriculation Fee</td>
                                <td>25,000</td>
                                <td>One Off</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Synergy (Uniform)</td>
                                <td>7,000</td>
                                <td>Per Session</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>French Volumne I& II Handbook</td>
                                <td>10,000</td>
                                <td>One Off</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Internet </td>
                                <td>15,000</td>
                                <td>Per Semester</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>I.C.T</td>
                                <td>15,000</td>
                                <td>Per Semester</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Examination Fees</td>
                                <td>3,000</td>
                                <td>Per Semester</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Library</td>
                                <td>5,000</td>
                                <td>Per Semester</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Development Levy</td>
                                <td>5,000</td>
                                <td>One Off</td>
                            </tr>

                            <tr>
                                <td>12</td>
                                <td>Tuition (Applied Sciences)</td>
                                <td>203,750</td>
                                <td>Per Semester</td>
                            </tr>

                            <tr>
                                <td>13</td>
                                <td>Tuition (Management Sciences)</td>
                                <td>110,000</td>
                                <td>Per Semester</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Tuition (Technology & Related Sciences)</td>
                                <td>127,250</td>
                                <td>Per Semester</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Tuition (Law)</td>
                                <td>250,000</td>
                                <td>Per Semester</td>
                            </tr>

                            <tr>
                                <td>13</td>
                                <td>Hostel fees </td>
                                <td>65,000</td>
                                <td>Per Semester</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Acceptance fees </td>
                                <td>25,000</td>
                                <td>Per Semester</td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 className="my-3">
                        Note:{" "}
                        <span>
                            Fees are allowed to be paid in three installments
                        </span>
                    </h5>
                </div>
            </div>
        </>
    );
}

export default finance;
