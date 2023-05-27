import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  jobId!: number;
  job: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.jobId = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.http.get<any>(`http://localhost:3000/jobs/${this.jobId}`).subscribe((data) => {
      this.job = data;
    });
  }

  submitForm() {
    this.http.put(`http://localhost:3000/jobs/${this.jobId}`, this.job).subscribe(() => {
      this.router.navigate(['/jobs']);
    });
  }
}
