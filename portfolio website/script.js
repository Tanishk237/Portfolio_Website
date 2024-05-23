
const okay="your response has been sent."
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', function () {
    navbar.classList.toggle("active");
});

let items=document.querySelectorAll('.slider .list .item');
let next=document.getElementById('next');
let prev=document.getElementById('prev');
let thumbnails=document.querySelectorAll('.thumbnail .item' );

let countItem=items.length;
let itemActive=0;

next.onclick=function(){
    itemActive=itemActive+1;
    if(itemActive>=countItem){
        itemActive=0;
    }
    showSlider();
}
prev.onclick=function(){
    itemActive=itemActive-1;
    if(itemActive<0){
        itemActive=countItem-1;
    }
    showSlider();
}

let refreshInterval=setInterval(()=>{
    next.click();
},5000)

function showSlider(){
    let itemActiveOld=document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld=document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');


    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval=setInterval(()=>{
        next.click();
    },5000)
    
}
thumbnails.forEach((thumbnail, index)=>{
    thumbnail.addEventListener('click',()=>{
        itemActive= index;
        showSlider();
    })
})

function sendEmail(){
    Email.send({
        SecureToken : "fdc8f45d-2d39-419f-a324-0e42dc48ed43",
        To : "tanishkvar@gmail.com",
        From : "tanishkvar@gmail.com",
        Subject : "Contact Form Enquiry",
        Body : "Name:"+document.getElementById("name").value
        +"<br> Email:"+document.getElementById("email").value+
        "<br> Phone number:"+document.getElementById("phone").value+
        "<br> Subject:"+document.getElementById("subject").value+
        "<br> Message:"+document.getElementById("yourmessage").value
    }).then(
        message => alert(message)
    );
}


