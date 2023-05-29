var main_img = document.querySelector('.product-image')
var images = document.querySelectorAll('.aside-image')

function change(){
    var img = event.target
    
    main_img.src = img.src


    for (var i = 0; i<images.length; i++){
        if (images[i].classList.contains('chosing')){
            images[i].classList.remove('chosing')
            img.classList.add('chosing')
        }else{
            img.classList.add('chosing')
        }
    }
}