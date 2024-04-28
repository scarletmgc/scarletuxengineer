let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');


window.addEventListener('DOMContentloader', ()=>{
    alert("Hola");
});

let textSkills = ['bootstrap','git','javascript','CSS3','HTML5','react','illustrator','photoshop','figma','lottie-files'];
let textHobbies = ['do-karate','fitness','cook','surf-online'];
let textAcademies = ['ITLA','freeCodeCamp','google','IBM-skillBuild','alura-latam','linkedin-learning'];
let skillsContent = document.querySelector("#skillsContenedor");
let hobbiesContent = document.querySelector("#hobbiesContenedor");
let academiesContent = document.querySelector("#academiesContenedor");
let estudios={
    ITLA:'Multimedia Tecnology',
    freeCodeCamp:'Responsive Web Design Certification',
    google:'Foundations of User Experience (UX) Design Google',
    IBM-skillBuild:{'Diseño Web Profesional El Curso Completo, Práctico y desde 0','Introduction to HTML and CSS','Web Development Basics'},
    alura-latam:{'Curso Online Lógica de programación: sumérgete en la programación con JavaScript',
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
}





document.addEventListener('DOMContentLoaded', () => {
//Skills Sections Cubes
    for (let index = 0; index < textSkills.length; index++) {
        let skillsElements = document.createElement("div");
        let image = document.createElement('img');
        let hText = document.createElement("h6");
        
        image.setAttribute('src',`features/images/${textSkills[index]}.svg`);
        
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
        
        icons.setAttribute('src',`features/icons/${textHobbies[jindex]}.svg`);

        hobbiesElements.classList.add('hobbies'); 
        hobbiesContent.append(hobbiesElements);
        hobbiesElements.append(icons);
        hobbiesElements.appendChild(h6Text).textContent = textHobbies[jindex];
        console.log(textHobbies[jindex]);
    }

    for (let kindex = 0; kindex < textAcademies.length; kindex++) {
        let academiesElements = document.createElement("div");
        let tituloContenedor = document.createElement("div");
        let tarjetaFlip=`<div class="card transition">
  <h2 class="transition">Heading here<br><small>description line here</small></h2>
  <div class="cta-container transition"><a href="#" class="cta">Button</a></div>
  <div class="card_circle transition"></div>
</div>
`


        let icons = document.createElement('img');
        let h6TextAcademies = document.createElement("h6"); 
        tituloContenedor.classList.add('titulos');  
       
        icons.setAttribute('src',`features/images/${textAcademies[kindex]}.png`);
        


        //tituloContenedor.appendChild(cardCertificados);
        academiesElements.classList.add('academies'); 
        academiesContent.append(academiesElements,tituloContenedor);
        tituloContenedor.innerHTML=tarjetaFlip;
        //academiesContent.append(tituloContenedor);
        academiesElements.append(icons);
        academiesElements.appendChild(h6TextAcademies).textContent = textAcademies[kindex];
        //tituloContenedor.innerHTML='<div></div>';
        console.log(tituloContenedor);
        console.log(textAcademies[kindex]);
    }



});


