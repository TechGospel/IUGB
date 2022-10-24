/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../utils/connectDB';
import Courses from '../../../models/courseModel';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			await createCourse(req, res);
			break;
		case 'GET':
			await getCourses(req, res);
			break;
	}
};

const createCourse = async (req, res) => {
	try {
		const result = await auth(req, res);
		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { courseCode, courseTitle, courseUnit } = req.body;
		if (!courseCode || !courseTitle || !courseUnit)
			return res.status(400).json({ err: 'Please fill all fields.' });

		const newCourse = new Courses({
			courseCode,
			courseTitle,
			courseUnit,
			//lecturerInCharge,
		});

		await newCourse.save();
		res.json({
			msg: 'Success! Created a new course.',
			newCourse,
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const getCourses = async (req, res) => {
	try {
		const courses = await Courses.find();

		res.json({ courses });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
