

var uid;
var pass;
var rpass;
var name;

var uid_l;
var pass_l;

var uid_u='false';
var pass_u;
var rpass_u='false';
var name_u='false';

var reg_email = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
var reg_pass = new RegExp("^[a-zA-Z0-9.,/!@#$%&'*+/=?^_`{|}~-]{6,}");
var reg_name = new RegExp("^[a-zA-Z ]{1,}$");

function rvalidate(tag, type)
{
	if(type == 'email')
	{
		uid = tag.value;
		if(uid == 'Enter Your Email To Register' )
		{
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
			uid = 'false';
		}
		else if(uid.match(reg_email))
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
			uid = 'true';
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
			uid = 'false';
		}
	}
	if(type == 'pass')
	{
		pass = tag.value;
		if(pass == 'Enter A Password' )
		{
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
		else if(pass.match(reg_pass) )
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
		}
	}
	if(type == 'rpass')
	{
		rpass = tag.value;
		if(rpass == 'Re-Enter Password' )
		{
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
			rpass = 'false';
		}
		else if((rpass.match(reg_pass)) && (rpass==pass))
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
			rpass = 'true';
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
			rpass = 'false';
		}
	}
	if(type == 'name')
	{
		name = tag.value;
		if(name == 'Enter Your Full Name' )
		{
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
			name = 'false';
		}
		else if(name.match(reg_name))
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
			name = 'true';
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
			name = 'false';
		}
	}
	if(type == 'form')
	{
		if(uid == 'true' && rpass == 'true' && name == 'true')
			return true;
		else
		{
			alert("Format For Registration Not Correct! Please Re-Check Your Details");
			return false;
		}
	}
}

function lvalidate(tag, type)
{
	if(type == 'email')
	{
		uid_l = tag.value;
		if(uid_l.match(reg_email))
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
			uid_l = 'true';
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
			uid_l = 'false';
		}
	}
	if(type == 'pass')
	{
		pass_l = tag.value;
		if(pass_l.match(reg_pass))
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
			pass_l = 'true';
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
			pass_l = 'false';
		}
	}
	if(type == 'form')
	{
		if(uid_l == 'true' && pass_l == 'true')
			return true;
		else
		{
			alert("Format For Login Not Correct! Please Re-Enter Correct Details");
			return false;
		}
	}
}

function focusblur(tag,type)
{
	if(type == 'email')
	{
		if(tag.value == 'Enter Your Email To Register' )
		{
			tag.value = '';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Enter Your Email To Register';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'pass')
	{
		if(tag.value == 'Enter A Password' )
		{
			tag.value = '';
			tag.type='password';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Enter A Password';
			tag.type='text';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'rpass')
	{
		if(tag.value == 'Re-Enter Password' )
		{
			tag.value = '';
			tag.type='password';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Re-Enter Password';
			tag.type='text';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'name')
	{
		if(tag.value == 'Enter Your Full Name' )
		{
			tag.value = '';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Enter Your Full Name';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'lemail')
	{
		if(tag.value == 'Email' )
		{
			tag.value = '';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Email';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'lpass')
	{
		if(tag.value == 'Password' )
		{
			tag.value = '';
			tag.type='password';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Password';
			tag.type='text';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'uname')
	{
		if(tag.value == 'Enter Your Full Name To Change' )
		{
			tag.value = '';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Enter Your Full Name To Change';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'uemail')
	{
		if(tag.value == 'Enter Your Email' )
		{
			tag.value = '';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Enter Your Email';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'upass')
	{
		if(tag.value == 'Enter A New Password' )
		{
			tag.value = '';
			tag.type='password';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Enter A New Password';
			tag.type='text';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
	if(type == 'urpass')
	{
		if(tag.value == 'Re-Enter New Password' )
		{
			tag.value = '';
			tag.type='password';
		}
		else if(tag.value == '' )
		{
			tag.value = 'Re-Enter New Password';
			tag.type='text';
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
	}
}

function uvalidate(tag, type)
{
	if(type == 'email')
	{
		uid_u = tag.value;
		if(uid_u == 'Enter Your Email' )
		{
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
			uid_u = 'false';
		}
		else if(uid_u.match(reg_email))
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
			uid_u = 'true';
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
			uid_u = 'incomplete';
		}
	}
	if(type == 'pass')
	{
		pass_u = tag.value;
		if(pass_u == 'Enter A New Password' )
		{
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
		}
		else if(pass_u.match(reg_pass) )
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
		}
	}
	if(type == 'rpass')
	{
		rpass_u = tag.value;
		if(rpass_u == 'Re-Enter Password' )
		{
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
			if(pass_u!='Enter A New Password') rpass_u='incomplete';
			else rpass_u = 'false';
		}
		else if((rpass_u.match(reg_pass)) && (rpass_u==pass_u))
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
			rpass_u = 'true';
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
			rpass_u = 'incomplete';
		}
	}
	if(type == 'name')
	{
		name_u = tag.value;
		if(name_u == 'Enter Your Full Name' )
		{
			tag.style.border='2px solid black'; 
			tag.style.boxShadow='0px 0px 8px black';
			name_u = 'false';
		}
		else if(name_u.match(reg_name))
		{
			tag.style.border="2px solid green";
			tag.style.boxShadow="0px 0px 8px green";
			name_u = 'true';
		}
		else
		{
			tag.style.border="2px solid red";
			tag.style.boxShadow="0px 0px 8px red";
			name_u = 'incomplete';
		}
	}
	if(type == 'form')
	{
		
		if(uid_u == 'incomplete' || rpass_u == 'incomplete' || name_u == 'incomplete')
		{
			alert("Format For Registration Not Correct! Please Re-Check Your Details");
			return false;
		}
		else
		{
			if(uid_u == 'false')
				document.getElementById("uid").value="";
			if(rpass_u == 'false')
			{
				document.getElementById("pass").value="";
				document.getElementById("rpass").value="";
				
			}
			if(name_u == 'false')
				document.getElementById("name").value="";
			return true;
		}
	}
}


