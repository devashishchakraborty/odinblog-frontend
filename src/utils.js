const clipText = (text) => {
  console.log(typeof text);
  return text.length <= 100 ? text : text.slice(0, 200) + "...";
};

export { clipText };
