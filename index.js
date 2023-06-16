//função para gerar uma senha (possui como parâmetro o tamanho desejado da senha)
//function to generate a password (has as a parameter the desired length of the password)
function generatePassword(passwordLength) {
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&_?~^';
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

console.log("Your password is: " + generatePassword(10));