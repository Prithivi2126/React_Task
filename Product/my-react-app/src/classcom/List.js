import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../service/Mockapi'
import { useNavigate } from 'react-router-dom'

export const  withNavigation = (List) => {
  return props => <List {...props} navigate={useNavigate()} />;
} 
export  class List extends Component  {
  
  constructor(props){
    super(props)
    this.state = {
      Array:[],
      } 
} 
 componentDidMount(){
  this.GetApi();
 }
   GetApi = async()=>{
    const res = await axios.get(API_URL);
    this.setState({Array:res.data});
  }
 
  
 edit = async (id) =>{
  this.props.navigate(`/classform/${id}`);
  }

 Delete =async(index,id)=>{
       const res = await axios.delete(API_URL + id);
       this.setState((prevArray)=>({
      Array: prevArray.Array.filter((value,i)=> i!== index),
  }));
}

  render() {
    
    return (
  
    <div className='list'>
        <div>
       {this.props.props}
      </div>
          <div className="table_change">
        <table className="table mt-4 container  border-1">
          <thead>
            <tr>
              <th scope="col">SI.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Company</th>
              <th scope="col">Active</th>
              <th scope="col">Date</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Array.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.amount}</td>
                <td>{data.company}</td>
                <td>{data.active ? 'Active' : 'Inactive'}</td>
                <td>{data.date}</td>
                <td>{data.email}</td>
                <td>
                  <button type='submit' onClick={()=>this.edit(data.id)} className="bg-primary rounded">Edit</button>
                  <button
                   type="submit"
                   onClick={() => this.Delete(index, data.id)} 
                   className="bg-danger rounded"> Delete
                  </button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
}
export default  withNavigation(List)