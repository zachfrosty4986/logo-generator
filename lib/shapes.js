// Define the Shape class
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Abstract method to be implemented by child classes
    }
  }
  
  // Define the Triangle class
  class Triangle extends Shape {
    render() {
      return `<polygon points="50,10 10,90 90,90" fill="${this.color}" />`;
    }
  }
  
  // Define the Circle class
  class Circle extends Shape {
    render() {
      return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    }
  }
  
  // Define the Square class
  class Square extends Shape {
    render() {
      return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
    }
  }
  
  // Export the classes
  module.exports = { Triangle, Circle, Square };