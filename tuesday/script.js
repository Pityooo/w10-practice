function loadEvent () {

    const result = require('./data.json')    
    const root = document.getElementById('root')

    root.innerHTML = result;


}
window.addEventListener('load', loadEvent)