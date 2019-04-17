loginButton = document.getElementById('login button');

loginButton.addEventListener('click', () => {
    alert('Hi');
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState === 4 && request.status === 200) {
            alert(request.responseText);
        } else {
            alert(request.status);
        }
    };

    request.open('GET', 'https://localhost/');
    request.send();

}, false);