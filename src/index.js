module.exports = function toReadable (number) {
    const units = ['','one','two','three','four','five','six','seven','eight','nine'];
    const tens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tys = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    let numtostr = number.toLocaleString('en-In',{ minimumIntegerDigits: 3});

    let outstr = '';
    if ((number === 0)||(number === undefined)){
        outstr = "zero";
    }else {
        if (Number.parseInt(numtostr) >= 100){
            outstr = outstr + units[Number.parseInt(numtostr.substr(0,1))] + " hundred ";
        }
        if (numtostr.substr(1,1) === '0'){
            outstr = outstr + units[Number.parseInt(numtostr.substr(2,1))]
        }
        if ((Number.parseInt(numtostr.substr(1,2)) >= 10)&&(Number.parseInt(numtostr.substr(1,2)) <= 19)){
            outstr = outstr + tens[Number.parseInt(numtostr.substr(1,2))-10];
        }
        if ((Number.parseInt(numtostr.substr(1,2)) >= 20)&&(Number.parseInt(numtostr.substr(1,2)) <= 99)){
            outstr = outstr + tys[Number.parseInt(numtostr.substr(1,1))] + " "+ units[Number.parseInt(numtostr.substr(2,1))];
        }
    }
    return outstr.trim();
}
