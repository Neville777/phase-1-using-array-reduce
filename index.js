const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Use the reduce() function to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce(function(total, batch) {
  return total + batch;
}, 0);

// The result, totalBatteries, will contain the sum of all battery amounts
console.log(totalBatteries);
