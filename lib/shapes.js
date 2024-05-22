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
    constructor(color){
      super(color)
    }
    render() {
      return `<polygon points="150,10 60,140 240,140" fill="${this.color}" />`;
    }
  }
  
  // Define the Circle class
  class Circle extends Shape {
    constructor(color){
      super(color)
    }
    render() {
      return `<circle cx="150" cy="110" r="100" fill="${this.color}" />`;
    }
  }
  
  // Define the Square class
  class Square extends Shape {
    constructor(color){
      super(color)
    }
    render() {
      return `<rect width="100%" height="100%" fill="${this.color}" />`;
    }
  }
  
  // Export the classes
  module.exports = { Triangle, Circle, Square };