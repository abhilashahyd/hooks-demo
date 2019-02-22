import React,{ useState,useMemo } from 'react';
import axios from 'axios';
import User from './../components/User';
import useUsers from './useUsers';

const Users = props =>{
   // const [users, setUsers] = useState([]);
   const users = useUsers();
   const [submittedUser, setSubmittedUser]= useState({name:'', age:'', interests:''});

/*useEffect(() => {
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
           // const [users, setUsers] = useState(res.data);
            console.log('New User info',users);
    })
    .catch(err => {
      console.log(err);
    });
  },[]);*/

const handleNameChange= (event) => {
    console.log(event.target.value);
    setSubmittedUser({ name: event.target.value, age:submittedUser.age, interests: submittedUser.interests});
  };

  const handleAgeChange= (event) => {
      console.log(event.target.value);
      setSubmittedUser({ name: submittedUser.name, age:event.target.value, interests: submittedUser.interests});
    };

    const handleIntChange= (event) => {
        console.log(event.target.value);
        setSubmittedUser({ name: submittedUser.name, age:submittedUser.age, interests: event.target.value});
      };

 const userAddHandler = (submittedUser) => {
   // setTodoState({
   //   userInput: todoState.userInput,
   //   todoList: todoState.todoList.concat(todoState.userInput)
   // });
 console.log(submittedUser);
   axios
     .post('https://hooks-demo-a6d15.firebaseio.com/users.json', { name: submittedUser.name, age:submittedUser.age, interests: submittedUser.interests} )
     .then(res => {
       console.log('User added');
     })
     .catch(err => {
       console.log(err);
     });
 };
 // const renderUsers = users.map((user)=>{
 //   return <User
 //     name={user.name}
 //     age={user.age}
 //     interests={user.interests}
 //     key={user.id}
 //   />
 // })
  return (<div> Users
    <div className="ui focus input">
    <input type="text" placeholder="User Name" value ={submittedUser.name}  onChange={handleNameChange} />
    <input type="text" placeholder="Age" value={submittedUser.age}  onChange={handleAgeChange} />
    <input type="text" placeholder="Interests" value={submittedUser.interests}  onChange={handleIntChange} /></div><br/>
    <button onClick={userAddHandler.bind(this,submittedUser)}>Add User</button>
    {useMemo(
    () => (
      users.map((user)=>{
       return <User
         name={user.name}
         age={user.age}
         interests={user.interests}
         key={user.id}
       />
     })
    ),
    [users]
  )}
   </div>);

}

export default Users;
