$( document ).ready(function(){

$('.carousel').carousel({
      interval: 3000
    });

$(".play").on("click", function(){
	event.preventDefault();
});

$("#bform").on("click",function(){
	var fName = document.getElementById("name").value;
	var fEmail = document.getElementById("email").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if( (fName == "") || (fEmail == ""))
		{
		alert("Trebuie sa introduci numele si adresa de email!");
		event.preventDefault();
		}
	else
		{
			if(fEmail.match(mailformat))
			{
				alert("Ma bucur sa te cunosc *"+fName+"*!\nVei primi pe adresa de email: ..."+fEmail+"... informatiile cerute.");

			}
			else
				{
					alert("Email invalid!");
					event.preventDefault();
				}
		}
	});

$("#bb").on("click",function(){
	var fEmail = document.getElementById("emailx").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(fEmail == "")
		{
		alert("Trebuie sa introduci adresa de email!");
		event.preventDefault();
		}
	else
		{
			if(fEmail.match(mailformat))
			{
				alert("Vei primi pe adresa de email: ..."+fEmail+"... newsletterul nostru.");

			}
			else
				{
					alert("Email invalid!");
					event.preventDefault();
				}
		}
});

})