/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../utils/connectDB';
import Courses from '../../../models/courseModel';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case 'GET':
			await getCourse(req, res);
			break;
		case 'PUT':
			await updateCourse(req, res);
			break;
		case 'DELETE':
			await deleteCourse(req, res);
			break;
	}
};

const getCourse = async (req, res) => {
	try {
		const { id } = req.query;

		const course = await Courses.findById(id);
		if (!course)
			return res.status(400).json({ err: 'This course does not exist.' });

		res.json({ course });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const updateCourse = async (req, res) => {
	try {
		const result = await auth(req, res);
		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { id } = req.query;
		const { courseID, courseTitle, courseUnit, lecturerInCharge } =
			req.body;

		if (!courseID || !courseTitle || !courseUnit || !lecturerInCharge)
			return res.status(400).json({ err: 'Please add all the fields.' });

		await Courses.findOneAndUpdate(
			{ _id: id },
			{
				courseID,
				courseTitle,
				courseUnit,
				lecturerInCharge,
			}
		);

		res.json({ msg: 'Success! Updated a course' });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const deleteCourse = async (req, res) => {
	try {
		const result = await auth(req, res);

		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { id } = req.query;

		await Courses.findByIdAndDelete(id);
		res.json({ msg: 'Deleted a course.' });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
