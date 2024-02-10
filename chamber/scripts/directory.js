const jsonURL = './data/members.json'

async function getData() {
    try {
        const response = await fetch(jsonURL);
        if(response.ok) {
            const data = await response.json();
            // console.log(data);
            displayCards(data);
        } else {
            throw Error(response.text())
        }
    } catch (error) {
        console.error(error);
    }
}
const memberList = document.querySelector('#member-list')

function displayCards(data) {

    data.members.forEach(member => {
        let listItem = document.createElement('li');
        listItem.classList.add('member-card');

        let memberImg = document.createElement('img')
        memberImg.setAttribute('src', member.branding)
        memberImg.setAttribute('alt', `${member.name} logo`)
        memberImg.setAttribute('height', "300")
        memberImg.setAttribute('width', "300")
        listItem.appendChild(memberImg);

        let name = document.createElement('h3');
        name.innerText = member.name; 
        listItem.appendChild(name);

        
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');
        
        address.innerHTML = `<span class="bold">Address: </span> ${member.address}`
        listItem.appendChild(address);
        
        phone.innerHTML = `<span class="bold">Phone: </span> ${member.phone}`
        listItem.appendChild(phone);
        
        website.innerHTML = `<span class="bold">Website: </span> <a href="${member.website}">${member.website}</a>`
        listItem.appendChild(website);
        
        membership.innerHTML = `<span class="bold">Website: </span>${member.membership}`
        listItem.appendChild(membership);

        memberList.appendChild(listItem);
    });
}

getData();

const viewToggle = document.querySelector('#change-view');
viewToggle.addEventListener('click', () => {
    memberList.classList.toggle('grid-view')

    viewToggle.blur();

    if(memberList.classList.contains('grid-view')) {
        viewToggle.querySelector('#change-view img').setAttribute('src', './images/list.svg')
    } else {
        viewToggle.querySelector('#change-view img').setAttribute('src', './images/grid.svg')
    }
})