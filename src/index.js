

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()
    let temp = document.getElementById('temperature');  
    let selectville = document.getElementById('ville');
    let ville = document.getElementById('input');
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ville.value+'&appid=8f91983681d3b66b246d7478ad1d774a&units=metric';
    let ajax = new XMLHttpRequest;
    ajax.responseType = "json";
    ajax.open("GET", url)
    ajax.send();
    ajax.addEventListener("readystatechange", function(){
        if(ajax.readyState === ajax.DONE){
            selectville.innerHTML = ville.value + ': ';
            temp.innerHTML = ajax.response.main.temp + '°C';
    
        }
    })

})
