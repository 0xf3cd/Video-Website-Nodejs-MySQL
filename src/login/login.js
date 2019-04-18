btn = document.getElementById('submit-button');
acnt = document.getElementById('account-input');
pswd = document.getElementById('password-input');

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    // const data = new FormData();
    // data.append('username', acnt.value);
    // data.append('password', pswd.value);
    const data = {
        username: acnt.value,
        password: pswd.value
    };

    request.onreadystatechange = function() {
        if(request.readyState === 4) {
            if(request.status === 200) {
                alert('OK');
            } else if(request.status === 404) {
                alert('Not OK');
            }
        }
        // console.log(request.responseText);
        // console.log(request.status);
    };

    request.open('POST', '/authenticate');
    // request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // request.send("a=1&b=2");
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}, false);