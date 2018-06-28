import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ ButtonComponent ],
  imports: [ CommonModule ],
  entryComponents: [ ButtonComponent ]
})
export class ButtonModule {
    constructor(private injector: Injector) {
        const customButton = createCustomElement(ButtonComponent, { injector });
        customElements.define('custom-button', customButton);
    }
}
