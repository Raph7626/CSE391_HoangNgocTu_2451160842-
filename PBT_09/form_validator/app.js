const form = document.getElementById('registerForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const phone = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');
const strengthBar = document.getElementById('strengthBar');
const modal = document.getElementById('successModal');
const modalInfo = document.getElementById('modalInfo');

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate functions
function validateName() {
    const value = fullName.value.trim();
    const status = fullName.parentElement.querySelector('.status');
    
    if (value.length >= 2 && value.length <= 50) {
        status.textContent = "✅ Hợp lệ";
        status.style.color = "green";
        return true;
    } else {
        status.textContent = "❌ Tên phải từ 2-50 ký tự";
        status.style.color = "red";
        return false;
    }
}

function validateEmail() {
    const value = email.value.trim();
    const status = email.parentElement.querySelector('.status');
    
    if (emailRegex.test(value)) {
        status.textContent = "✅ Email hợp lệ";
        status.style.color = "green";
        return true;
    } else {
        status.textContent = "❌ Email không hợp lệ";
        status.style.color = "red";
        return false;
    }
}

function checkPasswordStrength() {
    const value = password.value;
    let strength = 0;
    
    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/\d/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    const bar = strengthBar;
    if (strength <= 2) {
        bar.style.width = "33%";
        bar.style.background = "#e74c3c";
    } else if (strength === 3 || strength === 4) {
        bar.style.width = "66%";
        bar.style.background = "#f1c40f";
    } else {
        bar.style.width = "100%";
        bar.style.background = "#2ecc71";
    }
    
    return strength >= 3;
}

function validateConfirmPassword() {
    const status = confirmPassword.parentElement.querySelector('.status');
    if (confirmPassword.value === password.value && confirmPassword.value !== "") {
        status.textContent = "✅ Mật khẩu khớp";
        status.style.color = "green";
        return true;
    } else {
        status.textContent = "❌ Mật khẩu không khớp";
        status.style.color = "red";
        return false;
    }
}

function formatPhone() {
    let value = phone.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0,4) + '-' + value.slice(4);
    if (value.length > 8) value = value.slice(0,8) + '-' + value.slice(8);
    phone.value = value;
}

function validatePhone() {
    const value = phone.value.replace(/\D/g, '');
    const status = phone.parentElement.querySelector('.status');
    
    if (value.length === 10) {
        status.textContent = "✅ Số điện thoại hợp lệ";
        status.style.color = "green";
        return true;
    } else {
        status.textContent = "❌ Số điện thoại phải có 10 chữ số";
        status.style.color = "red";
        return false;
    }
}

// Check all fields
function checkFormValid() {
    const isValid = 
        validateName() &&
        validateEmail() &&
        checkPasswordStrength() &&
        validateConfirmPassword() &&
        validatePhone();
    
    submitBtn.disabled = !isValid;
}

// Event Listeners
fullName.addEventListener('input', () => { validateName(); checkFormValid(); });
email.addEventListener('input', () => { validateEmail(); checkFormValid(); });
password.addEventListener('input', () => { 
    checkPasswordStrength(); 
    validateConfirmPassword(); 
    checkFormValid(); 
});
confirmPassword.addEventListener('input', () => { validateConfirmPassword(); checkFormValid(); });
phone.addEventListener('input', () => { 
    formatPhone(); 
    validatePhone(); 
    checkFormValid(); 
});

// Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!submitBtn.disabled) {
        modalInfo.innerHTML = `
            <p><strong>Họ tên:</strong> ${fullName.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>SĐT:</strong> ${phone.value}</p>
        `;
        modal.style.display = "flex";
    }
});