import { Injectable } from '@angular/core';
import { Alert, AlertType } from '../_models/alert';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject: Subject<Alert> = new Subject<Alert>();

  constructor() { }

  getAlert() {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.alert(new Alert(AlertType.Success, message));
  }

  error(message: string) {
      this.alert(new Alert(AlertType.Error, message));
  }

  info(message: string) {
      this.alert(new Alert(AlertType.Info, message));
  }

  warn(message: string) {
      this.alert(new Alert(AlertType.Warning, message));
  }

  alert(alert: Alert) {
      this.subject.next(alert);
  }

  clear() {
      this.subject.next();
  }
}
