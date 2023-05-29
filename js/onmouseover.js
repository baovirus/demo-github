
function showDetails(target){
    var element = target.querySelector('.hidden-detail')
    element.style.display = "block"
    element.classList.add('in')
    element.classList.remove('out')
}

function hideDetail(target){
    var element = target.querySelector('.hidden-detail')
    element.classList.add('out')
    element.classList.remove('in')
    setTimeout(function (){element.style.display = "none"}, 100 )
}