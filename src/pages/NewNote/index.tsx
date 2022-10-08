import React, { useEffect, useState } from "react";
import NoteEditor from "../../components/NoteEditor";
import { useSearchParams } from "react-router-dom";

import { Container, Button } from "./styles";

const NewNote: React.FC = () => {
  const [body, setBody] = useState<String>("");
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    let text = urlParams.get("text");

    text && setBody(String(text));
  }, []);

  const handleEditorChange = (value: any) => {
    setBody(value);
  };

  const handleSave = () => {
    console.log(body);
  };

  return (
    <Container>
      <NoteEditor body={body} handleEditorChange={handleEditorChange} />

      <Button onClick={handleSave}>Salvar</Button>
    </Container>
  );
};

export default NewNote;
