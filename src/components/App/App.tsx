import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Thanks from '../Thanks/Thanks';
import Rating from '../Rating/Rating';

function App() {
  const [isSubmit, setIsSubmit] = useState(false);

  return <Box>{isSubmit ? <Thanks /> : <Rating submit={setIsSubmit} />}</Box>;
}

export default App;
