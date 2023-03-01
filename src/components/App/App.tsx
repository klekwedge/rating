import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Thanks from '../Thanks/Thanks';
import Rating from '../Rating/Rating';

function App() {
  const [star, setStar] = useState(5);
  const [isSubmit, setIsSubmit] = useState(false);

  return <Box>{isSubmit ? <Thanks star={star}/> : <Rating submit={setIsSubmit} changeStar={setStar} star={star}/>}</Box>;
}

export default App;
