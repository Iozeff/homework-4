// Первое задание

setTimeout(() => {
  // ---------------------------
  let child = document.querySelector(".deepChild");
  let blockName = document.querySelector(".blockName");
// функция для поднятия по дереву
  function elevator(element){
    let elementClass = element.getAttribute('class');
    let parent = element.parentNode;

    // перебираемся по дереву
    if(elementClass != 'parent'){ setTimeout(()=>{
          styleEdit(element);
          elevator(parent);
          out(element);
                }, 600)
    } else {
      setTimeout(()=>{
        styleEdit(element);
        out(element);
       }, 600)
    }
  }
  elevator(child);

//  выводим информацию в blockName
  function out(element){
    blockName.innerHTML = 'класс элемента: ' + element.className;
  }

  // Изменяем стиль элемента
  function styleEdit(element) {
    // измение цвета фона на случайный.
    let color = function() {
      let red, green, blue;
      red = Math.floor(Math.random() * 255) + 0;
      green = Math.floor(Math.random() * 255) + 0;
      blue = Math.floor(Math.random() * 255) + 0;
      console.log(red, green, blue);
      return `rgb(${red}, ${green}, ${blue})`;
    };
    element.style.backgroundColor = color();
  }
}, 300);


// Второе задание
setTimeout(() => {
  let deepChild = document.querySelector(".secondQuest .parent .first .deepChild");

// перебираемся наверх к sibling first и красим рамки в зеленый
  function findParent(element){
    let elementClass = element.getAttribute('class');
    if(elementClass != 'sibling first'){
      setTimeout(()=>{
        let parent = element.parentNode;
        element.style.border = '2px solid red';
        findParent(parent);
      }, 300);
    }
    else {
      element.style.border = '2px solid red';
      console.log(element);
      element.nextSibling.nextSibling.style.border = '2px solid green'
      findChild(element.nextSibling.nextSibling);
    }
  }


  // поиск детей
  function findChild(element){
    let child = findDiv(element)[0];
    let elementClass = child.getAttribute('class');
    //покраска границ
    if(elementClass != 'deepChild'){
      setTimeout(()=>{
        element.style.border = '2px solid green';
        findChild(child);
      }, 300);
    }
    else {
      console.log(element);
      // element.style.backgroundColor = 'green';
      element.style.border = '2px solid green';
      console.log('finish');
    }

  }
  function findDiv(element){
    const collection = Array.from(element.childNodes);
    return collection.filter(c => c.tagName === 'DIV')
  }
  findParent(deepChild);
}, 300);
