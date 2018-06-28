import { AfterContentInit, ElementRef, Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  template: `
      <span id="insert-template-here"></span>
      <slot>GENERIC SLOT IS NOT WORKING</slot>
      <button (click)="handleClick()">{{label}}</button>
  `,
  styles: [`
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements AfterContentInit {
  @Input() label = 'default label';
  @Input() templateId?: string;
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  constructor(private el: ElementRef) {}

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }

  ngAfterContentInit(): void {
    console.log('template id: ' + this.templateId);
    if (this.templateId) {
      const shadowRoot = this.el.nativeElement.shadowRoot;
      console.log('has shadow root: ' + !!shadowRoot);
      const templatePlaceholderElement = shadowRoot.querySelector('#insert-template-here');
      const template = document.getElementById(this.templateId) as any;
      console.log('template: ' + template.content);
      templatePlaceholderElement.appendChild(document.importNode(template.content, true));
    }
  }
}
