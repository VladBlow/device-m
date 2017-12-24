
    var link = document.querySelector(".write-us-btn");
    var popup = document.querySelector(".modal-content");
    var close = document.querySelector(".modal-content-close");
    var form = popup.querySelector("form");
    var username = popup.querySelector(".icon-name");
    var email = popup.querySelector(".icon-mail");
    var textarea = popup.querySelector("textarea");
    var storage = localStorage.getItem("username");
    

    link.addEventListener("click", function(event) {
      event.preventDefault();
      console.log("Клик по кнопке 'Напишите нам'");
      popup.classList.add("modal-content-show");
      if (storage) {
        username.value = storage;
        email.focus();
      } else {
        username.focus();
      }
    });

    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(event) {
      if (!username.value || !email.value || !textarea.value) {
        event.preventDefault();
        console.log("Необходимо заполнить все поля");
        popup.classList.add("modal-error");
      } else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        console.log("локалстораж!")
      }
    });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
          popup.classList.remove("modal-content-show");
        }
      }
    });