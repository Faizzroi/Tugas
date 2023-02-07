
var reactNative = ['Hafif',' Dayat',' Wandi' ]
var reactJs = [' Yusuf', ' Luthfi', ' Tompel']

var JsDivision=reactNative.concat(reactJs)
document.write(`Java Script Division = `, JsDivision)

document.write(`<br>`)
document.write(`<br><hr>`)
document.write(`<hr>`)
document.write(`<br>`)

var nilai = [ 5, 9, 6, 7, 9, 8, 10, 7, 8]
document.write(nilai, `<br><br>`);
var length = nilai.length
console.log(length, `<br>`);
document.write(`jumlah angka=`, length, `<br><br>`);
var total = nilai[0]
console.log(total, `<br>`);

{
    // let total = nilai.reduce((partialSum, a) => partialSum + a, 0);
    for (let i = 1; i < length; i++) {
        total+=nilai[i]
    }
    mean=(total/length)
    document.write(`total keseluruhan= `, total,`<br><br>`);
    document.write(`nilai mean= `, `${total}/${length}`, ` = `, mean);
}

document.write(`<br>`)
document.write(`<br><hr>`)
document.write(`<hr>`)
document.write(`<br>`)


for (let k=0; k<length;){
    if(nilai[k] > nilai[k+1]){
        k=0;
        // document.write(k, `=k<br><hr>`);
        for (let i = 0; i < length; ) {
            if (nilai[i] > nilai[i+1]){
                c=nilai[i]
                // document.write(c, `=c<br><hr>`);
                // document.write(i, `=i<br><hr>`);
                nilai.splice(i, 1)
                // document.write(nilai, `  <br><hr>`);
                nilai.splice(i+1, 0, c)
                // document.write(nilai, `  <br><hr>`);
        } else i++
        // document.write(i, `=i<br><hr>`);
        // document.write(nilai, ` <br><hr>`);
    }
} else k++; 
    // document.write(k, `=k<br><hr>`);
    // document.write(p, `=p<br><hr>`);
    // document.write(j, `=j<br><hr>`);


}
document.write(nilai, ` <br><br>`);
// nilai.sort((a, b) => a - b)
// document.write(nilai, `<br><hr>`);

let Lastindex = nilai.length - 1;
let evenIndex = length/2
let Midindex = (length-1)/2;
median = (nilai[evenIndex]+nilai[evenIndex-1])/2

console.log(nilai)
console.log(` `)
console.log(Lastindex)
console.log(` `)
console.log(nilai.length/2)
console.log(` `)
console.log(Midindex)
console.log(` `)


// document.write(`nilai mean= `, (nilai[0]+nilai.slice(-1)[0])/2)
if (length % 2 == 0) {
    document.write(`nilai median= `, median)    
} else {
    document.write(`nilai median= `, (nilai[Midindex]))
}

document.write(`<br><br>`);

var mf = 1;
var m = 0;
var modus=[];
for (var i=0; i<nilai.length; i++)
{
    for (var j=i; j<nilai.length; j++)
    {
        // document.write(`i${i},j${j}`,`<br>`); 
        if (nilai[i] == nilai[j]){
            m++;
            // document.write(`mj-${j}= `, m,`<br>`); 
            if (mf<m)
            {
                // document.write(`mf${i}= `, mf,`<br>`);
                mf=m; 
                // document.write(`mf${i}= `, mf,`<br>`);
                // document.write(`modus${i}= `, modus,`<br>`);
                modus.length=0
                // document.write(`length${i}= `, lengthm,`<br>`);
                // document.write(`modus splice${i}= `, modus,`<br>`);
            }
            
            if (mf>1) {
                if (mf==m) {
                    // document.write(`<br>`);
                    // document.write(`modus splice${i}= `, modus,`<br>`);
                    // document.write(`nilai${i}= `, nilai[i],`<br>`);
                    // document.write(`mj-${j}= `, m,`<br>`); 
                    // document.write(`mf${i}= `, mf,`<br>`);
                    // document.write(`modus splice${i}= `, modus,`<br>`);
                    modus.push(nilai[i]);
                    }
                }
            }
    } m=0;
}


document.write(`modus= `, modus);
document.write(`<br><br>`);
document.write(`frequensi modus= `, mf);
document.write(`<br>`);
document.write(`<br><hr>`);
document.write(`<hr>`);
document.write(`<br>`);

// for (let i = 0; i < length; i++) {
//     for (let n=0; n=length; n++) {
//         if (nilai[i]=nilai[n]) {
//                 count++
//         }
//     }
// }
   
// for (let i = 0; i < length; i++) {
//     if (count<count) {
//         count=0
//     } else 
    
//     for (let n=0; n=length; n++) {
//         if (nilai[i]=nilai[n]) {
//                 count++
//         }
//     }
// }
    
// for (let i = 0; i < length; i++) {
//     if(count>modus){
//         modus=count

//     } else count=0
//     for (let n=0; n=length; n++) {
//         if (nilai[i]=nilai[n]) {
//                 count++
//                 modus++
//             const element = object[key];
//         }
//     }
// }

let nilaiy=0

for (let y = 0; y < length; y++) {
    // nilaix=(nilai[y]- mean);
    nilaiy+=(nilai[y]- mean)*(nilai[y]- mean);
    // nilaiz=((nilai[y]- mean)**2);
    // document.write(y);
    // document.write(`<br>`)
    // document.write(nilai[y]);
    // document.write(`<br>`)
    // document.write(nilaix);
    // document.write(`<br>`)
    // document.write(`<br>`)
    // document.write(nilaiz);
    // document.write(`<br>`)
    // document.write(`<br>`)
    // document.write(nilaiy, ` = y`);
    // document.write(`<br>`)
    // document.write(`<br>`)

} 

// document.write(nilaiy, ` = y`);
let simpanganKuadrat=nilaiy/length
document.write(`simpangan baku\u00B2 = `, simpanganKuadrat)
let simpangan=Math.sqrt(simpanganKuadrat)

document.write(`<br><br>`)
document.write(`simpangan baku= `,simpangan)