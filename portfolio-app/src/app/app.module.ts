import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { ManualComponent } from './components/manual/manual.component';

@NgModule({
  declarations: [
    AppComponent,
    PromptComponent,
    UserInfoComponent,
    ManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
