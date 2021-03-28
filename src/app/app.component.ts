import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, from, fromEvent, Observable, of, Subscription, timer } from 'rxjs';
import { delay, tap, filter, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NAGP2021-Angular-Workshop';


  ngOnInit() {

  }
}
