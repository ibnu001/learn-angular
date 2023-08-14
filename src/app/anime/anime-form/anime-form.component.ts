import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../../shared/utils/forbidden-name/forbidden-name.directive";

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent {

  animeForm: FormGroup = new FormGroup({
    id: new FormControl(null), // default value (null),
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
      // forbiddenNameValidator(/bob/i)
    ]), // validation required
    cover: new FormControl(null, [Validators.required, Validators.minLength(10)]) // two validation using array
  })

  animes: any[] = []

  submitData(data: any) {
    console.log(data)

    this.animes.push(data)
  }

  form(property: string) : FormGroup {
    return this.animeForm.get(property) as FormGroup
  }

  // forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const forbidden = nameRe.test(control.value)
  //     return forbidden ? {forbiddenName: {value: control.value}} : null
  //   }
  // }

  protected readonly print = print;
}
