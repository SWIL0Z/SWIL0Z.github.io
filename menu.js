var resume = document.getElementById('menu1');
var diplomes = document.getElementById('menu2');
var langages = document.getElementById('menu3');
var contact = document.getElementById('menu4');

resume.addEventListener('click', function(){
    document.getElementById('resume').style.display = "block";
    document.getElementById('degrees').style.display = "none";
    document.getElementById('languages').style.display = "none";
    document.getElementById('sites').style.display = "none";
});

diplomes.addEventListener('click', function(){
    document.getElementById('resume').style.display = "none";
    document.getElementById('degrees').style.display = "flex";
    document.getElementById('languages').style.display = "none";
    document.getElementById('sites').style.display = "none";
});

langages.addEventListener('click', function(){
    document.getElementById('resume').style.display = "none";
    document.getElementById('degrees').style.display = "none";
    document.getElementById('languages').style.display = "table";
    document.getElementById('sites').style.display = "none";
});

contact.addEventListener('click', function(){
    document.getElementById('resume').style.display = "none";
    document.getElementById('degrees').style.display = "none";
    document.getElementById('languages').style.display = "none";
    document.getElementById('sites').style.display = "flex";
});