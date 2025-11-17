   const loginContainer = document.getElementById("login-container");
    const registerContainer = document.getElementById("register-container");

    function showRegister() {
      loginContainer.style.display = "none";
      registerContainer.style.display = "block";
    }

    function showLogin() {
      registerContainer.style.display = "none";
      loginContainer.style.display = "block";
    }

    function register() {
      const username = document.getElementById("register-username").value.trim();
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      const message = document.getElementById("register-message");

      if (!username || !password) {
        message.textContent = "Please fill all fields.";
        return;
      }

      if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        return;
      }

      if (localStorage.getItem(username)) {
        message.textContent = "Username already exists.";
        return;
      }

      localStorage.setItem(username, password);
      message.style.color = "#4caf50";
      message.textContent = "Registration successful!";
      setTimeout(() => {
        showLogin();
        message.textContent = "";
      }, 1500);
    }

    function login() {
      const username = document.getElementById("login-username").value.trim();
      const password = document.getElementById("login-password").value;
      const message = document.getElementById("login-message");

      const storedPassword = localStorage.getItem(username);

      if (!storedPassword) {
        message.textContent = "User not found.";
        return;
      }

      if (storedPassword !== password) {
        message.textContent = "Incorrect password.";
        return;
      }

      message.style.color = "#4caf50";
      message.textContent = "Login successful!";
      setTimeout(() => {
        window.location.href = "home.html"; // Redirect to homepage
      }, 1000);
    }