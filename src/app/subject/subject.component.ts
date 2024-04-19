import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
      //let obs = new Observable((observer) => {observer.next(Math.random())});

      //const subject = new Subject();

      //const subject = new BehaviorSubject<number>(100);

      // const subject = new ReplaySubject(2);

      // subject.next(100);
      // subject.next(200);
      // subject.next(300);

      // subject.subscribe((data) => {
      //   console.log(`sub 1 ` + data); 
      // })

      // subject.subscribe((data) => {
      //   console.log(`sub 2 ` + data); 
      // })

      // subject.next(2020);

      // subject.subscribe((data) => {
      //   console.log(`sub 3 ` + data); 
      // })

      // subject.next(2023);

      // const subject = new Subject();
      // const data = ajax('https://randomuser.me/api/');
      
      // subject.subscribe((res) => console.log(res));
      // subject.subscribe((res) => console.log(res));
      // subject.subscribe((res) => console.log(res));

      // data.subscribe(subject);

      // const asyncSubject = new AsyncSubject();

      // asyncSubject.next(100)
      // asyncSubject.next(200)
      // asyncSubject.next(300)
      // asyncSubject.complete()

      // asyncSubject.subscribe((data) => {
      //   console.log(`Subscriber 1: ${data}`);
      // })

      
  }
}
