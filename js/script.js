// Initial References

let decInp = document.getElementById("dec-input");
let binInp = document.getElementById("bin-input");

let errorMsg = document.getElementById("error-msg");

//Convert Decimal to Binary!!!
decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);

    //Converting the decimal value to binary!!!

    binInp.value = decValue.toString(2);
});

//Convert Binary to Decimal!!
binInp.addEventListener("input", () => {
    let binValue = binInp.value;

    //Converting binary number If the number is valid
    if(binaryValidator(binValue))
});