import { Component } from '@angular/core';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-observables';

  complete:any = false;
  data:any [] = [];

  array1 = [1,3,5,7,9];
  array2 = ['A', 'B', 'C', 'D'];

  myObservable = from(this.array1);

  GetAsyncData(){
    // this.myObservable.subscribe((data: any) => {
    //   this.data.push(data)
    // },
    // (error: any) => {
    //   alert(error.message)
    // },
    // () => {
    //   alert('All the data is streamed')
    // })
    this.myObservable.subscribe({
      next: (data: any) => {
        this.data.push(data)
      },
      error(err){
        alert(err.message)
      },
      complete:() =>{
        this.complete = true
        setTimeout(()=> {
          this.complete = false
        }, 9000)
        
        
      }
    })
  }
}
