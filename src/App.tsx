import { useEffect, useState } from 'react';
import React from 'react';
import Card, { CardVariant } from './components/Card';
import UsersList from './components/UsersList';
import { IUser } from './types/types';
import axios from 'axios';
function App() {
  const [users,setUsers]=useState<IUser[]>([])
  useEffect(()=>{
    fetchUsers()

  },[])
  async function fetchUsers() {
    try{
      const res = await axios.get<IUser[]>   ('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (e){
      alert(e)
    }
  }
  return (
    <div className="App">
    <Card onClick={(num)=>console.log('Click',num)} variant={CardVariant.outliner}  width='200px' height='200px'>
      <button>кнопка</button>
      <div>kvkekekv</div>
      <div>iowifwoefcnjc</div>
    </Card>
    <UsersList users={users}/>
      
    
    </div>
  );
}

export default App;
