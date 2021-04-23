const getBtn = document.getElementById('getBtn');


const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/usuarios');
    xhr.send();

};


getBtn.addEventListener('click', getData);