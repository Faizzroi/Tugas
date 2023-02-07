let motor = {nama:`honda`, modifikasi:false, 
bensin:15, 
    pergi: function (number) 
    {sisaBensin = this.bensin - number/2;
    terpakai=number/2
    this.bensin=sisaBensin
    return `motor ${this.nama} melaju sejauh ${number}km dan menghabiskan bensin sebanyak ${terpakai} liter`}, 
    
    isibensin: function (number) 
    {this.bensin+=number;
    return `bensin terisi sebanyak ${number} liter` }
}

let makanan = {nama:`lontong`, kecap:true, 
persediaan:4, 
    makan: function (number) 
    {sisaPersediaan = this.persediaan - number
    this.persediaan=sisaPersediaan
    return `${this.nama} habis sebanyak ${number} porsi dan tersisa ${makanan.persediaan} porsi di dapur`}
}

let pistol = {nama:`ak-47`, automatic:true, 
amunisi:15, tembak: function (number) {
    sisaamunisi = this.amunisi - number;
    this.amunisi=sisaamunisi
    return `${this.nama} menembak sebanyak ${number} amunisi dan menyisakan ${this.amunisi} clip amunisi`}, 
    isiamunisi: function (number) 
    {this.amunisi+=number;
    return `amunisi terisi sebanyak ${number} clip amunisi` }
}

let laptop = {merek:`Asus`, ram:4, 
battery:100, main: function (number) {
    sisabattery = this.battery - number*25;
    terpakai=number*25
    this.battery=sisabattery
    if (this.battery<=0) {
        return `batrai habis`
    } else {
        return `laptop ${this.merek} digunakan selama ${number} jam dan menghabiskan batrai sebanyak ${terpakai}%`} 
    }
}

let kelas = {subjek:`bahasa inggris`, murid: 12, belajar: function () {
    return `sebanyak ${this.murid} murid sedang belajar ${this.subjek}`
    }
}


console.log(`bensin motor ${motor.nama} =`, motor.bensin,`liter`);
console.log(motor.pergi(6));
console.log(`bensin motor ${motor.nama} =`, motor.bensin,`liter`);
console.log(motor.isibensin(2));
console.log(`bensin motor ${motor.nama} =`, motor.bensin,`liter`);

console.log(makanan.makan(1));

console.log(pistol.tembak(2));

console.log(laptop.main(1));

console.log(kelas.belajar());

var jualMobil = {nama:`tompel`, merek:`Avanza`, tahun:2017,
    iklan:function(){
        document.write(`BU , saya ${this.nama}, jual mobil ${this.merek} , tahun ${this.tahun} ,bekas`)
    }
}

jualMobil.iklan()