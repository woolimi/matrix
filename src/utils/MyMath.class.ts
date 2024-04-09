export class MyMath {
  public static sqrt(n: number) {
    if (n < 0) {
      return NaN;
    }
    if (n == 0) {
      return 0;
    }

    // Initial guess for the square root
    let guess = n / 2;

    // Iterate until desired precision is achieved
    for (let i = 0; i < 10; i++) {
      guess = (guess + n / guess) / 2; // Update guess using Newton-Raphson formula
    }
    return guess;
  }
}
