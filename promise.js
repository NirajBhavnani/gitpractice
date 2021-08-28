function add(a, b){
    return new Promise(
        function (resolve, reject){
            if(b>0){
                resolve(a+b);
            }
            else{
                reject("Value rejected");
            }
        }
    );
}

add(3,0).then((sum) => console.log(sum)).catch((error) => console.log("Because of the error: "+error));