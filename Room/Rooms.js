class Rooms {
  constructor() {
    this.rooms = {};
  }

  addUserToRoom(id, name, room) {
    if (!this.rooms[room]) {
      this.rooms[room] = {};
    }
    this.rooms[room][id] = name;
  }

  getAllUsers(room) {
    return this.rooms[room];
  }

  deleteUser(room, id) {
    if (this.rooms[room]) {
      delete this.rooms[room][id];
      return id;
    }
  }

  getUser(room) {
    let user = {};
    if (!this.rooms[room]) return user;
    const keyArray = Object.keys(this.rooms[room]);
    if (!keyArray.length) return user;
    return { [keyArray[0]]: this.rooms[room][keyArray[0]] };
  }
}

module.exports = Rooms;
