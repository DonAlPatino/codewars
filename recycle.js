function recycle(array) {
    let paper = [];
    let glass = [];
    let organic = [];
    let plastic = [];
    array.forEach(function(item, i, arr) {
        switch(item.material) {
            case 'paper': paper.push(item.type);break
            case 'glass': glass.push(item.type);break
            case 'organic': organic.push(item.type);break
            case 'plastic': plastic.push(item.type);break
        }
        switch(item.secondMaterial) {
            case 'paper': paper.push(item.type);break
            case 'glass': glass.push(item.type);break
            case 'organic': organic.push(item.type);break
            case 'plastic': plastic.push(item.type);break
        }

    });

    return [paper,glass,organic,plastic];
}

let a = [
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];

let i = recycle( a)
console.log(i)