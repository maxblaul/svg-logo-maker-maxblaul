const { Triangle, Square, Circle } = require("./shapes");

describe("Triangle test", () => {
    test("test for a triangle that is green", () => {
        const shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
        );
    });
});
describe("Square test", () => {
    test("test for a square that is turquoise", () => {
        const shape = new Square();
        shape.setColor("turquoise");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" " fill="turquoise" />'
        );
    });
});
describe("Circle test", () => {
    test("test for a circle is the color of hex code #c032ff", () => {
        const shape = new Circle();
        shape.setColor("#c032ff");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="#c032ff" />'
        );
    });
});