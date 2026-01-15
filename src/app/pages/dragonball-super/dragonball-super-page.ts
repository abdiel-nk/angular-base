import { Component, inject, input, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/character-list/character-list.component";
import { DragonballService } from '../../services/dragonball.service';
import { AddCharacterComponent } from '../../components/character-add/add-dragon-ball.component';
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
  public dragonballService = inject(DragonballService);
}
