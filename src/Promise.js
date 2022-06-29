let productos = [
  {
    id: 0,
    name: 'Chocolate Blanco Oreo',
    marca: 'Milka',
  },
  {
    id: 1,
    name: 'Coffler Block',
    marca: 'Arcor',
  },
  {
    id: 2,
    name: 'Kinder Bueno',
    marca: 'Kinder',
  },
  {
    id: 3,
    name: 'Chocolate con Almendras',
    marca: 'Lindt',
  },
  {
    id: 4,
    name: 'Chocolate Yogurth Frutilla',
    marca: 'Cadbury',
  },
];

const gFetch = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  } else {
    reject('no hay productos');
  }
});

export default gFetch;
