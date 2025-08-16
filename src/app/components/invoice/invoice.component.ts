import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { Invoice } from '../model/Invoice'; // <--- VERIFICA Y CORRIGE ESTA RUTA

// Importa los componentes hijos si son standalone
import { CompanyViewComponent } from '../company-view/company-view.component';
import { CustomerViewComponent } from '../customer-view/customer-view.component';
import { InvoiceDetailComponent } from "./invoice-detail/invoice-detail.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceDetailComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.service.getInvoice().subscribe({
      next: (data: Invoice) => {
        this.invoice = data;
        console.log('Datos recibidos del backend:', data);
      },
      error: (error: any) => { // <--- CORRECCIÓN AQUÍ: asigna el tipo 'any'
        console.error('Error al obtener datos del backend:', error);
        console.error('Asegúrate de que el backend esté en puerto 3000');
      }
    });
  }
}