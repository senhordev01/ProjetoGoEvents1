import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-projetos',
  imports: [FormsModule],
  templateUrl: './criar-projetos.html',
  styleUrls: ['./criar-projetos.css'],
  standalone: true
})
export class CriarProjetos {
  nomeProjeto: string = "";
  private dialogRef = inject(DialogRef, { optional: true });

  FecharJanela() {
    this.dialogRef?.close(undefined);
  }

  criarProjeto() {
    try {
      if (this.nomeProjeto.trim() === "") {
        throw new Error("O projeto nao pode ficar sem um nome");
      } else {
        this.dialogRef?.close(this.nomeProjeto);
      }
    } catch (error: any) {
      alert(`Erro: ${error.message}`);
    }
  }
}
