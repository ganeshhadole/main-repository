import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private router:Router){

  }
  showPassword = true;
  changeSlide:boolean=false;
    storeAdminemail:any=''
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });
  createdprofileForm = new FormGroup({
    createdname: new FormControl('', [Validators.required]),
    createdemail: new FormControl('', [Validators.required, Validators.email]),
    Craetedpassword: new FormControl('',[Validators.required, Validators.minLength(6)])
  });


  jsonAdminEmail:any[]=[
    {
      email:'shivlilagandage@gmail.com',
      role:'Admin',
      password:'Shivlila@11'
    },
    {
      email:'ganeshhadole911@gmail.com',
      role:'Admin',
      password:'Ganesh@911'
    },
    {
      email:'ganeshhadole@gmail.com',
      role:'User',
      password:'gaaanesh@911'
    },
    {
      email:'shivlila45@gmail.com',
      role:'User',
      password:'shiv@011'
    }
  ]
  ngOnInit(){
 
  }
  storeRoleCheck:any=''
  isAdminLoginCheck(){
    debugger
    const enteredEmail = this.profileForm.get('email')?.value ?? this.createdprofileForm.get('createdemail')?.value ?? ''; 
    const enteredPassword = this.profileForm.get('password')?.value ?? this.createdprofileForm.get('Craetedpassword')?.value ?? '';
    const matchedUser = this.jsonAdminEmail.find(item => item.email === enteredEmail && item.password === enteredPassword);

    if (matchedUser) {
      if (matchedUser.role === 'Admin') { 
        this.router.navigate(['/admin-dashboard']);
        console.log(' Email Matched: Admin login successful');
      } else {
        this.router.navigate(['/user-chatbot']);
        console.log(' Email Matched: User login successful');
      }
    } else {
      console.log(' Invalid credentials');
    }
  }
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
  signuptrue(){
    this.changeSlide=true;
  }
  signup(){
    debugger
    this.isAdminLoginCheck();
    let adminpayload=[
{
  name:this.createdprofileForm.get('createdname')?.value,
  email:this.createdprofileForm.get('createdemail')?.value,
  password:this.createdprofileForm.get('Craetedpassword')?.value
}
    ]
    console.log(adminpayload)
  }
  signin(){
    debugger
    this.changeSlide=false;
    this.isAdminLoginCheck()
    let userpayload=[
      {
        email:this.profileForm.get('email')?.value,
        password:this.profileForm.get('password')?.value
      }
          ]
          console.log(userpayload)
  }
}
