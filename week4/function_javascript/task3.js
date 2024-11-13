// water usage
function calculateWaterUsage(usage) {
    let total = usage.reduce((sum, daily) => sum + daily, 0);
    return total / usage.length;
  }
  console.log(calculateWaterUsage([50, 55, 60, 53, 58, 62, 59])); 
  