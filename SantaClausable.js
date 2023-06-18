    var santa = {
        sayHoHoHo: function() { console.log('Ho Ho Ho!') },
        distributeGifts: function() { console.log('Gifts for all!'); },
        goDownTheChimney: function() { console.log('*whoosh*'); }
    };

    var notSanta = {
        sayHoHoHo: function() { console.log('Oink Oink!') }
    };

    function isSantaClausable(obj) {
       /* return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
            return typeof obj[methodName] == 'function';
        });*/
        return typeof obj['sayHoHoHo'] === 'function' && typeof obj['distributeGifts'] === 'function' && typeof obj['goDownTheChimney'] === 'function';
    }

    console.log(isSantaClausable(notSanta))
    //console.log(typeof (santa['sayHoHoHo']));
