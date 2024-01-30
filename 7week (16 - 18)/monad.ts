// const userName = "Mike";

// const userObject = database.fetch(userName);
// if (userObject != null) {
//   const userFriends = userObject.friends; // 만약 친구가 없다면?!
//   if (userFriends != null) {
//     const userBestFriend = userFriends.first(); // Uncaught Error: User has no friends
//   }
// }

class Maybe {
  constructor(private value: any) {
    this.value = value;
  }

  bind = function (func) {
    // null check
    if (this.value == null) return this;
    const value = func(this.value);
    // logging
    console.log("log: ", value);
    return new Maybe(value);
  };
}

const userBestFriend = new Maybe("Mike")
  .bind(database.fetch)
  .bind((user) => user.friends)
  .bind((friends) => friends.first());
