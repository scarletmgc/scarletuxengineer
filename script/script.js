let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');

tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "stars",
      zLayers: 100,
      background: {
        opacity: 0
      }
    },
  });

let textSkills = ['bootstrap', 'git', 'javascript', 'CSS3', 'HTML5', 'react', 'illustrator', 'photoshop', 'figma', 'lottie-files'];
let textHobbies = ['do-karate', 'fitness', 'cook', 'surf-online'];
let textAcademies = ['ITLA', 'freeCodeCamp', 'google', 'IBM-skillBuild', 'alura-latam', 'linkedin-learning'];
let skillsContent = document.querySelector("#skillsContenedor");
let hobbiesContent = document.querySelector("#hobbiesContenedor");
let academiesContent = document.querySelector("#academiesContenedor");
let formularioVariable = document.querySelector('#formulario');
/*let estudios={
    ITLA:'Multimedia Tecnology',
    freeCodeCamp:'Responsive Web Design Certification',
    google:'Foundations of User Experience (UX) Design Google',
    IBMskillBuild:'Diseño Web Profesional El Curso Completo, Práctico y desde 0','Introduction to HTML and CSS','Web Development Basics',
    aluralatam:{'Curso Online Lógica de programación: sumérgete en la programación con JavaScript',
        'Curso Online Lógica de programación: explorar funciones y listas',
        'Curso Online HTML5 y CSS3 parte 1: Mi primera página web',
        'Curso Online HTML5 y CSS3 parte 2: Posicionamiento, listas y navegación'
        'CSS: Flexbox y layouts responsivos',
        'JavaScript para web: crea páginas dinámicas',
        'JavaScript: manipulando elementos en el DOM',
        'Javascript: consumiendo y manejando datos de una API',
        'JavaScript: creando solicitudes',
        'JavaScript: validando formularios'
        },
        linkedin-learning:'Woman and Technology'
}*/





document.addEventListener('DOMContentLoaded', () => {
    //Skills Sections Cubes
    for (let index = 0; index < textSkills.length; index++) {
        let skillsElements = document.createElement("div");
        let image = document.createElement('img');
        let hText = document.createElement("h6");

        image.setAttribute('src', `features/images/${textSkills[index]}.svg`);

        skillsElements.classList.add('skills');
        skillsContent.append(skillsElements);
        skillsElements.append(image);
        skillsElements.appendChild(hText).textContent = textSkills[index];
        console.log(textSkills[index]);
    }
    //Hobbies Sections Cubes
    for (let jindex = 0; jindex < textHobbies.length; jindex++) {
        let hobbiesElements = document.createElement("div");
        let icons = document.createElement('img');
        let h6Text = document.createElement("h6");

        icons.setAttribute('src', `features/icons/${textHobbies[jindex]}.svg`);

        hobbiesElements.classList.add('hobbies');
        hobbiesContent.append(hobbiesElements);
        hobbiesElements.append(icons);
        hobbiesElements.appendChild(h6Text).textContent = textHobbies[jindex];
        console.log(textHobbies[jindex]);
    }

    for (let kindex = 0; kindex < textAcademies.length; kindex++) {
        let academiesElements = document.createElement("div");
        let tituloContenedor = document.createElement("div");
        let tarjetaFlip = `<div class='card'></div>`
        console.log(tarjetaFlip);


        let icons = document.createElement('img');
        let h6TextAcademies = document.createElement("h6");
        tituloContenedor.classList.add('titulos');

        icons.setAttribute('src', `features/images/${textAcademies[kindex]}.png`);



        //tituloContenedor.appendChild(cardCertificados);
        academiesElements.classList.add('academies');
        academiesContent.append(academiesElements, tituloContenedor);
        tituloContenedor.innerHTML = tarjetaFlip;
        //academiesContent.append(tituloContenedor);
        academiesElements.append(icons);
        academiesElements.appendChild(h6TextAcademies).textContent = textAcademies[kindex];
        //tituloContenedor.innerHTML='<div></div>';
        console.log(tituloContenedor);
        console.log(textAcademies[kindex]);
    }
});
formularioVariable.addEventListener('submit', formularioFuction);

const buttonMailTo = document.querySelector('#envioCorreo');
function formularioFuction(evento) {

    evento.preventDefault();
    console.log('funciono');
    const form = new FormData(this);
    console.log(form.get('user_name'));

    buttonMailTo.setAttribute('href', `mailto:scarletmgc@gmail.com ? subject=${form.get('user_name')}email=${form.get('user_email')}${form.get('user_message')}`);
    buttonMailTo.click();
}
/******************Barra de Navbar********************************************** */

/*var navBarTop = document.querySelector("header");
body.addEventListener("scroll", () => {
    if (body.scrollTop>500) {
        navBarTop.style.backgroundColor = "red";
        alert('queso');
    }
    });      
*/
    
    document.addEventListener("scroll", () => {

        console.log("Vertical: " + window.scrollY);
        console.log("Horizontal: " + window.scrollX);
        
        if(window.scrollY>=3704){
            document.querySelectorAll('li > a').forEach(a => a.style.color = 'white');
            document.querySelector('header li:last-child').style.background='#fdbc45';        
        }else{
            document.querySelectorAll('li > a').forEach(a => a.style.color = '#000000A6')
            document.querySelector('header li:last-child').style.background='#F8F9FA';
        }
     });  

     