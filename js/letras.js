const lyricsDiv = document.getElementById("lyrics");

const frases = [
    { texto: "Te amo y más de lo que puedes imaginar", tiempo: 13600 },
    { texto: "Te amo además como nunca nadie jamás lo hará", tiempo: 7000 },
    { texto: "En esta canción, va mi corazón", tiempo: 6150 },
    { texto: "Amor más que amor es el nuestro y te lo vengo a dar", tiempo: 7200 },
    { texto: "Te miro y más... y más y más te quiero mirar", tiempo: 7200 },
    { texto: "Te amo y sabrás puro sentimiento y no hay nada más", tiempo: 7000 },
    { texto: "Y sueño llegar, a tu alma tocar", tiempo: 6800 },
    { texto: "Amor más que amor es el nuestro y te lo vengo a dar", tiempo: 7370 },
    { texto: "Ruego a Dios tenerte a mi lado", tiempo: 6300 },
    { texto: "Y entonces poderte abrazar", tiempo: 7900 },
    { texto: "Si no estás aquí, algo falta", tiempo: 5800 },
    { texto: "Yo por ti pelearé hasta el final", tiempo: 7500 },
    { texto: "..............", tiempo: 14000 },
    { texto: "Y sueño llegar, a tu alma tocar", tiempo: 6300 },
    { texto: "Amor más que amor es el nuestro y te lo vengo a dar", tiempo: 6900 },
    { texto: "Te amo y ¡más!", tiempo: 7500 },
    { texto: "Te amo y sabrás que nadie como yo te amará", tiempo: 7360 },
    { texto: "En esta canción, yo veo quien soy", tiempo: 7300 },
    { texto: "Amor más que amor es el mío y lo siento", tiempo: 3000 },
    { texto: "Amor más que amor es el tuyo y presiento", tiempo: 3200 },
    { texto: "Amor más que amor es el nuestro", tiempo: 2800 },
    { texto: "Si tú me... lo das", tiempo: 4800 },
    { texto: "Te amo mi Elizabeth!", tiempo: 1000 }
];

let totalTiempo = 0;

frases.forEach(({ texto, tiempo }) => {
    setTimeout(() => {
        lyricsDiv.innerHTML = `<p>${texto}</p>`;
    }, totalTiempo);
    totalTiempo += tiempo;
});
