import { Heading } from "components/Heading/Heading";
import { Book } from "components/Book/Book";

export const App = props => {
 
  return (
    <div>
      <Heading>React lesson 2, CSS</Heading>
      <ul>
        <Book 
          title="To Kill a Mockingbird"
          author="Harper Lee"
          year={1960}
          genre="novel"
          favourite={false}
          cover="https://images.gr-assets.com/books/1361975680l/2657.jpg"
        />
      </ul>
    </div>
  );
};

