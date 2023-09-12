import { Button } from 'components/Button';

const buttons = [
  {
    id: '1',
    variant: 'red',
    children: 'Some text from red button',
  },
  {
    id: '2',
    variant: 'yellow',
    children: 'Some text from yellow button',
  },
  {
    id: '3',
    variant: 'blue',
    children: 'Some text from blue button',
  },
];

export const App = props => {
  return (
    <div>
      <h1>React homework template</h1>
      <div>
        {buttons.map(buttonProperties => {
          return (
            <Button key={buttonProperties.id} variant={buttonProperties.variant}>
              {buttonProperties.children}
            </Button>
          );
        })}

        {/* <Button discount={true} >
          Some text
        </Button>
        <Button buttonNumber="#14">Some text</Button>
        <Button variant="blue">Some text</Button>
        <Button variant="yellow" discount={true}>
          Some text 3
        </Button> */}
      </div>
    </div>
  );
};
