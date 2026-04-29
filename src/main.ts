import "./style.css";

/* INTERFACES */

interface WeatherResponse {
  name: string;
  sys: { 
    country: string
  };
  weather: { 
    description: string;
    icon: string;
  }[];
  main: {
    temprature: number;
    temprature_feels_like: number;
  }
}



/* VARIABLER */
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_URL = import.meta.env.VITE_RAPIDAPI_URL;

const input = document.getElementById("city-input") as HTMLInputElement;
const status = document.getElementById("status") as HTMLDivElement;
const results = document.getElementById("results") as HTMLDivElement;

let timer = 0;

/* HJELPEFUNKSJONER */

function kelvinToCelsius(kelvin: number) {
  return (kelvin - 273.15).toFixed(1);
}

// Oversetter fra K til C

/* RENDER */
function renderWeather(data: WeatherResponse): void {
  console.log("API response:", data);

  const name = data.name;
  const country = data.sys.country;

  results.innerHTML = `
  <h2>${name}${country ? ", " + country : ""}</h2>
  <img src="${data.weather[0].icon}" alt="${data.weather[0].description}" />
  <p><strong>${kelvinToCelsius(data.main.temprature)} &deg;C</strong> ${data.weather[0].description}</p>
  <p>Føles som: ${kelvinToCelsius(data.main.temprature_feels_like)} &deg;C </p>
  `;
}

/* FETCH */

async function fetchWeather(place: string) {
  status.textContent = "Loading...";
  results.innerHTML = "";

  try {
    const response = await fetch(
      `https://${API_URL}/api/weather/current?place=${encodeURIComponent(place)}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_URL,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) throw new Error(response.statusText);

    status.textContent = "";
    renderWeather(await response.json());
  } catch (err) {
    status.textContent = `Error: ${(err as Error).message}`;
  }
}

/* EVENT LISTENER */

input.addEventListener("input", () => {
  clearTimeout(timer);
  const val = input.value.trim();
  console.log(val);

  if (!val) {
    status.textContent = "";
    results.innerHTML = "";
    return;
  }

  status.textContent = "Typing...";
  timer = setTimeout(() => fetchWeather(val), 2000);
});
