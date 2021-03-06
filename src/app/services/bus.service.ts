import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }



  data: any = [];
  teachers: any =[];
  drivers : any = [];
  busData:any = [];
  busStudents:any = [];
  busTeachers: any =[];
  busDrivers : any = [];
  busRoutes:any = [];
  busRoutesByUsername:any =[];

  
  username:any  = localStorage.getItem('name')
  getAll() {
  
    this.http.get('https://localhost:44346/api/Bus/GetAll/').subscribe((res) => {
      this.data = res;
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }

  
  getBusRoutes() {
    //show spinner
    
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/bus/GetRoutesInfoByUsername/'+this.username).subscribe((res1) => {
      this.busRoutes =res1;  
      console.log('Routes',this.busRoutes);    
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
  
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }

  getBusStudents() {
   
    
    this.spinner.show();
   
    this.http.get('https://localhost:44346/api/bus/GetStudentsInfoByUsername/'+this.username).subscribe((res1) => {
      this.busStudents =res1;
   
      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }

  getBusInfoByName() {

    this.spinner.show();

    this.http.get('https://localhost:44346/api/bus/GetBusInfoByUsername/'+this.username).subscribe((res) => {
      this.busData =res;

   
      
      //hide spinner
      this.spinner.hide();
  
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })
   
 
  }
  

  getDrivers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/user/GetAllDrivers/').subscribe((res) => {
      this.drivers = res;
  
      this.spinner.hide();
   
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }

  changeStudentBusStatus(lat:any) {
     
    this.http.get('https://localhost:44346/api/student/UPDATESTUDENTBUSSTATUS/'+lat).subscribe((res) => {
              
    }, err => {   
      
    })

  }


  changeAllStudentsBusStatus() {
     
    this.http.get('https://localhost:44346/api/student/UpdateAllStudentsBusStatus/').subscribe((res) => {
                  
    }, err => {
         
    })

  }

  getTeachers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/user/GetAllTeachers/').subscribe((res) => {
      this.teachers = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }
  
  
  
  createBus(data: any) {
    this.spinner.show();   
    this.http.post('https://localhost:44346/api/Bus/Create/', data)
      .subscribe((res: any) => {

        this.spinner.hide;
       
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })


  }


  delete(id: number) {
    this.http.delete('https://localhost:44346/api/Bus/delete/' + id).subscribe((res) => {
      this.toastr.success('Deleted Successfully :) ')
    }, err => {
      this.toastr.error(err.message, err.status);
    })

  }

  updateBus(body: any) {
   
    this.http.put('https://localhost:44346/api/Bus/Update/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })

  }


  getBusDrivers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Bus/GetBusDrivers/').subscribe((res) => {
      this.busDrivers = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr

    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }
  

  getBusTeachers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Bus/GetBusTeachers/').subscribe((res) => {
      this.busTeachers = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr

    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }


  getBusRouteByUsername() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/route/SELECTFROMROUTEBYUSERNAME/'+this.username).subscribe((res) => {
      this.busRoutesByUsername = res;
     
      
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
   
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }
  

  
  SetCurrentBusLocation(data: any) {
    this.spinner.show();   
    this.http.post('https://localhost:44346/api/route/SETCURRENTBUSLOCATION/', data)
      .subscribe((res: any) => {

        this.spinner.hide();
       
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })


  }

    
  setCurrentBusLocationAfterEnd(data: any) {
    this.spinner.show();   
    console.log(data)
    this.http.post('https://localhost:44346/api/route/setCurrentBusLocationAfterEnd/', data)
      .subscribe((res: any) => {

        this.spinner.hide();
     
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })


  }

}
