import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Search from "./components/Search";
import Notes from "./components/Notes";
import { MantineProvider, Container } from "@mantine/core";

function App() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fakeNotes = [];
    for (let index = 0; index < 10; index++) {
      fakeNotes.push({
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraph(),
      });
    }
    setNotes(fakeNotes);
  }, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <Search query={query} setQuery={setQuery}/>
        <Notes notes={notes} query={query}/>
      </Container>
    </MantineProvider>
  );
}

export default App;
