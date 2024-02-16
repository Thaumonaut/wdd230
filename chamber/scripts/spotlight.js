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

        
        // let address = document.createElement('p');
        // let phone = document.createElement('p');
        // let website = document.createElement('p');
        let membership = document.createElement('p');
        
        // address.innerHTML = `<span class="bold">Address: </span> ${member.address}`
        // listItem.appendChild(address);
        
        // phone.innerHTML = `<span class="bold">Phone: </span> ${member.phone}`
        // listItem.appendChild(phone);
        
        // website.innerHTML = `<span class="bold">Website: </span> <a href="${member.website}">${member.website}</a>`
        // listItem.appendChild(website);
        
        membership.innerHTML = `${GetMembershipText(member.membership)}`
        membership.classList.add(GetMembershipText(member.membership, true))
        membership.classList.add('membership-tag')
        listItem.appendChild(membership);

        memberList.appendChild(listItem);
    });
}

function GetMembershipText(level, isClassName = false) {
    switch (level) {
        case 0:
            if (isClassName) {
                return 'np-member'
            }
            return "Nonprofit Member"
        case 1:
            if (isClassName) {
                return 'bronze-member'
            }
            return "Bronze Member"
        case 2:
            if (isClassName) {
                return 'silver-member'
            }
            return "Silver Member"
        case 3:
            if (isClassName) {
                return 'gold-member'
            }
            return "Gold Member"
        default:
            return ''
    }
}

getData();