import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CriarTarefas } from '../criar-tarefas/criar-tarefas';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarefas',
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefas.html',
  styleUrls: ['./tarefas.css'],
  standalone:true
})
export class Tarefas{
  private dialog = inject(Dialog);
  contador:number = 1;
  checkBox:string[] = [];

  constructor(private router:Router){}

  PaginaTarefas(){
    const dialogRef = this.dialog.open(CriarTarefas,{disableClose:true});

    dialogRef.closed.subscribe((nomeCheckBox) => {
      if(nomeCheckBox && typeof nomeCheckBox === "string" && nomeCheckBox.trim() !== ""){
        try{
          if(this.checkBox.length === 10){
            throw new Error("Voce atingiu o seu limite de tarefas criadas");
          }
          this.checkBox.push(nomeCheckBox.trim());
          this.contador++;
        }catch(error:any){
          alert(`Erro: ${error.message}`);
        }
      }else if (nomeCheckBox === undefined){
        console.log("Janela Fechada");
      }
    });
  }
  
  SairTarefa(){
    this.router.navigate(["inicio"]);
  }
}
