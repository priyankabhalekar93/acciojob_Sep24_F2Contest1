/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  arr.map((item)=>{
    if (item.profession=="developer"){
      console.log(item)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    if (item.profession=="developer"){
      console.log(item)
    }
  })
}



function addData() {
  //Write your code here, just console.log

  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log

  arr = arr.filter(value=>value.profession!="admin")

  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "sam", age: "21", profession: "teacher" },
    { id: 5, name: "jiya", age: "26", profession: "intern" },
    { id: 6, name: "karan", age: "30", profession: "admin" },
  ];

  let all = arr.concat(arr1)
  console.log(all)

}
