//part5
//example 4
let kampalaCity = {
    name: "Kampala",
    population: 1500000,
    districts: {
    central: "Kampala Central",
    east: "Nakawa",
    north: "Kawempe",
    south: "Makindye",
    west: "Rubaga"
    }
    };
    console.log(`District in the north of Kampala:
    ${kampalaCity.districts.north}`);

//creating the university object
let university = {
    name: "Makerere university",
    location:"kawempe",
    departments:{
        engineering: {
            name: "Faculty of engineering",
            headOfDepartment:"Mr.kavuma John"
        },
        science:{
        name: "Faculty of science",
        headOfDepartment:"Mr.Matovu"
        },
        arts:{
            name:"Faculty of arts",
            headOfDepartment:"Mr.Joseph"
        }
    }
};

//logging the  head of the engineering department
    console.log(`Head of the engineering Department: ${university.departments.engineering.headOfDepartment}`);