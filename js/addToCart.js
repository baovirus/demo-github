var cart = JSON.parse(localStorage.getItem('cart'))
if (cart == null) {
    cart = []
}

// hàm add cho sản phẩm ở trang chủ
function add1() {
    event.preventDefault()
    var btn = event.target
    var element = btn.parentElement.parentElement.parentElement.parentElement
    var tenSP = element.querySelector('h1').innerText
    var gia = element.querySelector('p').innerText
    var giaSo = element.querySelector('p').getAttribute('data-num')
    var hinh = element.querySelector('#prod-img').src
    var trang = element.querySelector('#prod-link').href
    // console.log(tenSP + ' ' + gia + ' ' + giaSo + ' ' + trang)
    var sp = {
        ten: tenSP,
        gia: gia,
        giathat: giaSo,
        hinh: hinh,
        link: trang
    }

    var check = true
    for (var i = 0; i < cart.length; i++) {
        if (sp.ten == cart[i].ten) {
            check = false
            alert("Thêm vào vỏ hàng thất bại! Đã có sản phẩm này trong giỏ hàng")
            break
        }
    }
    if (check == true) {
        cart.push(sp)
        localStorage.setItem('cart', JSON.stringify(cart))
        alert("Thêm vào vỏ hàng thành công!")
    }
}


// hàm add cho sản phẩm trong trang chi tiết sản phẩm
function add2() {
    event.preventDefault()
    var btn = event.target
}