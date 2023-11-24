document.addEventListener("DOMContentLoaded", initialize)

function initialize() {
    console.log("HELLO")

    let nav_links = document.querySelector("#nav_links");

    nav_links.addEventListener("click", (event) => {
        data_name = event.target.dataset.name;
        if (event.target.className == "nav-link-text") {
            data_name = event.target.parentElement.dataset.name
        }
        check_link(data_name)
        // if (event.target.tagName == "LI")
        //     check_link(event.target.dataset.name)
        // else if (event.target.className == "nav-link-text") {
        //     console.log()
        // }
    })
}

function check_link(data_name) {
    // console.log(data_name)

    let content = document.querySelectorAll("#content .content-section")
    let link = document.querySelectorAll("#nav_links>li")
    for (let i=0; i<content.length; i++) {
        if (content[i].id == data_name) {
            content[i].classList.remove("d-lg-none")
            link[i].children[0].classList.add('active-link');
        } else {
            content[i].classList.add("d-lg-none")
            link[i].children[0].classList.remove('active-link');
        }
    }
    
}
