import React from "react";

const CITIES = [
  { name: "Buenos Aires", lat: -34.61, lon: -58.38, tz: "America/Argentina/Buenos_Aires" },
  { name: "Madrid", lat: 40.4168, lon: -3.7038, tz: "Europe/Madrid" },
  { name: "New York", lat: 40.7128, lon: -74.006, tz: "America/New_York" },
  { name: "London", lat: 51.5074, lon: -0.1278, tz: "Europe/London" },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503, tz: "Asia/Tokyo" },
];

export default function Ticker() {
  const [city, setCity] = React.useState(CITIES[0]);
  const [now, setNow] = React.useState(new Date());
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&timezone=${encodeURIComponent(city.tz)}`;
    fetch(url)
      .then((r) => r.json())
      .then((d) => setWeather(d?.current_weather))
      .catch(() => setWeather(null));
  }, [city]);

  const timeStr = now.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit", timeZone: city.tz });

  const WeatherIcon = ({ code }) => {
    const base = "w-4 h-4 md:w-5 md:h-5 inline-block align-[-2px] mr-1";
    const byCode = (c) => {
      if (c === 0) return "text-amber-400"; // Sol
      if ([1,2,3].includes(c)) return "text-sky-300"; // Parcial nublado
      if ([45,48].includes(c)) return "text-slate-300"; // Niebla
      if ([51,53,55,56,57].includes(c)) return "text-cyan-300"; // Llovizna
      if ([61,63,65,66,67,80,81,82].includes(c)) return "text-blue-400"; // Lluvia
      if ([71,73,75,77].includes(c)) return "text-indigo-300"; // Nieve
      if ([95,96,97,99].includes(c)) return "text-yellow-300"; // Tormenta
      return "text-slate-300";
    };
    const cls = `${base} ${byCode(code)}`;
    // Mapas por grupos de código Open-Meteo
    if (code === 0) {
      // Sol
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
            <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
          </g>
        </svg>
      );
    }
    if ([1,2,3].includes(code)) {
      // Parcial nublado
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <circle cx="8" cy="10" r="3" fill="currentColor" />
          <path d="M7 16h8a3 3 0 100-6 4.5 4.5 0 10-8.9 1" fill="currentColor" />
        </svg>
      );
    }
    if ([45,48].includes(code)) {
      // Niebla
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path d="M3 10h18M2 13h20M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    if ([51,53,55,56,57].includes(code)) {
      // Llovizna
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path d="M7 16h8a3 3 0 100-6 4.5 4.5 0 10-8.9 1" fill="currentColor" />
          <path d="M8 18l-1 2M12 18l-1 2M16 18l-1 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    if ([61,63,65,66,67,80,81,82].includes(code)) {
      // Lluvia / Chubascos
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path d="M7 15h8a3 3 0 100-6 4.5 4.5 0 10-8.9 1" fill="currentColor" />
          <path d="M8 18l-1.5 3M12 18l-1.5 3M16 18l-1.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    if ([71,73,75,77].includes(code)) {
      // Nieve
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path d="M12 5v14M5 12h14M6 7l12 10M6 17L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    }
    if ([95,96,97,99].includes(code)) {
      // Tormenta
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path d="M7 14h8a3 3 0 100-6 4.5 4.5 0 10-8.9 1" fill="currentColor" />
          <path d="M11 14l-2 5 5-4h-3l2-3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );
    }
    // Default nube
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden>
        <path d="M7 16h8a3 3 0 100-6 4.5 4.5 0 10-8.9 1" fill="currentColor" />
      </svg>
    );
  };

  const describeWeather = (code) => {
    if (code === 0) return "Despejado";
    if ([1, 2, 3].includes(code)) return "Parcial nublado";
    if ([45, 48].includes(code)) return "Niebla";
    if ([51, 53, 55, 56, 57].includes(code)) return "Llovizna";
    if ([61, 63, 65, 66, 67].includes(code)) return "Lluvia";
    if ([71, 73, 75, 77].includes(code)) return "Nieve";
    if ([80, 81, 82].includes(code)) return "Chubascos";
    if ([95, 96, 97, 99].includes(code)) return "Tormenta";
    return "—";
  };

  return (
  <div className="bg-slate-900/95 border-b border-slate-800">
      <div className="container mx-auto px-4 py-2 flex items-center gap-3">
        <div className="text-slate-300 text-xs md:text-sm flex items-center gap-2">
          <span className="hidden sm:inline">Clima hoy</span>
          <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
        </div>

        <div className="relative">
          <select
            aria-label="Seleccionar ciudad"
            value={city.name}
            onChange={(e) => setCity(CITIES.find(c => c.name === e.target.value) || CITIES[0])}
            className="bg-slate-800/70 border border-slate-700 text-slate-200 text-xs md:text-sm rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {CITIES.map(c => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 overflow-hidden group">
          <div className="whitespace-nowrap animate-[ticker_22s_linear_infinite] group-hover:[animation-play-state:paused] text-slate-300 text-xs md:text-sm">
            <span className="mr-6">{city.name}</span>
            <span className="mr-6">Hora: {timeStr} hs</span>
            {weather ? (
              <span className="mr-6">
                <WeatherIcon code={weather.weathercode} />
                Temp: {Math.round(weather.temperature)}°C · {describeWeather(weather.weathercode)} · Viento {Math.round(weather.windspeed)} km/h
              </span>
            ) : (
              <span className="mr-6">Cargando clima…</span>
            )}
            <span className="mr-6">{city.name}</span>
            <span className="mr-6">Hora: {timeStr} hs</span>
            {weather ? (
              <span className="mr-6">
                <WeatherIcon code={weather.weathercode} />
                Temp: {Math.round(weather.temperature)}°C · {describeWeather(weather.weathercode)} · Viento {Math.round(weather.windspeed)} km/h
              </span>
            ) : (
              <span className="mr-6">Cargando clima…</span>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
