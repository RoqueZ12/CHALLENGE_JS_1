document.addEventListener('DOMContentLoaded', function () {
  // Selección de elementos del DOM
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  const form3 = document.getElementById('form3');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const buttons = document.querySelectorAll('#form2 input[type="button"]');
  const continueToForm2Btn = document.getElementById('continueToForm2');
  const continueToForm3Btn = document.getElementById('continueToForm3');
  const submit = document.getElementById('accept');
  const summaryName = document.querySelector('#form3 label:nth-child(1)');
  const summaryEmail = document.querySelector('#form3 label:nth-child(2)');
  const radio1 = document.getElementById('radio1');
  const radio2 = document.getElementById('radio2');
  const radio3 = document.getElementById('radio3');
  const steps = document.getElementById('stepText');
  const messageDiv = document.getElementById('messageDiv');

  // Variables para almacenar valores
  let nameValue = '';
  let emailValue = '';

  // Configuración inicial
  form1.reset();
  form2.style.display = 'none';
  form3.style.display = 'none';
  radio1.checked = true;
  radio2.checked = false;
  radio3.checked = false;
  radio2.disabled = true;
  radio3.disabled = true;

  // Función para actualizar el texto del paso
  function updateStepText(step) {
      steps.textContent = `Step ${step} of 3`;
  }
  // Agregar un evento focus para el campo name
name.addEventListener('focus', function() {
  this.style.borderColor = "gray";
  this.style.backgroundColor = "#212936";
  this.style.color = "#a1a1a9";
});

// Agrega un evento focus para el campo email
email.addEventListener('focus', function() {
  this.style.borderColor = "gray";
  this.style.backgroundColor = "#212936";
  this.style.color = "#a1a1a9";
});

  // Event listener para continuar del form1 al form2
  continueToForm2Btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (form1.checkValidity()) {
          radio2.checked = true;
          radio2.disabled = false;
          nameValue = document.querySelector('#form1 input[name="text"]').value;
          emailValue = document.querySelector('#form1 input[name="email"]').value;
          form1.style.display = 'none';
          form2.style.display = 'block';
          updateStepText(2);
      } else {
          showMessage('Complete los campos');
          name.style.borderColor = "#f96262"
          name.style.backgroundColor= "hsla(4, 100%, 67%, 15%)"
          name.style.color = "#ff6257"

          email.style.borderColor = "#f96262"
          email.style.backgroundColor= "hsla(4, 100%, 67%, 15%)"
          email.style.color = "#ff6257"
      }
      
  });

  // Event listener para los botones de form2
  buttons.forEach(button => {
      button.addEventListener('click', function() {
        if(this.classList.contains('selected')){
          
        }
          buttons.forEach(btn => btn.classList.remove('selected'));
          this.classList.add('selected');
      });
  });

  // Event listener para continuar del form2 al form3
  continueToForm3Btn.addEventListener('click', function (e) {
      e.preventDefault();
      const selectedButton = document.querySelector('#form2 input[type="button"].selected');
      if (selectedButton) {
          const selectedTopic = selectedButton.value;
          const topicsLabel = document.querySelector('#form3 .form-group:last-child label');
          topicsLabel.textContent = `Topics: ${selectedTopic}`;
          summaryName.textContent = `Name: ${nameValue}`;
          summaryEmail.textContent = `Email: ${emailValue}`;
          form2.style.display = 'none';
          form3.style.display = 'block';
          radio3.checked = true;
          radio3.disabled = false;
          updateStepText(3);
      } else {
          showMessage('Seleccione una opción');
      }
      
  });

  // Event listener para el botón de submit
  submit.addEventListener('click', function(e){
      e.preventDefault();
      alert('✅ Success message');
      resetForms();
      updateStepText(1);
  });

  // Función para mostrar mensajes y ocultar después de 3 segundos
  function showMessage(message) {
      messageDiv.textContent = message;
      messageDiv.style.display = 'block';
      setTimeout(() => {
          messageDiv.style.display = 'none';
      }, 3000);
  }

  // Función para resetear los formularios y radios
  function resetForms() {
      form3.style.display = 'none';
      form1.style.display = 'block';
      form1.reset();
      radio1.checked = true;
      radio3.checked = false;
      radio2.checked = false;
      radio2.disabled = true;
      radio3.disabled = true;
  }
});
