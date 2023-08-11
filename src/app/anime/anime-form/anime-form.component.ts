import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent {

  animeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    cover: new FormControl()
  })

}
