const concerts = {
    A: {
        date: '10 Desember 2024',
        time: '19:00',
        place: 'Stadion Utama',
        rules: 'Tidak boleh membawa makanan dan minuman.'
    },
    B: {
        date: '12 Desember 2024',
        time: '20:00',
        place: 'Gedung Serbaguna',
        rules: 'Dilarang merokok di area konser.'
    }
};

function showInfo(concert) {
    const info = concerts[concert];
    document.getElementById('concert-details').innerHTML = `
        <p>Hari/Tanggal: ${info.date}</p>
        <p>Waktu: ${info.time}</p>
        <p>Tempat: ${info.place}</p>
        <p>Peraturan: ${info.rules}</p>
    `;
    document.getElementById('concert-list').style.display = 'none';
    document.getElementById('concert-info').style.display = 'block';
}

function chooseConcert(concert) {
    document.getElementById('concert-list').style.display = 'none';
    document.getElementById('purchase-form').style.display = 'block';
    updateTotal();
}

function goBack() {
    document.getElementById('concert-list').style.display = 'block';
    document.getElementById('concert-info').style.display = 'none';
    document.getElementById('purchase-form').style.display = 'none';
    document.getElementById('qr-code').style.display = 'none';
}

function updateTotal() {
    const price = 100000; // Harga tiket
    const quantity = document.getElementById('quantity').value;
    const total = price * quantity;
    document.getElementById('total-price').textContent = total.toLocaleString('id-ID');
}

function showQR() {
    document.getElementById('qr-code').style.display = 'block';
}
