function login() {
    un1 = document.getElementById("un").value;
    localStorage.setItem("UserName", un1);
    window.location = "room.html"
}