//calculate taxi fare
function calculateTaxiFare(distance, farePerKm) {
    return distance * farePerKm;
    }
    let distanceToWandegeya = 10; // Distance in kilometers
    let farePerKm = 5000; // UGX
    let totalFare = calculateTaxiFare(distanceToWandegeya, farePerKm);
    console.log(`Total taxi fare to Wandegeya is UGX ${totalFare}`);
    Task