function loneTeen(a, b){
if ((a >= 13 && a <= 19) && (b >= 13 && b <= 19)) {
return false;
}

if (a >= 13 && a <= 19) {
return true;
}

if (b >= 13 && b <= 19) {
return true;
}
return false;
}
