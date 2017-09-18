function monkeyTrouble(aSmile, bSmile) {
    if (aSmile === bSmile) // лучше всегда ставить скобки,
        return true;       // а то в этих ретурнах легко запутаться
    return false;

    // return aSmile === bSmile; // Такой же эффект, но короче. Лучше так
}