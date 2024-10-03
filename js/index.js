document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah refresh halaman

  // Ambil nilai dari setiap input
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const queryType = document.querySelector('input[name="queryType"]:checked');
  const message = document.getElementById('message').value;
  const consent = document.querySelector('input[name="consent"]').checked;
  
  // Regular expression untuk memeriksa email yang berakhir dengan .com atau .co.id
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co\.id)$/;
  
  let isValid = true;
  
  // Cek apakah first name kosong
  if (firstName.trim() === "") {
    document.getElementById('first-name-error').classList.add('show');
    isValid = false;
  } else {
    document.getElementById('first-name-error').classList.remove('show');
  }
  
  // Cek apakah last name kosong
  if (lastName.trim() === "") {
    document.getElementById('last-name-error').classList.add('show');
    isValid = false;
  } else {
    document.getElementById('last-name-error').classList.remove('show');
  }

  // Cek email apakah valid
  if (!emailPattern.test(email)) {
    document.getElementById('email-error').innerText = "Please enter a valid email address";
    document.getElementById('email-error').classList.add('show');
    isValid = false;
  } else {
    document.getElementById('email-error').classList.remove('show');
  }

  if (!queryType) {
    document.getElementById('queryType-error').classList.add('show');
    isValid = false;
  } else {
    document.getElementById('queryType-error').classList.remove('show');
  }
  
  // Cek apakah message kosong
  if (message.trim() === "") {
    document.getElementById('message-error').classList.add('show');
    isValid = false;
  } else {
    document.getElementById('message-error').classList.remove('show');
  }

  if (!consent) {
    document.getElementById('consent-error').classList.add('show');
    isValid = false;
  } else {
    document.getElementById('consent-error').classList.remove('show');
  }

  // Jika valid, tampilkan nilai input di console.log
  if (isValid) {
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Query Type:", queryType);
    console.log("Message:", message);
    console.log("Consent:", consent);

    // Tampilkan notifikasi sukses
    const notification = document.getElementById('successNotification');
    notification.classList.add('show');
    
    // Reset form setelah submit berhasil
    document.getElementById('contact-form').reset();
    
    // Sembunyikan notifikasi setelah 5 detik
    setTimeout(() => {
      notification.classList.remove('show');
    }, 5000);
  }
});
