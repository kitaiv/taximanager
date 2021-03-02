document.addEventListener('DOMContentLoaded', () => {
    // Get the container element
    let btnContainer = document.getElementById("navbar");

    // Get all buttons with class="btn" inside the container
    let btns = btnContainer.querySelectorAll(".nav-link");

    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", () => {
            let current = document.getElementsByClassName("customActive");
            current[0].className = current[0].className.replace("customActive", "");
            this.className += "customActive";
        });
    }


    let groupList = document.querySelectorAll('.list-of-items');

    let img = document.querySelector('.changing_code');

    groupList.forEach(e => {
        e.addEventListener('click', e => {
            groupList.forEach(e => {
                e.children[0].children[0].setAttribute('fill', "white");
                e.children[1].style.color = '#fff';
                e.children[1].style.borderBottom = "4px solid #fff"
            });
            if (e.currentTarget) {
                e.currentTarget.children[0].children[0].setAttribute('fill', "black");
                e.currentTarget.children[1].style.color = '#000';
                e.currentTarget.children[1].style.borderBottom = "4px solid #000"
            } else {
                console.log('okay');
            }
        })
    });


    // let switcher = document.querySelectorAll('.switcher');

    // switcher.forEach(e => {
    //     e.addEventListener('click', e => {
    //         switcher.forEach(e => {
    //             e.classList.remove('btn-warning');
    //             e.classList.remove('btn-warning');
    //         });
    //         if (e.currentTarget) {
    //             e.currentTarget.classList.add('btn-warning');
    //             e.currentTarget.classList.add('btn-warning');
    //         } else {
    //             return;
    //         }

    //     });
    // });
    setInterval(function () {
        if ($('#opp_img').attr('src') == 'img/app_opportunities_splash.png') {
            $('#opp_img').fadeOut();
            setTimeout(function () {
                $('#opp_img').fadeIn('slow');
                $('#opp_img').attr('src', 'img/app_opportunities_splash-2.png');
            }, 400)
        } else {
            $('#opp_img').fadeOut('slow');
            setTimeout(function () {
                $('#opp_img').fadeIn('slow');
                $('#opp_img').attr('src', 'img/app_opportunities_splash.png');
            }, 400)
        }
    }, 6500);
});