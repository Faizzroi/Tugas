
<?php
// for ($x = 1; $x <= 9 ; $x++){
//     for ($y = 1; $y <= 9 ; $y++){
//         if ($x <= $y){
//             echo "* ";
//         } else {
//             echo "- ";
//         }
//     }
//     echo "\n";
// }

// for ($x = 9; $x >= 1 ; $x--){
//     for ($y = 9; $y >= 1 ; $y--){
//         if ($x >= $y){
//             echo "* ";
//         } else {
//             echo "- ";
//         }
//     }
//     echo "\n";
// }

// for ($x = 1; $x <= 9 ; $x++){
//     for ($y = 1; $y <= 9 ; $y++){
//         if ($x <= $y&&$y/2<=5){
//             echo "* ";
//         } else {
//             echo "- ";
//         }
//     }
//     echo "\n";
// }


// for ($x = 1; $x <= 9 ; $x++){
//     for ($y = 1; $y <= 9 ; $y++){
//         if ($x+$y>=10 && $x>=$y){
//             echo "* ";
//         } else {
//             echo "- ";
//         }
//     }
//     echo "\n";
// }

for ($x = 1; $x <= 9 ; $x++){
    for ($y = 1; $y <= 9 ; $y++){
        if ($x % 4 == 1 ||$y % 4 == 1)
        {
            echo $x . " ";
        } 
        else 
        {
            echo "- ";
        }
    }
    echo "\n";
}
