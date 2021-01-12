import { validaters } from './validate';
import { ForgetComponent } from './ForgetPassword/ForgetPassword.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './RegisterUser/RegisterUser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'registerUser',pathMatch:'full'},
      {
         path: 'registerUser',
         component: RegisterUserComponent
      },
      {
        path: 'ForgetPassword',
        component: ForgetComponent
     }
   ])
  ],
  providers: [validaters],
  bootstrap: [AppComponent]
})
export class AppModule { }
