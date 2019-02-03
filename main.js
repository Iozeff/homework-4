// Первое задание

setTimeout(() => {
  // ---------------------------
  let child = document.querySelector(".deepChild");
  let blockName = document.querySelector(".blockName");
// функция для поднятия по дереву
  function elevator(element){
    let elementClass = element.getAttribute('class');
    let parent = element.parentNode;
    console.log(elementClass);

    // перебираемся по дереву
    if(elementClass != 'parent'){ setTimeout(()=>{
          styleEdit(element);
          elevator(parent);
          out(element);
                }, 600)
    } else {
      setTimeout(()=>{
        console.log(parent);
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
