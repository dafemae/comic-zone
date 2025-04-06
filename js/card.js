   // Obtener todos los elementos de las imágenes dentro de las tarjetas
   var images = document.querySelectorAll('.card-img-top');
   var popup = document.getElementById("imagePopup");
   var popupImage = document.getElementById("popupImage");
   var close = document.getElementById("closePopup");

   // Para cada imagen, agregar un evento de clic
   images.forEach(function(image) {
       image.addEventListener('click', function() {
           // Mostrar el popup con la imagen grande
           popup.style.display = "flex";
           popupImage.src = image.src; // Establecer la imagen del popup con la imagen de la tarjeta
       });
   });

   // Cerrar el popup cuando se hace clic en el botón de cerrar
   close.onclick = function() {
       popup.style.display = "none";
   }

   // Cerrar el popup si se hace clic fuera de la imagen
   window.onclick = function(event) {
       if (event.target == popup) {
           popup.style.display = "none";
       }
   }