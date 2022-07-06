function isPalindrome(x: number): boolean {
  let num: number = x;
  let revX: number = 0;
  
  while (num >= 1) {
    let rem:number = Math.floor(num % 10);
    num /= 10;
    revX = revX*10 + rem;
  }
  
  if(revX === x)
      return true;
  
  return false;
};