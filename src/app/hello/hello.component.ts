import {Component} from "@angular/core";

@Component({
  selector: 'hello-world', // selector menandakan ini milik hello.component.ts
  templateUrl: './hello.component.html', // untuk html nya
  styleUrls: ['./hello.component.css'] // untuk style nya
})

export class HelloComponent { // khusus data logic nya
  title = 'Pascal #12'
  message: string = 'Is this message'

  getCounterMsg(): String {
    return "this is it"
  }

  people: string[] = ['1', '2', '3']

  getPeople(): string {
    let result: string = ''
    for (let person of this.people) {
      result += person + " "
    }
    return result
  }

  getNum(): string {
    let result: string = ''
    for (let i = 1; i <= 10000; i++) {
      result += '(⓿_⓿) - '
    }
    return result
  }

  employees = [
    {
      name: 'Ibnu',
      age: 18,
    },
    {
      name: 'Al Fath',
      age: 9999,
    },
    {
      name: 'Rian',
      age: 1000000,
    },
  ]

  getEmployees(): string {
    let result: string = ''
    for (const employee of this.employees) {
      let emp = `name = ${employee.name} age = ${employee.age} -- `
      result += emp + " "
    }
    return result
  }
}
