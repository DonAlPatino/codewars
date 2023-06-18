var assert = require('assert');

class Cube {
    constructor(length) {
        this.length = length;
    }

    get volume() {
        return this.length ** 3;
    }

    get surfaceArea() {
        return 6 * this.length* this.length;
    }

    set volume(volume) {
        this.length = Math.cbrt(volume)
    }

    set surfaceArea(surfaceArea) {
        this.length = Math.sqrt(surfaceArea/6)
    }
}

var cube = new Cube(2);
cube.surfaceArea = 54;
assert.equal(cube.length, 3);
assert.equal(cube.volume, 27);
