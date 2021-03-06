
var flag = 0;
$(function () {

    $('.menu-content .links').find('input[type="checkbox"]').on('change',function(){
        var _this = $(this);
        console.log('click')
        var _thisTarget = _this.parents('.links').attr('data-id') ;
        
        if($(this).is(':checked')){
            console.log(_thisTarget)
            if(_thisTarget == 'vehicleimg'){
                var getSrcCar = $('#vehicleimg').attr('data-src');
                var getSrcBike = $('#bikeimg').attr('data-src');
                $('#vehicleimg').attr('src',getSrcCar).show();
                $('#bikeimg').attr('src',getSrcBike).show();
            }else{
                var getSrc = $('.'+_thisTarget).attr('data-src');
                $('.'+_thisTarget).attr('src',getSrc).show();
            }
            
            _this.parents('.links').css({'backgroundColor':'#e8e8e8', 'animation': 'fadein 1s'}).addClass('active');
            _this.parents('.links').find('.regular-checkbox').addClass('checked')
            flag = flag + 1;
            checkVisibility()
        }else{
            $('.'+_thisTarget).hide()
            _this.parents('.links').css({'backgroundColor':'white'}).removeClass('active')
            _this.parents('.links').find('.regular-checkbox').removeClass('checked')
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
        
        if(id != null){
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
            onSubmit(false);
        }
        
    });

    getdata()

});

function getdata(){

    var id = getParameterByName('id');

    if(id != null){
        $.ajax({
            url: 'https://hdfc-wishlist.pctr.co/api/data/?id='+id,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if(data != ''){   
                    onSubmit(true);
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

function onSubmit(flag) {
    if(flag){
        var htmlString = '<div><label id="line1">We have already received your wishlist </label><br /><label id="line2">& will get back to you with our exclusive deals shortly</label></div>';
        $('#thankContainer').html(htmlString);
    }
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
    return decodeURIComponent(results[2]);
}


