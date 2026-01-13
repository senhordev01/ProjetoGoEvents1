import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  imports: [],
  templateUrl: './menu-principal.html',
  styleUrls: ['./menu-principal.css'],
  standalone: true,
})
export class MenuPrincipal {
  constructor(public router: Router) {}

  Perfil_Pessoal() {
    const url = this.router.serializeUrl(this.router.createUrlTree(['perfil']));

    window.open(url, '_blank');
  }
  GitHub_Projeto() {
    window.open('https://github.com/senhordev01/ProjetoGoEvents1.git');
  }
}
