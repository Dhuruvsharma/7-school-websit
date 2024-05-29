$(document).ready(function(){
    //change CAPTCHA on each click or on refreshing page
    $("#reload").click(function() {
        $("#img").remove();
		var id = Math.random();
        $('<img id="img" src="captcha/captcha.php?id='+id+'"/>').appendTo("#imgdiv");
		 id ='';
    });
    $("#reload2").click(function() {
        $("#img2").remove();
        var id = Math.random();
        $('<img id="img2" src="captcha/captcha.php?id='+id+'"/>').appendTo("#imgdiv2");
         id ='';
    });
    $("#reload1").click(function() {
    
        $("#img").remove();
        var id = Math.random();
        $('<img id="img" src="../captcha/captcha_admin.php?id='+id+'"/>').appendTo("#imgdiv");
         id ='';
    });


//Home Subscribe
$('#Subscribe_submit').click(function(event) {
        event.preventDefault();
        var email = $("#Subscribe_email").val();
        var pattrnemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        
        if(email == '')
        {
            alert("Subscribe Email field is Required...");
            return false;
        }
        if(!email.match(pattrnemail)) 
        {
            alert("Please enter a valid Subscribe email address...");
            return false;
        }
        else
        {
             $.ajax({
                method: "POST",
                url: "captcha/verify.php",
                data: {subscribe_form:1,email:email},
                success: function(html) {
                    if(html == "Mail Not Send!!!")
                    {
                        alert(html);
                        document.getElementById("Subscribe_form").reset();
                    }
                    else
                    {
                        alert(html);
                        document.getElementById("Subscribe_form").reset();
                    }
                }
            });
        }
        

    });


//Contact..........
    $('#button_contact').click(function(event) {
        event.preventDefault();
        var name = $("#c_name").val();
        var email = $("#c_email").val();
        var message = $("#c_message").val();
        var pattrnname = /^[a-zA-z\s]{3,100}$/;
        var pattrnemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        
        if(name == '')
        {
            alert("Name Field is Required...");
            return false;
        }
        if(email == '')
        {
            alert("Email field is Required...");
            return false;
        }
        if(!email.match(pattrnemail)) 
        {
            alert("Please enter a valid email address...");
            return false;
        }

        else
        {
             $.ajax({
                method: "POST",
                url: "captcha/verify.php",
                data: {contact_form:1,name:name,email:email,message:message},
                success: function(html) {
                    if(html == "Mail Not Send!!!"||html=="Invalid Capcha Entered Try Again")
                    {
                        alert(html);
                        document.getElementById("myForm_contact").reset();
                    }
                    else
                    {
                        alert(html);
                        document.getElementById("myForm_contact").reset();
                    }
                }
            });
        }
        

    });

    // Button Enquiry
    $('#enquiry_button').click(function(event) {
        event.preventDefault();
        var subject = $("#subject").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var captcha = $("#captcha").val();
        var message = $("#message").val();
        var pattrnname = /^[a-zA-z\s]{3,100}$/;
        var pattrnemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        var patternmobile = /^[\d]{10}$/;
        if (name == '')
        {
            alert("Name Field is Required...");
            return false;
        }
        if(!phone.match(patternmobile))
        {
            alert("Mobile Number is Require Enter only 10 digit number...");
            return false;
        }
        if(email == '')
        {
            alert("Email field is Required...");
            return false;
        }
        if(!email.match(pattrnemail)) 
        {
            alert("Please enter a valid email address...");
            return false;
        }
        else
        {
             $.ajax({
                method: "POST",
                url: "captcha/verify.php",
                data: {contact_form:1,captcha:captcha,subject:subject,name:name,email:email,phone:phone,message:message},
                success: function(html) {
                    if(html == "Mail Not Send!!!"||html=="Invalid Capcha Entered Try Again")
                    {
                        alert(html);
                        document.getElementById("myForm").reset();
                    }
                    else
                    {
                        alert(html);
                        document.getElementById("myForm").reset();
                    }
                }
            });
        }
        

    });

    // User Validation Function
    
      //------------------------------//
     //---------Admin Login----------//
    //------------------------------//
    
    $("#button_admin").click(function(event) {
            event.preventDefault();
            var uname = $("#username").val();
            var pass = $("#password").val();
            var cap_admin = $("#captcha1").val();
            $.ajax({
                method: "POST",
                url: "../captcha/verify.php",
                data: {cap_admin_click:1,cap_admin:cap_admin,uname,uname,pass:pass},
                success: function(resp) {
                    if(resp=="ldsdlgfsdo")
                    {
                        window.location.href="../admin/dashboard.php";
                    }
                    else
                    {
                        $("#resp_alert").html(resp);
                        $( "#resp_alert" ).dialog({
                          modal: true,
                          buttons: {
                            Ok: function() {
                              $( this ).dialog( "close" );
                            }
                          }
                        });
                    }
                }
            });
        });

})