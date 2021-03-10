import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: DataPagina = {} as DataPagina;
  cargado: boolean = false;

  constructor(private http: HttpClient) { 
    this.http.get('assets/data/data-pagina.json').subscribe( (resp: DataPagina) => {
      this.cargado = true;
      this.info = resp;
    });
  }
}
