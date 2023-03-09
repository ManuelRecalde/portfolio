const react = document.getElementById('optionReact')
const html = document.getElementById('optionHtml')
const wordpress = document.getElementById('optionWordpress')
const contenedor = document.getElementById('contents')

console.log('prueba')

react.addEventListener('click', () => {
    react.className = ('option active')
    html.className = ('option')
    wordpress.className = ('option')

    contenedor.style.marginLeft = ('0')
})

html.addEventListener('click', () => {
    react.className = ('option')
    html.className = ('option active')
    wordpress.className = ('option')

    contenedor.style.marginLeft = ('-100%')
})

wordpress.addEventListener('click', () => {
    react.className = ('option')
    html.className = ('option')
    wordpress.className = ('option active')

    contenedor.style.marginLeft = ('-200%')
})