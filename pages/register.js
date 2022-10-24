import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';
import valid from '../utils/valid';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Register() {
	const initialState = {
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		password: '',

		cf_password: '',
	};
	const [userData, setUserData] = useState(initialState);
	const { firstname, lastname, email, phoneNo, password, cf_password } =
		userData;

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(firstname, lastname, email, phoneNo, password);
		const errMsg = valid(firstname, lastname, email);
		if (errMsg)
			return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

		dispatch({ type: 'NOTIFY', payload: { loading: true } });

		const res = await postData('auth/register', userData);

		if (res.err)
			return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

		return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
	};

	useEffect(() => {
		if (Object.keys(auth).length !== 0) router.push('/login');
	}, [auth]);

	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Register</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Register</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="register-area pt-100 pb-70">
				<div className="container">
					<div className="register">
						<h3>Register</h3>
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="email"
											id="email"
											name="email"
											className="form-control"
											placeholder="Phone Or Email Address*"
											value={email}
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
								<div className="col-lg-12">
									<div className="form-group">
										<input
											type="password"
											id="password2"
											name="password"
											className="form-control"
											placeholder="Password*"
											value={password}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<input
											type="password"
											id="password3"
											name="cf_password"
											className="form-control"
											placeholder="Confirm Password*"
											value={cf_password}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
							</div>
							<button
								type="submit"
								className="default-btn btn active"
							>
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
