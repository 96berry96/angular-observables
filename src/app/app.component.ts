import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, of, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'angular-observables';

  complete:any = false;
  data:any [] = [];

  @ViewChild('createbtn')
  createBtn:ElementRef;

  createBtnObs;

  array1 = [1,3,5,7,9];
  array2 = ['A', 'B', 'C', 'D'];

  myObservable = from([2,4,6,8,10,12]);

  filteredObs = this.myObservable.pipe(map((val)=>{
    return val * 5;
  }), filter((val, i)=>{
    return val % 4 === 0
  }))

  // filteredObs = this.myObservable.pipe(filter((val, i)=>{
  //   return val % 4 === 0
  // }))

  GetAsyncData(){
    this.filteredObs.subscribe({
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

  // buttonClicked(){
  //   let count = 0;

  //   this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click')
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         this.showItem(count++);
  //       }
  //     })
  // }

  ngAfterViewInit(){
  }

  // showItem(val){
  //   let div = document.createElement('div');
  //   div.innerText= 'Item '+val;
  //   div.className = 'data-list';
  //   document.getElementById('container').appendChild(div);
  // }
}
