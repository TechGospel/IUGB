import mongoose from 'mongoose';

const programmeSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);
let Dataset =
	mongoose.models.programme || mongoose.model('programme', programmeSchema);
export default Dataset;
