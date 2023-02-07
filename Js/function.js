let panjang=12
let lebar=3
let kotak=[];
kotak.push(panjang, lebar)
console.log(kotak);

// const luasPersegi = (panjang=0 , lebar=0) => panjang*lebar

const luasPersegi = (panjang=0 , lebar=0) => {
    const hasil=panjang*lebar
    return document.write(`panjang=${panjang}cm <br>lebar=${lebar}cm <br>luas persegi= ${hasil}cm\u00B2 <br>`)
}

// const luasPersegi2 = (panjang, lebar) => {
//     hasil = this[0] * this[1]
//     return hasil
// }

const volumeBalok = (panjang=0 , lebar=0, tinggi=0) => {
    const hasil=panjang*lebar*tinggi
    return document.write(`<br>panjang=${panjang}cm <br>lebar=${lebar}cm <br>tinggi=${tinggi}cm <br>volume balok= ${hasil}cm\u00B3<br>`)
}

// console.log(kotak.luasPersegi2());
console.log(luasPersegi(4,8));
volumeBalok(4,8,3)