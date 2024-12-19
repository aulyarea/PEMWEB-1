document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form terkirim jika validasi gagal

    // Reset error messages
    resetErrors();

    let isValid = true;
    
    // Validasi Nama Pelanggan
    let nama = document.getElementById('nama').value;
    if (!nama || nama.length > 30) {
        isValid = false;
        showError('nama', 'Nama harus diisi dan maksimal 30 karakter');
    }

    // Validasi Email
    let email = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        isValid = false;
        showError('email', 'Email tidak valid');
    }

    // Validasi Jam Keberangkatan
    let jam = document.getElementById('jam').value;
    let jamPattern = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!jam || !jamPattern.test(jam)) {
        isValid = false;
        showError('jam', 'Jam keberangkatan harus dalam format HH:MM dan antara 00:00 - 23:59');
    }

    // Validasi Tujuan Keberangkatan
    let tujuan = document.getElementById('tujuan').value;
    if (!tujuan) {
        isValid = false;
        showError('tujuan', 'Tujuan keberangkatan harus diisi');
    }

    // Validasi Jumlah Tiket
    let jumlah = document.getElementById('jumlah').value;
    if (!jumlah || jumlah < 1 || jumlah > 10) {
        isValid = false;
        showError('jumlah', 'Jumlah tiket harus antara 1 dan 10');
    }

    // Jika semua validasi berhasil, tampilkan hasil
    if (isValid) {
        displayResult(nama, email, jam, tujuan, jumlah);
    }
});

function resetErrors() {
    // Menghapus semua pesan error
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.style.border = '');
}

function showError(field, message) {
    document.getElementById(`${field}Error`).textContent = message;
    document.getElementById(`${field}Error`).style.display = 'block';
    document.getElementById(field).style.border = '2px solid red';
}

function displayResult(nama, email, jam, tujuan, jumlah) {
    let result = `
        <h3>Data Pemesanan:</h3>
        <p><strong>Nama Pelanggan:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Jam Keberangkatan:</strong> ${jam}</p>
        <p><strong>Tujuan Keberangkatan:</strong> ${tujuan}</p>
        <p><strong>Jumlah Tiket:</strong> ${jumlah}</p>
    `;
    document.getElementById('result').innerHTML = result;
}
