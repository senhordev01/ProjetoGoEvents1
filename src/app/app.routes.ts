import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Events } from './events/events';
import { Cadastro } from './cadastro/cadastro';
import { Tarefas } from './tarefas/tarefas';

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
    },
    {
        path:"inicio/:id",
        component:Tarefas
    }
];
