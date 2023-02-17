const form = document.getElementById('form');
const username = document.getElementById('name');
const lstname = document.getElementById('lstname');
const email = document.getElementById('email');
const movie = document.getElementById('movie');
const phn = document.getElementById('phn');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
  const usernameValue = username.value.trim();
  const lstnameValue = lstname.value.trim();
  const emailValue = email.value.trim();
  const phnValue = phn.value.trim();
  const movieValue = movie.value.trim();
  const cntValue = cnt.value.trim();

  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (lstnameValue === '') {
    setError(lstname, 'Last Name is required');
  } else {
    setSuccess(lstname);
  }

  if (phnValue === ''  ) {
    setError(phn, 'Phone Number is required');
  } else if (phnValue.lenght > 9) {
    setError(phn, 'Phone Number must be less then 9 character');
  } else if (isNaN(phnValue)) {
    setError(phn, 'Phone Number must be only number');
   } else  {
    setSuccess(phn);
  }


  if (movieValue === 'Select Movie') {
    setError(movie, 'Film is required');

  } else {
    setSuccess(movie);
  }

  if (cntValue === '') {
    setError(cnt, 'cnt is required');
  } else {
    setSuccess(cnt);
  }

 

};

const ticket = [];

function recipt() {

  const username = document.getElementById('name').value;
  const lstname = document.getElementById('lstname').value;
  const email = document.getElementById('email').value;
  const movie = document.getElementById('movie').value;
  const phn = document.getElementById('phn').value;
  const cnt = document.getElementById('cnt').value;
 

  const person = {
    movie: movie,
    cnt: cnt,
    username: username,
    lstname: lstname,
    phn: phn,
    email: email ,
    }
    
    if( cnt !="" && username !="" && lstname !="" && phn !=""  && email !=""){
      ticket.push(person)
  }
  document.getElementById('name').innerHTML =" ";
  document.getElementById('lstname').innerHTML =" ";
  document.getElementById('email').innerHTML =" ";
  document.getElementById('phn').innerHTML =" ";
  document.getElementById('cnt').innerHTML =" ";

  seeticket();
   }

    
    

function seeticket(){ 
  let ut = "<table border='1'>" + "<tr>" +
    "<th>Movie</th><th>Count</th><th>Name</th><th>Last Name</th><th>Phone Number</th><th>Epost</th>" +
    "</tr>";
  for (let p of ticket) {
    ut += "<tr>";
    ut += "<td>" + p.movie + "</td><td>" + p.cnt + "</td><td>" + p.username + "</td><td>" + p.lstname + "</td><td>" + p.phn + "</td><td>" + p.email + "</td>";
    ut += "</tr>";
  }
  ut += "<table>";
  document.getElementById("ticket").innerHTML = ut;
  
}



 function clean() {
  // const clean =() => {
  //   const ticketDOM = document.getElementById('ticket');
  //   if(ticketDOM){
  //     ticketDOM.remove();
  //   }
  // }
  ticket.splice(0, ticket.length);
seeticket();

  document.getElementById('name').innerHTML =" ";
  document.getElementById('lstname').innerHTML =" ";
  document.getElementById('email').innerHTML =" ";
  document.getElementById('phn').innerHTML =" ";
  document.getElementById('cnt').innerHTML =" ";
 }