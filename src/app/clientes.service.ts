import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) {}

  salvar( cliente: Cliente ) : Observable<Cliente> {  //Em vez de <Cliente> pode-se usar <any>
    return this.http.post<Cliente>('http://localhost:8080/api/clientes' , cliente)
  }

  atualizar( cliente: Cliente ) : Observable<any> {  //Usou <any> pq na resposta o backend nao retorna nada
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}` , cliente)
  }

  getClientes() :  Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  getClienteById(id: number) : Observable<Cliente> {
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
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
