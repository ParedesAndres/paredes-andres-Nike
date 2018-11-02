window.addEventListener('load', function(){

    let carrito = document.querySelector('.summary-section__products');

    var elementosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if(elementosCarrito == null){
        elementosCarrito = [];
    }

    elementosCarrito.forEach(function(elem){
        carrito.innerHTML += `<li>${elem.titulo}</li>`;
    });

});