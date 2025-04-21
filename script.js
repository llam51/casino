function login() {
    const input = document.getElementById("username-input");
    const username = input.value.trim().toLowerCase();
    if (!username) return alert("Enter a name.");
  
    let users = JSON.parse(localStorage.getItem("users")) || {};
  
    // Create new user if doesn't exist
    if (!users[username]) {
      users[username] = {
        balance: 100,
        isAdmin: username === "admin"
      };
    }
  
    localStorage.setItem("currentUser", username);
    localStorage.setItem("users", JSON.stringify(users));
  
    showMenu(users[username]);
  }
  
  function showMenu(user) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("menu-screen").style.display = "block";
  
    document.getElementById("welcome-message").textContent = `Hello, ${localStorage.getItem("currentUser")}`;
    document.getElementById("user-balance").textContent = user.balance;
  
    if (user.isAdmin) {
      document.getElementById("admin-btn").style.display = "inline-block";
    }
  }
  
  // Auto login if already saved
  window.onload = () => {
    const currentUser = localStorage.getItem("currentUser");
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (currentUser && users[currentUser]) {
      showMenu(users[currentUser]);
    }
  };
  