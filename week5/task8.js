//example 8
let ugandanFarmer = {
    name: "James",
    farmLocation: "Mbale",
    crop: "Coffee"
    };
    let {name: farmLocation, crop:} = ugandanFarmer;
    let {name: farmerName, farmLocation:crop} = ugandanFarmer;
    console.log(`${farmerName} farms ${crop} in ${farmLocation}.`);
    console.log(`${name} farms ${crop} in ${farmLocation}.`);

//task 8
// existing school object
let school = {
    name: "Green Circle School",
    location: "Kabarole",
    studentscount:2300,
    establishyedyear:2006,
    schooltype: "secondary",
    calculateschoolage: function(currentyear){
        return currentyear - this.establishyedyear;
    },
    schoolintroduction: function(){
        return `welcome to ${this.name}, location in ${this.located}.
we have ${this.studentscount} students enrolled.;
`
    }
};

//destruction the properties
let {name, location, studentscount} = school;
let {name: schoolName, location: schoolLocation, studentscount: schoolStudentsCount} = school;

function logSchoolProperties(school) {
    let {name: schoolName, location: schoolLocation, studentscount: schoolStudentsCount} = school;

    // logging the variables
    console.log(`name: ${schoolName}`);
    console.log(`location: ${schoolLocation}`);
    console.log(`studentscount: ${schoolStudentsCount}`);
}

console.log(`name: ${schoolName}`);
console.log(`location: ${schoolLocation}`);
console.log(`studentscount: ${schoolStudentsCount}`);

function logSchoolProperties(school) {
    let {name, location, studentscount} = school;

//logging the variables
    console.log(`name: ${name}`);
    console.log(`location: ${location}`);
    console.log(`studentscount: ${studentscount}`);
}
console.log(`name: ${name}`);
console.log(`location: ${location}`);
console.log(`studentscount: ${studentscount}`);