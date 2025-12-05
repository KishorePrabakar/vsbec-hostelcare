import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [room_no, setRoom_no] = useState('');
  const [issue_type, setIssue_type] = useState('');
  const [desc, setDesc] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      name: name,
      room_no: room_no,
      issue_type: issue_type,
      desc: desc
    };
  
  try{
    const response = await axios.post('http://localhost:3030/submit', dataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Succes:', response.data);
    setMessage('Form Submitted Succesfully');
    setName('');
    setRoom_no('');
    setDesc('');
    setIssue_type('');
  }catch (error){
    console.error('Error:', error.response ? error.response.data : error.message);
    setMessage('Submission failed.'); 
  }
}
  
  return (<>
    <h1>VSBEC HostelCare</h1>
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input value={name} type="text" onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <br />
      <label>Room number:
        <input value={room_no} type="number" onChange={(e) => setRoom_no(e.target.value)} required />
      </label>
      <br />
      <br />
      <label>Complaint type:
        <select value={issue_type} type="text" onChange={(e) => setIssue_type(e.target.value)} required>
          <option value="furniture">Furniture</option>
          <option value="water">Water</option>
          <option value="electricity">Electricity</option>
          <option value="damage">Damage</option>
          <option value="others">Others</option>
        </select>
      </label>
      <br /><br />
      <label name="desc">Description:
        <textarea value={desc} type="text" onChange={(e) => setDesc(e.target.value)} required></textarea>
      </label>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  </>
  )
}

export default App
