var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort ((s1, s2) => {
  return  (s1.name < s2.name ? -1 :
            (s1.name > s2.name ? 1 :
              s2.age - s1.age
            )
          );
});

console.log(students);
