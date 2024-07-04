function calculatrice( nb1, nb2, operator ){

    if (isNaN(nb1) || isNaN(nb2))
        return null;

    switch (operator) {
        case '+':
            return nb1 + nb2;
        case '-':
            return nb1 - nb2;
        case '*':
            return nb1 * nb2;
        case '/':
            if (nb2 == 0)
                return null;
            
            let resultat = (nb1 / nb2).toFixed(2).toString();
            return Number(resultat);
    }
}

module.exports = calculatrice;