document.addEventListener('DOMContentLoaded', ()=>{



// Variables
const plans= document.querySelector('div.plan')
const selectionOne = document.querySelector('#plan-one')
const selectionTwo = document.querySelector('#plan-two')
const planSection= document.querySelector('.planSection')
const mainForm= document.querySelector('.main-form')
const next_button= document.querySelector('#button_next')
const back_button= document.querySelector('#back_button')
const name_input = document.querySelector('#name')
const email_input = document.querySelector('#email')
const tel_input = document.querySelector('#tel')
const send_button = document.querySelector('#send_button')
const message_success= document.querySelector('.success_message')
const inputs ={
    name:"",
    email: "",
    tel:""
}



// Events 
next_button.addEventListener('click', next_section )
back_button.addEventListener('click', back_section)
send_button.addEventListener('click', success_alert)
name_input.addEventListener('blur', verify_inputs )
email_input.addEventListener('blur', verify_inputs )
tel_input.addEventListener('blur', verify_inputs )

plans.addEventListener('click', ()=>{

    console.log('selected')
    
     if(plans.classList.contains('planActive')){
    
                plans.classList.remove('planActive')
                  
            }else{
                plans.classList.add('planActive')
            }
        
    })
// functions for the next and back buttons

function next_section (){

    if(planSection.classList.contains('hidden')){

        planSection.classList.remove('hidden')
        mainForm.classList.add('hidden')
        selectionOne.classList.remove('steps-selected')
        selectionTwo.classList.add('steps-selected')
       
    }
}

function back_section(){

    if(!planSection.classList.contains('hidden')){

        planSection.classList.add('hidden')
        mainForm.classList.remove('hidden')
        selectionTwo.classList.remove('steps-selected')
        selectionOne.classList.add('steps-selected')
    }
}



// function to verify if we have info or not

function verify_inputs (e){
    
    const message_position = e.target.parentElement
   
   if(e.target.value.trim() === ''){
    const emty_message = "Warning alert! This input is required"
    errors_message (emty_message, message_position)
    inputs[e.target.name]=''
    active_button()
    return
   }


    if(e.target.id === 'email' && !check_email(e.target.value)){

        errors_message('The email is not valid', message_position)
        inputs[e.target.name]=''
        active_button()
        return
    }

   remove_message(message_position)

   inputs[e.target.name]= e.target.value.trim().toLowerCase()

   active_button()

   console.log(inputs)
 
}

// function error message
function errors_message (emty_message, message_position){
    remove_message(message_position)

    const error_message = document.createElement('p')
    error_message.textContent= emty_message
    error_message.classList.add('error_message')

    message_position.appendChild(error_message)
}


// function remove erros messages
function remove_message(message_position){
 const alert = message_position.querySelector('.error_message')
 if(alert){
    alert.remove()
 }
}


// function check email
function check_email (email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const email_verified= regex.test(email)


    return email_verified

}


// function active next button
function active_button(){

    if(Object.values(inputs).includes('')){
        next_button.classList.add('inactive_button')
        next_button.disabled= true
        return
    }

    next_button.classList.remove('inactive_button')
    next_button.disabled= false
    console.log('unblock')
}

function success_alert(){
   

message_success.classList.add('success_message_active')
        
       
setTimeout(() => {
            
 message_success.classList.remove('success_message_active')
        }, 3000);
        
    
}

})