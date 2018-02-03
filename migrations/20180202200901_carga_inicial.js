// insert de 5 pessoas
const pessoas = [
    { nomepessoa: 'Will', telefonepessoa: '85991212121' ,dtnascimentopessoa:2018/02/02},
    { nomepessoa: 'Erick', telefonepessoa: '85989898989', dtnascimentopessoa:2013/02/02},
    { nomepessoa: 'Karol', telefonepessoa: '85989898989' ,dtnascimentopessoa:2011/02/02},
    { nomepessoa: 'Steffani', telefonepessoa: '85989898989', dtnascimentopessoa:2000/02/02},
    { nomepessoa: 'Michael', telefonepessoa: '85996707871' ,dtnascimentopessoa:1994/02/02}
  ]
  
  exports.up = knex => knex('pessoa').insert(pessoas)
  
  exports.down = knex => knex('pessoa').del()
    //.whereIn('telefone', pessoas.map(e => e.telefone))
