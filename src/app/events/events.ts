import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
export class Events {
  nomeUsuario: string = "";
  Botoes: {id:number, label:string}[] = [];
  contador: number = 1;
  Usuario: string = "Normal";

  constructor(
    private readonly titleService: Title,
    public router: Router,
    private usuarioService: Usuario
  ) {
    titleService.setTitle('GoEvents');
    this.nomeUsuario = this.usuarioService.getNomeUsuario();
  }

  private dialog = inject(Dialog);

  PaginaProjetos() {
    const dialogRef = this.dialog.open(CriarProjetos, { disableClose: true });

    dialogRef.closed.subscribe((nomeBotao) => {
      if (nomeBotao && typeof nomeBotao === "string" && nomeBotao.trim() !== '') {
        try {
          if (this.Usuario === "Vip" && this.Botoes.length >= 20) {
            throw new Error("Seu limite Vip atingiu o ponto máximo");
          }
          if (this.Usuario === "Normal" && this.Botoes.length >= 10) {
            throw new Error("Você atingiu o seu limite");
          }
          this.Botoes.push({
            id: this.contador,
            label: nomeBotao.trim()
          });

          this.contador++;
        } catch (error: any) {
          alert(error.message);
        }
      } else if (nomeBotao === undefined) {
        console.log("Janela Fechada");
      }
    });
  }
  existeBotaoComId(id: number): boolean {
  return this.Botoes.some(btn => btn.id === id);
}
}
