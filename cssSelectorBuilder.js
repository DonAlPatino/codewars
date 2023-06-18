const cssSelectorBuilder = {
    answer: '',
    element(value) {
        this.error(1);
        const obj = Object.create(cssSelectorBuilder);
        obj.index = 1;
        obj.answer = this.answer + value;
        return obj;
    },

    id(value) {
        if (this.answer.includes('#')) throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector')
        this.error(2);
        const obj = Object.create(cssSelectorBuilder);
        obj.index = 2;
        obj.answer = `${this.answer}#${value}`;
        this.error();
        return obj;
    },

    class(value) {
        this.error(3);
        const obj = Object.create(cssSelectorBuilder);
        obj.index = 3;
        obj.answer = `${this.answer}.${value}`;
        this.error();
        return obj;
    },

    attr(value) {
        this.error(4);
        const obj = Object.create(cssSelectorBuilder);
        obj.index = 4;
        obj.answer = `${this.answer}[${value}]`;
        this.error();
        return obj;
    },

    pseudoClass(value) {
        this.error(5);
        const obj = Object.create(cssSelectorBuilder);
        obj.index = 5;
        obj.answer = `${this.answer}:${value}`;
        this.error();
        return obj;
    },

    pseudoElement(value) {
        if (this.answer.includes('::')) throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector')
        this.error(6);
        const obj = Object.create(cssSelectorBuilder);
        obj.index = 6;
        obj.answer = `${this.answer}::${value}`;
        this.error();
        return obj;
    },

    combine(selector1, combinator, selector2) {
        const obj = Object.create(cssSelectorBuilder);
        obj.answer = `${selector1.answer} ${combinator} ${selector2.answer}`;
        return obj;
    },

    stringify() {
        return this.answer;
    },
    error(newIndex) {
        if (this.index > newIndex) throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
        if (this.index === newIndex && this.index === 1) throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    },
};

const builder = cssSelectorBuilder;
builder.element('table').element('div'),
//builder.id('id1').id('id2'),
//builder.pseudoElement('after').pseudoElement('before'),




console.log(builder.id('main').class('container').class('editable').stringify());
console.log(builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify());
console.log(builder.combine(
    builder.element('div').id('main').class('container').class('draggable'),'+', builder.element('table').id('data')
).stringify());

console.log(builder.combine(
    builder.element('div').id('main').class('container').class('draggable'),
    '+',
    builder.combine(
        builder.element('table').id('data'),
        '~',
        builder.combine(
            builder.element('tr').pseudoClass('nth-of-type(even)'),
            ' ',
            builder.element('td').pseudoClass('nth-of-type(even)')
        )
    )
).stringify())
