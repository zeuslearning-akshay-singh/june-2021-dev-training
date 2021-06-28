function myFunction() {
    var x = document.getElementById("ham-panel");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


 function myalert() {
    var a = document.getElementById("div-alert");
    var d = document.getElementById("overlay-alert")
    if (a.style.display === "none") {
      a.style.display = "block";
      d.style.display="none";
    } else {
      a.style.display = "none";
      d.style.display = "block";
    }
  }

  function mybell() {
    var b = document.getElementById("div-bell");
    var c = document.getElementById("overlay-bell")
    if (b.style.display === "none") {
      b.style.display = "block";
      c.style.display="none";
    } else {
      b.style.display = "none";
      c.style.display = "block";
    }
  }