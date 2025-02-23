const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        alert('اطلاعات شما با موفقیت ارسال شد!');
        // در اینجا می‌توانید کد ارسال اطلاعات به سرور را اضافه کنید
    } else {
        alert('لطفا تمام فیلدها را پر کنید!');
    }
});const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        alert('اطلاعات شما با موفقیت ارسال شد!');
        // در اینجا می‌توانید کد ارسال اطلاعات به سرور را اضافه کنید
    } else {
        alert('لطفا تمام فیلدها را پر کنید!');
    }
});