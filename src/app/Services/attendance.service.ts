import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  attendance:any=[];
  attendance1:any=[];
  status:any=[];
  name:any=[];
  busnumber1:any=[];
  students:any=[];
  new:any=[];
  TeacherInfo: any = [];
  busnumber:any=[];
  studentAttendens:any=[];

  constructor(private http:HttpClient, private spinner :NgxSpinnerService,private toastr:ToastrService) { }

  getAll(){
    this.spinner.show(); 
    this.http.get('https://localhost:44346/api/attendance/getall').subscribe((res)=>{
    this.attendance=res;
    this.spinner.hide();
  
    },err=>{
     this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }
  delete(id:number){
    this.http.delete('https://localhost:44346/api/attendance/delete/'+id).subscribe((res)=>{
    this.toastr.success('Deleted Successfully :)');
    },err=>{
     this.toastr.error(err.status,err.message);
    })
  } 

  GETSTUDENTLIST(busnumber:number){
    this.spinner.show(); 
          this.http.get('https://localhost:44346/api/bus/GetStudentList/'+ busnumber).subscribe((res)=>{
          this.busnumber=res;
         this.spinner.hide();

        },err=>{
         this.spinner.hide();
          this.toastr.error(err.message, err.status);
        })
      }

  GETBUSNUMBER(){
    this.spinner.show();
    this.http.get('https://localhost:44346/api/attendance/GetBusNum').subscribe((res)=>{
    this.busnumber1=res;
    this.spinner.hide();

     },err=>{
    this.spinner.hide();
       this.toastr.error(err.message, err.status);
     })
   }
   
  search(name:any){
    this.spinner.show();
    this.http.post('https://localhost:44346/api/student/SearchStudent/',name).subscribe((res)=>{
    this.name=res;
    this.spinner.hide();

      },error=>{
       this.spinner.hide();
       this.toastr.error(error.status,error.message);
      })
    }
 
  GETATTENDANCESTATUS(){
    this.spinner.show();
    this.http.get('https://localhost:44346/api/attendance/GetAttendance').subscribe((res)=>{
    this.status=res;
    this.spinner.hide();

    },err=>{
   this.spinner.hide();
  this.toastr.error(err.message, err.status);
    })
  }
   
  GETTEACHERINFONEW(username:any){
    this.http.post('https://localhost:44346/api/attendance/GETTEACHERINFONEW/',username).subscribe((res)=>{
    this.TeacherInfo = res
    },error=>{
    })
  }

  GETSTUDENTNAME(){
   this.spinner.show();
   this.http.get('https://localhost:44346/api/attendance/GetStudent').subscribe((res)=>{
   this.name=res;
   this.spinner.hide();

    },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
    })
  }

  GetStudentList(){
    this.spinner.show();
    this.http.get('https://localhost:44346/api/bus/GetStudentList').subscribe((res)=>{
    this.students=res;
    this.spinner.hide();

    },err=>{
     this.spinner.hide();
     this.toastr.error(err.message, err.status);
    })
  }
  
  create(attendance:any){
    this.spinner.show();
      this.http.post('https://localhost:44346/api/attendance/create/',attendance).subscribe((res)=>{
       this.spinner.hide();

      },error=>{
       this.spinner.hide();
       this.toastr.error(error.status,error.message);
      })
    }

    update(attendance1:any){
       this.http.put('https://localhost:44346/api/attendance/update/',attendance1).subscribe((res)=>{
       this.toastr.success('updated Successfully :)');
        },err=>{
        this.toastr.error(err.status,err.message);
        })
      } 
  
    SendArrivalEmail(email:any){
        this.http.post('https://localhost:44346/api/attendance/SendArrivalEmail/',email).subscribe((res)=>{
       this.toastr.success('sent Successfully :)');
        },err=>{
         this.toastr.error(err.status,err.message);
        })
      }
      
      SendAbsentEmail(email:any){
        this.http.post('https://localhost:44346/api/attendance/SendAbsentEmail/',email).subscribe((res)=>{
       this.toastr.success('sent Successfully :)');
        },err=>{
         this.toastr.error(err.status,err.message);
        })
      }



         
    StudentAttendeansWithId(id:any){
    this.spinner.show();
    this.http.post('https://localhost:44346/api/Attendance/StudentAttendeansWithId/',id).subscribe((res)=>{
    this.studentAttendens=res;
    this.spinner.hide();

      },error=>{
       this.spinner.hide();
       this.toastr.error(error.status,error.message);
      })
    }

}
