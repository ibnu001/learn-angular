import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  imgSrc: string = 'assets/images/ari.jpg'
  imgAlt: string = 'ARIIII'

  fullname: string = 'My name is <strong> Ibnu </strong>'
  color: string = 'blue'

  styles = {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: '600',
  }

  isDisabled: boolean = false

  num: number = 0

  numStyles = {
    color: 'blue'
  }

  ngOnInit() {
    setTimeout(() => {
      this.isDisabled = !this.isDisabled
    }, 2000)
  }

  increment() {
    const interval = setInterval(() => {
      this.num++
      if (this.num > 5) {
        this.numStyles.color = 'red'
      }

      if (this.num >= 10) {
        clearInterval(interval)
        this.num = 10
      }
    }, 1000)


    // if (this.num === 10) {
    //   clearInterval()
    // }
  }


  message: string = "<h1>Mouse Hovew me mew ≽^•⩊•^≼</h1>"

  mOver(): void {
    this.message = '<h1>Thanks fow hovew me mew ≽^•⩊•^≼</h1>'
  }

  mOut(): void {
    this.message = '<h1>Hovew me again mew ≽^•⩊•^≼</h1>'
  }

  name: string = ''
  onKeyPress(ev: any): void {
    console.log(ev)
    console.log("---")
    console.log(ev.target.value)
    console.log("---")
    console.log(ev.data)
    console.log("---")
    this.name = ev.target.value
  }

  tes: any[] = []
  isActive: boolean = false


}
