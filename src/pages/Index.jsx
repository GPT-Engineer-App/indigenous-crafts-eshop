import { Box, Container, Flex, Grid, Heading, Image, Text, VStack, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Artesanatos Indígenas
        </Heading>
        <Text textAlign="center" fontSize="xl">
          Descubra e adquira peças únicas feitas à mão por comunidades indígenas.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box boxShadow="md" p="6" rounded="md" bg="white">
            <Image src="https://images.unsplash.com/photo-1617694820985-a5476fe22722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3JhZnRzfGVufDB8fHx8MTcxNDg3MDQyMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Artesanato Indígena" />
            <Text fontWeight="bold" mt={2}>
              Cesto Tecido
            </Text>
            <Text>R$120,00</Text>
          </Box>
          <Box boxShadow="md" p="6" rounded="md" bg="white">
            <Image src="https://images.unsplash.com/photo-1504203254088-9fa5c8dc55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwbmVja2xhY2V8ZW58MHx8fHwxNzE0ODcwNDIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Colar Indígena" />
            <Text fontWeight="bold" mt={2}>
              Colar de Sementes
            </Text>
            <Text>R$75,00</Text>
          </Box>
          <Box boxShadow="md" p="6" rounded="md" bg="white">
            <Image src="https://images.unsplash.com/photo-1678082309214-3b2941e387f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwcG90dGVyeXxlbnwwfHx8fDE3MTQ4NzA0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cerâmica Indígena" />
            <Text fontWeight="bold" mt={2}>
              Vaso de Cerâmica
            </Text>
            <Text>R$150,00</Text>
          </Box>
        </Grid>
        <Flex justifyContent="center" w="full">
          <Link href="#" p={2}>
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
          <Link href="#" p={2}>
            <Icon as={FaFacebook} w={6} h={6} />
          </Link>
          <Link href="#" p={2}>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="mailto:info@artesanatoindigena.com" p={2}>
            <Icon as={FaEnvelope} w={6} h={6} />
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
