import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/Invoice';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{
  invoice!:Invoice;

  constructor(private service: InvoiceService) {
    
  }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
