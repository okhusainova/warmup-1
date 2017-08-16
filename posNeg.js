function posNeg(a, b, negative){
   if ((a>0 && b<0) || (a<0 && b>0)) {
     if (!negative) {
       return true;
     }
   }

  if (negative && a<0 && b<0) {
     return true;
  }

return false;
}