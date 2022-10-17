import connectDB from '../../../utils/connectDB';
import CourseMaterials from '../../../models/courseMaterialModel';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			await createCourseMaterial(req, res);
			break;
		case 'GET':
			await getCourseMaterials(req, res);
			break;
	}
};

const createCourseMaterial = async (req, res) => {
	try {
		const result = await auth(req, res);
		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { title, course, src } = req.body;
		if (!title || !course || !src)
			return res.status(400).json({ err: 'Fill all fields' });

		const newCourseMaterial = new CourseMaterials({ title, course, src });

		await newCourseMaterial.save();
		res.json({
			msg: 'Success! Created a new Course Material.',
			newCourseMaterial,
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const getCourseMaterials = async (req, res) => {
	try {
		const courseMaterials = await CourseMaterials.find();

		res.json({ courseMaterials });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
