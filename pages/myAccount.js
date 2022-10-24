/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import { getData } from '../utils/fetchData';
import Link from 'next/link';

function MyAccount() {
	const initialState = {
		email: '',
		firstname: '',
		lastname: '',
		phoneNo: '',
	};
	const [data, setData] = useState(initialState);

	const { email, firstname, lastname, phoneNo } = data;
	const [courses, setCourses] = useState([]);

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	useEffect(() => {
		if (auth.user) setData(auth.user);
		/**/
		console.log(auth.user);
		console.log(data);
	}, [auth.user]);

	useEffect(() => {
		const fetchCourses = async () => {
			const result = await getData('course');
			console.log(result.courses);
			setCourses(result.courses);
		};

		fetchCourses();
		console.log(courses);
	}, []);

	//const router = useRouter();

	/*useEffect(() => {
		if (Object.keys(auth).length !== 0) 
		console.log(auth);
	}, [auth]);*/
	if (!auth.user) return null;
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>My Profile</h1>
						<ul>
							<li>
								<a href="#">IUGB university</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-8">
						<div className="acct-panel general-info mb-5">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h2>Personal information</h2>
								</div>

								<ul className="list-group mb-3">
									<li className="list-group-item">
										Name: {`${firstname}  ${lastname}`}
									</li>
									<li className="list-group-item">Gender:</li>
									<li className="list-group-item">
										Nationality:
									</li>
									<li className="list-group-item">
										Email address: {email}
									</li>
									<li className="list-group-item">
										Contact no: {phoneNo}
									</li>
								</ul>
								<Link href="/profile">
									<a className="btn btn-primary">
										Update Profile
									</a>
								</Link>
							</div>
						</div>
						<div className="acct-panel course-list mb-5">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h2>My courses</h2>
								</div>

								<ul className="list-group">
									{courses.length === 0 ? (
										<li>
											<h2>
												You have not registered for any
												course yet
											</h2>
										</li>
									) : (
										courses.map((course) => (
											<li
												className="list-group-item"
												key={course._id}
											>
												{course.courseTitle}
											</li>
										))
									)}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="acct-panel course-list mb-5">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h2>Academic profile</h2>
								</div>

								<ul className="list-group mb-3">
									<li className="list-group-item">
										Department:
									</li>
									<li className="list-group-item">
										Programme:
									</li>
									<li className="list-group-item">Level:</li>
									<li className="list-group-item">
										Programme status:
									</li>
									<li className="list-group-item">
										Fees status:
									</li>
								</ul>
								<Link href="/profile">
									<a className="btn btn-primary">
										Update Profile
									</a>
								</Link>
							</div>
						</div>
						<div className="acct-panel course-list mb-5">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h2>Recent updates</h2>
								</div>

								<ul className="list-group">
									<li className="list-group-item">
										<span class="badge">4</span>
										Course Materials:
									</li>
									<li className="list-group-item">
										<span class="badge">1</span>
										Assignments:
									</li>

									<li className="list-group-item">
										<span class="badge">0</span>
										General announcements
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyAccount;
