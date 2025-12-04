import { useState } from 'react'
import './App.css'

function App() {
  return (<>
    <h1>VSBEC HostelCare</h1>
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
      <br />
      <br />
      <label>Room number:
        <input type="number" />
      </label>
      <br />
      <br />
      <label>Complaint type:
        <select name="complaint_type" id="ctype">
          <option value="furniture">Furniture</option>
          <option value="water">Water</option>
          <option value="electricity">Electricity</option>
          <option value="damage">Damage</option>
          <option value="others">Others</option>
        </select>
      </label>
      <br /><br />
      <label>Description:
        <textarea name="desc" id="desc"></textarea>
      </label>
      <br /><br />
      <input type="submit" value="Submit" />
    </form>
  </>
  )
}

export default App
