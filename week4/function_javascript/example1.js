// calculate fees
function calculateFees(tuitionFee, boardingFee = 500000) {
    return tuitionFee + boardingFee;
    }
    let totalFeesWithBoarding = calculateFees(1500000);
    console.log(`Total school fees (with boarding) are UGX
    ${totalFeesWithBoarding}`);
    let totalFeesWithoutBoarding = calculateFees(1500000, 0);
    console.log(`Total school fees (without boarding) are UGX
    ${totalFeesWithoutBoarding}`);