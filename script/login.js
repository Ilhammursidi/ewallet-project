function showHide(){
    let x = document.getElementById('password');
    let y = document.getElementById('eye');
    if(x.type === 'password') {
        x.type = 'text';
        y.src = "../assets/icon/fi_eye.svg"
    } else {
        x.type = 'password';
        y.src = "../assets/icon/fi_eye-off.svg"
    }
}