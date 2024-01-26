function welcome(){
    alert("Đây là trang web demo, mọi sản phẩm mang tính chất tượng trưng")
}

function register_move(){
        const result = confirm("Bạn có muốn chuyển đến trang đăng kí không?");
        if (result) {
          location.href = "register.html";
        } else {
          return;
        }
    }

    function login_move(){
        const result = confirm("Bạn có muốn chuyển đến trang đăng nhập không?");
        if (result) {
          location.href = "login.html";
        } else {
          return;
        }
    }
function cart(){
  alert("Giỏ hàng hiện tại đang trống, hãy mua cái gì đó đi nào !")
}

  const username = localStorage.getItem("username");
  const usernameSpan = document.getElementById("username");
  if (username) {
    usernameSpan.textContent = username;
  }
  console.log(username);
  document.getElementById("username").textContent = username;
  function logout(){
    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất không?");

    if (confirmLogout) {
      localStorage.removeItem("username");
      window.location.href = "login.html";
    }
  };




function scroll1() {
  var left = document.querySelector('.nav-product-naruto')
  left.scrollBy(-350, 0)
}

function scroll2() {
  var right = document.querySelector('.nav-product-naruto')
  right.scrollBy(350, 0)
}

function scroll3() {
  var left = document.querySelector('.nav-product-onepiece')
  left.scrollBy(-350, 0)
}

function scroll4() {
  var right = document.querySelector('.nav-product-onepiece')
  right.scrollBy(350, 0)
}


function scroll5() {
  var left = document.querySelector('.nav-product-dragonball')
  left.scrollBy(-350, 0)
}

function scroll6() {
  var right = document.querySelector('.nav-product-dragonball')
  right.scrollBy(350, 0)
}


function scroll7() {
  var left = document.querySelector('.nav-product-kimetsunoyaiba')
  left.scrollBy(-350, 0)
}

function scroll8() {
  var right = document.querySelector('.nav-product-kimetsunoyaiba')
  right.scrollBy(350, 0)
}


function scroll9() {
  var left = document.querySelector('.nav-product-jujutsujaisen')
  left.scrollBy(-350, 0)
}

function scroll10() {
  var right = document.querySelector('.nav-product-jujutsujaisen')
  right.scrollBy(350, 0)
}


function scroll11() {
  var left = document.querySelector('.nav-product-more')
  left.scrollBy(-350, 0)
}

function scroll12() {
  var right = document.querySelector('.nav-product-more')
  right.scrollBy(350, 0)
}

