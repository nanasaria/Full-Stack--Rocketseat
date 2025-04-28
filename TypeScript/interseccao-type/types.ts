type PersonSchool = {
  id: number;
  name: string;
};

type TeacherHistory = PersonSchool & {
  subjects: string[];
};

type StudentHistory = PersonSchool & {
  age: number;
};
