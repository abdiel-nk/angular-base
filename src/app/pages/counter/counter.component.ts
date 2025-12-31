import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter.component.html',
    styleUrl: './counter.style.css',
   
})  

export class CounterComponent {

    counter = 10;
    counterSignal = signal(10);

    constructor(){
        setInterval(()=>{
            this.counterSignal.update((v)=> v+1);
            console.log('tick')
        },2000);
        
    }
    increaseBy(value: number){
        this.counter+= value;
    }
    decreaseBy(value: number){
        this.counter-= value;
        this.counterSignal.update(current => current -  value);
    }
    resetCounter(){
        this.counter =0;
        this.counterSignal.set(0);
    }
    
}