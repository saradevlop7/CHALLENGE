 
 //1. Crée une fonction.

//2. On va faire une condition où n est inférieur ou égal à 2 ; si c’est le cas, on retourne n.

//3. Après, on fait une boucle où i est inférieur à n, et à l’intérieur on change les valeurs des variables : on crée une variable temporaire temp qui vaut a + b, ensuite on donne à a la valeur de b, et à b celle de temp. À la fin, on retourne b.
function saut(n) {
    if (n <= 1) return n;

    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
   return b;
}

console.log(saut(4));

