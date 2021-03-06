import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUsService } from '../Services/contact-us.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private contactusService:ContactUsService,private router:Router, private toastr: ToastrService) { }

  CreateForm :FormGroup =new FormGroup({
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject:new FormControl('',Validators.required),    
    massage:new FormControl('',Validators.required),
  })

  ngOnInit(): void {
  }

  send(){
    this.contactusService.create(this.CreateForm.value);
    this.toastr.success('Thank you for contacting us ❤️ ')
    window.location.reload();
  }
}
