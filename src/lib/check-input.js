const checkInput = (letter, word) =>
  word.map((item) =>
    item.data == letter.toUpperCase() ? { ...item, show: true } : item
  );

export default checkInput;
