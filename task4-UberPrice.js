class UberPriceCalculator {
  constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
    this.baseFare = baseFare;          // Base fare in dollars
    this.costPerMile = costPerMile;    // Cost per mile in dollars
    this.costPerMinute = costPerMinute; // Cost per minute in dollars
    this.bookingFee = bookingFee;      // Booking fee in dollars
  }

  calculatePrice(distanceInMiles, durationInMinutes) {
    const distanceCost = this.costPerMile * distanceInMiles;
    const timeCost = this.costPerMinute * durationInMinutes;
    const totalFare = this.baseFare + distanceCost + timeCost + this.bookingFee;

    return totalFare;
  }
}

// Example usage:
const calculator = new UberPriceCalculator(5, 2, 0.3, 1.5);
const distance = 10; // miles
const duration = 20; // minutes

const price = calculator.calculatePrice(distance, duration);
console.log(`Estimated fare Uber RS: ${price.toFixed(2)}`);
