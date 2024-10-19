Telegram.WebApp.ready();

const isFirstRun = localStorage.getItem('isFirstRun') || true;
const selectedWay = localStorage.getItem('selectedWay') || 0;

// alert(isFirstRun);

if (isFirstRun == 'true') {
    document.getElementById('welcome-message').classList.remove('hidden');
} else if (isFirstRun == 'false') {
    if (selectedWay == 0) {
        window.location.href = 'https://noname5969.rf.gd/index4.html';
    } else if (selectedWay == 1) {
        window.location.href = 'https://noname5969.rf.gd/it.html';
        // document.getElementById('container-it').classList.remove('hidden');
        // document.getElementById('it').classList.remove('hidden');
    }
}

function handleProfession(decided) {
    localStorage.setItem('isFirstRun', 'false');

    if (decided) {
        document.getElementById('welcome-message').classList.add('hidden');
        window.location.href = 'https://noname5969.rf.gd/index4.html';
        // document.getElementById('tests').classList.remove('hidden');
    } else {
        document.getElementById('welcome-message').classList.add('hidden');
        window.location.href = 'https://noname5969.rf.gd/index2.html';
        // document.getElementById('testovik').classList.remove('hidden');
    }
}