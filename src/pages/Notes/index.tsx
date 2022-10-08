import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, NoteCard, Button, NoteCards } from "./styles";

const Notes: React.FC = () => {
  type noteType = {
    date: string;
    text: string;
    id: string;
  };

  const [notes, setNotes] = useState<noteType[]>([
    {
      id: "01",
      date: "11/09",
      text: "lorem pisum sit amet dor, lorem pisum sit amet dor, lorem pisum sit amet dor, lorem pisum sit amet dor",
    },
  ]);

  return (
    <Container>
      <NoteCards>
        {notes?.map((note) => (
          <Link key={note?.id} to={`/new-note?text=${note?.text}`}>
            <NoteCard>
              <h2>{note?.date}</h2>
              <p>{note?.text}</p>
            </NoteCard>
          </Link>
        ))}
      </NoteCards>

      <Button to="/new-note">
        <h4>Create a new note</h4>
      </Button>
    </Container>
  );
};

export default Notes;
