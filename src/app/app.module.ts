import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTimeComponent } from './show-time/show-time.component';
import { TimerEditorComponent } from './timer-editor/timer-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
    TimerEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
