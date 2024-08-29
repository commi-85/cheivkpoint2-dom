document.addEventListener('DOMContentLoaded', function () {
    let boxColor = document.getElementById('color-box')
    let btnColor = document.getElementById('change-color-btn')

    function getRandomcolor() {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let valeurColor = `rgb(${r}, ${g}, ${b})`
        return valeurColor
    }
    console.log(getRandomcolor())

    btnColor.addEventListener('click', function () {
        boxColor.style.backgroundColor = getRandomcolor()

    });
})