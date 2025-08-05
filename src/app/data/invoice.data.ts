import { Invoice } from "../models/Invoice";

export const invoiceData:Invoice = {
    id:"001",
    company:{
        ruc:"1792285747001",
        name:"Clear Minds Consultores",
        address:{
            city:"Quito",
            principalStreet:"Juan Pablo Sanz",
            secondaryStreet:"Iñaquito",
            code:"N-57"
        }
    },
    customer:{
        id:"1714616123",
        name:"Santiago",
        surname:"Mosquera",
        address:{
            city:"Quito",
            principalStreet:"Tejar",
            secondaryStreet:"Cerro Narrio",
            code:"N-96"
        }
    },
    items:[
        {
            id:100,
            product:{
                id:500,
                name:"Papas Rufles",
                price:0.50,
                description:"Las papas más sabrosonas",
                category:{
                    id:1,
                    name:"Golosinas"
                }
            },
            quantity:23
        },
        {
            id:101,
            product:{
                id:550,
                name:"Doritos",
                price:0.60,
                description:"Doritos de queso",
                category:{
                    id:1,
                    name:"Golosinas"
                }
            },
            quantity:50
        },
        {
            id:102,
            product:{
                id:580,
                name:"Kchitos",
                price:0.30,
                description:"Kchitos para kchudos",
                category:{
                    id:1,
                    name:"Golosinas"
                }
            },
            quantity:100
        },
    ]
}