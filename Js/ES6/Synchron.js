function kelipatan100(angka) {
    let p=angka
    y=0
    console.log(`${angka} dibagi 100`);
    for (let x = p; x >= 1; x--) {
        if (x%100 == 0) {
            y++
            console.log(`${x} diambil seratus`);
        }
        
    }
    console.log(`${angka} dibagi 100 hasilnya ${y}`);
}
kelipatan100(400)

console.log(``);

function penjumlahan(...params) {
    let d=0
    let total = params.map(x => 
        {
            d++
            console.log(`${x} dikali 2 = ${x*2}`);
            return x
        })
}
penjumlahan(1,3,5,1,6)
console.log(` `);

function jalan( a=0, b=0) {
    let letak=0
    letak+=a
    console.log(`Asep melangkah maju sebanyak ${a} langkah`);
    letak-=b
    console.log(`Kemudian Asep melangkah mundur sebanyak ${b} langkah`);
    return `Asep berada ${letak} langkah dari posisi awal`;

}

console.log(jalan(4, 1));
console.log(` `);

function kegiatan(a, b, c, d) {

    setTimeout(() => {
        console.log(`Makan kita bos q`);
    }, a*1000)
    setTimeout(() => {
        console.log(`Piket dulu bro`);
    }, b*1000)
    setTimeout(() => {
        console.log(`Jangan lupa mandi`);
    }, c*1000)
    setTimeout(() => {
        console.log(`Nyalain lampu dong`);
    }, d*1000)
}

function isi(params) {
    a=prompt(`urutkan kegiatan makan`)
    b=prompt(`urutkan kegiatan mandi`)
    c=prompt(`urutkan kegiatan piket`)
    d=prompt(`urutkan kegiatan nyalakan lampu`)
    kegiatan(a,b,c,d)
}

isi()

bengsin=12

function montor(a, b) {
    console.log(`bensin dalam motor = ${bengsin}liter`);
    motor=0
    motor+=a
    bengsin-=(a/3)
    console.log(`motor berjalan sejauh ${a}km dan menggunakan bensin sebanyak ${a/3} liter`);
    b()
}

function perbaiki(params) {
    setTimeout(()=>{console.log(`memperbaiki motor di tempat servis`)},4000)
}

function mostor(a,b) {
    a()
    b()
}

function cuci(params) {
    setTimeout(()=>{
        console.log(` `),
        console.log(`cuci motor`)},2000)
    
}

function bensin(params) {
    console.log(`sisa bensin adalah ${bengsin} liter`);
}

montor(6, bensin)
console.log(` `);
mostor(perbaiki, cuci)