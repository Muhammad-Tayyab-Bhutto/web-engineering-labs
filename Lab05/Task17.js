let users = [
  {
    username: "larry",
    email: "larry@foo.com",
    yearsExperience: 22.1,
    favoriteLanguages: ["Perl", "Java", "C++"],
    favoriteEditor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
      city: "San Francisco",
      state: "CA",
    },
  },
  {
    username: "jane",
    email: "jane@test.com",
    yearsExperience: 33.9,
    favoriteLanguages: ["Haskell", "Clojure", "PHP"],
    favoriteEditor: "Emacs",
    hobbies: ["Swimming", "Biking", "Hiking"],
    hometown: { city: "New York", state: "NY" },
  },
  {
    username: "sam",
    email: "sam@test.com",
    yearsExperience: 8.2,
    favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
    favoriteEditor: "Atom",
    hobbies: ["Golf", "Cooking", "Archery"],
    hometown: { city: "Fargo", state: "SD" },
  },
  {
    username: "anne",
    email: "anne@test.com",
    yearsExperience: 4,
    favoriteLanguages: ["C#", "C++", "F#"],
    favoriteEditor: "Visual Studio Code",
    hobbies: ["Tennis", "Biking", "Archery"],
    hometown: { city: "Albany", state: "NY" },
  },
  {
    username: "david",
    email: "david@test.com",
    yearsExperience: 12.5,
    favoriteLanguages: ["JavaScript", "C#", "Swift"],
    favoriteEditor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
      city: "Los Angeles",
      state: "CA",
    },
  },
];

//========================A=============================
const printEmails = () => {
  console.log(users.map((obj) => obj.email));
};

printEmails();

const printHobbies = () => {
  console.log(users.map((obj) => obj.hobbies));
};

printHobbies();

const findHometownByState = (state) => {
  let result = [];
  users.map((obj) => {
    if (obj.hometown.state === state) {
      result.push(obj.username);
    }
  });
  return result;
};

console.log(findHometownByState("CA"));

const allLanguages = () => {
  const uniqueLanguages = new Set();
  users.forEach((user) => {
    user.favoriteLanguages.forEach((language) => {
      uniqueLanguages.add(language);
    });
  });

  return Array.from(uniqueLanguages);
};

console.log(allLanguages());

const hasFavoriteEditor = (editor) => {
  return users.some((user) => (user.favoriteEditor === editor));
};

console.log(hasFavoriteEditor("VS Code"))

function findByUsername(username) {
    return users.find((user) => user.username === username);
}

console.log(findByUsername("larry"))