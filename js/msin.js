var elInp = document.querySelector('.inp')
var elP = document.querySelector('.p')
var elV = document.querySelector('.v')
var elM = document.querySelector('.m')
var elS = document.querySelector('.s')

function fn(){
    var val = elInp.value
    elP.textContent = val / 4
    elV.textContent = val / 20
    elM.textContent = val / 100
    elS.textContent = val / 800


}