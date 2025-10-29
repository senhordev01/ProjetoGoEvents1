import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrls: ['./events.css'],
  standalone: true
})

export class Events{
  constructor(private readonly titleService:Title, private router:Router){
    titleService.setTitle('GoEvents');
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

  PaginaProjetos(NomeBotao:string){
    this.router.navigate(["inicio", NomeBotao])
  }

}
