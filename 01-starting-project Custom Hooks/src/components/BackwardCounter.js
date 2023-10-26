import Card from './Card';
import Usecounter from '../Hooks/use-counter';

const BackwardCounter = () => {
  const counter=Usecounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
