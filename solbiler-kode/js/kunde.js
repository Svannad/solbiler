const LEJEASIDE = document.getElementById("lejeoplysninger");

LEJEASIDE.insertAdjacentHTML("beforeend", "<h3>" + sessionStorage.getItem('bil') + "</h3>");
LEJEASIDE.insertAdjacentHTML("beforeend", `<p>Hentes: <span>${sessionStorage.getItem('afhentningsdato')}</span></p>`);
LEJEASIDE.insertAdjacentHTML("beforeend", `<p>Afleveres: <span>${sessionStorage.getItem('afleveringsdato')}</span></p>`);
LEJEASIDE.insertAdjacentHTML("beforeend", `<p>Antal dage:<span>${sessionStorage.getItem('lejedage')}</span></p>`);
LEJEASIDE.insertAdjacentHTML("beforeend", `<p><h4>Billeje i alt DKK <span>${sessionStorage.getItem('lejeudgift')}</span></h4>inkl. moms</p>`);
LEJEASIDE.insertAdjacentHTML("beforeend", `<br><br><h3>Udstyrsvalg</h3><ul id="ekstraudstyr">`);
const DATA = sessionStorage.getItem("udstyrsliste");
const UDSTYRSLISTE = JSON.parse(DATA);
const EKSTRAUDSTYR = document.getElementById("ekstraudstyr");

// udskrivning af liste til skærm
for (const UDSTYR of UDSTYRSLISTE) {
    EKSTRAUDSTYR.insertAdjacentHTML("beforeend", `<li style="margin-left: 15px;">${UDSTYR}</li>`);
}

LEJEASIDE.insertAdjacentHTML("beforeend", `</ul><br><h4>Udstyr i alt ${sessionStorage.getItem('udstyrsudgift')}</h4>inkl. moms`);

const TOTALASIDE = document.getElementById("totalindhold");
TOTALASIDE.insertAdjacentHTML("beforeend", `<br><h3>TOTAL DKK <span>${sessionStorage.getItem('total')}</span></h3>inkl. moms`);

const FORMULAR = document.getElementById("formular");
FORMULAR.addEventListener("submit", function (e) {
    e.preventDefault();
    sessionStorage.setItem("fornavn", document.getElementById("fornavn").value);
    sessionStorage.setItem("efternavn", document.getElementById("efternavn").value);
    sessionStorage.setItem("vejnavn", document.getElementById("vejnavn").value);
    sessionStorage.setItem("vejnr", document.getElementById("vejnr").value);
    sessionStorage.setItem("postnr", document.getElementById("postnr").value);
    window.location.href = "kvittering.html";
})


fetch("https://api.dataforsyningen.dk/postnumre")
    .then(function (data) {
        return data.json();
    })
    .then(function (post) {
        const PBLISTE = document.getElementById("pbliste");
        for (const oplysninger of post) {
            PBLISTE.insertAdjacentHTML("beforeend", "<option>" + oplysninger.nr + " " + oplysninger.navn + "</option>");
        }

    })
    .catch(function (error) {
        const PB = document.getElementById("postnr");
        PB.innerHTML = "Postnr og by ikke tilgængelige";
    })

    const icon = document.querySelector(".icon");
    const item0 = document.querySelector(".item0");
    const item1 = document.querySelector(".item1");
    
    icon.addEventListener("click", () => {
        icon.classList.toggle("iconClick");
        item0.classList.toggle("itemShow");
        item1.classList.toggle("itemShow");
    });