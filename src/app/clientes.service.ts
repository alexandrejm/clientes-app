import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) { 
    
  }

  salvar( cliente: Cliente ) : Observable<Cliente> {  //Em vez de <Cliente> pode-se usar <any>
    return this.http.post<Cliente>('http://localhost:8080/api/clientes' , cliente)
  }

  getCliente() : Cliente { // Não precisa colocar a tipagem Cliente se não quiser
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Fulano';
    cliente.cpf = '8888888888';
    return cliente;
  }
}
