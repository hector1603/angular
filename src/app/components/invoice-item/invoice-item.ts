import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../models/InvoiceItem';

@Component({
  selector: 'tr[invoice-item]',
  standalone: true,
  imports: [],
  templateUrl: './invoice-item.html',
})
export class InvoiceItemComponent {
  @Input() item!:InvoiceItem;
}
