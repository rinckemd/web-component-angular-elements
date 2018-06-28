import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { ContainerModule } from './container/container.module';
import { overrideRenderFactory } from '../shadow-dom-renderer';

@NgModule({
  imports: [ BrowserModule, ButtonModule, ContainerModule ],
  providers: [overrideRenderFactory()]
})
export class AppModule {
    constructor() {}

    ngDoBootstrap() {}
}
