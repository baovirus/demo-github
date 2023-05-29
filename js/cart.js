var cart = JSON.parse(localStorage.getItem('cart'))
renderCart()
checkCart()

// xóa 1 sản phẩm khỏi giỏ hàng
function removeItem(i) {
    cart.splice(i,1)
    localStorage.setItem('cart', JSON.stringify(cart))
    renderCart()
}

// xóa tất cả sản phẩm khỏi giỏ hàng
function clearCart() {
    cart = []
    localStorage.setItem('cart', JSON.stringify(cart))
    renderCart()
}

// xuất giỏ hàng
function renderCart() {
    document.querySelector('tbody').innerHTML = ''
    for (var i = 0; i < cart.length; i++) {
        var code = `
        <tr>
        <td>
            <img src="${cart[i].hinh}" alt="">
        </td>
        <td>
            <a href="${cart[i].link}" id="item-name">${cart[i].ten}</a><br>
            Bộ sưu tập
        </td>
        <td>
            <input type="number" id="amount" min="1" max="10" value="1" onchange="calc()">
        </td>
        <td>
        ${cart[i].gia}
        </td>
        <td>
            <button class="btn-white"><svg width="10px" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg></button>
            <button class="btn-white" onclick="removeItem(${i})">Xoá</button>
        </td>
    </tr>
        `;
        document.querySelector('tbody').innerHTML += code
    }
    calc()
    checkCart()
}

// tính tổng tiền
function calc(){
    var lable = document.querySelector('#total-price')
    var item_amounts = document.querySelectorAll('#amount')
    var value = 0
    for (var i=0; i<cart.length; i++){
        value += Number(cart[i].giathat) * Number(item_amounts[i].value)
    }
    lable.innerText = value
}

// kiểm tra giỏ hàng có sản phẩm không
function checkCart(){
    var box = document.querySelector('.box-red')
    if (cart.length == 0){
        box.style.display = "flex"
    }else{
        box.style.display = "none"
    }
}