import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ExtratoComponent } from "./extrato/extrato.component";
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";

export const routes: Routes = [
    //redirecionando -caminho que não existe 
    {path: '', redirectTo: 'extrato', pathMatch: 'full'},
    {path: 'extrato', component: ExtratoComponent},
    {path: 'nova-transferencia', component: NovaTransferenciaComponent},
]

@NgModule({
                        //mostrar quais serão as rotas
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}