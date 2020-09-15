export const render = (renderContext, element, attributes, children) => {
  let item

  if(Array.isArray(children)) {
    item = `<${element}>`
    children.map((el) => {
      item += `${el}`
    })
    item += `</${element}>`
  } else if(attributes !== null && typeof attributes == 'object' && !Array.isArray(attributes)) {
    const keyArr = Object.keys(attributes)

    item = `<${element} `
    for (let key in attributes) {
      if(key === keyArr[keyArr.length-1]) {item += `${key}="${attributes[key]}"`}
      else item += `${key}="${attributes[key]}" `
    }
    item += `>${children}</${element}>`
  }
  else {
    item = children ? `<${element}>${children}</${element}>` : `<${element}></${element}>`
  }

  return item;
};

export const mount = (renderContext, el, component) => {
  // On get notre élément
  let object = document.getElementById(el)

  // On construit notre Node
  return object.insertAdjacentHTML("afterbegin", component);
};