// filter - filtrando arrays
const pessoa=[
        {nome:'Jean',idade:23},
        {nome:'Lucas',idade:24},
        {nome:'Souza',idade:25},
        {nome:'Araujo',idade:30}
]

const filtrarPessoa=pessoa.filter(obj=>obj.idade>24)
console.log(filtrarPessoa)