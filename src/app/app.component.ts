import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

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

  myObservable = from(this.array1);

  GetAsyncData(){
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

  buttonClicked(){
    let count = 0;

    this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.showItem(count++);
        }
      })
  }

  ngAfterViewInit(){
    this.buttonClicked();
  }

  showItem(val){
    let div = document.createElement('div');
    div.innerText= 'Item '+val;
    div.className = 'data-list';
    document.getElementById('container').appendChild(div);
  }
}
