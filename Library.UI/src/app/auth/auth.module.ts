import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [SharedModule],
})
export class AuthModule {}
