let tab = [1, 2, 3]

function miroir() {
    let tabm = []

    for (let l = 0; l < tab.length; l++) {
        tabm.push(tab[l])
    }

    for (let i = tab.length - 1; i >= 0; i--) {
        tabm.push(tab[i]);
    }

    return tabm
}

console.log(miroir(tab));