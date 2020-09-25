$(function () {
    console.log("Enter")
    let flag = 0;
    checkVisibility()
    document.getElementById("wardrobe").onclick = function () {
        if (this.checked) {
            $('#wardrobeimg').css('display', 'block')
            $('#wardrobeContainer').css('backgroundColor', '#e8e8e8')
            $('#wardrobeContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            $('#wardrobeimg').css('display', 'none')
            $('#wardrobeContainer').css('backgroundColor', 'white')
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("renovate").onclick = function () {
        if (this.checked) {
            $('#renovateimg').css('display', 'block')
            $('#renovateContainer').css('backgroundColor', '#e8e8e8')
            $('#renovateContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            $('#renovateimg').css('display', 'none')
            $('#renovateContainer').css('backgroundColor', 'white')
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("home").onclick = function () {
        if (this.checked) {
            $('#homeimg').css('display', 'block')
            $('#homeContainer').css('backgroundColor', '#e8e8e8')
            $('#homeContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            $('#homeimg').css('display', 'none')
            $('#homeContainer').css('backgroundColor', 'white')
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("fridge").onclick = function () {
        if (this.checked) {
            $('#fridgeimg').css('display', 'block')
            $('#fridgeContainer').css('backgroundColor', '#e8e8e8')
            $('#fridgeContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            $('#fridgeimg').css('display', 'none')
            $('#fridgeContainer').css('backgroundColor', 'white')
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("health").onclick = function () {
        if (this.checked) {
            $('#healthimg').css('display', 'block')
            $('#healthContainer').css('backgroundColor', '#e8e8e8')
            $('#healthContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            $('#healthimg').css('display', 'none')
            $('#healthContainer').css('backgroundColor', 'white')
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("business").onclick = function () {
        if (this.checked) {
            $('#businessimg').css('display', 'block')
            $('#businessContainer').css('backgroundColor', '#e8e8e8')
            $('#businessContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            $('#businessimg').css('display', 'none')
            $('#businessContainer').css('backgroundColor', 'white')
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("vehicle").onclick = function () {
        if (this.checked) {
            $('#vehicleimg,#bikeimg').css('display', 'block')
            $('#vehicleContainer').css('backgroundColor', '#e8e8e8')
            $('#vehicleContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            $('#vehicleimg,#bikeimg').css('display', 'none')
            $('#vehicleContainer').css('backgroundColor', 'white')
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("jewelery").onclick = function () {
        if (this.checked) {
            $('#jeweleryimg').css('display', 'block')
            $('#jeweleryContainer').css('backgroundColor', '#e8e8e8')
            $('#jeweleryContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            $('#jeweleryimg').css('display', 'none')
            $('#jeweleryContainer').css('backgroundColor', 'white')
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("laptop").onclick = function () {
        if (this.checked) {
            $('#laptopimg').css('display', 'block')
            $('#laptopContainer').css('backgroundColor', '#e8e8e8')
            $('#laptopContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            document.getElementById("laptopimg").style.display = "none";
            document.getElementById("laptopContainer").style.backgroundColor = "white";
            flag = flag - 1;
            checkVisibility()
        }
    }
    document.getElementById("phone").onclick = function () {
        if (this.checked) {
            $('#phoneimg').css('display', 'block')
            $('#phoneContainer').css('backgroundColor', '#e8e8e8')
            $('#phoneContainer').css('animation', 'fadein 1s')
            flag = flag + 1;
            checkVisibility()
        } else {
            document.getElementById("phoneimg").style.display = "none";
            document.getElementById("phoneContainer").style.backgroundColor = "white";
            flag = flag - 1;
            checkVisibility()
        }
    }
    function checkVisibility() {
        if (flag === 0) {
            document.getElementById("submit").disabled = true;
        } else {
            document.getElementById("submit").disabled = false;
        }
    }
});
function openMenu() {
    if ($(".menu-content").css('display') == 'block') {
        $(".arrow1").attr("src", 'images/arrow1.png');
        $(".menu-content").slideUp(400)
        $('.logo').css('visibility', 'hidden')
    } else {
        $(".arrow1").attr("src", 'images/arrow4.png');
        $(".menu-content").slideDown(400)
        $('.logo').css('visibility', 'hidden')
    }
}
function onSubmit() {
    $('#thankContainer').css('animation', 'fadein 1s')
    $('.middle,#logo').css('width', '0%')
    $('.thankyouPage').css('width', '80%')

    $('#slide2,#logo,#slogan,.middle').css('display', 'none')
    $('#thankContainer').css('display', 'block')
    $('#thankContainer').css('display', 'flex')
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
$('.confirm_wishlist').submit(function (e) {
    e.preventDefault();
    var allWish = [];

    $('input[type="checkbox"]:checked').each(function () {
        allWish.push($(this).val());
    });
    var id = getParameterByName('id');
    var data = { "model": [{ "id": id, "items": allWish }] }
    $.ajax({
        url: 'https://hdfc-wishlist.pctr.co/api/data',
        headers: {
            'x-access-token': '3b584aa8927edc29c69ede29ae9389f41d9800f630e3028721c4306d02d5cc0c',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify(data),
        success: function (data) {
            console.log('succes: ' + data);
        }
    });
    console.log(JSON.stringify(data))
});
var clickedImage = ['dummy']
var isImageClicked = 0;
function scaleImage(elem) {
    var dataId = $(elem).data("id");
    var parentWidth = $(document).width();
    var Width = ($("." + dataId).width() / parentWidth * 100).toFixed();
    if ($(window).width() <= 480) {
        var increaseWidth = Number(Width) + 3 + "%";
        var reduceWidth = Number(Width) - 3 + "%";
    } else {
        var increaseWidth = Number(Width) + 2 + "%";
        var reduceWidth = Number(Width) - 2 + "%";
    }
    for (var i = 0; i < clickedImage.length; i++) {
        if (String(dataId) === String(clickedImage[i])) {
            isImageClicked = 1
            break;
        } else {
            isImageClicked = 0
        }
    }
    if (isImageClicked) {
        var index = clickedImage.indexOf(dataId);
        clickedImage.splice(index, 1);
        if (String(dataId) === 'bikeimg' || String(dataId) === 'vehicleimg') {
            $('.bikeimg').animate({
                'width': reduceWidth
            }, "slow");
            $('.vehicleimg').animate({
                'width': reduceWidth
            }, "slow");
        } else {
            $('.' + dataId).animate({
                'width': reduceWidth
            }, "slow");
        }
    } else {
        console.log(dataId)
        if (String(dataId) === 'bikeimg' || String(dataId) === 'vehicleimg') {
            $('.bikeimg').animate({
                'width': increaseWidth
            }, "slow");
            $('.vehicleimg').animate({
                'width': increaseWidth
            }, "slow");
        } else {
            $('.' + dataId).animate({
                'width': increaseWidth
            }, "slow");
        }
        clickedImage.push(dataId)
    }
}
function getWidthPer(elem) {
    var parentWidth = $(document).width();
    var homeWidth = ($("." + elem).width() / parentWidth * 100).toFixed() + "%";
    return homeWidth
}

