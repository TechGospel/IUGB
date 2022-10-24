import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';

function CreateProgramme() {
	const initialState = {
		name: '',
		category,
	};
	const [programmeData, setProgrammeData] = useState(initialState);
	const { name, category } = programmeData;

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setProgrammeData({ ...programmeData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(name, category);
		/*const errMsg = valid(firstname, lastname, email, password, cf_password);
		if (errMsg)
			return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    dispatch({ type: 'NOTIFY', payload: { loading: true } });*/

		const res = await postData('programmes', programmeData, auth.token);

		if (res.err)
			return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

		return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
	};
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Create Programme</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Create programme</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="register-area pt-100 pb-70">
				<div className="container">
					<div className="register">
						<h3>Add new programme</h3>
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-lg-12 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="name"
											name="name"
											className="form-control"
											placeholder="Programme name*"
											value={name}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="col-lg-12 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="category"
											name="category"
											className="form-control"
											placeholder="Category*"
											value={category}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
							</div>
							<button
								type="submit"
								className="default-btn btn active"
							>
								Add programme
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateProgramme;
