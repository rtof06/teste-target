const faturamentos = [
   {
      nome: 'SP',
      faturamento: 67836.43
   },
   {
      nome: 'RJ',
      faturamento: 36678.66
   },
   {
      nome: 'MG',
      faturamento: 29229.88
   },
   {
      nome: 'ES',
      faturamento: 27165.48
   },
   {
      nome: 'Outros',
      faturamento: 19849.53
   }
]

let valorTotal = 0;
for (let i = 0; i < faturamentos.length; i++) {
   valorTotal += faturamentos[i].faturamento;
}

faturamentos.forEach(({ nome, faturamento }) => {
   const representatividade = (faturamento * 100) / valorTotal;
   console.log(`${nome}: ${representatividade}%`)
});