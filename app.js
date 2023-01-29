const navBtns = document.querySelector('.navbar');
const navBtnsAlt = document.querySelector('.alt-nav');
const navBtn = document.querySelectorAll('.navlink');
const allSections = document.querySelector('.contents');
const sections = document.querySelectorAll('.section');
const footerBtns = document.querySelector('.footer-infos');


function PageTransitions(){
    //Active Button
    for(let i=0; i<navBtn.length; i++){
        navBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    navBtns.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    footerBtns.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    navBtnsAlt.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();