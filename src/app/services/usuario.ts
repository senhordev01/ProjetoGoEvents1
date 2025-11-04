import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usuario {
  private nomeUsuario:any = "";
  setNomeUsuario(nome:any){
    this.nomeUsuario = nome;
  }
  getNomeUsuario():string{
    return this.nomeUsuario;
  }
}
