// person_list.js
document.addEventListener('DOMContentLoaded', function() {
    const people = [
        { name: 'João', age: 25 },
        { name: 'Maria', age: 30 },
        { name: 'Pedro', age: 35 },
        { name: 'Ana', age: 28 }
    ];

    const personTable = document.getElementById('personTable').getElementsByTagName('tbody')[0];

    people.forEach(person => {
        const row = personTable.insertRow();
        const cellName = row.insertCell(0);
        const cellAge = row.insertCell(1);
        cellName.textContent = person.name;
        cellAge.textContent = person.age;
    });

    const ctx = document.getElementById('ageChart').getContext('2d');
    const ageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: people.map(person => person.name),
            datasets: [{
                label: 'Idade',
                data: people.map(person => person.age),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Sao%20Paulo&appid=YOUR_API_KEY&units=metric')
        .then(response => response.json())
        .then(data => {
            const weatherDataDiv = document.getElementById('weatherData');
            weatherDataDiv.innerHTML = `
                <h3>Temperatura em São Paulo</h3>
                <p>${data.main.temp} °C</p>
                <p>${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar dados do clima:', error);
        });
});