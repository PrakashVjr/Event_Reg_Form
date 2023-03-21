
function details_table()
{  
    let dform = localStorage.getItem("prakshJSON");
    let dform1 = JSON.parse(dform);   
    if(dform1.length == 0)
    {        
        alert("Table Is Empty\nPlease Fill the Form")
    }
    else
    {
        window.open("output.html");
    }      
}
function main_form()
{
    window.open("welcome.html");
}
function details_table1()
{
    details_table();
}
function edit()
{
    details_table();
}
function about_form()
{
    window.open("about.html");
}

let s_signup_d = localStorage.getItem("s_upJSON");
let s_signup_details = JSON.parse(s_signup_d);



function login_verify()
{
    alert("Login Test");
    var email = document.getElementById("v_email").value;
    var password = document.getElementById("test").value;   
    var mail=[];
    /*
        for(let i=0;i<s_signup_details.length;i++)
        {
            var s=0
            if(s)
            {
                alert("Mail Not Exist")
            }
            else{
                mail[i]=s_signup_details[i];
                if(mail[i].email === email)
                {
                    alert("Email Verified");
                    return s=1;
                }
            }           
        }*/
        var s=0;
        for(let i=0;i<s_signup_details.length;i++)
        {
            element=s_signup_details[i];
            if(mail[i].email === email)
            {
                alert("Email Verified");
                s++;
            }    
        }    
        if(s)
        {
            alert("Mail Not Exist");
        }
}  