// user object constructor
function user(name, pass, school, grade, points) {
	this.name = document.getElementById(name);
    this.pass = document.getElementById(password);
    this.school = document.getElementById(school);
    this.grade = document.getElementById(grade);
    this.points = document.getElementById(points);
}

// pet object constructor
function pet(name, type, points, health) {
	this.name = document.getElementById(name);
    this.type = document.getElementById(type);
    this.points = document.getElementById(points);
	this.health = document.getElementById(health);
}

//administrator object constructor
function admin(name, pass, org, email) {
	this.name = document.getElementById(uname);
    this.pass = document.getElementById(password);
    this.org = document.getElementById(orgname);
    this.email = document.getElementById(email);
}

// add to user array
var userArray = [];
// I know this isn't quite right
userArray.push(user);

// the other arrays
var adminArray = [];
var petArray = [];

