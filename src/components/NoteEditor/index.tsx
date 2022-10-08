import ReactQuill from "react-quill";

// import EditorToolbar, { modules, formats } from '../components/EditorToolbar';
import "react-quill/dist/quill.snow.css";
import { Container } from "./styles";

type NoteEditorTypes = {
  handleEditorChange: Function;
  body: String;
};

const EditorBlog = ({ handleEditorChange, body }: NoteEditorTypes) => {
  return (
    <Container className="text-editor">
      {/* <EditorToolbar /> */}
      <ReactQuill
        theme="snow"
        value={String(body)}
        onChange={handleEditorChange}
        placeholder="Inspire os leitores com o seu artigo!"
        // modules={modules}
        // formats={formats}
      />
    </Container>
  );
};

export default EditorBlog;
