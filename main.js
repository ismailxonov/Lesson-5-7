let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
const body = document.querySelector("body")
data.map(items => {
    const text = document.createElement("p")
    text.innerHTML = items;

    body.appendChild(text)

    text.style.textAlign = "center"
    text.style.margin = "30px"

    text.style.color = "white"

    if(items > 50) {
        text.style.background = "green"
    }else{
        text.style.background = "red"
    }
})