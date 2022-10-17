import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		othername: {
			type: String,
			required: false,
			default: '',
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phoneNo: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		town: {
			type: String,

			default: '',
		},
		state: {
			type: String,

			default: '',
		},
		country: {
			type: String,

			default: '',
		},
		nationality: {
			type: String,

			default: '',
		},

		gender: {
			type: String,

			default: '',
		},
		contactPersonName: {
			type: String,

			default: '',
		},
		contactPersonPhone: {
			type: String,

			default: '',
		},
		contactPersonEmail: {
			type: String,

			default: '',
		},
		contactPersonAddress: {
			type: String,

			default: '',
		},
		sponsorName: {
			type: String,

			default: '',
		},
		sponsorPhone: {
			type: String,

			default: '',
		},
		sponsorEmail: {
			type: String,

			default: '',
		},
		sponsorAddress: {
			type: String,

			default: '',
		},
		sponsorRelationship: {
			type: String,

			default: '',
		},
		sponsorOccupation: {
			type: String,

			default: '',
		},
		dateOfEnrolment: Date,
		programme: {
			type: String,

			default: '',
		},
		department: {
			type: String,

			default: '',
		},
		course: {
			type: String,

			default: '',
		},
		olevelResult: {
			type: String,

			default: '',
		},
		sportingActivity: {
			type: String,

			default: '',
		},
		hobby: {
			type: String,

			default: '',
		},
		otherInterests: {
			type: Array,

			default: [],
		},
		admissionStatus: {
			type: Boolean,

			default: false,
		},
		feesStatus: {
			type: String,

			default: '',
		},
		currentLevel: {
			type: String,

			default: '',
		},
		programmeStatus: {
			type: String,

			default: '',
		},
		courses: {
			type: Array,

			default: [],
		},
		role: {
			type: String,
			default: 'student',
		},
		root: {
			type: Boolean,
			default: false,
		},
		avatar: {
			type: String,
			default:
				'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
		},
	},
	{
		timestamps: true,
	}
);

let Dataset = mongoose.models.user || mongoose.model('user', userSchema);
export default Dataset;
