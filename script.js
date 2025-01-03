// Show and hide modal
function showAddModal() {
    document.getElementById("addModal").style.display = "flex";
}

function hideAddModal() {
    document.getElementById("addModal").style.display = "none";
}

// Add data to the table
function addData(event) {
    event.preventDefault();

    const table = document.getElementById("data-table");
    const row = table.insertRow();

    const formData = {
        region: document.getElementById("region").value,
        coordinator: document.getElementById("coordinator").value,
        cluster: document.getElementById("cluster").value,
        name: document.getElementById("name").value,
        status: document.getElementById("status").value,
        nik: document.getElementById("nik").value,
        telp1: document.getElementById("telp1").value,
        telp2: document.getElementById("telp2").value || "-",
        ktp: document.getElementById("ktp").value,
        position: document.getElementById("position").value,
        date: document.getElementById("date").value,
        sertifikat: document.getElementById("sertifikat").value,
    };

    // Populate row with form data
    for (const key in formData) {
        const cell = row.insertCell();
        cell.textContent = formData[key];
    }

    // Add action buttons
    const actionCell = row.insertCell();
    actionCell.innerHTML = `
        <button onclick="editData(this)">Edit</button>
        <button onclick="deleteData(this)">Delete</button>
    `;

    // Clear form and close modal
    document.getElementById("addForm").reset();
    hideAddModal();
}

// Edit and delete functions remain the same
