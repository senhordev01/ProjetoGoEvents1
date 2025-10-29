import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tarefas',
  imports: [],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class Tarefas {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projetoID = this.route.snapshot.paramMap.get('id');
    console.log('Projeto carregado:', projetoID);
  }
  
}
