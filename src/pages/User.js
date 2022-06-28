import React from 'react';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const User = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://60efed10f587af00179d3b82.mockapi.io/api/students/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var date = new Date(data.dob);
        data.dob = date;

        setStudent(data); //setStudents(data)
      });
  }, []);

  const getDateFormat = () => {
    return student.dob.toLocaleDateString();
  };

  return (
    <>
      {student != null ? (
        <div class="container bootstrap snippets bootdey">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-6">
                <strong>Information</strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Identificacion</strong>
                        </td>
                        <td class="text-primary">{student.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>First Name</strong>
                        </td>
                        <td class="text-primary">{student.firstName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Lastname</strong>
                        </td>
                        <td class="text-primary">{student.lastName}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Email</strong>
                        </td>
                        <td class="text-primary">{student.email}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Date of Birth</strong>
                        </td>
                        <td class="text-primary">
                          {() => getDateFormat(student.dob)}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Picture</strong>
                        </td>
                        <td class="text-primary">
                          <img src={student.picture} className="img-circle" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default User;
