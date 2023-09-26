const userName = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone');
const address = document.getElementById('address');
const male = document.getElementById('radio-option1');
const female = document.getElementById('radio-option2');
const uploadImage = document.getElementById('file');
const submitBtn = document.getElementById('submit-btn');

const validName=/^[A-Z][a-z]+$/;
const validEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
const validMobileNumber=/^[6-9]\d{9}$/;
const validAddress = /^(?!.{201})[\s\S]*$/;



// name validation
userName.addEventListener('input', () => {
  if(userName.value=="")
    {
      document.getElementById('name-error').innerHTML="Name is required";
    }else if(!validName.test(userName.value)){
      document.getElementById('name-error').innerHTML="Name first letter should be capital, and only string without white spaces";
    }else{
      document.getElementById('name-error').innerHTML="";
      return true;  
    }
});

// email validation
email.addEventListener('input', () => {
  if(email.value=="")
    {
      document.getElementById('email-error').innerHTML="Email Address is required";
    }else if(!validEmail.test(email.value)){
      document.getElementById('email-error').innerHTML="Email Address must be in valid format with @ symbol";
    }else{
      document.getElementById('email-error').innerHTML="";
      return true;  
    }
});

// phone number validation
phoneNumber.addEventListener('input', () => {
  if(phoneNumber.value=="")
    {
      document.getElementById('phone-error').innerHTML="Mobile Number is required";
    }else if(!validMobileNumber.test(phoneNumber.value)){
      document.getElementById('phone-error').innerHTML="Mobile Number must have 10 digits";
    }else{
      document.getElementById('phone-error').innerHTML="";
      return true;  
    }
});

address.addEventListener('input', () => {
  if(address.value==""){
      document.getElementById('address-error').innerHTML="";
    }else if(!validAddress.test(address.value)){
      document.getElementById('address-error').innerHTML="Address maximum length should be 200 characters";
    }else{
      document.getElementById('address-error').innerHTML="";
      return true;  
    }
});

file.addEventListener("change", handleImageUpload);

function handleImageUpload(event) {
    const previewImage = document.getElementById("preview-image");
    const fileSizeLimit = 200 * 1024; // 200KB

    const imageFile = event.target.files[0];
    if (imageFile) {
        if (!imageFile.type.includes("image/jpeg") && !imageFile.type.includes("image/png")) {
            alert("Please select a valid image file (jpg or png).");
            return;
        }

        if (imageFile.size > fileSizeLimit) {
            alert("File size exceeds 200KB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            previewImage.src = event.target.result;
        };
        reader.readAsDataURL(imageFile);
    }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const imageFile = file.files[0];

  if (
    userName.value === "" ||
    email.value === "" ||
    phoneNumber.value === "" ||
    address.value === "" ||
    (male.checked == false && female.checked == false)
  ) {
     window.alert("Fill all the fields");
  }
  else{
    window.alert("Name: " + userName.value + "\nEmail: " + email.value + "\nContact Number: " + phoneNumber.value + "\nAddress: " + address.value); 
  }
});