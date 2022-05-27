const sections = document.querySelector('.effect')
const atributes = document.getElementById('profileAtributes')


const menuHandler = () => {
    if(!sections.innerHTML == '<span class="effect">[&nbsp;Open&nbsp;]</span>') {
        sections.innerHTML= '<span class="effect">[&nbsp;Open&nbsp;]</span>'
    } else {
        sections.innerHTML= `
            [
            &nbsp;<a class="effect" href='/index.html'>Home</a>,&nbsp;
            &nbsp;<a class="effect" href='/templates/about.html'>About</a>,&nbsp;
            &nbsp;<a class="effect" href='/templates/contact.html'>Contact</a>&nbsp;
            ]`
    }
    
}

sections.addEventListener('click', menuHandler )


