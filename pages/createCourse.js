import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';

function CreateCourse() {
	const initialState = {
		courseCode: '',
		courseTitle: '',
		courseUnit: '',
	};
	const [courseData, setCourseData] = useState(initialState);
	const { courseCode, courseTitle, courseUnit } = courseData;

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setCourseData({ ...courseData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(courseCode, courseTitle, courseUnit);
		/*const errMsg = valid(firstname, lastname, email, password, cf_password);
		if (errMsg)
			return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    dispatch({ type: 'NOTIFY', payload: { loading: true } });*/

		const res = await postData('course', courseData, auth.token);

		if (res.err)
			return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

		return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
	};
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Create Course</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Create course</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="register-area pt-100 pb-70">
				<div className="container">
					<div className="register">
						<h3>Create course</h3>
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-lg-12 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="courseTitle"
											name="courseTitle"
											className="form-control"
											placeholder="Course Title*"
											value={courseTitle}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="courseCode"
											name="courseCode"
											className="form-control"
											placeholder="Course Code"
											value={courseCode}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											id="courseUnit"
											name="courseUnit"
											className="form-control"
											placeholder="Course Unit*"
											value={courseUnit}
											onChange={handleChangeInput}
										/>
									</div>
								</div>
							</div>
							<button
								type="submit"
								className="default-btn btn active"
							>
								Create course
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateCourse;
