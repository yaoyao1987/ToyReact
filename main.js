import { ToyReact, Component } from "./ToyReact.js";

class MyComponent extends Component {
  render() {
    return (
      <div>
        MyComponent
        <div>111</div>
        <div>{true}</div>
        <div>{this.children}</div>
      </div>
    );
  }
}

let a = (
  <MyComponent name="a" id="component">
    <span>Hello</span>
    <span>World</span>
    <span>!</span>
  </MyComponent>
);

// console.log(a);
// document.body.appendChild(a);

ToyReact.render(a, document.body);
