//boda_boda_rider object
class boda_boda_rider {
    constructor(name, location, bodaType){
        this.name = name;
        this.location = location;
        this.bodaType = bodaType;
    }
    calculateIncome(distanceTraveled, fareKilometer){
        return distanceTraveled * fareKilometer;
    }
}

//example usage:
const rider = new boda_boda_rider('lopezi', 'mukono', 'motorcycle');
console.log(rider.calculateIncome(20, 5000));

//output: 100000