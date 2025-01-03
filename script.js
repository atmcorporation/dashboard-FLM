// Handle login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("dashboard-page").style.display = "block";
    } else {
        alert("Invalid username or password!");
    }
}

// Handle logout
function logout() {
    document.getElementById("login-page").style.display = "flex";
    document.getElementById("dashboard-page").style.display = "none";
}
