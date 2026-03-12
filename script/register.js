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
function showHide2(){
    let x = document.getElementById('confirmPassword');
    let y = document.getElementById('eye2');
    if(x.type === 'password') {
        x.type = 'text';
        y.src = "../assets/icon/fi_eye.svg"
    } else {
        x.type = 'password';
        y.src = "../assets/icon/fi_eye-off.svg"
    }
}



