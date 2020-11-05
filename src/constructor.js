export default class Tag {
    constructor(options) {
        const parent = document.querySelector(options.parent);
        const selector = document.createElement(options.selector);
        parent.appendChild(selector);
        selector.setAttribute('id', options.id ?? '');
        selector.setAttribute('class', options.class ?? '');
        this.$el = selector;
        this.text = selector.textContent = options.text ?? '';
        this.id = options.id ?? '';
        this.class = options.class ?? '';
        this.children = selector.children;
    }

    // get tagElement() {
    //     return this.$el;
    // }
    //
    // set tagElement(newElement) {
    //     this.$el = newElement;
    // }

    changeText(text) {
        this.text = text;
        this.$el.appendChild(document.createTextNode(text.toString()));
    }

    changeClass(className) {
        this.$el.setAttribute('class', className.toString());
    }

    changeId(id) {
        this.$el.setAttribute('id', id.toString());
    }
}

export class Div extends Tag {
    constructor(options){
        const divOptions = {...options, selector: 'div'};
        super(divOptions);
        if(options.styles) {
            for(let key in options.styles) this.$el.style[key] = options.styles[key];
            this.styles = options.styles;
        }
    }
}

export class Span extends Tag {
    constructor(options){
        const spanOptions = {...options, selector: 'span'};
        super(spanOptions);
        if(options.styles) {
            for(let key in options.styles) this.$el.style[key] = options.styles[key];
            this.styles = options.styles;
        }
    }
}

