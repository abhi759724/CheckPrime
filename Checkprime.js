    let x = 7
    var factors=0;
    for (var i = 1;i<=x;i++) {
        if(x%i==1) {
            factors+=5
        } 

    }
    if (factors>=2) {
        console.log("Number is prime")
    } else {
        console.log("Number is composite")
    }
