function getRectangleString(width, height) {
    let rectangle = new Array(height);
    for (let i = 0; i < rectangle.length; i++) {
        let row;
         if (i===0 || i === rectangle.length - 1) {
             row= new Array(width).fill('─');
         } else {
             row= new Array(width).fill(' ');
         }
         row[0] = '│';
         row[width - 1] = '│';
         row[width] = '\n';
         rectangle[i] = row;
    }

    rectangle[0][0] = '┌';
    rectangle[0][width-1] = '┐';
    rectangle[height-1][0] = '└';
    rectangle[height-1][width-1] = '┘';
    let str = '';
    for (let i = 0; i < rectangle.length; i++) {
    str += rectangle[i].join('');
    }
    console.log(str)
}

getRectangleString(5, 4);
