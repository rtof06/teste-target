const faturamentos = [
   12000.50,
   13450.00,
   9800.75,
   0.00,
   15720.20,
   14300.00,
   15890.60,
   16450.80,
   15230.40,
   14500.50,
   0.00,
   16780.00,
   20400.70,
   14990.20,
   14000.00,
   16050.00,
   14890.30,
   0.00,
   16300.00,
   15750.40,
   14600.50,
   15820.60,
   16000.00,
   14450.20,
   0.00,
   15990.70,
   16840.50,
   15300.60,
   14700.40,
   16550.80,
   17200.00
];

function getMin(f) {
   let menorFaturamento = f[0];

   for(let i = 1; i < f.length; i++) {
      if (f[i] < menorFaturamento) {
         menorFaturamento = f[i];
      }
   }
   return menorFaturamento;
}

function getMax(f) {
   let maiorFaturamento = f[0];

   for(let i = 1; i < f.length; i++) {
      if (f[i] > maiorFaturamento) {
         maiorFaturamento = f[i];
      }
   }
   return maiorFaturamento;
}

function supMedia(f) {
   const listaFiltrada = [];
   for (let i in f) {
      if (i != 0) {
         listaFiltrada.push(i);
      }
   }

   let soma = 0;
   for (let i = 0; i < listaFiltrada.length; i++) {
      soma += Number(listaFiltrada[i]);
   }

   const media = soma / listaFiltrada.length;
   
   let dias = [];
   for(let i = 0; i < listaFiltrada.length; i++) {
      if (f[i] > media) {
         dias.push(f[i]);
      }
   }

   const numeroDeDias = dias.length;

   return numeroDeDias;
}

console.log(supMedia(faturamentos))