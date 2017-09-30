
(function inicio(){
// alert('funciona');
    for(let x=1; x<=10; x++){
        document.write(`<h2>Tabla del ${x}</h2>`);
        for(let z=1; z<=10; z++){
            let suma = x * z;
            document.write(`<h4>${x} * ${z} = ${suma}`);
        }
    }
})();