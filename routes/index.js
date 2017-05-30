// Connect to MongoDB using Mongoose
var mongoose = require('mongoose');
var db;
if (process.env.VCAP_SERVICES) {
   var env = JSON.parse(process.env.VCAP_SERVICES);
   db = mongoose.createConnection(env['mongodb-2.2'][0].credentials.url);
} else {
   db = mongoose.createConnection('localhost', 'ikeasocialapp');
}

// Get Employee schema and model
var EmployeeSchema = require('../models/IkeasocialSchema.js').EmployeeSchema;
var Employee = db.model('Employee', EmployeeSchema);
//subhadeep

// Main application view
exports.index = function(req, res) {
	res.render('index');
};

// JSON API for list of polls
exports.list = function(req, res) {
	// Query Mongo for polls, just get back the question text
	Employee.find({}, 'fistname', function(error, employee) {
		res.json(employee);
	});
};

// JSON API for creating a new employee
exports.create = function(req, res) {
	var reqBody = req.body,
			// Build up employee object to save
			employeeeObj = {firstname: reqBody.firstname, lastname:reqBody.lastname};
				
	// Create employee model from built up poll object
	var employeee = new Employee(employeeeObj);
	
	// Save poll to DB
	employeee.save(function(err, doc) {
		if(err || !doc) {
			throw 'Error';
		} else {
			res.json(doc);
		}		
	});
};

