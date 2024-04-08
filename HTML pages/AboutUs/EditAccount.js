
/*------------------------------Edit First Name---------------------------------*/
document.getElementById('firstNameButton').onclick = function editFirstName(){
    document.getElementById('firstName').classList.add('hidden');
    document.getElementById('newFirstName').classList.remove('hidden');
}
/*Cansel*/
function cancel(){
    document.getElementById('firstName').classList.remove('hidden');
    document.getElementById('newFirstName').classList.add('hidden');
   }
document.getElementById('cancel').onclick = cancel;
/*Save */
document.getElementById('save').onclick = function save(){
    document.getElementById('firstNameLabel').innerHTML = document.getElementById('newFirstNameInput').value;
    cancel();
}

/*------------------------------Edit Last Name---------------------------------*/
document.getElementById('lastNameButton').onclick = function editFirstName(){
    document.getElementById('lastName').classList.add('hidden');
    document.getElementById('newLastName').classList.remove('hidden');
}
/*Cansel*/
function cancel1(){
    document.getElementById('lastName').classList.remove('hidden');
    document.getElementById('newLastName').classList.add('hidden');
   }
document.getElementById('cancel1').onclick = cancel1;
/*Save */
document.getElementById('save1').onclick = function save1(){
    document.getElementById('lastNameLabel').innerHTML = document.getElementById('newLastNameInput').value;
    cancel1();
}

/*------------------------------Edit Email Address---------------------------------*/
document.getElementById('emailAddressButton').onclick = function editEmailAddress(){
    document.getElementById('emailAddress').classList.add('hidden');
    document.getElementById('newEmailAddress').classList.remove('hidden');
}
/*Cansel*/
function cancel2(){
    document.getElementById('emailAddress').classList.remove('hidden');
    document.getElementById('newEmailAddress').classList.add('hidden');
   }
document.getElementById('cancel2').onclick = cancel2;
/*Save */
document.getElementById('save2').onclick = function save2(){
    document.getElementById('emailAddressLabel').innerHTML = document.getElementById('newEmailAddressInput').value;
    cancel2();
}

/*------------------------------Edit Password---------------------------------*/
document.getElementById('passwordButton').onclick = function editPassword(){
    document.getElementById('password').classList.add('hidden');
    document.getElementById('newPassword').classList.remove('hidden');
}
/*Cansel*/
function cancel3(){
    document.getElementById('password').classList.remove('hidden');
    document.getElementById('newPassword').classList.add('hidden');
   }
document.getElementById('cancel3').onclick = cancel3;
/*Save */
document.getElementById('save3').onclick = function save3(){
    cancel3();
}