import { useEffect, useState } from 'react';
import React from 'react';
import Card, { CardVariant } from './components/Card';
import { IComment, ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import CommentItem from './components/CommentItem';
function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos,setTodos] =useState<ITodo[]>([])
  const [comments,setComments] =useState<IComment[]>([])
  useEffect(() => {
    fetchUsers()
    fetchTodos()
    fetchComments()
  }, [])
  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (e) {
      alert(e)
    }
  }
  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(res.data)
    } catch (e) {
      alert(e)
    }
  }
  async function fetchComments() {
    try {
      const res = await axios.get<IComment[]>('https://jsonplaceholder.typicode.com/comments?_limit=10')
      setComments(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className="App">
      <Card onClick={(num) => console.log('Click', num)} variant={CardVariant.outliner} width='200px' height='200px'>
        <button>кнопка</button>
        <div>kvkekekv</div>
        <div>iowifwoefcnjc</div>
      </Card>
      <List
       items={users}
        renderItem={(user:IUser)=><UserItem user={user} key={user.id}/>}
        />
        <List
       items={todos}
        renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}
        />
        <List
       items={comments}
        renderItem={(comment:IComment)=><CommentItem comment={comment} key={comment.id}/>}
        />


    </div>
  );
}

export default App;
