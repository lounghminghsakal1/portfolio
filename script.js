const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector('hover-sign');

// sidebar elements //

const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const menuclose = document.querySelector('.close-icon'); 

const videoList = [video1,video2,video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active");
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        hoverSign.classList.remove("active");
    })
})


// sidebar elements //
menu.addEventListener('click',function(){
   sidebar.classList.add("open-sidebar");
    
})


menuclose.addEventListener('click',function(){
    sidebar.classList.add('close-sidebar');
    console.log(sidebar.classList);
    
})