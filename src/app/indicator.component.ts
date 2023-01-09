import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

const INTERVAL_MS = 300;

@Component({
  selector: 'indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent {
  public counter: number = 0;
  private interval: undefined | Subscription;

  private startInterval(): Subscription {
    return interval(INTERVAL_MS).subscribe(() => ++this.counter);
  }

  public get isRunning(): boolean {
    return !!this.interval;
  }

  public start(): void {
    if (this.interval) {
      return;
    }
    this.interval = this.startInterval();
  }

  public stop(): void {
    this.interval.unsubscribe();
    this.interval = undefined;
  }

  public clear(): void {
    this.counter = 0;
  }

  public ngOnDestroy() {
    this.stop();
  }
}
