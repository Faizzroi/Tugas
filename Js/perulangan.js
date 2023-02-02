
let n=9

for (y = 0; y <= 8; y++){
    document.write(y * 2, ` `)
    }

document.write (`<br>`)
document.write (`<br>`)
document.write (`<br>`)

for (y = 1; y <= 8; y++){
    document.write(y * 2 - 1, ` `)
    }

document.write (`<br>`)
document.write (`<br>`)

for (let x = 1; x < 7; x++) {
    for (y = 1; y < x; y++){
        document.write(y, ` `);
    }
    document.write (`<br>`)
}

document.write (`<br>`)
document.write (`<br>`)


for (let x = 1; x <= n; x++) {
    for (y = 1; y <= n; y++){
        if (x % 2) {
            document.write(y, ` &nbsp`)
        } else document.write (`* &nbsp`)
    }
    document.write (`<br>`)
}

document.write (`<br>`)
document.write (`<br>`)
document.write (`<br>`)

for (let x = 1; x <= n; x++) {
    for (y = 1; y <= n; y++){
        if (y % 2) {
            document.write(x, ` &nbsp`)
        } else document.write (`* &nbsp`)
    }
    document.write (`<br>`)
}

document.write (`<br>`)
document.write (`<br>`)
document.write (`<br>`)

for (let x = 1; x <= n; x++) {
    for (y = 1; y <= n; y++){
       if (x==y) {
        document.write(y, ` `)
       } else document.write (`* &nbsp`)
    }
    document.write (`<br>`)
}

document.write (`<br>`)
document.write (`<br>`)
document.write (`<br>`)

for (let x = 1; x <= n; x++) {
    for (y = 1; y <= n; y++){
       if (y+x==10) {
        document.write(y, ` `)
       } else document.write (`* &nbsp`)
    }
    document.write (`<br>`)
}

document.write (`<br>`)
document.write (`<br>`)
document.write (`<br>`)

for (let x = 1; x <= n; x++) {
    for (y = 1; y <= n; y++){
       if (y+x==10 || y==x) {
        document.write(y, ` &nbsp`)
       } else document.write (`* &nbsp`)
    }
    document.write (`<br>`)
}

document.write (`<br>`)
document.write (`<br>`)
document.write (`<br>`)

for (let x = 1; x <= n; x++) {
    for (y = 1; y <= n; y++){
       if (y<=x) {
        document.write(y, ` &nbsp`)
       } else document.write (`* &nbsp`)
    }
    document.write (`<br>`)
}

document.write (`<br>`)
document.write (`<br>`)
document.write (`<br>`)

for (let x = 1; x <= n; x++) {
    for (y = 1; y <= n; y++){
       if (x+y>=10) {
        document.write(y, ` &nbsp`)
       } else document.write (`* &nbsp`)
    }
    document.write (`<br>`)
}
