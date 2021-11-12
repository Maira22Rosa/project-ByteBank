import { Component,OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //criando propriedade pro component app-extrato
  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
    this.service.pegarTodasTransferencias().subscribe((transferencias: Transferencia[])=> {
      this.transferencias = transferencias;
      console.table(transferencias);      
    })
  }

}
