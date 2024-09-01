const string = 'Target';
let aux = '';

for (let i = 0; i < string.length; i++) {
   const pos = string[i]
   aux = pos + aux;
}

console.log(aux)