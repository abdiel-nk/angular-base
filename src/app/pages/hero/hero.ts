import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  nombre = signal("Iroman");
  edad = signal(45);


  nombreCompleto= computed(()=>`${this.nombre()} - ${this.edad()}`);

  
  capitalizado = computed(()=>
    this.nombre().toUpperCase()
  );

  getHeroDescription(){
      return this.nombreCompleto();
  }

  changeHero(){
    this.nombre.set('Spiderman');
    this.edad.set(22);
  }

  resetForm(){
    this.nombre.set('Iroman2');
    this.edad.set(46);
  }
  changeEdad(){
    this.edad.set(60);
  }

}


