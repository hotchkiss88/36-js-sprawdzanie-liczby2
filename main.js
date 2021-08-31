function cf(x, y) {
    if ((x === 20) || (y === 20)) {
        return "true";
    } else if (x + y <= 20) {
        return "true";
    } else {
        return "false";
    }
}

// console.log(cf(0, 20));