import { Component, inject, input, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list.component";
import { AddCharacterComponent } from "../../components/add-dragonball/add-dragon-ball.component";
import { DragonballService } from '../../services/dragonball.service';
;
interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonballSuper',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
})
export class DragonballSuper {


  // constructor( 
  //   public dragonballService: DragonballService
  
  // ){  }


  public dragonballService = inject(DragonballService);

    
  }
