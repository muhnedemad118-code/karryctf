
const users = [
    { username: "admin", password: "1234" },
    { username: "mohamed", password: "pass123" },
    { username: "test", password: "0000" }
];

// دالة التحقق من تسجيل الدخول
function checkLogin(username, password) {
    for (let u of users) {
        if (u.username === username && u.password === password) {
            return true;
        }
    }
    return false;
}

// عند ضغط زر تسجيل الدخول
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (checkLogin(user, pass)) {
        localStorage.setItem("loggedUser", user);  // تخزين الاسم
        window.location = "welcome.html";          // التحويل للصفحة الثانية
    } else {
        alert("❌ Incorrect username or password!");
    }
});
