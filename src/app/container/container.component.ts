import { AfterContentInit, ElementRef, Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  template: `
      generic slot nested inside angular elements web components
      <custom-button>is working</custom-button>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class ContainerComponent{
  constructor(private el: ElementRef) {}
}
