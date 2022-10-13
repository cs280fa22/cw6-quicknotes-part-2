import PropTypes from "prop-types";
import { Accordion, ActionIcon, Box } from '@mantine/core';
import { IconTrashX } from '@tabler/icons';

function AccordionControl(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      <ActionIcon size="lg">
        <IconTrashX size={16} />
      </ActionIcon>
    </Box>
  );
}

function Note(props) {
  const { note } = props;

  return (
    <Accordion.Item value={note.title}>
      <AccordionControl>{note.title}</AccordionControl>
      <Accordion.Panel>{note.text}</Accordion.Panel>
    </Accordion.Item>
  );
}

export default Note;

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
