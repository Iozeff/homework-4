function elevator() {


  // ---------------------------
  const child = document.querySelector(".child");
  let parent = child.parentNode;
  const granPa = document.querySelector(".parent")
  console.log(granPa.childNodes);
  styleEdit(parent);

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
}
elevator();
