btn = document.getElementById('homepage-button');

btn.addEventListener('click', () => {
    alert('Hi');
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState === 4 && request.status === 200) {
            alert(request.responseText);
        } else {
            alert(request.status);
        }
    };

    request.open('GET', '/login');
    request.send();
    window.location.href='/login';
    //window.navigate('/login');
}, false);