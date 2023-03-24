/*console.clear();
const real = Math.floor(Math.random()*100);

const dolar = real / 5.17;
const euro = real / 6.14;
const peso = real / 0.05;

console.log("valor em real:" + real);
console.log("valor em dolar:" + dolar);
console.log("valor em euro:" + euro);
console.log("valor em peso:" + peso);
*/


console.clear();

// const idade = Math.floor(Math.random() * 100);//

const idade = Math.floor(Math.random() * 100);

console.log(`idade gerada: ${idade}`); 

if(idade <= 13){
    console.log("criança");
}else if(idade <= 18){

    console.log("adolescente");
}
else if(idade <= 60){
    console.log("adulto");
}
else {
    console.log("idoso");
}

