const LEJEASIDE = document.getElementById("lejeoplysninger");

LEJEASIDE.insertAdjacentHTML("beforeend", 
`<div>
<h3> ${sessionStorage.getItem('bil')} </h3> <br>
Hentes: <span>${sessionStorage.getItem('afhentningsdato')}</span><br>
Afleveres: <span>${sessionStorage.getItem('afleveringsdato')}</span><br>
Antal dage:<span>${sessionStorage.getItem('lejedage')}</span><br><br><br><br><br><br>
<h4>Billeje i alt DKK <span>${sessionStorage.getItem('lejeudgift')}</span></h4>inkl. moms
</div>`);

LEJEASIDE.insertAdjacentHTML("beforeend", 
`<div>
<h3>Udstyrsvalg</h3><ul id="ekstraudstyr"><br>
</ul><br><h4>Udstyr i alt DKK <span> ${sessionStorage.getItem('udstyrsudgift')}</span></h4>inkl. moms
</div>`);

const DATA = sessionStorage.getItem("udstyrsliste");
const UDSTYRSLISTE = JSON.parse(DATA);
const EKSTRAUDSTYR = document.getElementById("ekstraudstyr");


for (const UDSTYR of UDSTYRSLISTE) {
    EKSTRAUDSTYR.insertAdjacentHTML("beforeend", `<li style="margin-left: 15px;">${UDSTYR}</li>`);
}

const TOTALASIDE = document.getElementById("totalindhold");
TOTALASIDE.insertAdjacentHTML("beforeend", `<br><h3>TOTAL DKK <span>${sessionStorage.getItem('total')}</span></h3>inkl. moms`);

const STAMOPLYSNINGER = document.getElementById("stamopl");

STAMOPLYSNINGER.insertAdjacentHTML("afterbegin", `
    <p>Fornavn: <span> ${sessionStorage.getItem("fornavn")}</span></p>
    <p>Efternavn: <span> ${sessionStorage.getItem("efternavn")}</span></p>
    <p>Adresse: <span> ${sessionStorage.getItem("vejnavn")}&nbsp;${sessionStorage.getItem("vejnr")}</span></p>
    <p>Postnr. og by: <span> ${sessionStorage.getItem("postnr")}</span></p>
`);

const UDSKRIVKNAP = document.getElementById("udskrivKnap");
UDSKRIVKNAP.addEventListener("click", function() {
    window.print();
})

const icon = document.querySelector(".icon");
const item0 = document.querySelector(".item0");
const item1 = document.querySelector(".item1");

icon.addEventListener("click", () => {
    icon.classList.toggle("iconClick");
    item0.classList.toggle("itemShow");
    item1.classList.toggle("itemShow");
});