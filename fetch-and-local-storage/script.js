
async function getDataFromGithub(userName) {

    const $spanName = document.getElementById("name");
    $spanName.innerHTML = userName;
    // const userName = 'vickynocampo';
    const url = `https://api.github.com/users/${userName}/repos`;

    try {
        const response = await fetch(url);
        if  ( !response.ok )
        {
            alert("Error al obtener los repositorios.")
        }
        else 
        {
            const datos = await response.json();

            const $lista = document.getElementById("lista_repos");
            const datosMapeados = datos.map(repositorio => {
                return `<a href="${repositorio.html_url}"><li>${repositorio.name}</li></a>`;
            });

            $lista.innerHTML = datosMapeados.join("");
        }

        
    } catch (error) {
        console.log("ERROR!!!!")
        console.log(error)
    }
    
}

function saveUserNameInLocalStorage(userName) {
    localStorage.setItem("userName", userName);
}

const $consultar = document.getElementById("consultar");
$consultar.addEventListener("click", function (event) {
    const userName = prompt("Ingrese el nombre de usuario de Github");
    saveUserNameInLocalStorage(userName);
    getDataFromGithub(userName);
    
});

const userNameInLocalStorage = localStorage.getItem("userName");

if (userNameInLocalStorage)
{
    getDataFromGithub(userNameInLocalStorage);
}
