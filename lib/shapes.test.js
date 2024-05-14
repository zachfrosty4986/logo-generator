const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('renders a triangle with the specified color', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<polygon points="50,10 10,90 90,90" fill="red" />');
  });
});

describe('Circle', () => {
  test('renders a circle with the specified color', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="50" cy="50" r="40" fill="blue" />');
  });
});

describe('Square', () => {
  test('renders a square with the specified color', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="10" y="10" width="80" height="80" fill="green" />');
  });
});