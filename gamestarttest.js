Telegram.WebApp.ready();

let shot = document.querySelector('.shot'),
    hit = document.querySelector('.hit'),
    miss = document.querySelector('.miss'),
    correct = false;

document.body.addEventListener('click', playshot);

function playshot(e){
    let el = e.target;
    if(el.classList.contains('correct')){
        hit.play()
        correct = true;
        goToNextPage('./win.html')
    }else{
        miss.play();
        goToNextPage('./lose.html')
    }
}

function goToNextPage(filePath){
    window.location.href = filePath;
};