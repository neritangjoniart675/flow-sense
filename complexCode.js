/*
 * Filename: complexCode.js
 * Description: This complex code demonstrates advanced concepts in JavaScript,
 * including object-oriented programming, asynchronous programming, and data
 * manipulation.
 */

// Constants
const PI = Math.PI;
const MAX_ITERATIONS = 100;
const DELAY = 1000;

// Classes
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  calculateArea() {
    // To be implemented by child classes
    throw new Error("Method not implemented!");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Asynchronous Function
async function performCalculation() {
  try {
    const shapes = [
      new Circle("red", 5),
      new Rectangle("blue", 10, 15),
      new Circle("green", 8),
      new Rectangle("yellow", 7, 9)
    ];

    console.log("Calculating areas asynchronously...");

    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];

      setTimeout(() => {
        const area = shape.calculateArea();
        console.log(
          `%c${shape.getColor()} ${shape.constructor.name}'s area: ${area}`,
          `color: ${shape.getColor()}; font-weight: bold;`
        );
      }, DELAY * (i + 1));
    }

    await new Promise(resolve => setTimeout(resolve, DELAY * (shapes.length + 1)));

    console.log("Calculation completed!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Main Program
performCalculation();