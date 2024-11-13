function calculateIncome(kilometers, isRushHour = false) {
    let incomePerKm = 2000;
    let bonus = isRushHour ? 500 : 0;
    return kilometers * (incomePerKm + bonus);
  }
  console.log(calculateIncome(50, true)); 
  