import axios from "axios";
const studentsData = [
  {
    firstname: "anusha",
    lastname:"butukuri",
    age: "20",
    gender: "female",
  },
  {
    firstname: "uha",
    lastname:"butukuri",
    age: "20",
    gender: "female",
  },
  {
      firstname: "gowthami",
    lastname:"butukuri",
      age:"22",
      gender:"female",
  }
];

const exampleData = ()=>{
  axios.get(studentsData)
  console.log("example data added")
}
const getStudentsData = () =>{
  return axios.get("https://axis-react-learn-dc8d7-default-rtdb.firebaseio.com/students.json")
    
} 


const saveStudentsData = (studentsData) =>{
    return axios.post("https://axis-react-learn-dc8d7-default-rtdb.firebaseio.com/students.json",studentsData
    )
}
export {getStudentsData,saveStudentsData,exampleData}