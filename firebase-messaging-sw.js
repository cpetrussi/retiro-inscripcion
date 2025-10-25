importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAlwzfCECuWObnXqvBT-6ED8UykFnNZXlE",
    authDomain: "retiro-inscripcion.firebaseapp.com",
    projectId: "retiro-inscripcion",
    storageBucket: "retiro-inscripcion.firebasestorage.app",
    messagingSenderId: "1052656436137",
    appId: "1:1052656436137:web:53a80f46715a5e3e027ab8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Mensaje en segundo plano:', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
