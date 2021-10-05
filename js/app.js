
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("../sw.js")
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