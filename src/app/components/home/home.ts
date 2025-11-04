import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  constructor(private titleService:Title, private router:Router) {
    this.titleService.setTitle('Login');
  }
  emailUsuario:string = "";
  senhaUsuario:string = "";

  EmailInserido(){
    try{
      if(this.emailUsuario.includes("@") && this.emailUsuario.includes(".com")){
        console.log("formato correto");

      }else{
        throw new Error('Formato incorreto');
      }
    }catch(error:any){
      alert(`Erro: ${error.message}`);
    }
  }


  AnalisarEmail(){
    try{
      if (this.emailUsuario === ""){
        throw new Error("O campo do email nao pode estar vazio");
      }else{
        console.log("Email ok");
      }
    }catch(error:any){
      alert(`Erro: ${error.message}`);
    }
  }


  SenhaInserida(){
    try{
      if(this.senhaUsuario.length >=6 && this.senhaUsuario.length <= 20){
        console.log("Primeira fase da senha ok!");
      }else{
        throw new Error("Sua senha esta abaixo da meta");
      }
    }catch(error:any){
      alert(`Erro: ${error.message}`);
    }
  }


  AnalisarSenha(){
    try{
      if(this.senhaUsuario === ""){
        throw new Error('O campo da senha nao pode estar vazio');
      }else{
        console.log("Senha ok");
      }
    }catch(error:any){
      alert(`Erro: ${error.message}`);
    }
  }

  Verificacao(event:any){
    this.EmailInserido();
    this.AnalisarEmail();
    this.SenhaInserida();
    this.AnalisarSenha();
    
    const emailValido = this.emailUsuario.includes("@") && this.emailUsuario.includes(".com");
    const senhaValida = this.senhaUsuario.length >=6 && this.senhaUsuario.length <= 20;
    
    if (emailValido && senhaValida){
      this.router.navigate(["inicio"]);
    }
  }
  BotaoCadastro(event:any){
    this.router.navigate(["cadastro"]);
  }
}
