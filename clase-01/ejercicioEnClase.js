const usuarios = [
  {
    nombres: 'Sergio',
    apellidos: 'Terroso Cabrera',
    fechaDeNacimiento: '1977-10-20',
    series: [
      'Anillos de poder',
      'Better call Saul',
      'Belascoarán',
      'Un Extraño Enemigo',
    ],
    cursos: 4,
  },
];

console.log(usuarios);

usuarios.push(
  {
    nombres: 'Jorge',
    apellidos: 'Sánchez Torrijos',
    fechaDeNacimiento: '1976-09-03',
    series: [
      'Juego de Tronos',
      'Breaking Bad',
      'Stranger Things',
    ],
    cursos: 0,
  }
);

console.log(usuarios);

console.log(usuarios[0]);

usuarios.forEach(u => u.cursos+=1);

console.log(usuarios);

usuarios.forEach(u => u.fechaDeNacimiento = new Date(u.fechaDeNacimiento));

console.log(usuarios);