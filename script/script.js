let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');


window.addEventListener('DOMContentloader', ()=>{
    alert("Hola");
});

let textSkills = ['bootstrap','git','javascript','CSS3','HTML5','react','illustrator','photoshop','figma','lottie-files'];
let textHobbies = ['do-karate','fitness','cook','surf-online'];
let textAcademies = ['ITLA','freeCodeCamp','google','IBM-skillBuild','alura-latam'];
let skillsContent = document.querySelector("#skillsContenedor");
let hobbiesContent = document.querySelector("#hobbiesContenedor");
let academiesContent = document.querySelector("#academiesContenedor");





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
        let icons = document.createElement('img');
        let h6TextAcademies = document.createElement("h6");   
        
        icons.setAttribute('src',`features/images/${textAcademies[kindex]}.png`);

        academiesElements.classList.add('academies'); 
        academiesContent.append(academiesElements);
        academiesElements.append(icons);
        academiesElements.appendChild(h6TextAcademies).textContent = textAcademies[kindex];
        console.log(textAcademies[kindex]);
    }




});


