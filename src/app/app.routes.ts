import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Events } from './events/events';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
    {
        path:"",
        component:Home
    },
    {
        path:"login",
        component:Home
    },
    {
        path:"inicio",
        component:Events
    },
    {
        path:"cadastro",
        component:Cadastro
    }
];
