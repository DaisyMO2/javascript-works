//example
let ugandanFarmer = {
    name: "James",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5
    };
    for (let key in ugandanFarmer) {
    console.log(`${key}: ${ugandanFarmer[key]}`);
    }
//existing school object
let school = {
    name:"green circle school",
    location: "kabarole",
    studentscount:2300,
    establishyedyear:2006,
    schooltype: "secondary",
    calculateschoolage: function(currentyear) {
        return currentyear - this.establishyedyear;
    }
};

//looping through all properties and logging them 
for(let key in school){
    console.log(`${key}: ${school[key]}`);
}