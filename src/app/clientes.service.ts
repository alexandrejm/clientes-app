import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {  //Em vez de <Cliente> pode-se usar <any>
    return this.http.post<Cliente>(`${this.apiURL}`, cliente)
  }

  atualizar(cliente: Cliente): Observable<any> {  //Usou <any> pq na resposta o backend nao retorna nada
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente)
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {  //Usou <any> pq na resposta o backend nao retorna nada
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }

  /* Clientes Manual
  getClientes() : Cliente[] {
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Fulano';
    cliente.dataCadastro = '18/04/2020';
    cliente.cpf = '12345678900';
    return[cliente]
  } 
  */
}
