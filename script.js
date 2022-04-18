

$(document).ready(function() {
    var max_fields      = 5;
    var wrapper         = $(".input_fields_wrap");
    var add_button      = $("#frs_btn");
   
    var x = 1;
	
   $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_fields){ 
            $(wrapper).append('<div class="set_atr"><input type="text" name="link'+x+'"/ id="sc_link'+x+'" class= "b"><a href="#" class="remove_field">Sterge</a></div>');
            x++; 
	  }
    });
    $(wrapper).on("click",".remove_field", function(e){
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    })
});



$(document).ready(function() {
    var max_fields      = 5;
    var wrapper         = $(".form_fields_wrap");
    var add_button      = $("#sc_btn");
   
    var x = 1;
	
   $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_fields){
            $(wrapper).append('<div class="dt" id="mt'+x+'">\
                <label for="">\
                    <div class="education_title"><input type="text" placeholder="Education Title" class="ed_title" name="Education_Title'+x+'" required></div>\
                    <div class="date_info"><input type="date" required name="data_info'+x+'" required></div>\
                </label>\
                <select class="form_select" aria-label="Default select example" id="selected'+x+'" name="Selected_Education'+x+'">\
                    <option selected>Education type</option>\
                    <option value="Bachelor">Bachelor</option>\
                    <option value="Superior">Superior</option>\
                    <option value="Lyceum" >Lyceum</option>\
                  </select>\
                  <button type="button" class="btn btn-info gb" id="btnz'+x+'">Save</button>\
            <a href="#" class="remove_field_sc">Sterge</a>\
        </div>'); 
            x++; 
	  }
    });


    $(wrapper).on("click",".remove_field_sc", function(e){ 
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    });
    
    $(wrapper).on("click",".gb", function(e){ 
        if($(".ed_title").val() == 0) {
            $(".ed_title").css("border-bottom","2px solid red");
            $(".ed_title").css("color","red");
        
            return
        };
		$('.dt').css("height","120px");
        $('.form_select').css("display","none");
        $('.date_info').css("display","none");
        $('.gb').css("display","none");
    });

    $(wrapper).on("change",".ed_title", function(e){ 
		if(edTitleCheck()) {
           $(this).css("border-bottom","2px solid green");
           $(this).css("color","lime");
           return true;
        } else {
            $(this).css("border-bottom","2px solid red");
            $(this).css("color","red");
        }
    });

   
   
});

$(".gb").on('click',() => {

})

function edTitleCheck() {
    if($('.ed_title').val() != 0) {
        return true;
    } else {
        return false;
    }
}


$(document).ready(function() {
    var max_fields      = 10;
    var wrapper         = $(".job_field_wrap");
    var add_button      = $("#th_btn"); 
   
    var x = 1;
	
   $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_fields){
	
            $(wrapper).append('<div class="m_wrappe">\
               <div class="first_part">\
                   <input type="text" placeholder="Job name" name="job_name'+x+'" required>\
                   <input type="date" class="start_date" name="job_start_date'+x+'" required>\
                   <input type="date" class="end_date" name="job_end_date'+x+'"><br><br><br><br>\
                   <input type="text" placeholder="City" name="City_name'+x+'" required>\
                   <input type="text" placeholder="Company name" name="Company_name'+x+'" required>\
               </div>\
            <div class="r_btn">\
               <input type="checkbox" name="chbox" class="chbox"> \
               <label for="chbox">In prezent</label>\
           </div>\
           <a href="#" class="remove_field_th" id ="rm'+x+'">Sterge</a>\
        </div>');
            x++; 
	  }
    });
    $(wrapper).on("click",".remove_field_th", function(e){ 
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    });

    $(wrapper).on("click",".chbox", function(e){ 
        if($(this).is(':checked')){
            $('.end_date').attr('disabled', true);
        } else {
            $('.end_date').attr('disabled', false);
        }
    });

    $(wrapper).on("change",".chbox", function(e){ 
        if($(this).is(':checked')){
            $('.end_date').attr('disabled', true);
        } else {
            $('.end_date').attr('disabled', false);
        }
    });
    
});

$(document).ready(function(){
    $("#name").keyup(function(){
        if ( validateName())  {
            $("#name").css("border-bottom","2px solid green");
            $("#name_validator").text("Numem valid");
            $("#name_validator").css("color","green");
        } else {
            $("#name").css("border-bottom","2px solid red");
            $("#name_validator").text("Numele nu este valid (treuie sa conțină între 3 și 16 caractere)");
            $("#name_validator").css("color","red");
        }
        button();
    });

    $("#surname").keyup(function(){
        if (validateSurname()) {
            $("#surname").css("border-bottom","2px solid green");
            $("#surname_validator").text("Prenume valid");
            $("#surname_validator").css("color","green");
        } else {
            $("#surname").css("border-bottom","2px solid red");
            $("#surname_validator").text("Prenumele nu este valid (treuie sa conțină între 3 și 30 caractere)");
            $("#surname_validator").css("color","red");
        }
        button();
    });

    $("#email").keyup(function(){
        if(validateEmail()){
            $("#email").css("border-bottom","2px solid green");
            $("#email_validator").text("Adresa de email este valida");
            $("#email_validator").css("color","green");
        }else{
            $("#email").css("border-bottom","2px solid red");
            $("#email_validator").text("Email-ul este formatat greșit");
            $("#email_validator").css("color","red");
        }
        button();

    });

    $("#phone").keyup(function(){
        if (validatePhone()) {
            $("#phone").css("border-bottom","2px solid green");
            $("#phone_validator").text("Telefon valid");
            $("#phone_validator").css("color","green");
        } else {
            $("#phone").css("border-bottom","2px solid red");
            $("#phone_validator").text("Numărul de telefon este formatat greșit sau aparține unei țări străine");
            $("#phone_validator").css("color","red");
        }
        button();
    });

    $('#links_checker').on('click', () => {
        let f =1;
        let s =1;
        let th = 1;
        let fourth = 1;
        let fifth = 1;

        let f_1 = $("#sc_link1").val();
        let f_2 = $("#sc_link2").val();
        let f_3 = $("#sc_link3").val();
        let f_4 = $("#sc_link4").val();
        let f_5 = $("#sc_link5").val();
        
        if(f_1.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_1.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
        f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
            f  = 1;
            $("#sc_link1").css("color","lime");
            $("#sc_link1").css("border-bottom","2px solid green");
            
        } else {
            f = 0
            $("#sc_link1").css("color","red");
            $("#sc_link1").css("border-bottom","2px solid red");
        }
    
        if(f_2.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_2.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
        f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
            s = 1;
            $("#sc_link2").css("color","lime");
        } else {
            s = 0;
            $("#sc_link2").css("color","red");
        }
    
        if(f_3.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_3.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
        f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
            th = 1;
            $("#sc_link3").css("color","lime");
            $("#sc_link3").css("border-color","green");
        } else {
            th = 0;
            $("#sc_link3").css("color","red");
        }
        
        if(f_4.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_4.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
        f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
            fourth = 1;
            $("#sc_link4").css("color","lime");
        } else {
            fourth = 0;
            $("#sc_link4").css("color","red");
        }
    
        if(f_5.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_5.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
        f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
            fifth = 1;
            $("#sc_link5").css("color","lime");
        } else {
            fifth = 0;
            $("#sc_link5").css("color","red");
        }
    });

    function button() {
        const submit_button = document.getElementById('im_btn');
        if(validateName() && validateSurname() && validateEmail() && validatePhone()) {
            submit_button.disabled = false;
        } else {
            submit_button.disabled = true;
        }
    }
    
});

function buttonState(){
    if(validateEmail() && validatePassword() && edTitleCheck){
        $("#btn").show();
    }else{
        $("#btn").hide();
    };
};
function validateEmail(){
     if($('#email').val().match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)){
         return true;
     }else{
         return false;
     }
};

function validateName(){
    if($('#name').val().match('^[a-zA-Z]{3,16}$')){
        return true;
    }else{
        return false;
    };
};

function validateSurname(){
    if($('#surname').val().match('^[a-zA-Z]{3,16}$')){
        return true;
    }else{
        return false;
    }
}
function validatePhone(){

    let fcheck = /^\+?373\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    let fcheck_s = /^\+?0\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if($('#phone').val().match(fcheck) || $('#phone').val().match(fcheck_s)){
        return true;
    }else{
        return false;
    }
}



function validationLinks() {
    let f_1 = $("#sc_link1").val();
    let f_2 = $("#sc_link2").val();
    let f_3 = $("#sc_link3").val();
    let f_4 = $("#sc_link4").val();
    let f_5 = $("#sc_link5").val();
    
    if(f_1.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_1.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
    f_1.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
        return true;
        
    } else {
        return false;
    }

    if(f_2.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_2.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
    f_2.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
       return true;
    } else {
       return false;
    }

    if(f_3.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_3.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
    f_3.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
        return true;
    } else {
        return false;
    }
    
    if(f_4.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_4.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
    f_4.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
        return true;
    } else {
        return false;
    }

    if(f_5.match(/^\s*(https\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_5.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/) || 
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/[a-z\d-_]{1,255}\s*$/i) || 
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?reddit.com\/?/) || 
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/?in\/[a-z\d-_]{1,255}\s*$/i) || 
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?pinterest.com\/?/) || 
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?myspace.com\/?/) ||
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?twitter.com\/?/) ||
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?vk.com\/?/) || 
    f_5.match(/(?:(?:http|https):\/\/)?(?:www.)?snapchat.com\/?/)) {
       return true;
    } else {
       return false;
    }
}

function validationFunction() {

}

 
