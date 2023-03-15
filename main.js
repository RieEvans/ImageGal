

document.querySelectorAll('.image-cont img').forEach(image => {

    image.addEventListener("click", () => {
        document.querySelector('.popup-image').style.display = "block";
        document.querySelector('.popup-image img').src = image.getAttribute('src')
    })

    const toggle = document.querySelector('.popup-image span')

    toggle.addEventListener("click", () => {
        document.querySelector('.popup-image').style.display = "none";
    } )
}) 