let cart = JSON.parse(localStorage.getItem("cart"));
let giohang;
if (cart !== null) {
  giohang = cart;
} else {
  giohang = [];
}

let btn = document.getElementsByTagName("button");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    let hinh = btn[i].parentNode.querySelector("img").src;
    let ten = btn[i].parentNode.querySelector(".name-product").textContent;
    let gia = btn[i].parentNode.querySelector(".const-pro").textContent;
    
    let soluong = 1;
    let sp = {
      "hinh": hinh,
      "ten": ten,
      "gia": gia,
      "soluong": soluong,
    };
    giohang.push(sp);
    localStorage.setItem("cart", JSON.stringify(giohang));
    getsoluongsp();
  });
}


function getsoluongsp(){
    let cart =JSON.parse( localStorage.getItem("cart"));    //Câu lệnh thứ hai được sử dụng để lấy giỏ hàng từ localStorage và chuyển đổi từ chuỗi JSON thành đối tượng JavaScript bằng phương thức parse(). Kết quả được lưu vào biến cart.
    if(cart!=null){                                       //nếu giá trị của cart khác null thì cập nhật số lượng sản phẩm trong giỏ hàng lên trang web
        document.getElementById("slsp").innerHTML="("+cart.length+")";  //bằng cách gán giá trị của thuộc tính length của mảng cart vào phần tử HTML có ID là "slsp".
    }
}
function loadhome(){
    getsoluongsp();
}
function loaddatacart(){
    getsoluongsp();
    showcart();
    total();
}
function showcart(){
    let cart = JSON.parse( localStorage.getItem("cart"));  
    if(cart!=null){                                       
       let kq="";
       for (let i = 0; i < cart.length; i++) {
        let tt = parseInt(cart[i]["gia"]*cart[i]["soluong"]);
            kq += `
            <tr>
                <td><img src="`+cart[i]["hinh"]+`"height="80px" >
                `+cart[i]["ten"]+`
                </td>
                <td>`+cart[i]["gia"]+`</td>
                <td>`+cart[i]["soluong"]+`</td>
                <td>`+tt+`</td>
                <td><button onclick="removeItemFromCart(` + i + `)">Xóa</button></td>
            </tr>
            `;
       }
       document.getElementById("thongtingiohang").innerHTML=kq;
    }
}

// xóa sản phẩm
function removeItemFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    showcart();
  } 


 // xóa giỏ hàng và chuyển hướng về trang chủ.
 function delcart(){
    localStorage.removeItem("cart");
    Window.location = "index.html";
}

   //tính tổng giá trị của giỏ hàng và hiển thị kết quả trên trang giỏ hàng.
//    function total(){
//     let giaNumber = parseInt(gia.replace(/[đ.]/g, ""));
//     let cart =JSON.parse(localStorage.getItem("cart"));  
//     if(cart!=null){                                       
//        let total=0;
//        for (let i = 0; i < cart.length; i++) {
//         let tt = parseInt(parseFloat(cart[i]["giaNumber"]) * cart[i]["soluong"]);
//         total += tt;
//        }  
//     }
// }
function total(){
  let cart = JSON.parse(localStorage.getItem("cart"));  
  if(cart != null){                                       
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
          let gia = cart[i]["gia"];
          let substr = cart[i]["gia"].substring(1, 13);
          console.log(substr)
          // let giaNumber = parseInt(gia.replace(/\./g, ""));
          let soluong = cart[i]["soluong"];
          let tt = parseInt (substr) * soluong;
          total += Number(tt);
          console.log(tt);
      }  
  }
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

// <----index---->
function welcome(){
    getsoluongsp();
    alert("Đây là trang web demo, mọi sản phẩm mang tính chất tượng trưng")
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
  let left = document.querySelector('.nav-product-naruto')
  left.scrollBy(-350, 0)
}

function scroll2() {
  let right = document.querySelector('.nav-product-naruto')
  right.scrollBy(350, 0)
}

function scroll3() {
  let left = document.querySelector('.nav-product-onepiece')
  left.scrollBy(-350, 0)
}

function scroll4() {
  let right = document.querySelector('.nav-product-onepiece')
  right.scrollBy(350, 0)
}


function scroll5() {
  let left = document.querySelector('.nav-product-dragonball')
  left.scrollBy(-350, 0)
}

function scroll6() {
  let right = document.querySelector('.nav-product-dragonball')
  right.scrollBy(350, 0)
}


function scroll7() {
  let left = document.querySelector('.nav-product-kimetsunoyaiba')
  left.scrollBy(-350, 0)
}

function scroll8() {
  let right = document.querySelector('.nav-product-kimetsunoyaiba')
  right.scrollBy(350, 0)
}


function scroll9() {
  let left = document.querySelector('.nav-product-jujutsujaisen')
  left.scrollBy(-350, 0)
}

function scroll10() {
  let right = document.querySelector('.nav-product-jujutsujaisen')
  right.scrollBy(350, 0)
}


function scroll11() {
  let left = document.querySelector('.nav-product-more')
  left.scrollBy(-350, 0)
}

function scroll12() {
  let right = document.querySelector('.nav-product-more')
  right.scrollBy(350, 0)
}


