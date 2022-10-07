    $("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    const $box = $(this);
    if ($box.is(":checked")) {
        // the name of the box is retrieved using the .attr() method
        // as it is assumed and expected to be immutable
        const group = "input:checkbox[name='" + $box.attr("name") + "']";
        // the checked state of the group/box on the other hand will change
        // and the current value is retrieved using .prop() method
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
    });

    window.addEventListener('scroll',function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 100);
    });

    // function toggleMenu(){
    //     const menuToggle = document.querySelector('.nav-menu');
    //     const menu = document.querySelector('.nav');
    //     menuToggle.classList.toggle('active');
    //     menu.classList.toggle('active');

    // }

    function mobile(){
        const modal = document.querySelector('.modal-mobile');
        const menuMobile = document.querySelector('.menu-mobile');
        modal.style.display = "Block";
        menuMobile.style.left = 0+"px";
    }
    function modalClick(){
        const modal = document.querySelector('.modal-mobile');
        const menuMobile = document.querySelector('.menu-mobile');
        modal.style.display = "none";
        menuMobile.style.left = -280+"px";
    }

    const menus = document.querySelectorAll('.btn-select');
    const contents = document.querySelectorAll('.content-select');
    const texts = document.querySelectorAll('.content-text');
    
    menus.forEach((menu,index) => {
        const content = contents[index];
        const text = texts[index];
        menu.onclick = function (){
            document.querySelector(".btn-select.active").classList.remove("active");
            document.querySelector(".content-select.active").classList.remove("active");
            document.querySelector(".content-text.active").classList.remove("active");
            menu.classList.add("active");
            content.classList.add('active');
            text.classList.add('active');
        }
    });