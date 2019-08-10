if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
    .then((res) => {
        console.log('service worker registered', res);
    })
    .catch((res) => {
        console.log('service worker not registered', res);
    });
}