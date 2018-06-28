import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ ContainerComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ ContainerComponent ]
})
export class ContainerModule {
    constructor(private injector: Injector) {
      const testContainer = createCustomElement(ContainerComponent, { injector });
      customElements.define('test-container', testContainer);
    }
}
