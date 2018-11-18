var path = require("path");

module.exports = function(app) {

	// Survey Page

	app.get("/survey", function(req, res) {

		res.sendFile(path.join(__dirname, "/../public/survey.html"));

	});

	// Homepage

	app.use(function(req, res) {

		res.sendFile(path.join(__dirname, "/../public/home.html"));

	});
};