import Tag, { Div, Span } from './constructor';
import { getRandName } from "./one.ts";
import '@/css/index.scss';

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

const el = document.getElementsByClassName('card')[0];
const someText = document.createTextNode(getRandName().toString());
el.appendChild(someText);

const circle = new Div({ id: "circle", parent: '#MainSection', styles: stylesCircle });
const text = new Span({ id: "text", parent: '#MainSection', styles: stylesSpan, text: "Это круг!" });

console.log('container: ', container, 'circle: ', circle, 'text: ', text);

const onChangeText = function () {
  span.changeText(document.getElementById('f2').value);
};

const onChangeClass = function () {
  span.changeClass(document.getElementById('f1').value);
};

window.onChangeText = onChangeText;
window.onChangeClass = onChangeClass;
