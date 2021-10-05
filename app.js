
// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;
var btnInstallPWA = document.getElementById("btn-install-pwa");

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
  btnInstallPWA.style.display = "block"
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.!!`);
});

btnInstallPWA.addEventListener('click', async () => {
  // Hide the app provided install promotion
  // hideInstallPromotion();
  btnInstallPWA.style.display = "none";
  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
});


if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then(function (registration) {
        console.log("success load");
      })
      .catch(function (err) {
        console.log(err);
      });
   }


/* 
var url = window.location.href;
var swLocation = '/twittor/sw.js';
// variable que contendrá el registro del sw
var swRegistry;


if ( navigator.serviceWorker ) {
    if ( url.includes('localhost') ) {
        swLocation = '/sw.js';
    }

    // ESPERAMOS QUE SE CARGUE TODO PARA REGISTAR EL SW
    // YA QUE COMO EL SW HACE MUCHAS COSAS POR DEBAJO, 
    // PUEDE COMPROMETER EL RENDIMIENTO INICIAL DE NUESTRA APP
    window.addEventListener("load", function () {
        navigator.serviceWorker.register( swLocation )
            .then(reg => {
                swRegistry = reg
                // Comprobar si ya estoy suscrito a las notificaciones o no
                swRegistry.pushManager.getSubscription()
                    .then( verificaSuscripcion )
            })
    })
}
 */

function verificaSuscripcion () {
  console.log('verifica')
}