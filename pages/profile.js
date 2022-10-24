/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../store/GlobalState';
import { patchData } from '../utils/fetchData';

function Profile() {
	const initialState = {
		email: '',
		firstname: '',
		lastname: '',
		gender: '',
		phoneNo: '',
		country: '',
		//state,
		nationality: '',
	};
	const [userData, setUserData] = useState(initialState);

	const {
		email,
		firstname,
		lastname,
		gender,
		phoneNo,
		country,
		//state,
		nationality,
	} = userData;

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	useEffect(() => {
		if (auth.user) setUserData(auth.user);
		/**/
		console.log(auth.user);
		console.log(userData);
	}, [auth.user]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		/*console.log(firstname, lastname, email, phoneNo, password);
		const errMsg = valid(firstname, lastname, email);
		if (errMsg)
			return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });*/

		dispatch({ type: 'NOTIFY', payload: { loading: true } });

		const res = await patchData('user', userData, auth.token);

		if (res.err)
			return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

		return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
	};

	if (!auth.user) return null;
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>My Profile</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Profile</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="register-area pt-100 pb-70">
				<div className="container">
					<div className="register">
						<h3>Update profile</h3>
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="name"
											name="firstname"
											className="form-control"
											placeholder="First Name*"
											value={firstname}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="lname"
											name="lastname"
											className="form-control"
											placeholder="Last Name*"
											value={lastname}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="gender"
											name="gender"
											className="form-control"
											placeholder="Gender*"
											value={gender}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="phoneNo"
											name="phoneNo"
											className="form-control"
											placeholder="Phone no"
											value={phoneNo}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<input
											type="text"
											id="country"
											name="country"
											className="form-control"
											placeholder="Country of residence*"
											value={country}
											onChange={handleChangeInput}
										/>
									</div>
								</div>

								<div className="col-lg-12">
									<div className="form-group">
										<input
											type="text"
											id="nationality"
											name="nationality"
											className="form-control"
											placeholder="Nationality*"
											value={nationality}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
							</div>
							<button
								type="submit"
								className="default-btn btn active"
							>
								Update Profile
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
