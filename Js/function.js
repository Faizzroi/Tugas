let panjang=12
let lebar=3
let kotak=[];
kotak.push(panjang, lebar)
console.log(kotak);

const luasPersegi = (panjang=0 , lebar=0) => panjang*lebar

const luasPersegi2 = (panjang, lebar) => {
    hasil = this[0] * this[1]
    return hasil
}

const volumeBalok = (panjang=0 , lebar=0, tinggi=0) => {
    const hasil=panjang*lebar*tinggi
    return document.write(`panjang:${panjang} lebar:${lebar} tinggi:${tinggi} Luas persegi panjang: ${hasil}`)
}

// console.log(kotak.luasPersegi2());
console.log(luasPersegi(4,8));