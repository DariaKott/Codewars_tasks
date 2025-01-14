// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".




function rot13(message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const newMesArr = [];
    const mesArr = message.split('');
  
    for (let symb of mesArr) {
      const isUpperCase = symb === symb.toUpperCase();
      const lowerSymb = symb.toLowerCase();
      
      if (!alphabet.includes(lowerSymb)) {
        newMesArr.push(symb); // Не буквы добавляем как есть
      } else {
        const currentIndex = alphabet.indexOf(lowerSymb);
        const newIndex = (currentIndex + 13) % 26;
        const newSymb = alphabet[newIndex];
        newMesArr.push(isUpperCase ? newSymb.toUpperCase() : newSymb);
      }
    }
  
    return newMesArr.join('');
  }
  