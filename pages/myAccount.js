/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';

function MyAccount() {
	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;
	const { user } = auth;

	const router = useRouter();

	useEffect(() => {
		if (Object.keys(auth).length !== 0) router.push('/login');
		console.log(auth);
	}, [auth]);
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

								<ul className="list-group">
									<li className="list-group-item">Name:</li>
									<li className="list-group-item">Gender:</li>
									<li className="list-group-item">
										Nationality:
									</li>
									<li className="list-group-item">
										Email address:
									</li>
									<li className="list-group-item">
										Contact no:
									</li>
								</ul>
							</div>
						</div>
						<div className="acct-panel course-list mb-5">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h2>My courses</h2>
								</div>

								<ul className="list-group">
									<li className="list-group-item">
										Cras justo odio
									</li>
									<li className="list-group-item">
										Dapibus ac facilisis in
									</li>
									<li className="list-group-item">
										Morbi leo risus
									</li>
									<li className="list-group-item">
										Porta ac consectetur ac
									</li>
									<li className="list-group-item">
										Vestibulum at eros
									</li>
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

								<ul className="list-group">
									<li className="list-group-item">
										Department:
									</li>
									<li className="list-group-item">
										Programme:
									</li>
									<li className="list-group-item">Level:</li>
									<li className="list-group-item">
										Programme status: In progress
									</li>
									<li className="list-group-item">
										Fees status: Completely paid
									</li>
								</ul>
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
