import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { Hero } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [
    {
        path: '',
        component: CounterComponent,
    },
    {
        path: 'hero',
        component: Hero
    },
    {
        path:'dragonball',
        component: Dragonball,
    },
     {
        path:'dragonballSuper',
        component: DragonballSuper,
    },
    {
        path: '**',
        redirectTo:'',
    },
    
];
