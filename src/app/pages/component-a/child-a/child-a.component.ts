import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
  }

  name: string = ''
  sahabat: string = ''

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.name = queryParams['name']
      this.sahabat = queryParams['sahabat']
    })
  }

  moveToChildB(){
    this.router.navigateByUrl('/component-a/child-b')
  }
}
