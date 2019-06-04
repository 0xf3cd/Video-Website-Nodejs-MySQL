const btn = document.getElementById('submit-button');
const name = document.getElementById('name-input');
const email = document.getElementById('email-input');
const acnt = document.getElementById('account-input');
const pswd = document.getElementById('password-input');
const pswd2 = document.getElementById('password-again-input');

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    // const data = new FormData();
    // data.append('username', acnt.value);
    // data.append('password', pswd.value);
    const data = {
        name: name.value,
        email: email.value,
        username: acnt.value,
        password: pswd.value,
        password2: pswd2.value
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

    request.open('POST', '/register');
    // request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // request.send("a=1&b=2");
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}, false);