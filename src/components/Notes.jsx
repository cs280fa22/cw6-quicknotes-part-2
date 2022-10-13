import Note from "./Note";
import PropTypes from "prop-types";
import { Accordion } from "@mantine/core";

function Notes(props) {
  const { notes, query } = props;

  return (
    <Accordion chevronPosition="left">
      {notes
        .filter(
          (note) => note.title.includes(query) || note.text.includes(query)
        )
        .map((note, index) => (
          <Note key={index} note={note} />
        ))}
    </Accordion>
  );
}

export default Notes;

Notes.propTypes = {
  query: PropTypes.string,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
