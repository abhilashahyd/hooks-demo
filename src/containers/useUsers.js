import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsers = props =>{
   const [users, setUsers] = useState([]);

useEffect(() => {
  console.log("useEffect called");

  axios.get('https://hooks-demo-a6d15.firebaseio.com/users.json')
    .then(res => {
       console.log('User fn info',res.data);
       const users=[]
       for (const key in res.data){
         users.push({ id: key,
           name :res.data[key].name,
           age: res.data[key].age,
           interests: res.data[key].interests});
       }
          setUsers( users );

    })
    .catch(err => {
      console.log(err);
    });
  },[]);

  return users;
};

export default useUsers;
