//part4
//example 3 adding a method to calculate farm revenue
let ugandanFarmer = {
    name: "James",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5,
    cropPrice: 3000,
    calculateRevenue: function(harvestedBags) {
    return harvestedBags * this.cropPrice;
    }
    };
    let revenue = ugandanFarmer.calculateRevenue(200);
    console.log(`Total revenue for ${ugandanFarmer.crop} is UGX
    ${revenue}`);

    //existing school object
    let school = {
        name: "green circle school",
        location: "kabarole",
        studentscount:2300,
        establishedyear:2006,
        schooltype: "secondary",

     //adding the calculating scholage method
    calculatingschoolage: function(currentyear){
        return currentyear - this.establishedyear;
     }
    };

//using the method to calculate and print the school's age
let currentyear = new DataTransfer().getfullyear();
let schoolage = school.calculateschoolage(currentyear);
console.log("the age of {school.name} is {schoolage} years.");