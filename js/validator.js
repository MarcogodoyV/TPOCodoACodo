const btnInput = document.querySelector('#btn')


function validate(e) {
    document.getElementById('aviso').innerHTML = ''
    if(document.myForm.name.value == '' || document.myForm.name.value.search(/^[a-z ,.'-]+$/i)) {
        document.myForm.name.value = ''
        document.getElementById('aviso').innerHTML += '<p>Please enter a valid name</p>'
    }
    if(document.myForm.phoneNumber.value == '' || document.myForm.phoneNumber.value.search(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
        document.myForm.phoneNumber.value = ''
        document.getElementById('aviso').innerHTML += '<p>Please enter a valid phone number</p>'
    }
    if(document.myForm.email.value == '' || document.myForm.email.value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        document.myForm.email.value = ''
        document.getElementById('aviso').innerHTML += '<p>Please enter a valid email</p>'
    }

e.preventDefault()

}
 btnInput.addEventListener('click', validate)