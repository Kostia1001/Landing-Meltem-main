// модальні вікна
let submitForm = () => {

  let name = $("#inputName").val();
  let phone = $("#mobil").val();

  $("#successModal").modal("show");
};

$("#submitButton").click(submitForm);

$(document).ready(function () {
  $("#exampleModalCenter").modal("show");
});

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
});

let uaButton = document.querySelectorAll('.ua-language');
let enButton = document.querySelectorAll('.ru-language');


uaButton.forEach(button => {
  button.addEventListener('click', function() {

    button.style.backgroundColor = '#859ba6';
    
    enButton.forEach(enBtn => {
      enBtn.style.backgroundColor = '';
    });
  });
});

enButton.forEach(button => {
  button.addEventListener('click', function() {

    button.style.backgroundColor = '#859ba6';

    uaButton.forEach(uaBtn => {
      uaBtn.style.backgroundColor = '';
    });
  });
});

const detailButton = document.querySelector('.btn-outline-secondary');

function updateButtonStyle() {
  const pageWidth = window.innerWidth;

  if (pageWidth <= 575) {
    detailButton.style.display = 'flex';
  } else {
    detailButton.style.display = 'none';
  }
}
window.addEventListener('load', updateButtonStyle);
window.addEventListener('resize', updateButtonStyle);