interface Person {
  id: number;
  name: string;
}

interface Teacher extends Person {
  subjects: string[];
}

interface Student extends Person {
  age: number;
}

let teacher: Teacher = {
  id: 1,
  name: "Rodrigo",
  subjects: ["JavaScript", "TypeScript"],
};

let student: Student = {
  id: 1,
  name: "Maria",
  age: 20,
};
