import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
	{
		courseCode: {
			type: String,
			required: true,
		},
		courseTitle: {
			type: String,
			required: true,
		},
		courseUnit: {
			type: Number,
			required: true,
		},
		lecturerInCharge: {
			type: mongoose.Types.ObjectId,
			ref: 'user',
		},
	},
	{
		timestamps: true,
	}
);

let Dataset = mongoose.models.course || mongoose.model('course', courseSchema);
export default Dataset;
