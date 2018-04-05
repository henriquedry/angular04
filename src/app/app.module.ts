import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContratoService } from './services/contrato.service';
import { ContratoComponent } from './contrato/contrato.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoService } from './service/aluno.service';

@NgModule({
  declarations: [
    AppComponent,
    ContratoComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ContratoService, AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
