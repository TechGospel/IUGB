import mongoose from 'mongoose';

const courseMaterialSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		course: {
			type: mongoose.Types.ObjectId,
			ref: 'course',
		},
		src: {
			type: String,
			default: '',
		},
	},
	{
		timestamps: true,
	}
);
let Dataset =
	mongoose.models.courseMaterial ||
	mongoose.model('courseMaterial', courseMaterialSchema);
export default Dataset;
