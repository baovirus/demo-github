var list = JSON.parse(localStorage.getItem('accounts'))
if (list == null) {
    list = []
}

var signin_form = document.getElementById('form-signin')
if (signin_form) {
    signin_form.addEventListener('submit', (event) => {
        event.preventDefault()
        var inputs = document.getElementById('form-signin').elements
        var info = { name: '', uname: '', pass: '' }

        console.log(inputs)
        info.name = inputs['username'].value
        info.uname = inputs['accname'].value
        info.pass = inputs['pass'].value
        if (info.pass != inputs['con-pass'].value) {
            alert('Đăng ký thất bại, mật khẩu và xác nhận không trùng khớp')
        }
        else {
            list.push(info)
            // cập nhật list tài khoản
            localStorage.setItem('accounts', JSON.stringify(list));
            alert('Đăng ký thành công')
        }
    })
}

var login_form = document.getElementById('form-Login')
if (login_form) {
    var listacc = JSON.parse(localStorage.getItem('accounts')) 

    login_form.addEventListener('submit', (event) => {
        event.preventDefault()
        var inputs = document.getElementById('form-Login').elements
        var uname = inputs['uname'].value
        var pass = inputs['pass'].value

        var check = false
        for (i = 0; i < listacc.length; i++) {
            if (uname == listacc[i].uname && pass == listacc[i].pass) {
                check = true
                alert("Đăng nhập thành công")
                window.location.replace("index.html")
            }
        }
        if (check == false) {
            alert("Sai email hoặc password")
        }
    })
}
