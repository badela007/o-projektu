const form = document.querySelector("#nameForm");
const inputField = document.getElementById("nameInput");
const greetContainer = document.getElementById("greetContainer");

const handleSubmit = (event) => {
    event.preventDefault();
    const jmeno = inputField.value;
    console.log(jmeno);
    greetContainer.innerHTML =  `<p class="jsText">Ahoj, ${jmeno}! Jsem Kojorádce, pomocnice při potížích s kojením. Právě teď Adéla a Anička pilně mě vyvíjejí, abych mohla co nejlépe pomoci ženám s jejich problémy při kojení. Jestli chceš vědět víc, mrkni do sekce <a href="o_projektu.html">o projektu</a>!</p></div>`;
};

form.addEventListener("submit", handleSubmit);

