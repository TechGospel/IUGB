/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../utils/connectDB';
import programme from '../../../models/programmeModel';

import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case 'PUT':
			await updateProgramme(req, res);
			break;
		case 'DELETE':
			await deleteProgramme(req, res);
			break;
	}
};

const updateProgramme = async (req, res) => {
	try {
		const result = await auth(req, res);
		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { id } = req.query;
		const { name } = req.body;

		const newProgramme = await programme.findOneAndUpdate(
			{ _id: id },
			{ name }
		);
		res.json({
			msg: 'Success! Updated a programme',
			programme: {
				...newProgramme._doc,
				name,
			},
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const deleteProgramme = async (req, res) => {
	try {
		const result = await auth(req, res);
		if (result.role !== 'admin')
			return res
				.status(400)
				.json({ err: 'Authentication is not valid.' });

		const { id } = req.query;

		/*const products = await Products.findOne({category: id})
        if(products) return res.status(400).json({
            err: "Please delete all products with a relationship"
        })*/

		await programme.findByIdAndDelete(id);

		res.json({ msg: 'Success! Deleted a programme' });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
