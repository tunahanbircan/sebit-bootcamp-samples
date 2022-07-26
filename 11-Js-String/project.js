// let email = 'tunahanbircan42@gmail.com';
let email = "tunahanbircan42@gmail.com";
console.log(email);

// Birleştirme
let ad = "Tunahan";
let soyad = "Bircan CAN";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[0]);

// Kaç Karakter?
console.log(adSoyad.length);

// String Metodları
console.log(adSoyad.toUpperCase());
let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);

// Kaçıncı İndexte?
let index = adSoyad.indexOf("a");
let indexLast = adSoyad.lastIndexOf("a");
console.log(index);
console.log(indexLast);

// Slice Kullanımı
let ilkisim = adSoyad.slice(0, 7);
console.log(ilkisim);

// Replace
let yerdegistir = adSoyad.replace(" ", "");
console.log(yerdegistir);

// Replace All
let yerdegistirAll = adSoyad.replaceAll(" ", "");
console.log(yerdegistirAll);
