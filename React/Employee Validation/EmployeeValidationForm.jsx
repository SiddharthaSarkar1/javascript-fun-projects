import React, { useEffect, useState } from "react";

function EmployeeValidationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [empID, setEmpID] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    // Name validation
    const nameRegex = /^[a-zA-Z\s]{4,}$/;
    if (!nameRegex.test(name)) {
      newErrors.name = "Name must be at least 4 characters long and only contain letters and spaces."
    }

    //Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Email must be a valid email address."
    }

    // Employee ID validation
    const empIDRegex = /^\d{6}$/;
    if (!empIDRegex.test(empID)) {
      newErrors.empID = "Employee ID must be exactly 6 digits."
    }

    // Joining date validation
    const today = new Date("2025-03-12");
    const selectedDate = new Date(joinDate);
    if (!joinDate || selectedDate > today) {
      newErrors.joinDate = "Joining Date cannot be in the future."
    }
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }

  useEffect(() => {
    validateForm();
  }, [email, name, empID, joinDate])

  function handleSubmit() {
    if (isFormValid) {
      setName("");
      setEmail("");
      setEmpID("");
      setJoinDate("");
    }
  }

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error mt-2">{errors.name}</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error mt-2">{errors.email}</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={empID}
          placeholder="Employee ID"
          onChange={(e) => setEmpID(e.target.value)}
        />
        {errors.empID && <p className="error mt-2">{errors.empID}</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joining date"
          value={joinDate}
          placeholder="Joining Date"
          onChange={(e) => setJoinDate(e.target.value)}
        />
        {errors.joinDate && <p className="error mt-2">{errors.joinDate}</p>}
      </div>
      <button data-testid="submit-btn" type="submit" disabled={isFormValid === false} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
