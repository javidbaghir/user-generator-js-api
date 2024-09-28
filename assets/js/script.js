const streetAdd = document.getElementById('street-add')
const streetName = document.getElementById('street-name')
const postCode = document.getElementById('post-code')
const img = document.getElementById('img')
const age = document.getElementById('age')
const name = document.getElementById('name')
const country = document.getElementById('country')
const tel = document.getElementById('tel')
const mobile = document.getElementById('mobile')
const email = document.getElementById('email')
const getUserBtn = document.getElementById('get-user-btn')


const API_URL = "https://randomuser.me/api/"


async function getUser () {

   const result = await fetch(API_URL)
   const data = await result.json()

   streetName.textContent = data.results[0].location.street.name
   streetAdd.textContent = `${data.results[0].location.street.number}  ${data.results[0].location.street.name }`
   postCode.textContent = data.results[0].location.postcode
   postCode.textContent = data.results[0].location.postcode
   img.src = data.results[0].picture.large
   name.textContent = `${data.results[0].name.first} ${data.results[0].name.last},`
   age.textContent = data.results[0].dob.age
   country.textContent = data.results[0].location.country
   tel.textContent = data.results[0].cell
   mobile.textContent = data.results[0].phone
   email.textContent = data.results[0].email
}

getUserBtn.addEventListener('click', function () {
    getApi()
})
