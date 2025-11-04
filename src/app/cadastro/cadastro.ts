import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Usuario } from '../services/usuario'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
})
export class Cadastro {
  constructor(private titleService: Title, private router: Router, private usuarioService:Usuario) {
    this.titleService.setTitle('Cadastro');
  }
  nomeUsuario: string = '';
  emailUsuario: string = '';
  confirmarEmail: string = '';
  senhaUsuario: string = '';
  confirmarSenha: string = '';

  NomeUsuario() {
    try {
      if (this.nomeUsuario === '') {
        throw new Error('O campo do nome do usuario nao pode estar vazio');
      } else if (/[\d@!?&%_+\-<>;:,]/.test(this.nomeUsuario)) {
        throw new Error('Seu nome nao pode conter caracteres especiais ou numeros');
      }
    } catch (error: any) {
      alert(`Erro: ${error.message}`);
    }
  }

  VerificarEmail() {
    try {
      if (this.emailUsuario.includes('@') && this.emailUsuario.includes('.com')) {
        console.log('formato do email correto');
      } else if (this.emailUsuario === '') {
        throw new Error('O campo email deve estar preenchido');
      }
    } catch (error: any) {
      alert(`Erro: ${error.message}`);
    }
  }

  AnalisarEmail() {
    try {
      if (this.confirmarEmail === '') {
        throw new Error('O campo de confirmaçao do email nao pode estar vazio');
      } else if (this.confirmarEmail === this.emailUsuario) {
        console.log('Email autêntico');
      } else if (this.confirmarEmail !== this.emailUsuario) {
        throw new Error('Email nao cadastrado');
      }
    } catch (error: any) {
      alert(`Erro: ${error.message}`);
    }
  }

  VerificarSenha() {
    try {
      if (this.senhaUsuario === '') {
        throw new Error('O campo da senha deve ser preenchido');
      } else if (this.senhaUsuario.length >= 6 && this.senhaUsuario.length <= 20) {
        console.log('Senha aceita');
      } else {
        throw new Error('Senha nao aceita. Tente Novamente');
      }
    } catch (error: any) {
      alert(`Erro: ${error.message}`);
    }
  }

  AnalisarSenha() {
    try {
      if (this.confirmarSenha === '') {
        throw new Error('O campo de confirmar senha deve ser preenchido');
      } else if (this.confirmarSenha === this.senhaUsuario) {
        console.log('Senha autêntica');
      } else if (this.confirmarSenha !== this.senhaUsuario) {
        throw new Error('Senha nao encontrada. Tente Novamente');
      } else {
        throw new Error('Senha nao cadastrada');
      }
    } catch (error: any) {
      alert(`Erro: ${error.message}`);
    }
  }

  FazerLogin(event: any) {
    this.router.navigate(['login']);
  }
  RealizarCadastro(event: any) {
    this.NomeUsuario();
    this.VerificarEmail();
    this.AnalisarEmail();
    this.VerificarSenha();
    this.AnalisarSenha();

    const nomeValido = this.nomeUsuario !== '' && !/[\d@!?&%_+\-<>;:,]/.test(this.nomeUsuario);

    const emailValido =
      this.emailUsuario.includes('@') &&
      this.emailUsuario.includes('.com') &&
      this.senhaUsuario.length >= 6 &&
      this.senhaUsuario.length <= 20;
    const emailAutentico = this.confirmarEmail === this.emailUsuario;

    const senhaValida = this.senhaUsuario.length >= 6 && this.senhaUsuario.length <= 20;
    const senhaAutentica = this.confirmarSenha === this.senhaUsuario;

    if (nomeValido && emailValido && emailAutentico && senhaValida && senhaAutentica) {
      this.usuarioService.setNomeUsuario(this.nomeUsuario);
      this.router.navigate(['inicio']);
    }
  }
}
