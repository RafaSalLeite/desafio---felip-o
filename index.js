let nome = "malu";
let xp = 7000; // ouro
let nivel = "";

if(0<=xp && xp<=1000){
    nivel = "ferro";
}else if(1001<xp && xp<=2000){
    nivel = "bronze";
}else if(2001<xp && xp<=5000){
    nivel = "prata";
}else if(5001<xp && xp<=7000){
    nivel = "ouro";
}else if(7001<xp && xp<=8000){
    nivel = "platina";
} else if(8001<xp && xp<=9000){
    nivel = "ascendente";
}else if(9001<xp && xp<=10000){
    nivel = "imortal";
}else if(10001<=xp){
    nivel = "radiante";
}else{
    nivel = "não encontrado.";
}

console.log("O herói de nome "+nome+" está no nível de "+nivel);