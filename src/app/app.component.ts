import { Component, OnInit } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { delay, filter, map, reduce, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NAGP2021-Angular-Workshop';


  ngOnInit() {

  }

  rxjsOperatiorsExamples() {
    // 1. of
    // const observable = of(10, 20, 30, 40, 50);
    // observable.subscribe(
    //   next => console.log('next:', next),
    //   err => console.log('erro: ', err),
    //   () => console.log('complete')
    // )

    // 2. from
    // const array = [1, 2, 3, 4, 5];
    // const observable2 = from(array);
    // observable2.subscribe(
    //   next => console.log(next)
    // )

    // 3. delay
    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(delay(1000));
    // delayedClicks.subscribe(x => console.log(x));

    // 4. map
    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(map((event: any) => event.clientX));
    // delayedClicks.subscribe(x => console.log(x));

    // 5. tap
    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(
    //   tap(event => console.log(event)),
    //   map((event: any) => event.clientX)
    // );
    // delayedClicks.subscribe(x => console.log(x));

    // 6. filter

    // const values = from([1, 2, 3, 4, 5]);
    // values.pipe(filter(value => value % 2 == 0))
    //   .subscribe(x => console.log(x));

    // 7. reduce
    // const values = from([1, 2, 3, 4, 5]);
    // const initialValue = 0;
    // values.pipe(reduce((acc, value) => acc + value, initialValue))
    //   .subscribe(x => console.log(x));
  }

}
