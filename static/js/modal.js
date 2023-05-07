var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];

function openModal(card) {
  modal.style.display = "block";

  var btn = document.getElementsByClassName('service-card');

  for (i = 0; i < btn.length; i++) {
      btn[i].removeAttribute("id");
  }
  card.setAttribute("id", "open")

  const pic = document.getElementById("modal-img");
  const sourcePic = document.getElementById("open").getElementsByClassName("picture");
  const source = sourcePic[0].src;
  const title = document.getElementById("open").getElementsByClassName("cardTitle")[0].innerHTML;
  const info = document.getElementById("open").getElementsByClassName("description")[0].innerHTML;

  pic.src = source;
  document.getElementById("modal-title").innerHTML = title;
  document.getElementById("modal-info").innerHTML = info;

}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




