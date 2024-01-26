

function validateForm() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Kiểm tra xem tên tài khoản và mật khẩu có hợp lệ hay không
  if (username == "" || password == "") {
    alert("Vui lòng nhập tên tài khoản và mật khẩu");
    return false;
  } else {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "index.html";
    succesfuly();
    return true;
  }
}

  function succesfuly(){
    alert("Đăng nhập thành công");
    location.href = "index.html";
}
  