import { Component } from '@angular/core';
import { ServicesService } from '../../Service/services.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
  constructor(private service:ServicesService ,private toastr: ToastrService , private router:Router) {}
 
  users: any[] = [];

  ngOnInit() {
    this.afficheruser();
  }
  afficheruser() {
    this.service.getalluser().subscribe(
      (res: any[]) => { 
        console.log(res); 
        this.users = res;
      },
      (err) => {
        console.log(err); 
      }
    );
}
}
