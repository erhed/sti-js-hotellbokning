function visaData() {
  let x = document.getElementById("form");
  let text = "";
  let elVal = "";
  let i;
  for (i = 0; i < (x.length); i++) {
    // Infoga radbryte
    if (i === 6 || i === 7 || i === 9 || i === (x.length-5)) {
      text += "<div class='br-div-2'></div><div class='br-div-2'></div>";
    }
    // Visa "-" om ingen data finns
    elVal = (x.elements[i].value == "") ? "-" : x.elements[i].value;
    // Visa om måltids-checkbox är kryssad eller ej
    if (i >= 10 && i <= 12) {
      elVal = (x.elements[i].checked === true) ? "Ja" : "Nej";
    }
    // Skriv ut text
    text += "<div id='input-namn'>" + x.elements[i].name + "</div><div id='input-data'>" + elVal + "</div>";
  }
  document.getElementById("resultat-grid").innerHTML = text;
  window.scrollTo(0,document.body.scrollHeight);
}