const form = document.querySelector('#contactForm');
const userName = document.querySelectorAll('.name');
const emailInput = document.querySelectorAll('.email');
const bookingDate = document.querySelectorAll('.date');
const houseType = document.querySelectorAll('.selectTypeHouse');
const nOfPhoto = document.querySelectorAll('.nOfPhotos');
const format = document.querySelectorAll('.format');
const button = document.querySelectorAll('#button')

//console.log(userName.value); //Porqueee es undefined??


function validateForm() {
    let inputName = document.forms['form']['name'].value;
    if (inputName === '') {
        alert('Name must be filled out');
        return false;
    }
    let email = document.forms['form']['email'].value;
    if (email === '') {
        alert('Email must be filled out');
        return false;
    }

    let typeOfHOuse = document.forms['form']['houseType'].value;
    if (typeof typeOfHOuse === '1') {
        alert('House type must be determined');
        return false
    }



};






