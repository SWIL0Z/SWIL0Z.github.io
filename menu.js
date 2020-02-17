var resume = document.getElementById('menu1');
var diplomes = document.getElementById('menu2');
var langages = document.getElementById('menu3');
var contact = document.getElementById('menu4');

resume.addEventListener('click', function(){
    document.getElementById('resume').style.display = "block";
    document.getElementById('degrees').style.display = "none";
    document.getElementById('skills').style.display = "none";
    document.getElementById('sites').style.display = "none";
});

diplomes.addEventListener('click', function(){
    document.getElementById('resume').style.display = "none";
    document.getElementById('degrees').style.display = "flex";
    document.getElementById('skills').style.display = "none";
    document.getElementById('sites').style.display = "none";
});

langages.addEventListener('click', function(){
    document.getElementById('resume').style.display = "none";
    document.getElementById('degrees').style.display = "none";
    document.getElementById('skills').style.display = "table";
    document.getElementById('sites').style.display = "none";
});

contact.addEventListener('click', function(){
    document.getElementById('resume').style.display = "none";
    document.getElementById('degrees').style.display = "none";
    document.getElementById('skills').style.display = "none";
    document.getElementById('sites').style.display = "flex";
});

if ((screen.width < 500 && screen.height < 1000) || (screen.width < 1000 && screen.height < 500)) {
    document.getElementById("usual-page").style.display = "none";
    const div = document.getElementById("mobile-alert");
    div.style.display = "block";
    if (screen.width < screen.height){
        div.style.fontSize = "350%";
    }
    else{
        div.style.fontSize = "200%";
    }
}