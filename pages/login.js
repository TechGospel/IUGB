import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

function Login() {
	const initialState = { email: '', password: '' };
	const [userData, setUserData] = useState(initialState);
	const { email, password } = userData;

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	const router = useRouter();

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
		dispatch({ type: 'NOTIFY', payload: {} });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: 'NOTIFY', payload: { loading: true } });
		const res = await postData('auth/login', userData);

		if (res.err)
			return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
		dispatch({ type: 'NOTIFY', payload: { success: res.msg } });

		dispatch({
			type: 'AUTH',
			payload: {
				token: res.access_token,
				user: res.user,
			},
		});

		Cookie.set('refreshtoken', res.refresh_token, {
			path: 'api/auth/accessToken',
			expires: 7,
		});

		localStorage.setItem('firstLogin', true);
	};

	useEffect(() => {
		if (Object.keys(auth).length !== 0) router.push('/myAccount');
	}, [auth]);

	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Login</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Login</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="login-area pt-100 pb-70">
				<div className="container">
					<div className="login">
						<h3>Login</h3>
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<input
									type="email"
									id="email"
									name="email"
									className="form-control"
									placeholder="Username Or Email Address*"
									value={email}
									onChange={handleChangeInput}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									id="password"
									name="password"
									className="form-control"
									placeholder="Password*"
									value={password}
									onChange={handleChangeInput}
								/>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label
									className="form-check-label"
									for="flexCheckDefault"
								>
									Remember Me
								</label>
							</div>
							<button
								type="submit"
								className="default-btn btn active"
							>
								Login
							</button>
							<div className="d-flex justify-content-between">
								<Link href="/forgotPassword">
									<a>Lost your password?</a>
								</Link>
								<Link href="/register">
									<a>Create an account</a>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
