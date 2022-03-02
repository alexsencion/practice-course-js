// console.log("");

// Codigo del Cuadrado

console.group("Cuadrados");

// const squareSide = 5;
// console.log("The square side measure: " + squareSide + "cm");

function squarePerimeter(side) {
    return side * 4;
} 

// console.log(squarePerimeter(56))
// console.log("The perimeter es: " + squarePerimeter + "cm");

function squareArea(side) {
    return side * side;
}
// console.log("The squareArea es: " + squareArea + "cm^2");


console.groupEnd();


// Codigo del Triangulo
console.group("Triangulo");


// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const trianglebase = 4;

// console.log(
//     trianglePerimeter(6,6,4))

    
// console.log(
//     triangleArea(4,5.5))


// console.log("The triangle side measure: " 
// + triangleSide1 + "cm, " 
// + triangleSide2 + "cm, " 
// + trianglebase + "cm"

// );

// const triangleHeight = 5.5;
// console.log("The triangle height is: " + triangleHeight + "cm");

function trianglePerimeter(side1,  side2, side3) {
    return side1 + side2 + side3
}

// console.log("The perimeter of triangle is: " + trianglePerimeter + "cm");

// const triangleArea = (trianglebase * triangleHeight) / 2;
function triangleArea(base,  height) {
    return (base * height) / 2
}
// console.log("The area of triangle is: " + triangleArea + "cm^2");

console.log(triangleArea(5,4))

console.groupEnd();


// Codigo del Circulo
console.group("Circle");

// Radio
// const circleRadio = 4;
// console.log("The circleRadio is: " + circleRadio + "cm");





// Diametro

// const diameter = circleRadio * 2;
function diameterCircle(radio) {
    return radio * 2
}
// console.log("The diameter is: " + diameter + "cm");


// PI

const PI = Math.PI;
console.log("The PI is: " + PI);

//Circunferencia
// const circlePerimeter = diameter * PI;
function circlePerimeter(radio) {
    const diameter = diameterCircle(radio) 
        return diameter * PI
    
}

// console.log("The circlePerimeter is: " + circlePerimeter + "cm");



// Area

function circleArea(radio) {
    return (radio * radio) * PI
}


// const circleArea = (circleRadio * circleRadio) * PI;
// console.log("The circleArea is: " + circleArea + "cm^2");


console.log(
    circleArea(5))

console.groupEnd();


//here we interact with HTML
//Square

function calcPerimeterSquare() {
    const input = document.getElementById("SquareInput");
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function calcAreaSquare() {
    const input = document.getElementById("SquareInput");
    const value = input.value;

    const area = squareArea(value);
    alert(area);
}

//triangle

function calcPerimeterTriangle() {
    const input = document.getElementById("TriangleInput");
    const value = input.value;

    const perimeter = trianglePerimeter(value);
    alert(perimeter);
}

function calcAreaTriangle() {
    const input = document.getElementById("TriangleInput");
    const value = input.value;

    const area = triangleArea(value);
    alert(area);
}

// Circle

function calcPerimeterCircle() {
    const input = document.getElementById("CircleInput");
    const value = input.value;

    const perimeter = circlePerimeter(value);
    alert(perimeter);
}

function calcAreaCircle() {
    const input = document.getElementById("CircleInput");
    const value = input.value;

    const area = circleArea(value);
    alert(area);
}