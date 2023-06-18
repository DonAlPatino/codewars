var assert = require('assert');

var citizen = {
    sleep: function(){ return "zzZ..."; },
    panic: function(){ return "AaAaAaAa!"; }
};

var veteran = Object.create(citizen,{
    panic: {
        value: function(){
            return "SNAFU";
        }
    }
});

assert(veteran !== citizen, "veteran is equal citizen. wat??");
assert(veteran instanceof citizen.constructor, "veteran must inherit citizen");
assert.strictEqual(veteran.sleep(), "zzZ...", "first argument was not handled properly");
assert.strictEqual(veteran.panic(), "SNAFU", "`properties` argument was not handled properly");
