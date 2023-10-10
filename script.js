// Function
function tambahAngka(a, b) {
  // Nested if statement
  if (a >= 5) {
    // If, else
    if (b >= 5) {
      console.log("a dan b = || > 5");
    } else {
      console.log("a = || > 5, sedangkan b < 5");
    }
  } else {
    console.log("a != || < 5 ");
  }
}
console.log(tambahAngka(5, 4) + "\n");

// For Loop
const tinggi = 5;

for (let i = 1; i <= tinggi; i++) {
  let segitiga = "";
  for (let j = 1; j <= tinggi; j++) {
    segitiga += "";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    segitiga += "*";
  }
  console.log(segitiga);
}

console.log("");

// While
let i = 1;
while (i <= tinggi) {
  let segitiga = "";

  let j = 1;
  while (j <= tinggi - 1) {
    segitiga += "";
    j++;
  }

  let k = 1;
  while (k <= 2 * i - 1) {
    segitiga += "*";
    k++;
  }
  console.log(segitiga);
  i++;
}

console.log("");

// Do.. While
let a = 1;
do {
  let segitiga = "";

  let b = 1;
  do {
    segitiga += "";
    b++;
  } while (b <= tinggi - a);

  let c = 1;
  do {
    segitiga += "*";
    c++;
  } while (c <= 2 * a - 1);

  console.log(segitiga);
  a++;
} while (a <= tinggi);

console.log("");

// Switch Case
const bulan = "Januari"; // Ganti dengan nama bulan yang ingin Anda cek

switch (bulan) {
  case "Januari":
    console.log("Ini bulan Januari");
    break;
  case "Februari":
    console.log("Ini bulan Februari");
    break;
  case "Maret":
    console.log("Ini bulan Maret");
    break;
  case "April":
    console.log("Ini bulan April");
    break;
  case "Mei":
    console.log("Ini bulan Mei");
    break;
  case "Juni":
    console.log("Ini bulan Juni");
    break;
  case "Juli":
    console.log("Ini bulan Juli");
    break;
  case "Agustus":
    console.log("Ini bulan Agustus");
    break;
  case "September":
    console.log("Ini bulan September");
    break;
  case "Oktober":
    console.log("Ini bulan Oktober");
    break;
  case "November":
    console.log("Ini bulan November");
    break;
  case "Desember":
    console.log("Ini bulan Desember");
    break;
  default:
    console.log("Nama bulan tidak valid !");
}
