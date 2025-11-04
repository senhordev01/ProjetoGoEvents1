import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-tarefas',
  imports: [FormsModule],
  templateUrl: './criar-tarefas.html',
  styleUrls: ['./criar-tarefas.css'],
  standalone:true
})
export class CriarTarefas {
  nomeTarefa:string = "";
  private dialogRef = inject(DialogRef, {optional:true});

  FecharJanela() {
    this.dialogRef?.close(undefined);
  }

  criarTarefa(){
    try{
      if(this.nomeTarefa.trim() === ""){
        throw new Error("A tarefa nao pode ficar sem um nome");
      }else{
        this.dialogRef?.close(this.nomeTarefa);
      }
    }catch(error:any){
      alert(`Erro: ${error.message}`);
    }
  }

}
