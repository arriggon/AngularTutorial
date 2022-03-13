import { Component, OnDestroy } from '@angular/core';
import { forkJoin, map, Observable, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'book-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  name = 'Moritz';
  observable: Observable<string> = new Observable<string>(subscriber => {
    subscriber.next('A');
    setTimeout(() => subscriber.next('B'), 500);
    setTimeout(() => subscriber.next('C'), 1000);
    setTimeout(() => {
      subscriber.next('D');
      subscriber.complete();
    }, 1500);
    subscriber.next('E');
  });
  observable2: Observable<string> = of('X');
  subscription: Subscription = new Subscription();

  changeName($event: any) {
    this.name = $event.target.value;
  }

  subscribe() {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
