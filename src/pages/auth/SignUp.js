import React from "react";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SignUp = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [step, setSetep] = useState(0);

  useEffect(() => {
    console.log(params);
    setSetep(params.step);
  }, []);
  return (
    <>

      <div>{step}</div>
    </>
  );
};

export default SignUp;
