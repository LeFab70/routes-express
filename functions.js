export const divisorsOfNumbers = (number) => {
  let diviseurs = [];
  if (number < 2) return (diviseurs = [1]);
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) diviseurs.push(i);
  }
  return diviseurs;
};
export const primeNumbers = (number) => {
  let isprime = true;
  //au depart est true pour tous
  if (number > 0 && number < 2) return !isprime;
  if (number == 2) return isprime;
  if (number > 2) {
    // console.log(!isprime);
    for (let i = 2; i <= Math.ceil(number / 2); i++) {
      // console.log(Math.ceil(number / 2));
      if (number % i == 0) return !isprime;
    }
    return isprime;
  }
};
export const evenNumbers = (number) => {
  if (number % 2 == 0) return true;
  return false;
};
