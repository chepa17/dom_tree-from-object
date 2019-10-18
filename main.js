let data = {
  "Рыбы": {
      "форель": {},
      "лосось": {}
  },
  "Деревья": {
      "Огромные": {
          "секвойя": {},
          "дуб": {}
      },
      "Цветковые": {
          "яблоня": {},
          "магнолия": {}
      }
  }
};
const formatDataIntoHTMLList = function(data) {
  const ul = document.createElement('ul');
  for (let item in data) {
      const li = document.createElement('li');
      console.log(item);
      li.textContent = `${item}`;
      if (typeof data[item] === 'object') {
          li.append(formatDataIntoHTMLList(data[item]));
      }
      ul.append(li);
  }
  return ul;
}
function createTree(container, data) {
  container.append(formatDataIntoHTMLList(data));
}
createTree(document.getElementById('tree'), data);