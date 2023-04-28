import { LightningElement, track } from 'lwc';

export default class calculadora extends LightningElement {
  @track result = '0';

  handleClick(event) {
    this.result = this.result === '0' ? event.target.value : this.result + event.target.value;
  }

  clearDisplay() {
    this.result = '0';
  }

  evaluate() {
    try {
      this.result = eval(this.result);
    } catch (e) {
      this.result = 'Error';
    }
  }
}
