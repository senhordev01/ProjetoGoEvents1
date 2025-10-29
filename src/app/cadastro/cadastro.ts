import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {
  constructor(private titleService:Title, private router:Router){
    this.titleService.setTitle("Cadastro");
  }
  nomeUsuario:string = "";
  emailUsuario:string = "";
  confirmarEmail:string = "";
  senhaUsuario:string = "";
  confirmarSenha:string = "";

  FazerLogin(event:any){
    this.router.navigate(["login"]);
  }
  RealizarCadastro(event:any){
  this.router.navigate(["inicio"]);
  }

}
