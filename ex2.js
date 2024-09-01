const n = 4;
const fibonacci1 = 5 * (n**2) + 4;
const fibonacci2 = 5 * (n**2) - 4;

if (Number.isInteger(Math.sqrt(fibonacci1)) || Number.isInteger(Math.sqrt(fibonacci2)) ) {
   console.log(`${n} está na sequencia de fibonacci`)
} else (
   console.log(`${n} não está na sequencia de fibonacci`)
)
