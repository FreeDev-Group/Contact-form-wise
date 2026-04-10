document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let isValid = true;
  const formGroups = document.querySelectorAll('.form-group');

  formGroups.forEach(group => group.classList.remove('error'));

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const consent = document.getElementById('consent');
  const queryType = document.querySelector('input[name="query-type"]:checked');

  if (!firstName.value.trim()) { 
    firstName.parentElement.classList.add('error'); isValid = false; 
  }
  
  if (!lastName.value.trim()) { 
    lastName.parentElement.classList.add('error'); isValid = false; 
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) { 
    email.parentElement.classList.add('error'); isValid = false; 
  }

  if (!queryType) {
    document.querySelector('.radio-group').parentElement.classList.add('error');
    isValid = false;
  }

  if (!message.value.trim()) { 
    message.parentElement.classList.add('error'); isValid = false; 
  }

  if (!consent.checked) { 
    consent.parentElement.parentElement.classList.add('error'); isValid = false; 
  }

  if (isValid) {
    const toast = document.getElementById('success-toast');
    toast.classList.remove('hidden');
    
    this.reset();
    
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 5000);
  }
});