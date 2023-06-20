function convertToBinary(number) {
    return number.toString(2).split("1").length - 1;
}

function sortByBit(arr) {
    let digitMap = new Map();
    for (let number of arr) {
        if (!digitMap.has(number)) {
            digitMap.set(number, number.toString(2).split("1").length - 1)
        }
    }
    console.log(digitMap)
    arr.sort(
        function ( a, b ) {

            if ( digitMap.get(a) < digitMap.get(b) ) {

                return -1;  // первый сравниваемый элемент будет расположен по меньшему индексу
            }
            if ( digitMap.get(a) > digitMap.get(b)) {

                return 1;  // второй сравниваемый элемент будет расположен по меньшему индексу
            }
            // если первый аргумент равен второму, то элементы массива останутся неизменными
            // по отношению друг к другу но будут отсортированы по отношению ко всем другим элементам
            //if (a > b ) {
            //    return 1;
           // }
            if ( a < b ) {

                return -1;  // первый сравниваемый элемент будет расположен по меньшему индексу
            }
            if ( a > b) {

                return 1;  // второй сравниваемый элемент будет расположен по меньшему индексу
            }
            return 0;
        }


    )

    return arr



}


i = sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0])
console.log(i)