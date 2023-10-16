const form = document.getElementById('form')
const color_input = document.getElementById('color-input')
const scheme_select = document.getElementById('scheme-select')
const get_color_btn = document.getElementById('get-color')
const color_boxes = document.getElementById('color-box')
const color_names = document.getElementById('color-names')
let color_arr = []

function render(){
     let html = ""
        let color_names_html = ""
        color_arr.forEach(function(color){
            html += `<div style='background-color:${color.hex.value}'
            class='color-rec'></div>`
            color_names_html += `<h5>${color.hex.value}</h5>`
        })
        color_boxes.innerHTML = html
        color_names.innerHTML = color_names_html
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    const query = `hex=${color_input.value.replace('#', '')}&mode=${scheme_select.value}`;
    fetch(`https://www.thecolorapi.com/scheme?${query}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data.colors[0].hex.value)
        color_arr = data.colors
        render()
    })
})
