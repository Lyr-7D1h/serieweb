
var next_background;
const backgroundChange = () => {
    let images = [
        "title1.jpg",
        "title2.jpg",
        "title3.jpg",
        "title4.jpg",
        "title5.jpg"
    ]
    let randNum = Math.round(Math.random() * (images.length - 1 ));
    let url = `images/${images[randNum]}`

    if ( next_background == 1) {
        $('#background_2').insertBefore('#background_1') // Insert 1 before 2
        $('#background_1').css("background-image", `url(${url})`);
        $('#background_1').fadeIn(2000, () => { 
            $('#background_2').hide();
            console.log(`Loaded 1 (Image ${randNum})`);
        });
        next_background = 2;
    } else {
        $('#background_1').insertBefore('#background_2') // Insert 2 before 1
        $('#background_2').css("background-image", `url(${url})`);
        $('#background_2').fadeIn(2000, () => { 
            $('#background_1').hide();
            console.log(`Loaded 2 (Image ${randNum})`);
        });
        next_background = 1;
    }
}

const loadButtons = () => {
    let buttons = $('.title_buttons');
    buttons.click( (event) => {
        let button_clicked = event.target.id;
        buttons.css('background-color', 'rgba(0,0,0,.0)')
        $(`#${button_clicked}`).css('background-color', 'rgb(13, 13, 17)');
        $('.pages').hide();   
        if ( button_clicked == "login") {
            $('#login_page').show();
        } else if (button_clicked == "about") {
            $('#about_page').show();
        } else {
            $('#register_page').show();
        }
    })
}

$(document).ready(function () {
    backgroundChange();
    setInterval(backgroundChange,10000);
    $('#title_text').fadeIn(2000, () => {
        $('#about').fadeIn(1000, () => {
            $('#login').fadeIn(1000, () => {
                $('#register').fadeIn(1000,() => {
                });
            })
        });
    });
    loadButtons();

    console.log('JS Loaded..')
});