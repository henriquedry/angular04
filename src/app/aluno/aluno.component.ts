import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../domain/aluno';
import { AlunoService } from '../service/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  

  alunos : Aluno[]; //armazena os contratos do servidor remoto


  constructor(private alunoService : AlunoService) { 
    this.getAlunos();

}
  ngOnInit() {
  }

  getAlunos(){
    this.alunoService.getAlunos()
    .subscribe(response =>{
      //recebe JSON
      this.alunos = response['data'];
      console.log(response);
    })
  }



}
