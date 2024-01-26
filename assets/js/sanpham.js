
function addToCart() {
    alert('Bạn phải đăng nhập để sử dụng tính năng này');
  }
  
  function buyNow() {
    alert('Bạn phải đăng nhập để sử dụng tính năng này');
  }
  
  document.querySelector('.button-cart').addEventListener('click', addToCart);
  document.querySelector('.button-buy').addEventListener('click', buyNow);

  const submitBtn = document.getElementById('submit-btn');

  submitBtn.addEventListener('click', function() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput.value;
    alert(`Đã chọn ${quantity} sản phẩm.`);
  });


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


const starUL = document.querySelector(".stars");
const output = document.querySelector(".output");

const star = document.querySelectorAll(".star");
star.forEach((star,index) => {
  star.starValue = (index + 1);
  star.addEventListener("click",starRate);
  });
  function starRate(e){
    output.innerHTML = `You rate this ${e.target.starValue} stars`;
    star.forEach((star,index) => {
      if (index < e.target.starValue){
        star.style.color = "orange";
      } else {
        star.style.color = "grey";
      }
    });
}

const imageContainer = document.querySelector(".home-product-item__img");
		const image = imageContainer.querySelector("img");
		const scaleFactor = 1.5 ;

		imageContainer.addEventListener("mouseover", () => {
			image.style.transform = `scale(${scaleFactor})`;
		});
    

		imageContainer.addEventListener("mouseout", () => {
			image.style.transform = "scale(1)";
		});



