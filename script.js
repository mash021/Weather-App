document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'dcca88c1d3058755e260b43515773103'; // اینجا باید کلید API خود را وارد کنید
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    alert('City not found');
                    return;
                }
    
                document.getElementById('cityName').textContent = data.name;
                document.getElementById('temperature').textContent = `${data.main.temp} °C`;
                document.getElementById('feelsLike').textContent = `Feels like: ${data.main.feels_like} °C`;
                document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    
                const weatherIcon = document.getElementById('weatherIcon');
                weatherIcon.className = ''; // حذف کلاس‌های قبلی
    
                const weatherMain = data.weather[0].main.toLowerCase();
    
                if (weatherMain.includes('cloud')) {
                    weatherIcon.classList.add('cloudy');
                } else if (weatherMain.includes('clear')) {
                    weatherIcon.classList.add('sunny');
                } else if (weatherMain.includes('rain')) {
                    weatherIcon.classList.add('rainy');
                } else if (weatherMain.includes('snow')) {
                    weatherIcon.classList.add('snowy');
                }
            })
            .catch(error => {
                alert('An error occurred');
                console.error(error);
            });
    });
    
    
    
    