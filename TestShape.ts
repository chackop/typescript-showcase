/// <reference path = "Shape.ts" />
/// <reference path = "Circle.ts" />
/// <reference path = "Triangle.ts" />

function drawAllShapes(shape: Drawing.Shape){
    shape.draw();
}

drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
