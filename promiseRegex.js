function validate(str, regex){
    return new Promise((resolve, reject) => {
        var output = regex.test(str);
        if(output) return resolve('true');
        else if(output==false) return reject('false');
    });
}

// validate('Niraj', /^[A-Z][a-zA-Z]{2}(\w+)?$/).then((success)=>console.log(success)).catch((failure)=>console.log(failure));
validate('Niraj', /^[A-Z][a-zA-Z]{2}(\w+)?$/).then(() => validate("M", /^[mfMF]$/).then(() => validate('niraj.bhavnani@ves.ac.in',
/^[A-Za-z_0-9]+[.]?[A-Za-z_0-9]+[@][A-Za-z0-9]+[.](\w){2,3}[.]?(\w?){2,3}$/).then(
    (success)=>console.log(success)).catch((failure)=>console.log(failure))));