const currentYear = 2023;
document.querySelector('#currentYear').innerHTML = currentYear;
let dateModified = document.lastModified;
document.getElementById(
	'lastModified'
).textContent = `Last Updated ${dateModified} . `;
