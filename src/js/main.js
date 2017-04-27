/*jshint strict:true, browser:true, jquery:true */

// #bucle while
// Se vuelven a repertir hasta que sea falsa
// <= menor o igual
// >= mayor o igual
//contador ++; o contador += 1; o contador = contador + 1;
//while(mientras)(mientras que sea true)
// var contador = 1;
// while (contador <= 10){
//     console.log(contador);
//     contador ++;
// }
// #bucle for
// for (var contador = 100; contador >= 1; contador--) {
//     console.log(contador);
// }
// #bucle do while
// do (naz) while (mientras)
// var contador = 1;
// do {
//     console.log(contador);
//     contador++;
// }while(contador <=10);
// ##Else
// var edad = 14;

// if ( edad == 14){
//     alert('14 años.');
// } else if (edad < 18){
//     alert('Mayor de edad')
// }
// else if (edad > 65){
//     alert('Supera edad');
// }
// else{
//     alert('Mayor de edad');
// }
// alert
// switch ( Cambiar ) !!importante siempre el break;
// var premiado = false;
// switch (premiado){
//     case true:
//         console.log('premiado');
//         break;
//     case false:{
//         console.log('NO fue premiado');
//         break;
//     }
// }
// var dia = 6;

// switch (dia) {
//     case 1:
//         console.log('Es lunes');
//         break;
//     case 2:
//         console.log('Es martes');
//         break;
//     case 3:
//         console.log('Es miercoles');
//         break;
//     case 4:
//         console.log('Es jueves');
//         break;
//     case 5:
//         console.log('Es viernes');
//         break;
//         default:
//             console.log('Sabado o domingo')
// }
// console.info('Resto del programa');

$(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 7000
    });
});
