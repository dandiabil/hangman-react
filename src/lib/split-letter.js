const splitLetter = (w) =>
  w.split("").map((item) => ({ data: item, show: false }));

export default splitLetter;
