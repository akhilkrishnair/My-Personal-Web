let skill_container = document.getElementsByClassName("skills-container")[0];
let bio_container = document.getElementsByClassName("bio-container")[0];
let main_content = document.getElementsByClassName("main-content")[0];
let bio_p = document.getElementsByClassName("bio")[0];
let msg_style = document.getElementsByClassName("message-style")[0];

main_content.addEventListener("mouseover",function(event){
    console.log(event.target.classList[0]);
    if (event.target.classList[0] === "bio-container"){
        bio_container.classList.toggle("bio-container-view");
        bio_p.style.display = "flex"
        msg_style.classList.toggle("message-view")

    }else{
        bio_container.classList.remove("bio-container-view");
        msg_style.classList.remove("message-view")
        bio_p.style.display = "none"
    }

});


// navmenu function starts

let navicon = document.getElementsByClassName("nav-icon")[0];
let navmenu = document.getElementsByClassName("nav-menu")[0];
let links = document.getElementsByClassName("links")[0];

navicon.addEventListener("click",function(){
    navmenu.classList.toggle("nav-show")
    // links.classList.toggle("links-hide")
})


