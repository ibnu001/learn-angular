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
      setInterval(() => {
        this.num++
        if (this.num > 5) {
          this.numStyles.color = 'red'
        }
      }, 1000)

    // if (this.num === 10) {
    //   clearInterval()
    // }
  }

}
