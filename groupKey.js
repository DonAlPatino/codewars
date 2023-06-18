function group(array, keySelector, valueSelector) {
        /* return array.map(keySelector).reduce(
        (map, key, i) => map.set(key, (map.get(key) || []).concat(valueSelector(array[i]))), new Map(),); */
    array.map((key , i ) => {
        console.log(key.artist);
        if (!map.get(key.artist)) let map = new Map();
    })

}

const arr = [
    { artist: 'ACDC', album: 'Highway to Hell' },
    { artist: 'Metallica', album: "Kill'em All" },
    { artist: 'Deep Purple', album: 'Machine Head' },
    { artist: 'Metallica', album: 'And Justice for All' },
    { artist: 'ACDC', album: 'Back in Black' },
    { artist: 'Manowar', album: 'Kings of Metal' },
]

console.log(group(arr,(item) => item.artist, (item) => item.album))
