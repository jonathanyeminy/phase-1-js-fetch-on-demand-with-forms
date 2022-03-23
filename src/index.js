const init = () => {    
let formData = document.querySelector("form");
//console.log(formData)
formData.addEventListener("submit", e => handleSubmit(e))

function handleSubmit(e) {
    e.preventDefault()
    let input = document.getElementById("searchByID").value
    //console.log(input)
    
    fetch("http://localhost:3000/movies")
    .then(resp => resp.json())
    .then(function(data){
        
        const bookInfo = data[`${input-1}`]
        console.log(bookInfo)
        document.querySelector("h4").innerText = bookInfo.title
        document.querySelector("p").innerText = bookInfo.summary
    })
}
}
document.addEventListener('DOMContentLoaded', init)