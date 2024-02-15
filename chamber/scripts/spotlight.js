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
const memberList = document.querySelector('.sponsors')

function displayCards(data) {

    let members = data.members.filter((member) => {
        if(member.membership > 1) {
            return member
        }
    });

    let selected = [];
    selected = selected.concat(members)

    for (let i = 0; i < 2; i++) {
        selected.splice(Math.floor(Math.random() * selected.length), 1)
    }

    selected.forEach(member => {
        let listItem = document.createElement('article');
        // listItem.classList.add('member-card');

        let memberImg = document.createElement('img')
        memberImg.setAttribute('src', member.branding)
        memberImg.setAttribute('alt', `${member.name} logo`)
        memberImg.setAttribute('height', "200")
        memberImg.setAttribute('width', "200")
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
        
        membership.innerHTML = `<span class="bold">Membership: </span>${GetMembershipText(member.membership)}`
        listItem.appendChild(membership);

        memberList.appendChild(listItem);
    });
}

function GetMembershipText(level) {
    switch (level) {
        case 0:
            return "Nonprofit Member"
        case 1:
            return "Bronze Member"
        case 2:
            return "Silver Member"
        case 3:
            return "Gold Member"
        default:
            break;
    }
}

getData();