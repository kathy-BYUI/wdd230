const baseURL = "https://kathy-BYUI.github.io/wdd230/";

const linksURL = "https://kathy-BYUI.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Failed to fetch links data');
        }
        const data = await response.json();
        const { weeks } = data;
        displayLinks(weeks);
    } catch (error) {
        console.error(error);
    }
}

getLinks(linksURL);

const weeksList = document.querySelector("#act-title + ul");

function displayLinks(weeks) {
    weeks.forEach((weekData) => {
        const { week, links } = weekData;
        const listItem = document.createElement("li");
        const listItemContent = document.createElement("a");
        const linksHTML = links.map((link) => `<a href="${link.url}">${link.title}</a>`).join(" | ");
        listItemContent.innerHTML = `${week}: ${linksHTML}`;
        listItem.appendChild(listItemContent);
        weeksList.appendChild(listItem);
    });
}