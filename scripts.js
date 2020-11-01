/* Add your JavaScript to this file */
"use strict"

window.addEventListener("load",
    function() {
        var submit = document.getElementsByClassName("btn")[1];
        // console.log(submit)
        var text = document.getElementById("email");
        // console.log(text)
        var message = document.querySelector('.message');
        // console.log(message)

        submit.addEventListener('click', function(e){
            e.preventDefault();
            console.log("button clicked")
            var email = text.value
            console.log(email)
            if (email === ""){
                message.innerHTML = "Please Enter a Valid Email Address."
            }else{
            message.innerHTML = `Thank You! Your email address ${email} has been added to our mailing list!`
            document.getElementById("email").value = null;
            }
        })
    }
)