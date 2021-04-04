let user = document.getElementById("user");
let password = document.getElementById("pass");
let usrError = document.getElementById("usr");
let pswError = document.getElementById("psw");

document.getElementById("btn").addEventListener("click", () => {
  userFunc();
  passFunc();
});

function userFunc() {
  try {
    if (user.value == "") {
      user.classList.remove("ok");
      user.classList.add("err");
      throw "qiymat bo'sh";
    } else if (user.value.length < 3) {
      user.classList.remove("ok");
      user.classList.add("err");
      throw "minimum 3ta belgi kiriting";
    } else {
      user.classList.remove("err");
      user.classList.add("ok");
      throw "";
    }
  } catch (e) {
    usrError.innerHTML = e;
  }
}
function passFunc() {
  try {
    if (password.value == 0) {
      password.classList.remove("ok");
      password.classList.add("err");
      throw "qiymat bo'sh";
    } else {
      password.classList.remove("err");
      password.classList.add("ok");
      throw "";
    }
  } catch (e) {
    pswError.innerHTML = e;
  }
}
user.addEventListener("focusout", () => {
  setInterval(userFunc, 1000);
});
password.addEventListener("focusout", () => {
  setInterval(passFunc, 1000);
});
