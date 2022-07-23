const nama = "Indrawan Yoswanda";
let usia = 12;

let datadiri = document.getElementById('datadiri');
console.log(datadiri);

function generateBiodata () {
    let promosi;

    if(usia > 10 && usia < 18) {
    promosi = 'Anda dapat promo 80%!';
    }
    else if ( usia > 18 && usia < 30) {
    promosi = 'Anda bayar setengah harga';
    }
    else if(usia > 30) {
    promosi = 'Anda tidak dapat promo';
    }
    else if(usia > 5 && usia < 9) {
    promosi = 'Anda cukup bayar Rp 1.000';
    }
    else {
    promosi = 'Anda dilarang masuk';
    }
    return datadiri.innerHTML = promosi;
   }


console.log(nama);
console.log(usia);

generateBiodata ();