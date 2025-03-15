
function circleArea (r) {
    return Math.PI * r * r; 
}

const arguments = process.argv.slice(2);
console.log(circleArea(arguments[0]));

