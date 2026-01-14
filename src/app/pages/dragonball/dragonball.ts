import { Component, signal } from '@angular/core';
;
interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {
  name= signal('');
  power = signal(0);

  characters  = signal(<Character[]>[
    {id: 1, name: 'Goku', power:1000},
    {id:2 , name: 'Vegeta', power: 800},
    {id:3 , name: 'Yamcha', power: 50},
    {id:3 , name: 'Gohan', power: 1050},

  ]);


  addCharacter(){
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }
    const newCharacter : Character ={
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),

    };
    this.characters.update(
      (list)=>[... list, newCharacter]);
      this.resetFields();
  }
  resetFields(){
    this.name.set('');
    this.power.set(0);
  
   }
}
