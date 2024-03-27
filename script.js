document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Formun sayfayı yenilemesini engelle

    var data = {
        text: document.getElementById('inputData').value
    };

    fetch('API_URL', { // "API_URL" kısmını API'nizin gerçek URL'i ile değiştirin
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Başarıyla gönderildi:', data);
    })
    .catch((error) => {
        console.error('Hata:', error);
    });
});
