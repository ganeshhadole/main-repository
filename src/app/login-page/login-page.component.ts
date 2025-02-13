import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  showPassword = true;
  changeSlide:boolean=false
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });
  createdprofileForm = new FormGroup({
    createdemail: new FormControl('', [Validators.required, Validators.email]),
    Craetedpassword: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  submitForm() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value); 
    } else {
      console.log("Form is invalid");
    }
  }

  checkClick(event: MouseEvent) {
    const input = event.target as HTMLInputElement;
    
    const clickX = event.offsetX;
    const inputWidth = input.clientWidth;
    
    if (clickX > inputWidth - 35) {
      this.togglePassword(input);
    }
  }

  togglePassword(input: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    input.type = this.showPassword ? 'text' : 'password';

    input.classList.toggle('show-password', this.showPassword);
    input.classList.toggle('hide-password', !this.showPassword);
  }
  signup(){
    this.changeSlide=true
  }
  signin(){
    this.changeSlide=false
  }
}
