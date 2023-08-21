

class Shape {
    constructor(area){
        this.area=area
    }
    valueOf() {
        return this.area;
    }
}
class CustomShape extends Shape {
    constructor(area){
        super(area)
    }
}
class Square extends Shape {
    constructor(area){
        super(area**2)
    }
}

class Circle extends Shape {
    constructor(area){
        super(area**2*Math.PI)
    }
}

class Triangle extends Shape {
    constructor(base, height){
        super(base*height/2)
    }
}

class Rectangle extends Shape {
    constructor(base, height){
        super(base*height)
    }
}
const natural = (a,b) => Number(a>b)-Number(a<b) ;
const shapes = [ new CustomShape(1.1234)
    , new Square(1.1234)
    , new Triangle(2,5)
    , new Triangle(3,4)
    , new Triangle(3,4)
    , new Rectangle(3,4)
    , new CustomShape(16.1)
    , new Circle(1.1234)
];
shapes.sort(function(a, b) {
    return a - b;
});
let ss = shapes.sort(natural)
console.log(ss)