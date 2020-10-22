class Tag {
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

  get tagElement() {
    return this.$el;
  }

  set tagElement(newElement) {
    this.$el = newElement;
  }

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

class Div extends Tag {
  constructor(options){
    const divOptions = Object.assign({}, options, { selector: 'div' });
    super(divOptions);
    if(options.styles) {
      for(let key in options.styles) this.$el.style[key] = options.styles[key];
      this.styles = options.styles;
    }
  }
}

class Span extends Tag {
  constructor(options){
    const spanOptions = Object.assign({}, options, { selector: 'span' });
    super(spanOptions);
    if(options.styles) {
      for(let key in options.styles) this.$el.style[key] = options.styles[key];
      this.styles = options.styles;
    }
  }
}


const container = new Tag({ id: "MainSection", selector: "section", parent: '#root', class: 'main-section' });
const span = new Tag({ id: "spanSelector", selector: "span", parent: '#MainSection', class: 'some-text' });
// const p = new Tag({ id: "pSelector", children: "p", parent: '#MainSection' });
// const span2 = new Tag({ id: "spanSelector2", children: "span", parent: '#spanSelector' });

const stylesCircle = {
  width: '100px',
  height: '100px',
  background: 'red',
  border: '1px solid black',
  borderRadius: '50%',
  margin: '10px',
};

const stylesSpan = {
  width: '50px',
  height: '50px',
  textAlign: 'center',
  fontFamily: 'Open-sans, sans-serif',
  fontSize: '12px',
};

const circle = new Div({ id: "circle", parent: '#MainSection', styles: stylesCircle });
const text = new Span({ id: "text", parent: '#MainSection', styles: stylesSpan, text: "Это круг!" });

const onChangeText = function() {
  span.changeText(document.getElementById('f2').value);
};

const onChangeClass = function() {
  span.changeClass(document.getElementById('f1').value);
};
