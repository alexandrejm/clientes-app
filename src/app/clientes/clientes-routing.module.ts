import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { AuthGuard } from '../auth.guard'


const routes: Routes = [
  { path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'clientes-form', component: ClientesFormComponent},
    { path: 'clientes-form/:id', component: ClientesFormComponent},
    { path: 'clientes-lista', component: ClientesListaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
