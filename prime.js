  let x = 7
    var factors=0;
    for (var i = 1;i<=x;i++) {
        if(x%i==0) {
            factors++
        } 

    }
    if (factors==2) {
        console.log("Number is prime")
    } else {
        console.log("Not prime")
    }