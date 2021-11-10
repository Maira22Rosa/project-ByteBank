import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //criando propriedade pro component app-extrato
  @Input() transferencias: any[];

  constructor() { }

  ngOnInit(): void {
  }

}