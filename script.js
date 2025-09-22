var windowWidth = window.innerWidth;

if (windowWidth < 768) {
  var nav = document.getElementById("nav");
  nav.classList.add("sticky");
}

window.addEventListener("resize", function() {
  windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

function validate() {
  var fields = [
      { id: "name", err_id: "er_name" },
      { id: "email", err_id: "er_email" },
      { id: "phone", err_id: "er_phone" },
      { id: "textarea", err_id: "er_desc"}
  ];

  var isValid = true;

  fields.forEach(function (field) {
      var inputElement = document.getElementById(field.id);
      var errorElement = document.getElementById(field.err_id);

      if (inputElement.value.length === 0) {
          inputElement.style.border = "1px solid red";
          errorElement.style.display = "block";
          isValid = false;
      } else {
          inputElement.style.border = "none";
          errorElement.style.display = "none";
      }
  });

  if(isValid!=false){
    alert('Succesful');
  }
  return isValid;
}
