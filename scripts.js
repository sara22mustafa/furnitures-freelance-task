// إضافة تفاعل بسيط عند إرسال نموذج الاتصال
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إرسال النموذج

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`شكراً لك ${name}! تم إرسال رسالتك بنجاح.`);
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});
