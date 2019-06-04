// const btn = document.getElementById('homepage-button');

// btn.addEventListener('click', () => {
//     alert('Hi');
//     const request = new XMLHttpRequest();

//     request.onreadystatechange = function() {
//         if(request.readyState === 4 && request.status === 200) {
//             alert(request.responseText);
//         } else {
//             alert(request.status);
//         }
//     };

//     request.open('GET', '/login');
//     request.send();
//     window.location.href='/login';
//     //window.navigate('/login');
// }, false);

const gallery = document.getElementsByClassName('gallery')[0];
const rows = document.getElementsByClassName('video-row');
const cols = document.getElementsByClassName('video-col');
const drows = document.getElementsByClassName('des-row');
const dcols = document.getElementsByClassName('des-col');
console.log(rows);
console.log(cols);

const adjust = () => {
    const clientWidth = document.body.clientWidth;
    const style = getComputedStyle(gallery);
    const leftValue = parseInt(style.getPropertyValue('left'));
    const rowWidth = clientWidth - 2 * leftValue;

    let picSize = 300;
    if(rowWidth <= 1200) {
        picSize = 250;
    } else if(rowWidth <= 1000) {
        picSize = 200;
    } else if(rowWidth <= 800) {
        picSize = 150;
    } else if(rowWidth <= 600) {
        picSize = 100;
    }

    const colGap = parseInt((rowWidth - 4 * picSize) / 3);
    const colWidth = picSize;

    for(let each of rows) {
        each.style.setProperty('width', rowWidth + 'px');
        each.style.setProperty('height', colWidth + 'px');
    }

    let count = 1;
    for(let each of cols) {
        if(count % 4 === 0) {
            each.style.setProperty('width', colWidth + 'px');
        } else {
            each.style.setProperty('width', (colWidth + colGap) + 'px');
        }
        each.style.setProperty('height', colWidth + 'px');
        count++;
        // console.log(each.style.getPropertyValue('width'))
    }
    
    const desHeight = 80;
    for(let each of drows) {
        each.style.setProperty('width', rowWidth + 'px');
        each.style.setProperty('height', desHeight + 'px');
    }

    count = 1;
    for(let each of dcols) {
        if(count % 4 === 0) {
            each.style.setProperty('width', colWidth + 'px');
        } else {
            each.style.setProperty('width', (colWidth + colGap) + 'px');
        }
        each.style.setProperty('height', desHeight + 'px');
        count++;
    }
};

window.addEventListener('load', adjust);
window.addEventListener('resize', adjust);
