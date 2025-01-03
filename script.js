function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Contoh login sederhana
    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password!";
    }
}

function editData(row) {
    const cells = row.parentElement.parentElement.children;
    const name = cells[3].textContent;
    alert(`Edit data for ${name}`);
}

function deleteData(row) {
    const tableRow = row.parentElement.parentElement;
    tableRow.remove();
}
