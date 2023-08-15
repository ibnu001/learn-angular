import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {



  ngOnInit(): void {
    console.log('Component A ter init cuy')

  }
  ngOnDestroy(){
    console.log('Component A ter destroy cuy')
  }




}
