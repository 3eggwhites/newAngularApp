import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.css']
})
export class ArchivePageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  year: number;
  month: number;
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.year = +paramMap.get('year');
      this.month = +paramMap.get('month');
    });
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
