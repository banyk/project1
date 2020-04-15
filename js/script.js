function postToGoogle() {
    var field1 = $("#mobField").val();
    var field2 = $("#nameField").val();
    var field3 = $("#questionField").val();

		
	if(field1 == ""){
		alert('Please Fill Your Number');
		document.getElementById("mobField").focus();
		return false;
	}
	if(field2 == ""){
		alert('Please Fill Your Name');
		document.getElementById("nameField").focus();
		return false;
	}
	if(field3 == "" ){
		alert('Please Fill Write Quesion');
		document.getElementById("questionField").focus();
		return false;
	}


	

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeIEcpP3WideE6lXzDlfLcY_fjzOUiJnP_6GcJHpNeMopJmVQ/viewform",
		data: {"entry.1057247930": field1, "entry.1880073453": field2, "entry.2114651582": field3},
        type: "POST",
        dataType: "xml",
        success: function(d)
		{
		},
		error: function(x, y, z)
			{

				$('#success-msg').show();
				$('#form').hide();
				
			}
    });
	return false;
}