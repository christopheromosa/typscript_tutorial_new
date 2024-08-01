// Classes

class Invoice{
    // readonly client:string
    // private details:string
    // public amount:number

    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){}

    format(){
        
        return `${this.client} owes ${this.amount} for ${this.details} `
    }

}


const invOne = new Invoice('chris','system update',456666)
const invTwo = new Invoice('youngkim','Error and testing',45226)

// console.log(invOne.format(),invTwo);

// let invoices: string[]= [];

let invoices: Invoice[] = []
// invoices.push({name:"john"})
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices);
// invOne.client = 'something else'

invoices.forEach((inv)=>{
    console.log(inv.client,inv.amount,inv.format());    
})




        
    