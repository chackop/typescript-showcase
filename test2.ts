// declaring interfaces
interface Shape {
    color: string;
}

interface Stroke {
    width: number;
}

// extending multiple interfaces
interface Square extends Shape, Stroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.width = 5.0;