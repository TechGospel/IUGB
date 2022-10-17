import connectDB from '../../../utils/connectDB';
import programme from '../../../models/programmeModel';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			await createProgramme(req, res);
			break;
		case 'GET':
			await getProgrammes(req, res);
			break;
	}
};

const createProgramme = async (req, res) => {
	try {
		const result = await auth(req, res);
		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { name } = req.body;
		if (!name)
			return res.status(400).json({ err: 'Name can not be left blank.' });

		const newprogramme = new programme({ name });

		await newprogramme.save();
		res.json({
			msg: 'Success! Created a new programme.',
			newprogramme,
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const getProgrammes = async (req, res) => {
	try {
		const programmes = await programme.find();

		res.json({ programmes });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
