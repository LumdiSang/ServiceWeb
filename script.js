const sideMenu = document.querySelector('.sideMenu');
const contents = document.querySelector('#contents');
const closeSide = document.querySelector('#close i');
const ham = document.querySelector('.ham');
const dropMenu = document.querySelector('.dropLinks');
const dropBtn = document.querySelector('#dropBtn');
const closeDrop = document.querySelector('#closeDrop');
const storyBtn = document.querySelectorAll('#storybtn');
const slideBtn = document.querySelectorAll('#navi');
const slideCards = document.querySelectorAll('.tCards');


ham.addEventListener('click', () => {
    sideMenu.style.width = '100%';
    contents.style.width = '350px';
})

closeSide.addEventListener('click', () => {
    sideMenu.style.width = '0';
    contents.style.width = '0';
})

dropBtn.addEventListener('click', () => {
    dropMenu.style.top = '0';
    
})

closeDrop.addEventListener('click', () => {
    dropMenu.style.top = '-100%';
})



let slides = function (index){

    slideBtn.forEach((btn) => {

        btn.classList.remove('active');

        slideCards.forEach((e) => {
            e.classList.remove('active');
        })

    })

    slideBtn[index].classList.add('active');
    slideCards[index].classList.add('active');

}


slideBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        slides(index);
    })
})


let c = 1;

setInterval(() => {
    if(slideBtn.length > c){
        slides(c);
        c++;
    }
    else{
        c = 0;
        slides(c);
        c++;
    }
},3000);



const sr = ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay: 150,
    reset: true
})

sr.reveal(`#textContent`, {origin: 'left'});
sr.reveal(`#scImg`, {origin: 'bottom'});
sr.reveal(`#imgSC`, {origin: 'left'});
sr.reveal(`#stoscText`, {origin: 'bottom'});
sr.reveal(`#services`, {origin: 'bottom'});
sr.reveal(`#video`, {origin: 'bottom'});
sr.reveal(`#portfolio`, {origin: 'bottom'});
sr.reveal(`#plans`, {origin: 'bottom'});
sr.reveal(`#team`, {origin: 'bottom'});
sr.reveal(`#strSC`, {origin: 'bottom'});
sr.reveal(`#testimonials`, {origin: 'bottom'});
sr.reveal(`#clSCR`, {origin: 'bottom'});
sr.reveal(`#SCRimgCL`, {origin: 'bottom'});
sr.reveal(`#contacts`, {origin: 'bottom'});
sr.reveal(`#footer`, {origin: 'bottom'});



const sections = document.querySelectorAll('section');
const nav = document.querySelectorAll('.dropLinks a');

const options = {
    threshold: 0.15
};

let match = '';
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            match = entry.target.id;
            nav.forEach((link) => {
                if(link.className == match){
                    nav.forEach((a) => {
                        a.classList.remove('color');
                    })
                    link.classList.add('color');
                }
            })
        }
    })
}, options)

sections.forEach((section) => {
    observer.observe(section);
})


const closeVid = document.querySelector('#vidClose');
const vBox = document.querySelector('.vBox');
const body = document.querySelector('body');

function showVideo(){
    vBox.style.visibility = 'visible';
    vBox.style.opacity = '1';
    body.style.overflow = 'hidden';
}

function closeVideo(){
    vBox.style.visibility = 'hidden';
    vBox.style.opacity = '0';
    body.style.overflow = 'visible';
}


const stryBtn = document.querySelectorAll('.storyBtn');
const para = document.querySelectorAll('.para');

let showP = function(index){

    stryBtn.forEach((btn) => {
        btn.classList.remove('active');
        para.forEach((p) => {
            p.classList.remove('active');
        })
    })

    stryBtn[index].classList.add('active');
    para[index].classList.add('active');
}

stryBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        showP(i);
    })
})


const portfolioBtn = document.querySelectorAll('.btn button');
const folio = document.querySelectorAll('#folio');

let filter = '';
portfolioBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        portfolioBtn.forEach((btn) => {
            btn.classList.remove('btnActive');
        })
        btn.classList.add('btnActive');
        filter = btn.innerHTML;

        folio.forEach((e) => {

            if(e.className.includes(filter)){
                e.classList.add('showCard');
            }
            else{
                if(filter == 'ALL WORK'){
                    folio.forEach((e) => {
                        e.classList.add('showCard');
                    })
                    return;
                }
                e.classList.remove('showCard');
            }

        })
    })
})



