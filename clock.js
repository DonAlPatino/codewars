// Javascript program to find angle between hour and minute hands

// Utility function to find minimum of two integers
function min(x, y)
{
    return (x < y)? x: y;

}
function makeDate (hours, minutes) {
    const date = new Date();
    date.setMinutes(minutes);
    date.setHours(hours);
    return date;
}

function calcAngle(date)
{
    let m = date.getMinutes();
    let h = date.getHours()
    // validate the input
    if (h <0 || m < 0 || h >12 || m > 60)
        document.write("Wrong input");

    if (h == 12) h = 0;
    if (m == 60)
    {
        m = 0;
        h += 1;
        if(h>12)
            h = h-12;
    }

    // Calculate the angles moved
    // by hour and minute hands
    // with reference to 12:00
    let hour_angle = 0.5 * (h * 60 + m);
    let minute_angle = 6 * m;

    // Find the difference between two angles
    let angle = Math.abs(hour_angle - minute_angle);

    // Return the smaller angle of two possible angles
    angle = Math.min(360 - angle, angle);

    return Math.PI / (180/angle);
}

// Driver Code
//console.log(calcAngle(9, 60) + "<br>");
//console.log(calcAngle(3, 30) + "<br>");
console.log(calcAngle(makeDate(9, 0)));