import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent {

  constructor(
    private readonly route: ActivatedRoute
  ) {
  }

  id: string = ''

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('PARAMS: ', params)
      this.id = params['id']
    })
  }
}
