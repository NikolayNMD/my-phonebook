import { ContactForm } from '../components/old/ContactForm';
import { Filter } from '../components/old/Filter';
import { ContactList } from '../components/old/ContactList';
import styled from 'styled-components';

const Contacts = () => {
  return (
    <Wrapper>
      <Container>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Phonebook</h1>
        <ContactForm />
        <h2 style={{ textAlign: 'center', color: 'white' }}>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 40px;
  margin: 10px;
  background-color: rgba(71, 176, 192, 0.7);
  border-radius: 5px;
`;

export default Contacts;
