const list = {
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
const div = document.getElementById('tree');

const formatDataIntoHTMLList = function(dat) {
  const ul = document.createElement('ul');
  for (let item in dat) {
      const li = document.createElement('li');
      li.textContent = `${item}`;
      if (typeof dat[item] === 'object') {
          li.append(formatDataIntoHTMLList(dat[item]));
      }
      ul.append(li);
  }
  return ul;
}

function createTree(container, dataForTransform) {
  container.append(formatDataIntoHTMLList(dataForTransform));
}

createTree(div, list);