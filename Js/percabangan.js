let nilai = -2
console.log(`Nilai Alex=`+nilai);

if (nilai>100) {
    console.log("Nilai anda tidak memenuhi syarat");
} else if (nilai>=90) {
    console.log("Selamat, Nilai anda A");
} else if (nilai>=80) {
    console.log("Nilai anda B");
} else if (nilai>=70) {
    console.log("Nilai anda C");
} else if (nilai>=60) {
    console.log("Nilai anda D");
} else if (nilai>=0) {
    console.log("Remedial");
} else { console.log("Nilai tidak memenuhi syarat");}

console.log(" ");

//////////////////////////

let warung = prompt(
    "Tuliskan warung tempat anda inging memesan di bawah\n\nWarung:\n1) Tradisional\n2) Kekinian"
)

if (warung === 'Tradisional' || warung === '1') {
    let makanan = prompt(
        '        [Warung Tradisional/switch case]\n"Silahkan Pilih daerah asal makanan yang tersedia:" \n(Sunda/Jawa/Bali/Padang)'
    )
    switch (makanan) {
            case '1':
            case 'sunda':
            case 'Sunda':
                let sunda = prompt(
                    "Masukkan nomor dari menu yang ingin anda pilih: (1) Nasi Sunda, (2) Roti Sunda, (3) Mie Sunda"
                )
                    switch (sunda) {
                        case 'Nasi':
                        case 'nasi':
                        case '1':
                            sunda = "Nasi sunda"
                            alert(`${sunda} segera dibuat`);
                            console.log(`${sunda} segera dibuat`);
                            break;
                        case 'Roti':
                        case 'roti':
                        case '2':
                            sunda = `Roti sunda`
                            alert(`${sunda} segera dibuat`);
                            console.log(`${sunda} segera dibuat`);
                            break;
                
                        case 'Mie':
                        case 'mie':
                        case '3':
                            sunda = `Mie sunda`
                            alert(`${sunda} segera dibuat`);
                            console.log(`${sunda} segera dibuat`);
                            break;

                        default:
                            alert("Makanan tersebut tidak tersedia di menu kami");
                            console.log("Makanan tersebut tidak tersedia di menu kami");
                            break;
                    }
                break;
            
            case '2':
            case 'jawa':
            case 'Jawa':
                let jawa = prompt(
                    "Masukkan nomor dari menu yang ingin anda pilih: (1) Nasi Jawa, (2) Roti Jawa, (3) Mie Jawa"
                )
                    switch (jawa) {
                        case 'Nasi':
                        case 'nasi':
                        case '1':
                            jawa = `Nasi jawa`
                            alert(`${jawa} segera dibuat`);
                            console.log(`${jawa} segera dibuat`);
                            break;
                        case 'Roti':
                        case 'roti':
                        case '2':
                            jawa = `Roti jawa`
                            alert(`${jawa} segera dibuat`);
                            console.log(`${jawa} segera dibuat`);
                            break;
                
                        case 'Mie':
                        case 'mie':
                        case '3':
                            jawa = `Mie jawa`
                            alert(`${jawa} segera dibuat`);
                            console.log(`${jawa} segera dibuat`);
                            break;

                        default:
                            alert(`Makanan tersebut tidak tersedia di menu kami`);
                            console.log(`Makanan tersebut tidak tersedia di menu kami`);
                            break;
                    }
                break;
            case '3':
            case 'padang':
            case 'Padang':
                let Padang = prompt(
                    `Masukkan nomor dari menu yang ingin anda pilih: (1) Nasi Padang, (2) Roti Padang, (3) Mie Padang`
                )
                    switch (Padang) {
                        case 'Nasi':
                        case 'nasi':
                        case '1':
                            Padang = `Nasi padang`
                            alert(`${Padang} segera dibuat`);
                            console.log(`${Padang} segera dibuat`);
                            break;
                        case 'Roti':
                        case 'roti':
                        case '2':
                            Padang = `Roti padang`
                            alert(`${Padang} segera dibuat`);
                            console.log(`${Padang} segera dibuat`);
                            break;
                
                        case 'Mie':
                        case 'mie':
                        case '3':
                            Padang = `Mie padang`
                            alert(`${Padang} segera dibuat`);
                            console.log(`${Padang} segera dibuat`);
                            break;

                        default:
                            alert(`Makanan tersebut tidak tersedia di menu kami`);
                            console.log(`Makanan tersebut tidak tersedia di menu kami`);
                            break;
                    }
                break;
            case '4':
            case 'bali':
            case 'Bali':
                let bali = prompt(
                    `Tulis menu yang ingin anda pilih: (1) Nasi Bali, (2) Roti Bali, (3) Mie Bali`
                )
                    switch (bali) {
                        case 'Nasi':
                        case 'nasi':
                        case '1':
                            bali = `Nasi Bali`
                            alert(`${bali} segera dibuat`);
                            console.log(`${bali} segera dibuat`);
                            break;
                        case 'Roti':
                        case 'roti':
                        case '2':
                            bali = `Roti Bali`
                            alert(`${bali} segera dibuat`);
                            console.log(`${bali} segera dibuat`);
                            break;
                
                        case 'Mie':
                        case 'mie':
                        case '3':
                            bali = `Mie Bali`
                            alert(`${bali} segera dibuat`);
                            console.log(`${bali} segera dibuat`);
                            break;

                        default:
                            alert(`Makanan tersebut tidak tersedia di menu kami`);
                            console.log(`Makanan tersebut tidak tersedia di menu kami`);
                            break;
                    }
                break;
            default:
                alert(`Pilihan anda tidak tersedia di warung kami`)
                console.log(`Pilihan anda tidak tersedia di warung kami`)
                break;
    }

} else if (warung === 'Kekinian'||warung === '2') {
    let makanan = prompt(`[Warung Kekinian/if else]\nTulis jenis makanan yang kamu mau:\n(Boba/Mie/Seblak)`)
        if (makanan === 'Boba' || makanan === '1' ) {

            let bakso = prompt
                (`Boba:\n1. Cokelat\n2. Matcha\n3. Keju`);

            if (bakso === '1') {
                alert(`Boba cokelat segera disajikan`);
                console.log(`Boba cokelat segera disajikan`);
            } if (bakso === '2') {
                alert(`Boba matcha segera disajikan`);
                console.log(`Boba matcha segera disajikan`);
            } if (bakso === '3') {
                alert(`Boba keju segera disajikan`);
                console.log(`Boba keju segera disajikan`);
            } else {alert(`Pilihan anda tidak tersedia`);
            console.log(`Pilihan anda tidak tersedia`);}
        
        } else if (makanan === 'Mie' || makanan === '2' ) {
            
            let mie = prompt(`Mie:\n1. Goreng\n2. Kuah\n3. Nyemek`);

            if (mie === '1') {
                alert(`Mie goreng segera disajikan`);
                console.log(`Mie goreng segera disajikan`);
                
            } if (mie === '2') {
                alert(`Mie kuah segera disajikan`);
                console.log(`Mie kuah segera disajikan`);
                
            } if (mie === '3') {
                alert(`Mie nyemek segera disajikan`);
                console.log(`Mie nyemek segera disajikan`);
                
            } else {alert(`Pilihan anda tidak tersedia`);
            console.log(`Pilihan anda tidak tersedia`);}

        } else if (makanan === 'Seblak' || makanan === '3' ) {
            
            let seblak = prompt(`Seblak:\n1. Ceker\n2. Makaroni\n3. Mie`);
            
            if (seblak === `1`) {
                alert(`Seblak ceker segera disajikan`);
                console.log(`Seblak ceker segera disajikan`);
                
            } if (seblak === `2`) {
                alert(`Seblak makaroni segera disajikan`);
                console.log(`Seblak makaroni segera disajikan`);
                
            } if (seblak === `3`) {
                alert(`Seblak mie segera disajikan`);
                console.log(`Seblak mie segera disajikan`);
                
            } else {alert(`Pilihan anda tidak tersedia`);
            console.log(`Pilihan anda tidak tersedia`);}

        } else {
            alert(`Mohon maaf, Warung Pilihan anda tidak tersedia`);
            console.log(`Mohon maaf, Warung Pilihan anda tidak tersedia`);}
    } else {
        alert(`Warung tersebut tidak ada di sini`)
    }