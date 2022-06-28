import React from 'react';

import StudentTable from '../components/StudentTable';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  //const [students, setStudents] = useState([]);
  //var students=[];

  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://60efed10f587af00179d3b82.mockapi.io/api/students';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data); //setStudents(data)
      });
  }, [searchTerm]);

  /*
  const searchStudent = () => {
    console.log(searchTerm);
    console.log('students:');
    console.log(students);
    let result = null;
    if (searchTerm.length>0) {
      result = students.filter((student) => {
        let firstName = student.firstName.toLowerCase();
        return firstName.indexOf(searchTerm.toLowerCase()) == 0;
      });
    } else {
      result = students;
    }
    console.log(result);
    setData(result);
  };
  */
  return (
    <div className="container">
      <Link to="/useredit/new">
        <button>Add new</button>
      </Link>
      <h2>Danh sách sinh viên</h2>
      <div class="row">
        <div class="col-sm-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                // onClick={searchStudent}
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <StudentTable data={data} />

      {/* <table className="table">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mark</th>
        </tr>
        {student_list}
      </table> */}
    </div>
  );
}

export default App;
