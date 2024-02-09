const jsonURL = './data/links.json'

async function getData() {
    try {
        const response = await fetch(jsonURL);
        if(response.ok) {
            const data = await response.json();
            // console.log(data);
            displayData(data);
        } else {
            throw Error(response.text())
        }
    } catch (error) {
        console.error(error);
    }
}

function displayData(data) {
    const activitiesList = document.querySelector("#activities");

    data.weeks.forEach(item => {
        const listItem = document.createElement('li');
        const weekName = document.createElement('span')

        weekName.textContent = `${item.week}: `;
        let links = item.links.map(link => {
            const anchor = document.createElement('a');
            anchor.setAttribute('href', link.url);
            anchor.textContent = link.title;
            return anchor.outerHTML;
        })

        links = links.join(' | ')

        listItem.appendChild(weekName);
        listItem.innerHTML += links;

        activitiesList.appendChild(listItem)
    });
}

getData();