jQuery(document).ready(function($){
    $('#prepend-form').on('submit' , function(event){
        event.preventDefault();

        var textToAdd = document.getElementById("text-input").value;
        
        if(textToAdd == "") {
            alert("You must add text");
            return false;
        }

        $(".add-here").prepend(textToAdd);

        
        });
    
})

