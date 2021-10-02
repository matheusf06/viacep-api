import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import axios from "axios";

function Content() {
  const [cep, setCep] = useState("01001000");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://viacep.com.br/ws/" + cep + "/json/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cep]);

  function handleCep({ target }) {
    setCep(target.value);
  }

  return <Card cep={cep} handleCep={handleCep} data={data} />;
}

export default Content;
