var rooms = [
  {name: 'Fine room', number: 5, vacancy: true},
  {name: 'Super room', number: 6, vacancy: false},
  {name: 'Lonely room', number: 7, vacancy: true},
  {name: 'Nice room', number: 8, vacancy: true},
  {name: 'Creepy room', number: 9, vacancy: false},
  {name: 'Haunted room', number: 10, vacancy: true},
  {name: 'Big room', number: 11, vacancy: true}
]

var filteredRooms = [];
for (var i = 0; i < rooms.length; i++) {
  if (rooms[i].vacancy) {
    filteredRooms.push(rooms[i]);
  }
}

rooms.filter(function(room) {return room.vacancy});

var mappedRooms = [];
for (var i = 0; i < rooms.length; i++) {
  mappedRooms.push(rooms[i].name);
}

rooms.map(function(room) {return room.name})

var numVacancies = 0;
for (var i = 0; i < rooms.length; i++) {
  if (rooms[i].vacancy) {
    numVacancies++;
  }
}

rooms.reduce(function(acc, room) {return acc + (room.vacancy ? 1 : 0)}, 0)