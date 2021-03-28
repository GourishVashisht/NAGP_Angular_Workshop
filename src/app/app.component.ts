import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, Observable, of, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { delay, filter, map, reduce, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'NAGP2021-Angular-Workshop';

  private subscription: Subscription = new Subscription();

  ngOnInit() {

  }

  behaviourSubjectExample() {
    // Behaviour Subject
    const behaviourSubject = new BehaviorSubject(0);

    behaviourSubject.subscribe({
      next(value) { console.log('Observer A: ' + value); }
    });

    behaviourSubject.next(1);
    behaviourSubject.next(2);

    behaviourSubject.subscribe({
      next(value) { console.log('Observer B: ' + value); }
    });

    behaviourSubject.next(3);
  }

  subjectExample() {
    const subject = new Subject<number>();

    subject.subscribe({
      next(value) { console.log('Observer A: ' + value) }
    })

    subject.subscribe({
      next(value) { console.log('Observer B: ' + value) }
    })

    subject.next(1);
    subject.next(2);
    subject.next(3);
  }

  createNewObservable() {
    const table = new Observable(tableOfTwo);
    this.subscription = table.subscribe({
      next(value) { console.log(value); },
      error(err) { console.log(err); },
      complete() { console.log('Subscription completed'); }
    });
  }

  rxjsOperatiorsExamples() {
    // 1. of
    const observable = of(10, 20, 30, 40, 50);
    observable.subscribe(
      next => console.log('next:', next),
      err => console.log('erro: ', err),
      () => console.log('complete')
    )

    // 2. from
    const array = [1, 2, 3, 4, 5];
    const observable2 = from(array);
    observable2.subscribe(
      next => console.log(next)
    )

    // 3. delay
    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(delay(1000));
    // delayedClicks.subscribe(x => console.log(x));

    // // 4. map
    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(map((event: any) => event.clientX));
    // delayedClicks.subscribe(x => console.log(x));

    // // 5. tap
    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(
    //   tap(event => console.log(event)),
    //   map((event: any) => event.clientX)
    // );
    // delayedClicks.subscribe(x => console.log(x));

    // // 6. filter
    // const values = from([1, 2, 3, 4, 5]);
    // values.pipe(filter(value => value % 2 == 0))
    //   .subscribe(x => console.log(x));

    // 7. reduce
    const values = from([1, 2, 3, 4, 5]);
    const initialValue = 0;
    values.pipe(reduce((acc, value) => acc + value, initialValue))
      .subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

function tableOfTwo(observer: any) {
  for (let i = 1; i <= 10; i++) {
    observer.next('2 * ' + i + ' = ' + i * 2);
  }

  return {
    unsubscribe() {
      console.log('Unsubscription success.');

    }
  }
}
