const modeButton = document.getElementById("mode");
const main = document.querySelector("main");
const section = document.getElementById("activities");
const textInfo = document.getElementById("info");
const headerThree = document.getElementById("act-title");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌗")) {
        section.style.background = "black";
        textInfo.style.backgroundColor = "black";
        headerThree.style.color = "white";
        main.style.background = "black";
		main.style.color = "white";
		modeButton.textContent = "🌞";
	} else {
        section.style.background = "white";
        textInfo.style.backgroundColor = "white";
        headerThree.style.color = "white";
		main.style.background = "white";
		main.style.color = "black";
		modeButton.textContent = "🌗";
	}
});