document.getElementById('countryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const countryInput = document.getElementById('countryInput').value;
  
    // API request
    fetch(`https://restcountries.com/v3.1/name/${countryInput}`)
      .then(response => response.json())
      .then(data => {
        // Retrieve the necessary information from the response
        const country = data[0];
        const flag = country.flags.png;
        const coatOfArms = country.coatOfArms.png;
        const name = country.name.common;
        const capital = country.capital[0];
        const currencies = Object.entries(country.currencies).map(([key, value]) => `${value.name} (${value.symbol})`).join(', ');
        const languages = Object.values(country.languages).join(', ');
  
        // Update the page with the retrieved information
        document.getElementById('flagImg').src = flag;
        document.getElementById('coatOfArmsImg').src = coatOfArms;
        document.getElementById('countryName').textContent = name;
        document.getElementById('capital').textContent = `Capital: ${capital}`;
        document.getElementById('currencies').textContent = `Currencies: ${currencies}`;
        document.getElementById('languages').textContent = `Languages: ${languages}`;
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Unable to fetch.');
      });
  });
  