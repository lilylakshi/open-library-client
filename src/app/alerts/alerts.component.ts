import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { Alert } from '../_models/alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(private alertsService: AlertService) { }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  ngOnInit() {
    this.alertsService.getAlert().subscribe((alert: Alert) => {
      if(alert) {
        this.alerts.push(alert);
      } else {
        this.alerts = [];
      }
    });
  }
}
