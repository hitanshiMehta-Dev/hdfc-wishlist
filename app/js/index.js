let flag = 0;
checkVisibility()

document.getElementById("home").onclick = function () {
    if (this.checked) {
        $('#homeimg').css('display', 'block')
        $('#homeContainer').css('backgroundColor', '#e8e8e8')
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
        $('#vehicleimg').css('display', 'block')
        $('#vehicleContainer').css('backgroundColor', '#e8e8e8')
        flag = flag + 1;
        checkVisibility()
    } else {
        $('#vehicleimg').css('display', 'none')
        $('#vehicleContainer').css('backgroundColor', 'white')
        flag = flag - 1;
        checkVisibility()
    }
}
document.getElementById("jewelery").onclick = function () {
    if (this.checked) {
        $('#jeweleryimg').css('display', 'block')
        $('#jeweleryContainer').css('backgroundColor', '#e8e8e8')
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
    $('#slide2,#logo,#slogan').css('display', 'none')
    $('#thankContainer,.hdfcLogo').css('display', 'block')
}