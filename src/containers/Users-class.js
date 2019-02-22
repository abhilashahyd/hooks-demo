import React, { Component } from 'react';
import axios from 'axios';
import User from './../components/User';

class UsersClass extends Component {
  state = {
    users: []
  };

  componentDidMount() {
   console.log("componentDidMount called");

   axios.get('https://hooks-demo-a6d15.firebaseio.com/users.json')
     .then(res => {
        const users=[];
        for (const key in res.data){
          users.push({ id: key,
            name :res.data[key].name,
            age: res.data[key].age,
            interests: res.data[key].interests});
        }
           this.setState({ users } );
     })
     .catch(err => {
       console.log(err);
     });
 }
 componentDidUpdate(prevProps, prevState) {
     console.log("componentDidUpdate called", prevState);
   }
    render () {
    const users = this.state.users.map((user)=>{
        return <User
          name={user.name}
          age={user.age}
          interests={user.interests}
          key={user.id}
        />
      })

        return (
          <div>
            {users}
          </div>
                );
    }
}

export default UsersClass;
