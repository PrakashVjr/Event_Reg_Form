
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

function my_signup(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var signup_obj=
            {   
                email:email,password:password
            };
    var arr_signup_obj=[];
    var sign_up_obj=localStorage.getItem("s_upJSON");
    if(sign_up_obj)
        {
        var arr1=JSON.parse(sign_up_obj);
        arr1.push(signup_obj)
        localStorage.setItem("s_upJSON",JSON.stringify(arr1));
        }
    else
        {
            arr_signup_obj.push(signup_obj);
            localStorage.setItem("s_upJSON",JSON.stringify(arr_signup_obj));
        }
    alert("sign Up successfull");
}