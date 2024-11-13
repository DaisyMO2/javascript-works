//example6
let ugandanFarmer = {
    name: "James",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5,
    introduceFarmer: function() {
    return `Hello, my name is ${this.name} and I farm ${this.crop}
    in ${this.farmLocation}.`;
    }
    };
    console.log(ugandanFarmer.introduceFarmer());


//task6
//create the school object
    let school ={
        name:"green circle school",
        location:"kabarole",
        studentscount:2300,
        establishedyear:2006,
        calculatschoolage: function(currentyear){
            return currentyear - this.establishedyear;
        },
//adding the schoolintroduction method
schoolintroduction: function(){
    return `welcome to ${this.name}, located in ${this.location}.
we have ${this.studentscount} students enrolled.`;
    }
};
//using the method to print the introduction
    console.log(school.introduceSchool());