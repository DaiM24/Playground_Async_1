const apiUsers = 'https://jsonplaceholder.typicode.com/users'

const getUsersAsync = async() => {
    const respose = await fetch(apiUsers) 
    const myJson = await respose.json()
    return myJson
}


const renderUsers = async() => {
    const users = await getUsersAsync()
    const containerUsers = document.getElementById('container-users')

    users.map(user => {
        containerUsers.insertAdjacentHTML('beforeend', renderCard(user))
    })
}
renderUsers()

const renderCard = (user) => {
    return `
    <div class="col">
        <div class="card border-dark h-100 px-3 bg-transparent">
            <div class="card-header bg-transparent text-center border-bottom border-dark fw-bold fs-5 py-3">${user.name}</div>
            <img src="./assets/users_img.png" class="card-img-top p-3" alt="img">
            <div class="card-body text-dark px-0">
                <p class="card-text"><span class="fw-bold">User name: </span>${user.username}</p>
                <p class="card-text"><span class="fw-bold">Phrase: </span>${user.company.catchPhrase}</p>
                <p class="card-text"><span class="fw-bold">Email: </span>${user.email}</p>
                <p class="card-text"><span class="fw-bold">Conmpany: </span>${user.company.name}</p>
                <p class="card-text"><span class="fw-bold">Phone: </span>${user.phone}</p>
                <div>
                <p class="">
                    <button class="btn btn-primary text-cneter" type="button" data-bs-toggle="collapse" data-bs-target="#${user.username}"
                    aria-expanded="false" aria-controls="${user.username}">
                    View address details 
                    </button>
                </p>
                <div class="collapse position-absolute" id="${user.username}" style="z-index: 1">
                    <div class="card card-body">
                        <p class="card-text my-2 "><span class="fw-bold">Address: </span>${user.address.city}</p>
                        <p class="card-text my-2 "><span class="fw-bold">Street: </span>${user.address.street}</p>
                        <p class="card-text my-2 "><span class="fw-bold">Suite: </span>${user.address.suite}</p>
                        <p class="card-text my-2 "><span class="fw-bold">Zipe code: </span>${user.address.zipcode}</p>
                        <p class="card-text my-2 "><span class="fw-bold">Lat: </span>${user.address.geo.lat}</p>
                        <p class="card-text my-2 "><span class="fw-bold">Lng: </span>${user.address.geo.lng}</p>
                    </div>
                </div> 
                
            </div>
        </div>
    </div>
    `
}