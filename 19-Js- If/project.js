//Uygulama

// Şifre uzunluğu 12'den büyükse güçlü şifre
// 8 ile 12 arasındaysa yeterli şifre
// 8 den küçükse yetersiz olduğunu console a yaz

const yeniSifre = "tunahanbircan4242";

if (yeniSifre.length > 12) {
  console.log("Şifre güçlü");
} else if (yeniSifre.length >= 8) {
  console.log("Şifre yeterli");
} else {
  console.log("Şifreyi yeniden giriniz");
}
