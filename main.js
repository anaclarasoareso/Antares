if(localStorage.getItem('comentarios')==undefined){
    localStorage.setItem('comentarios',JSON.stringify([]));
}

var listaComentarios = JSON.parse(localStorage.getItem('comentarios'));

function simulateClick() {
    var evt = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
    });
    var cb = document.getElementById("checkbox"); //element to click on
    var canceled = !cb.dispatchEvent(evt);
    if(canceled) {
      // A handler called preventDefault
      alert("canceled");
    } else {
      // None of the handlers called preventDefault
      alert("not canceled");
    }
  }
  document.getElementById("button").addEventListener('click', simulateClick);

