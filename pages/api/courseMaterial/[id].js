import connectDB from '../../../utils/connectDB';
import CourseMaterials from '../../../models/courseMaterialModel';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case 'GET':
			await getCourseMaterial(req, res);
			break;
		case 'PUT':
			await updateCourseMaterial(req, res);
			break;
		case 'DELETE':
			await deleteCourseMaterial(req, res);
			break;
	}
};

const getCourseMaterial = async (req, res) => {
	try {
		const { id } = req.query;

		const courseMaterial = await CourseMaterials.findById(id);
		if (!courseMaterial)
			return res
				.status(400)
				.json({ err: 'This course material does not exist.' });

		res.json({ courseMaterial });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const updateCourseMaterial = async (req, res) => {
	try {
		const result = await auth(req, res);
		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { id } = req.query;
		const { title, course, src } = req.body;

		if (!title || !course || !src)
			return res.status(400).json({ err: 'Please add all the fields.' });

		await CourseMaterials.findOneAndUpdate(
			{ _id: id },
			{
				title,
				course,
				src,
			}
		);

		res.json({ msg: 'Success! Updated a course material' });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const deleteCourseMaterial = async (req, res) => {
	try {
		const result = await auth(req, res);

		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { id } = req.query;

		await CourseMaterials.findByIdAndDelete(id);
		res.json({ msg: 'Deleted a course material.' });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
