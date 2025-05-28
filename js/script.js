const suhuForm = document.getElementById('suhu-form');
const suhuInput = document.getElementById('suhu-input');
const unitSelect = document.getElementById('unit-select');
const hasilContainer = document.getElementById('hasil-container');
const hasilElement = document.getElementById('hasil');
const penjelasanElement = document.getElementById('penjelasan');
const resetBtn = document.getElementById('reset-btn');
const reverseBtn = document.getElementById('reverse-btn');

suhuForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const suhu = parseFloat(suhuInput.value);
  const unit = unitSelect.value;

  if (isNaN(suhu)) {
    hasilElement.textContent = 'Masukan Kembali Suhu nya';
    penjelasanElement.textContent = '';
    return;
  }

  let hasil, penjelasan;

  if (unit === 'celcius') {
    hasil = (suhu * 9/5) + 32;
    penjelasan = `${suhu}°C sama dengan ${hasil}°F`;
  } else {
    hasil = (suhu - 32) * 5/9;
    penjelasan = `${suhu}°F sama dengan ${hasil}°C`;
  }

  hasilElement.textContent = `Hasil: ${hasil.toFixed(2)}`;
  penjelasanElement.textContent = penjelasan;
});

resetBtn.addEventListener('click', () => {
  suhuInput.value = '';
  hasilElement.textContent = '';
  penjelasanElement.textContent = '';
});

reverseBtn.addEventListener('click', () => {
  if (unitSelect.value === 'celcius') {
    unitSelect.value = 'fahrenheit';
  } else {
    unitSelect.value = 'celcius';
  }
});

