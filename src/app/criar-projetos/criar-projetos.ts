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
  nomeRepresentante:string = "";
  emailRepresentante:string = "";
  previsaoTermino:string = "";
  minPrevisao:string = "2025-01-01";
  private dialogRef = inject(DialogRef, { optional: true });

  FecharJanela() {
    this.dialogRef?.close(undefined);
  }

  criarProjeto() {
    const Previsao = new Date(this.previsaoTermino);
    const limiteMinimo = new Date(this.minPrevisao);
    try {
      if (this.nomeProjeto.trim() === "") {
        throw new Error("O projeto nao pode ficar sem um nome");
      }else if(this.nomeRepresentante.trim() === ""){
        throw new Error("O nao é possível criar um projeto sem o nome do representante ");
      }else if(this.emailRepresentante.trim()=== ""){
        throw new Error("O nao é possível criar um projeto sem o email do representante ");
      }else if(!this.emailRepresentante.includes("@") && !this.emailRepresentante.includes(".com")){
        throw new Error("A formataçao do email está incorreta");
      }else if(this.previsaoTermino === ""){
        throw new Error("O campo da previsao nao pode ficar vazio");
      }else if (Previsao < limiteMinimo){
        throw new Error("Data abaixo do limite");
      } else {
        this.dialogRef?.close(this.nomeProjeto);
      }
    } catch (error: any) {
      alert(`Erro: ${error.message}`);
    }
  }
}
