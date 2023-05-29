var checked = false
function favorite(){
    btn = event.target
    if (checked == false){
        checked = true
        console.log(checked)
        btn.src = "image/Icon/Product_Icon/favorited.png"
    }else if (checked == true) {
        checked = false
        btn.src = "image/Icon/Product_Icon/favorite.png"
    }
}