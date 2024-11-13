//example7
function Farmer(name, location, crop, acres) {
    this.name = name;
    this.farmLocation = location;
    this.crop = crop;
    this.numberOfAcres = acres;
    this.introduce = function() {
    return `I am ${this.name}, and I farm ${this.crop} in
    ${this.farmLocation}.`;
    };
    }
    let farmer1 = new Farmer("Sarah", "Mbarara", "Bananas", 10);
    let farmer2 = new Farmer("David", "Gulu", "Sunflowers", 20);
    console.log(farmer1.introduce());
    console.log(farmer2.introduce());

 
//task 7
// Constructor function for School
function School(name, location, studentsCount, schoolType) {
    this.name = name;
    this.location = location;
    this.studentsCount = studentsCount;
    this.schoolType = schoolType;
    this.introduce = function() {
        return `Welcome to ${this.name}, located in ${this.location}. We have ${this.studentsCount} students and we are a ${this.schoolType} school.`;
    };
}

// Creating two new school objects
let school1 = new School("Sunrise Primary School", "Jinja", 800, "Primary");
let school2 = new School("Northern High School", "Gulu", 1200, "Secondary");

// Introducing the schools
console.log(school1.introduce());
console.log(school2.introduce());
