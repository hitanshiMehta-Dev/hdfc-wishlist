var clickedImage = ['dummy']
var isImageClicked = 0;
var flag = 0;
$(function () {
    checkVisibility()
    $('#menu-content label').on('click',function(){
        var _this = $(this);
        var _thisTarget = _this.attr('data-id') ;
        if($(this).find('input[type="checkbox"]').is(':checked')){
            $('.'+_thisTarget).show();
            $(this).css({'backgroundColor':'#e8e8e8', 'animation': 'fadein 1s'}).addClass('active');
            $(this).find('.regular-checkbox').addClass('checked')
            flag = flag + 1;
            checkVisibility()
        }else{
            $('.'+_thisTarget).hide()
            $(this).css({'backgroundColor':'white'}).removeClass('active')
            $(this).find('.regular-checkbox').removeClass('checked')
            flag = flag - 1;
            checkVisibility()
        }
    })

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
    });

    getdata()

});

function getdata(){
    var id = getParameterByName('id');
    console.log(id)
    if(id != null){
        $.ajax({
            url: 'https://hdfc-wishlist.pctr.co/api/data/'+id,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if(data != ''){
                    onSubmit();
                }
            }
        });
    }
}


function checkVisibility() {
    if (flag === 0) {
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById("submit").disabled = false;
    }
}

function onSubmit() {
    $('#slide2,#logo,#slogan,.middle').hide();
    $('#thankContainer').css('animation', 'fadein 1s')
    $('.thankyouPage').show();
    $('#thankContainer').show().addClass('flex');
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


