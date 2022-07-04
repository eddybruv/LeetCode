function isPalindrome(x: number): boolean {
  let num: number = x;
  let revX: number = 0;
  let ex = x;
  let n = -1;
  
  while (ex >= 1) {
    ex /= 10;
    n++;
  }
  
  while (num >= 1) {
    let rem:number = Math.floor(num % 10);
    num /= 10;
    revX = (rem * Math.pow(10, n)) + revX;
    n--;
  }
  
  if(revX === x)
      return true;
  
  return false;
};