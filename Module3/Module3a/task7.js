const side1 = 80;
const side2 = 60;
const side3 = 60;

if(side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle")
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles triangle")
} else {
    console.log("Scalene traingle")
};
