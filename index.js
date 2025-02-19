function vis(n) {
    console.log(n);
    if (document.getElementById(n).style.display == 'inline'){
        document.getElementById(n).style.display = 'none';
    } else {
        document.getElementById(n).style.display = 'inline';
    }
}