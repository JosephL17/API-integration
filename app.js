const getInformation = async() => {
    let data = await fetch("https://api.adviceslip.com/advice")
    const response = await data.json()
    document.getElementById('text').innerHTML = response.slip.advice
    
}

document.getElementById('button').onclick = () => {
    getInformation()
}