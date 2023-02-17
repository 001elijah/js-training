// Написати функцію showAllFriends
// так, щоб вона виводила всіх друзів

const student = {
    name: "Student1",
    friends: ["Student2", "Student3", "Student4"],
  };
  
const student2 = {
    name: "Student2",
    friends: ["Student2", "Student3"],
};

function showAllFriends() {
    return `${this.friends}`;
};

// const show = showAllFriends.bind(student);
// console.log(show());
// const show2 = showAllFriends.bind(student2);
// console.log(show2());

console.log(showAllFriends.call(student));
console.log(showAllFriends.call(student2));