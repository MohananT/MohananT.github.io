
// listening to service worker install
self.addEventListener('install', function(event){
    console.log('service worker installed');
});

// listening to activate eve
self.addEventListener('activate', function(event){
    console.log('service worker activated');
});

// listening to fetch events
self.addEventListener('fetch', event => {
    console.log('Fetch request -> ', event);
});