class Shape {
    get_area() {
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set_width(width) {
        this.width = width;
    }
    set_height(height) {
        this.height = height;
    }
    get_area() {
        return this.width * this.height;
    }
}
// instead of 
// class Square extends Rectangle {
class Square extends Shape {
    width;
    height;
    set_width(width) {
        this.width = width;
        this.height = width;
    }
    set_height(height) {
        this.width = height;
        this.height = height;
    }
}
function increase_rectangle_width(rectangle) {
    rectangle.set_width(rectangle.width + 1);
}
const rectangle_1 = new Rectangle(10, 2);
const square = new Square(5, 5);
increase_rectangle_width(rectangle_1);
increase_rectangle_width(square);
console.log(rectangle_1.get_area());
console.log(square.get_area());
