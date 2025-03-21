const { parse } = require("path");

const circleArea = (r) => {
    const result = Math.PI * r * r;
    console.log('Circle area is: ' + parseInt(result) );
    return result;
}

const circleCircumference = (r) => { 
    const result = 2 * Math.PI * r;
    console.log('Circle circumference is: ' + parseInt(result) );
    
    return result;

}


module.exports = {
    circleArea,
    circleCircumference
}
