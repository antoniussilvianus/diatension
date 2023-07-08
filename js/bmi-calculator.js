function hitungBMI() {
  // Obtain user inputs
  var tinggi = Number(document.getElementById("tinggi").value);
  var berat = Number(document.getElementById("berat").value);

  // Convert height to meters
  tinggi /= 100;

  // Perform calculation
  var BMI = berat / Math.pow(tinggi, 2);

  // Display result of calculation
  document.getElementById("output").innerText = "BMI Anda adalah " + BMI.toFixed(2);

  // Display BMI category based on the calculation result
  var output = Math.round(BMI * 100) / 100;
  if (output < 18.5) 
    document.getElementById("comment").innerText = "Berat badan Anda kurang";
  else if (18.5 <= output && output <= 24.9) 
    document.getElementById("comment").innerText = "Berat badan Anda normal";
  else if (25 <= output && output <= 29.9)
    document.getElementById("comment").innerText = "Berat badan Anda berlebih";
  else if (output >= 30)
    document.getElementById("comment").innerText = "Anda mengalami obesitas";
}

function reset() {
  document.getElementById("tinggi").value = "";
  document.getElementById("berat").value = "";
  document.getElementById("output").innerText = "";
  document.getElementById("comment").innerText = "";
}