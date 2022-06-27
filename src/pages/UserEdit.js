import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserEdit = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://60efed10f587af00179d3b82.mockapi.io/api/students/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //change date
        var date = new Date(data.dob);
        data.dob = date.toISOString().slice(0, 10);
        console.log(data.dob);
        setStudent(data); //setStudents(data)
      });
  }, []);

  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...student };
    data[name] = value;

    if (name == 'gender') {
      data[name] = str2bool(value);
      console.log('gender');
      console.log(data[name]);
    }

    console.log(data);
    setStudent(data);
  };
  const handleChangeHome = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...student };
    data[name] = value;
  };

  const saveUser = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    };
    fetch(
      'https://60efed10f587af00179d3b82.mockapi.io/api/students/' + student.id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        //var date = new Date(data.dob);
        //data.dob = date.getTime();

        console.log(data);
        navigate(-1);
      });
  };

  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
  };

  return (
    <>
      {student != null ? (
        <div class="container bootstrap snippets bootdey">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-6">
                <strong>EDIT Your Information</strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Your Identificacion</strong>
                        </td>
                        <td class="text-primary">{student.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>First Name</strong>
                        </td>
                        {/* <td class="text-primary">{student.firstName}</td> */}
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.firstName}
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
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
                          <strong>Home address</strong>
                        </td>
                        <td class="text-primary">
                          {student.home.address}
                          <p />
                          {student.home.city}
                          <p />
                          {student.home.country}
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

                      <tr>
                        <td>
                          <strong>Date Of Birth</strong>
                        </td>
                        <td>
                          <input
                            type="date"
                            id="birthday"
                            name="dob"
                            value={student.dob}
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Bio</strong>
                        </td>
                        <td>
                          <textarea
                            type="text"
                            name="bio"
                            className="form-control"
                            value={student.bio}
                            onChange={(e) => handleChange(e)}
                          ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Gender</strong>
                        </td>
                        <td>
                          <div>
                            <input
                              type="radio"
                              value="false"
                              checked={student.gender == false}
                              name="gender"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                            Male
                            <input
                              type="radio"
                              value="true"
                              checked={student.gender == true}
                              name="gender"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                            Female
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => saveUser()}
                    >
                      Save
                    </button>
                    <span> </span>
                    <Link to="/">
                      <button type="button" class="btn btn-secondary">
                        Cancel
                      </button>
                    </Link>
                  </div>
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

export default UserEdit;
