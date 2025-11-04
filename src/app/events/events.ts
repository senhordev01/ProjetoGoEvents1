import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Usuario } from '../services/usuario';
import { FormsModule } from "@angular/forms";
import { Dialog } from '@angular/cdk/dialog';
import { CriarProjetos } from '../criar-projetos/criar-projetos';

@Component({
  selector: 'app-events',
  imports: [CommonModule, FormsModule],
  templateUrl: './events.html',
  styleUrls: ['./events.css'],
  standalone: true
})

export class Events{
  nomeUsuario:string = "";
  constructor(private readonly titleService:Title, public router:Router, private usuarioService:Usuario){
    titleService.setTitle('GoEvents');
    this.nomeUsuario = this.usuarioService.getNomeUsuario();

  }

  Botoes:string[] = [];
  contador:number = 1;
  Usuario:string = "Normal";
  AdicionarBotoes(event:any){
    try{
      if (this.Usuario === "Vip"){
        if (this.Botoes.length == 20){
          throw new Error("Seu limite Vip atingiu o ponto maximo"); 
        } 
      }else if (this.Usuario === "Normal"){
        if (this.Botoes.length == 10){
          throw new Error("Voce atingiu o seu limite");
        }
      }
      const nome = `Botao ${this.contador}`;
      this.Botoes.push(nome);
      this.contador++;
    }
    catch(error:any){
      alert(error.message);
    }
  }

  private dialog = inject(Dialog);
  PaginaProjetos() {
    const dialogRef = this.dialog.open(CriarProjetos, { disableClose: true });

    dialogRef.closed.subscribe((nomeBotao) => {
      if (nomeBotao && typeof nomeBotao === "string" && nomeBotao.trim() !== '') {
        this.Botoes.push(nomeBotao.trim());
        this.contador++;

      }else if (nomeBotao === undefined){
        console.log("Janela Fechada");
      } else {
        alert("Você precisa inserir um nome antes de criar o projeto!");
      }
    });
  }
}
