const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };


  // Problem 10: countCalculation [1]
  const countCalculation = ({ departments }) => {
    const { math, history } = departments;
    const { teachers: mathTeachersCount, students: mathStudentsCount } = math;
    const { teachers: historyTeachersCount, students: historyStudentsCount } = history;
    return {
      mathTeachersCount,
      historyTeachersCount,
      mathStudentsCount,
      historyStudentsCount,
    };
  };
  console.log(countCalculation(school));


  // Problem 11: findTopStudent [1]
  const findTopStudent=(school,courseName)=>{
    let{students}=school;
    let topStudent;
    let topScore=-Infinity;
    
    students.forEach(({name,scores})=>{
      if(courseName in scores){
        if(scores[courseName]>topScore){
          topStudent={name,scores};
          topScore=scores[courseName]
        }

      }
    })
    return topStudent;
      
  }
  console.log( findTopStudent(school, 'math'))


  // Problem 12: addNewDept [1]
  const addNewDeptment=(school,newDepartment)=>{
    const newUpdatedSchool={
      ...school,
      departments:{
        ...school.departments,
        ...newDepartment,
      }
    }
    return newUpdatedSchool
  }
  const newDepartment={
    art:{teachers: 2, students: 50}  
  }
   console.log(addNewDeptment(school,newDepartment))       


  //  Problem 13: highestStudentCountDepartment[1]
  const highestStudentCountDepartment=({departments})=>{
    let highestCount=-Infinity;
    let highestDepartment;
    for(let i in departments){
      let studentCount=departments[i].students;
      if(studentCount>highestCount){
        highestCount=studentCount;
        highestDepartment=i;
      }
    }
    return `department with highest student numbers : ${highestDepartment}`
  }

  console.log(highestStudentCountDepartment(school));