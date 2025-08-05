import { Company } from "./Company";
import { Customer } from "./Customer";
import { InvoiceItem } from "./InvoiceItem";

export class Invoice {
    id!:string;
    company!:Company;
    customer!:Customer;
    items!:InvoiceItem[];
}