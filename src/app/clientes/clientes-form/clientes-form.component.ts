import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Cliente } from '../cliente'
import { ClientesService } from '../../clientes.service'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    if (params && params.value && params.value.id) { // Quer dizer que passou o id
      this.id = params.value.id;
      this.service
        .getClienteById(this.id)
        .subscribe(response => this.cliente = response,
          errorResponse => this.cliente = new Cliente() // Ser nao houver cliente, nao faz nada. Instancia novo cliente
        )
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-lista']);
  }

  onSubmit() {
    if (this.id) {

      this.service
        .atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
        })

    } else {
      this.service
        .salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
          //console.log(this.errors);
          //console.log(errorResponse.error.errors[0].defaultMessage);
          //console.log(errorString.split(',' , 3) );
          //console.log(this.errors[0]);
          //console.log(this.errors.find( ({ defaultMessage }) => defaultMessage === 'O campo CPF é obrigatório.' ));
          //console.log(errorResponse.error.errors)
        })
    }

  }

}
