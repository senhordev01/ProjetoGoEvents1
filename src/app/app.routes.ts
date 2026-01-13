import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Events } from './events/events';
import { Cadastro } from './cadastro/cadastro';
import { Tarefas } from './tarefas/tarefas';
import { PerfilPessoal } from './perfil-pessoal/perfil-pessoal';

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
    },
    {
        path:"perfil",
        component:PerfilPessoal
    }
];
