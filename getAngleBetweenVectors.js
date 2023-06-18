function getAngleBetweenVectors(x1, y1, x2, y2) {
    const coord1 = {
        x: x1,
        y: y1
    };

    const coord2 = {
        x: x2,
        y: y2
    };
    let b =  Math.abs(coord2.x - coord1.x)
    let a = Math.abs(coord2.y - coord1.y)
    let res = Math.atan2(a, b)
    if (res < 0) { res = res + Math.PI }
    return res * 2 ;
}
console.log(getAngleBetweenVectors(1, 0, 0, 1))
console.log(getAngleBetweenVectors(0, 1, 0, -1))
console.log(getAngleBetweenVectors(0, -1, 1, 0))
console.log(getAngleBetweenVectors(0, 1, 0, 1))

//console.log(angleRadians);
//console.log(angleDeg);


