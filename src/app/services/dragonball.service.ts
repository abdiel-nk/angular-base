import { Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Injectable({providedIn: 'root'})
export class DragonballService{


 characters  = signal(<Character[]>[
   
    {id:3 , name: 'Yamcha', power: 5000},
    {id:3 , name: 'Gohan', power: 1050},

   ]);

    addCharacter(character: Character){
    this.characters.update(
      list => [... list, character]
    )
   }
}
