var mongoose = require('mongoose');

// Document schema for employee
exports.EmployeeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	role: { type: String, required: true },
	basedin:{type:String,required:true},
	emailaddr: { type: String, required: true },
	team: { type: String, required: true },
	phone: String,
	//profilephoto: String,
	creadentials:String,
	biggestmistake:String,
	successtory:String,
	funfact:String,
	watchoutfor:String,
	notoverlook:String,
	yearswithibm:String,
	yearswithikea:String,
	facebooklink:String,
	linkedinlink:String,
	twitterlink:String,
	instagramlink:String,
});