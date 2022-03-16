fetch("users.json")
    .then((data) => {
        // console.log(data)
        return data.json();
    }).then((myData) => {
        console.log(myData)
    })

const url = "http://localhost:3000/users"
async function getA1User() {
    const response = await fetch("users.json")
    const data = await response.json();
    console.log(data);
}
getA1User(1)

async function getUser(userId) {
    const response = await fetch(`http://localhost:3000/users/${userId}`);
    const data = await response.json();
    console.log(data);
}

getA1User(2);
let user = {
    firstName: "Portia",
    lastName: "Monney",
    userNAme: "PortiaMonney",
    email: "john.doe@gmail.com",
    gender: "Male",

};
async function updateuser(userinfo) {
    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(userinfo),
        haeders: {
            "content-type": "application/json"

        }
    })


}


async function createUser(userinfo) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userinfo),
        headers: {
            "content-type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data);


}

createUser(user);

async function deleteuser(userinfo) {
    const response = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(userinfo),
        headers: {
            "content-type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data)
}