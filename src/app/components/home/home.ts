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
    if(this.emailUsuario.includes("@") && this.emailUsuario.includes(".com")){
      console.log("formato correto");
    }else if(this.emailUsuario === ""){
      alert('O campo do email nao pode estar vazio');
    }else{
      alert('Formato incorreto');
    }
  }
  AnalisarEmail(){
    if (this.emailUsuario === ""){
      alert("O campo do email nao pode estar vazio");
    }else{
      console.log("Email ok");
    }
  }
  SenhaInserida(){
    if(this.senhaUsuario.length >=6 && this.senhaUsuario.length <= 20){
      console.log("Primeira fase da senha ok!");
    }else{
      alert("Sua senha esta abaixo da meta");
    }
  }
  AnalisarSenha(){
    if(this.senhaUsuario === ""){
      alert('O campo da senha nao pode estar vazio');
    }else{
      console.log("Senha ok")
    }
  }

  Verificacao(event:any){
    this.EmailInserido();
    this.AnalisarEmail();
    this.SenhaInserida();
    this.AnalisarSenha();
    
    const emailValido = this.emailUsuario.includes("@") && this.emailUsuario.includes(".com");
    const emailNaoValido = this.emailUsuario.trim() === "";
    const senhaValida = this.senhaUsuario.length >=6 && this.senhaUsuario.length <= 20;
    const senhaNaoValida = this.senhaUsuario.trim() === "";
    
    if (emailValido && !emailNaoValido && senhaValida && !senhaNaoValida){
      this.router.navigate(["inicio"]);
    }
  }
  BotaoCadastro(event:any){
    this.router.navigate(["cadastro"]);
  }
}
