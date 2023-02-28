import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Flex, Heading, Text, Image } from '@chakra-ui/react';

// ## Colors

// ### Primary

// - Orange: hsl(25, 97%, 53%)

// ### Neutral

// - White: hsl(0, 0%, 100%)
// - Light Grey: hsl(217, 12%, 63%)
// - Medium Grey: hsl(216, 12%, 54%)
// - Dark Blue: hsl(213, 19%, 18%)
// - Very Dark Blue: hsl(216, 12%, 8%)

function App() {
  const [star, setStar] = useState(0);
  const [grades, setGrades] = useState([1, 2, 3, 4, 5]);

  return (
    <Flex flexDirection="column" backgroundColor="hsl(213, 19%, 18%)" p="30px" borderRadius="20px">
      <Image
        src="/public/images/icon-star.svg"
        w="15px"
        h="15px"
        mb="20px"
        backgroundColor="#20303a"
        p="8px"
        borderRadius="50%"
        boxShadow="black 0px 0px 0px 1px"
      />
      <Heading as="h1" fontSize="20px" fontWeight="700" color="white" mb="0px">
        How did we do?
      </Heading>
      <Text as="p" color="hsl(217, 12%, 63%)" fontSize="15px" maxW="330px" lineHeight="150%">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </Text>
      <Flex gap="8px" alignItems="center" mb="20px">
        {grades.map((item) => (
          <Button
            key={uuidv4()}
            onClick={() => setStar(item)}
            borderRadius="50%"
            p="10px 15px"
            outline="none"
            border="none"
            transition="all 0.5s ease"
            cursor="pointer"
            color="white"
            backgroundColor={star === item ? 'hsl(25, 97%, 53%)' : 'hsl(216, 12%, 54%)'}
            _hover={{
              backgroundColor: star === item ? '' : 'hsl(217, 12%, 63%)',
            }}
          >
            {item}
          </Button>
        ))}
      </Flex>
      <Button
        textTransform="uppercase"
        background="hsl(25, 97%, 53%)"
        outline="none"
        border="none"
        p="8px"
        color="white"
        borderRadius="30px"
        cursor="pointer"
        transition="all 0.5s ease"
        _active={{
          color: 'hsl(25, 97%, 53%)',
          background: 'white',
        }}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default App;
