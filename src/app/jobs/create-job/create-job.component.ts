import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
})
export class CreateJobComponent {
  job: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  submitForm() {
    this.http.post('http://localhost:3000/jobs', this.job).subscribe(() => {
      this.router.navigate(['/jobs']);
    });
  }
}
