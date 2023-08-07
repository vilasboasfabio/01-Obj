const users = [];
let userIndex = -1;

function saveUser() {
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const eyeColor = document.getElementById('eyeColor').value;

    verifyUser(name, lastname, age, eyeColor);
    if (userIndex == -1) {
       
        if (name && lastname && age && eyeColor) {
         
            storeUser(name, lastname, age, eyeColor);
            cleanFields();
        }
    } else {
        if (name && lastname && age && eyeColor) {
            users[userIndex] = {
                name,
                lastname,
                age,
                eyeColor
            }
            showUsers();
            userIndex = -1;
            cleanFields();
        }
    }
  
}

// Resto do código permanece igual...


function storeUser(name, lastname, age, eyeColor) {
    const user = {
        name,
        lastname,
        age,
        eyeColor
    };
    users.push(user);
    showUsers();
    console.log(users);
    console.log(user);
}





function showUsers() {
    document.getElementById("list").classList.remove("hidden");
    let showContent = '';

    users.map((user, index) => {
        showContent += `
            <div class="post"><h2>${user.name}</h2>
            <p><strong>Resumo</strong>${user.lastname}</p>
            <p><strong>Publicado por</strong>${user.age}</p>
            <p><strong>Data de publicação</strong>${user.eyeColor}</p>

            <button onclick="editUser(${index})">Editar</button>
            <button onclick="removeUser(${index})">Remover</button>

          
            </div>

        `;

    })
    document.getElementById('list').innerHTML = showContent;
}
function cleanFields() {
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('eyeColor').value = '';
}
function editUser(index) {
    userIndex = index;

    const user = users[index];

    document.getElementById('name').value = user.name;
    document.getElementById('lastname').value = user.lastname;
    document.getElementById('age').value = user.age;
    document.getElementById('eyeColor').value = user.eyeColor;

}
function removeUser(index) {
    users.splice(index, 1);
    showUsers();
    if (users.length == 0) {
        document.getElementById("list").classList.add("hidden");

    }

}
function verifyUser(name, lastname, age, eyeColor) {
    if (name.length < 3) {
        document.getElementById("errorAlertname").innerHTML = "O nome deve conter no mínimo 3 caracteres";
        return
    }
    if (lastname.length < 3) {
        document.getElementById("errorAlertlastname").innerHTML = "O sobrenome deve conter no mínimo 3 caracteres";
        return
    }
    if (age > 125 || age <= 0) {
        document.getElementById("errorAlertage").innerHTML = "A idade deve ser entre 0 e 125 anos";
        return
    }
    if (eyeColor == "") {
        document.getElementById("errorAlerteyeColor").innerHTML = "Selecione uma cor de olhos";
        return
    } 
    console.log(name.length, lastname.length, age.length, eyeColor.length);
}

