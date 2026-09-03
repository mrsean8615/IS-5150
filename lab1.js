const students = [
  {
    firstName: "Steve",
    major: "CS",
    credits: 12,
    enrolled: true,
  },
  {
    firstName: "Maya",
    major: "Biology",
    credits: 15,
    enrolled: false,
  },
  {
    firstName: "Jordan",
    major: "Business",
    credits: 9,
    enrolled: true,
  },
  {
    firstName: "Alyssa",
    major: "Math",
    credits: 18,
    enrolled: true,
  },
];

const studentNames = students.map((student) => student.firstName);
console.log(studentNames);

const enrolledStudents = students.filter((student) => student.enrolled);
console.log(enrolledStudents);

const sentenceID = "Steve";

const sentence = (firstName) => {
  const result = students.find((student) => firstName === student.firstName);
  return `${result.firstName} is a ${result.major} major taking ${result.credits} credits.`;
};

response = sentence(sentenceID);
console.log(response);
