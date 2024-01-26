
function validateForm() {
let ho = document.forms["register-form"]["ho"].value;
let ten = document.forms["register-form"]["ten"].value;
let email = document.forms["register-form"]["email"].value;
let username = document.forms["register-form"]["username"].value;
let password = document.forms["register-form"]["password"].value;
let confirmPassword = document.forms["register-form"]["confirm-password"].value;

if (ho == "") {
  alert("Vui lòng nhập họ của bạn!");
  return false;
}
if (ten == "") {
  alert("Vui lòng nhập tên của bạn!");
  return false;
}
if (email == "") {
  alert("Vui lòng nhập địa chỉ email của bạn!");
  return false;
}
if (username == "") {
  alert("Vui lòng nhập tên đăng nhập của bạn!");
  return false;
}
if (password == "") {
  alert("Vui lòng nhập mật khẩu của bạn!");
  return false;
}
if (confirmPassword == "") {
  alert("Vui lòng xác nhận mật khẩu của bạn!");
  return false;
}
if (password != confirmPassword) {
  alert("Mật khẩu xác nhận không trùng khớp!");
  return false;
}
else{
  window.location.href = "login.html";
  login_move();
  return true;
}


}

function login_move() {
  const result = confirm("Đăng kí thành công, bạn có muốn chuyển đến trang đăng nhập ?");
  if (result) {
    location.href = "D:\StudyClollege\WEB1043\ParaStore\login.html";
  } else {
    return;
  }
}
// function login_move(){
//   window.location.href = "login.html";
// }

