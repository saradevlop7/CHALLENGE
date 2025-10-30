let number=[1,2,4,-8,7,9]
let somme=0
for (let i = 0; i < number.length; i++) {
    if (number [i]<0) {
     break;   
    }
    else{
    somme=somme+number[i];

    }
    
}
console.log(somme);
