function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let sum = 0.00

    if (town === "Sofia") {
        if (product ==="coffe") {
           sum = quantity * 0.50;
        } else if (product === "water") {
            sum = quantity * 0.80;
        } else if (product === "beer") {
            sum = quantity * 1.20;
        } else if (product === "sweets") {
            sum = quantity * 1.45;
        } else  {
            sum = quantity * 1.60;
        }
    } else if (town === "Plovdiv") {
        if ( product === "coffe") {
            sum = quantity * 0.40;
        } else if ( product === "water") {
            sum = quantity * 0.70;
        } else if ( product === "beer") {
            sum = quantity * 1.15;
        } else if ( product === "sweets") {
            sum = quantity * 1.30;
        } else {
            sum = quantity * 1.50;
        }
    } else  {
        if (product === "coffe") {
            sum = quantity * 0.45;
        } else if (product === "water") {
            sum = quantity * 0.70;
        } else if (product === "beer") {
            sum = quantity * 1.10;
        } else if (product === "sweets") {
            sum = quantity * 1.35;
        } else { 
            sum  = quantity * 1.55
        }
    }
    console.log(sum)
}

smallShop(["coffee",
"Plovdiv",
"3"])



