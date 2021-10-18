//Show-Hide for level
function ShowHideDiv() {
    var selectedValue = document.getElementById("contact_type").value;
    var level = document.getElementById("contact_type_class");
    if (selectedValue == "新しいクラスの情報") {
        level.style.display = "block";
    } else {
        level.style.display = "none";
    }
}

// Phone number validation
var phoneNo = document.getElementById("phone");
var phoneformat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
phoneNo.onkeyup = function() {
    if (phoneNo.value.match(phoneformat)) {
        document.getElementById("check_phone").style.display = "none";
    } else {
        document.getElementById("check_phone").style.display = "block";
    }
}

//Email Validation
var mail = document.getElementById("mail");
var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

mail.onkeyup = function() {
    if (mail.value.match(mailformat)) {
        document.getElementById("invalid_mail").style.display = "none";
    } else {
        document.getElementById("invalid_mail").style.display = "block";
    }
}

var refill_mail = document.getElementById("re_fill_mail");
var re_check_mail = document.getElementById("re_check_mail");

refill_mail.onkeyup = function() {
    if (mail.value !== refill_mail.value) {
        re_check_mail.style.display = "block";
    } else if (mail.value == refill_mail.value) {
        re_check_mail.style.display = "none";
    }
}

//On click Function
var sumitForm = document.getElementById("form_submit");
sumitForm.addEventListener("submit", onsubmit);


function onsubmit(e) {
    e.preventDefault();
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender1 = document.getElementById("gender-1");
    var gender2 = document.getElementById("gender-2");
    var post_code1 = document.getElementById("post_code_1").value;
    var post_code2 = document.getElementById("post_code_2").value;
    var address = document.getElementById("address").value;
    var phoneNo = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var refill_mail = document.getElementById("re_fill_mail").value;
    var re_check_mail = document.getElementById("re_check_mail");
    var selectedValue = document.getElementById("contact_type").value;
    var content_detail = document.getElementById("content_detail").value;
    var student = document.getElementById("checkbox");


    //name
    if (fname, lname === "") {
        alert("お名前を入れてください！");
        return false;
    } else {
        document.getElementById("output-name").innerHTML = fname + " " + lname;
    }

    //gender
    if (gender1.checked === true) {
        document.getElementById("output-gender").innerHTML = "男性";
    } else {
        document.getElementById("output-gender").innerHTML = "女性";
    }

    //address
    document.getElementById("output-address").innerHTML = "〒" + " " + post_code1 + " －" + " " + post_code2 + " " + address;

    //phone
    if (phoneNo === "") {
        alert("電話番号を入れてください！");
        return false;
    } else {
        document.getElementById("output-phone").innerHTML = phoneNo;
    }

    //mail
    if (mail === "") {
        alert("メールアドレスを入れてください！");
        return false;
    } else {
        document.getElementById("output-mail").innerHTML = mail;
        document.getElementById("output-re_fill_mail").innerHTML = refill_mail;
    }

    //お問い合わせ selected Value
    document.getElementById("output-contact_type").innerHTML = selectedValue;

    //level
    var contact_type_level = document.getElementById("contact_type_level");
    var level = document.getElementById("contact_type_class");
    if (level.style.display == "block" && contact_type_level.value == "") {
        contact_type_level.required;
        alert("レベルと資格を入れてください。");
    } else {
        document.getElementById("output-contact_type_level").innerHTML = contact_type_level.value;
    }

    //content 
    document.getElementById("output-content_detail").innerHTML = content_detail;

    if (student.checked == true) {
        document.getElementById("output-checkbox").innerHTML = "true";
    } else {
        document.getElementById("output-checkbox").innerHTML = "false";
    }

    var contact_dataInput, contact_dataOutput;
    contact_dataInput = document.getElementById("contact_input_data");
    contact_dataOutput = document.getElementById("contact_output_data");

    if (contact_dataOutput.style.display === "none") {
        contact_dataOutput.style.display = "block";
        contact_dataInput.style.display = "none";
    }
}
