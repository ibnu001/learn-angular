import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  id :any
  intervalId: any

  @Input()
  nameChild: string = ''

  @Output()
  nameChildChange: EventEmitter<string> = new EventEmitter<string>()

  nameChanges() {
    this.nameChildChange.emit(this.nameChild)
  }

  tick() {
    this.intervalId = setInterval(() => {
      this.id = new Date()
      console.log(this.id)
    },1000)
  }


  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('On Init')
    // this.tick()
  }

  ngOnChanges() {
    console.log('on changes')
  }

  ngDoCheck() {
    console.log('do check')
  }

  ngAfterContentInit() {
    console.log('after content init')
  }

  ngAfterContentChecked() {
    console.log('after content check')
  }

  ngAfterViewInit() {
    console.log('after view init')
  }

  ngAfterViewChecked() {
    console.log('after view check')
  }

  ngOnDestroy() {
    console.log('on destroy')
    clearInterval(this.intervalId)
    console.log('interval cleared')
  }
}
