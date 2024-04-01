const suhuInput = document.getElementById("suhu");
const satuanAwalSelect = document.getElementById("satuan-awal");
const satuanAkhirSelect = document.getElementById("satuan-akhir");
const konversiBtn = document.getElementById("konversi-btn");
const suhuKonversiSpan = document.getElementById("suhu-konversi");

konversiBtn.addEventListener("click", () => {
  const suhu = parseFloat(suhuInput.value);
  const satuanAwal = satuanAwalSelect.value;
  const satuanAkhir = satuanAkhirSelect.value;

  let hasilKonversi;

  if (satuanAwal === "celsius") {
    if (satuanAkhir === "fahrenheit") {
      hasilKonversi = (suhu * 9) / 5 + 32;
    } else if (satuanAkhir === "kelvin") {
      hasilKonversi = suhu + 273.15;
    } else {
      hasilKonversi = suhu;
    }
  } else if (satuanAwal === "fahrenheit") {
    if (satuanAkhir === "celsius") {
      hasilKonversi = ((suhu - 32) * 5) / 9;
    } else if (satuanAkhir === "kelvin") {
      hasilKonversi = ((suhu + 459.67) * 5) / 9;
    } else {
      hasilKonversi = suhu;
    }
  }

  // Menetapkan hasil konversi ke dalam elemen suhuKonversiSpan
  suhuKonversiSpan.innerHTML = hasilKonversi;
});
