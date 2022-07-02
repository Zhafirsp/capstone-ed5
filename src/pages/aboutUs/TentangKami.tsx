import React from 'react';
import '../../App.css';
import {
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  SimpleGrid,
  ListItem,
  UnorderedList,
  Stat,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

interface StatsCardProps {
  stat: string;
}

function StatsCard(props: StatsCardProps) {
  const { stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatNumber fontSize={'1xl'} fontWeight={'small'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}


const TentangKami = () => {

  return (
    <div className='tentangkami'>
      <Box minH="100vh" py={20}>
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={20}>
            <Stack spacing={4}>
              <Heading
                lineHeight={1.1}
                fontWeight={800}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                Tentang Kami.
              </Heading>
              <br />
              <Heading
                color={'#7ed4d2'}
                fontWeight={400}
                fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
              >
                Produk digital untuk anak
              </Heading>
              <Text>
                Dengan perkembangan zaman yang pesat apalagi di bidang teknologi membuat anak-anak semakin meninggalkan buku dan semakin berpegang kepada alat-alat elektronik yang membantu mereka dalam segala hal namun dengan pesatnya perkembangan teknologi harus dibarengi juga dengan meningkatnya literasi dengan itu teknologi bisa dikendalikan dengan baik sesuai fungsinya, aplikasi ini merupakan aplikasi yang dibuat berdasarkan minimnya tingkat literasi di Indonesia dan semakin sedikit buku baca yang membuat anak-anak tertarik untuk melakukan literasi dengan adanya aplikasi ini yang dilengkapi fitur yang terdapat didalamnya juga difungsikan untuk anak-anak mempunyai minat dalam membaca, menulis dan berhitung dengan fitur yang interaktif dan mudah untuk dipahami anak-anak dan aplikasi ini menyediakan tahapan anak-anak untuk membaca, menulis dan berhitung sehingga hal ini bisa meningkatkan literasi sejak dini dan pembelajaran pun akan dibagi sesuai dengan umur pengguna agar sesuai dengan porsinya
              </Text>
            </Stack>
            <Flex>
              <Image
                rounded={"2xl"}
                alt={"feature image"}
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                objectFit={"cover"}
              />
            </Flex>
            <Box bg="#f6f8fd" p="5" borderRadius="2xl">
              <Heading size="md" mb="6">
                Tujuan Kami
              </Heading>
              <UnorderedList>
                <ListItem>
                  Menciptakan dan mengembangkan budi pekerti yang baik.
                </ListItem>
                <ListItem>
                  Menciptakan budaya membaca di sekolah dan masyarakat.
                </ListItem>
                <ListItem>
                  Meningkatkan pengetahuan dengan membaca berbagai macam informasi bermanfaat secara digital.
                </ListItem>
                <ListItem>
                  Meningkatkan kepahaman anak terhadap suatu bacaan.
                </ListItem>
                <ListItem>
                  Membuat seseorang bisa berpikir kritis.
                </ListItem>
                <ListItem>
                  Memperkuat nilai kepribadian.
                </ListItem>
                <Heading size="md" mb="6" mt={25}>
                  Kredit
                </Heading>
                <UnorderedList>
                  <ListItem>
                    unsplash.com
                  </ListItem>
                  <ListItem>
                    popmama.com
                  </ListItem>
                  <ListItem>
                    kopat_animation
                  </ListItem>
                </UnorderedList>
              </UnorderedList>
            </Box>
            <Box maxW="8xl" pt={5} px={{ base: 12, sm: 12, md: 8, lg: 1 }}>
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 5, lg: 8 }} textAlign={'center'}>
                <Heading size="md" mb="6" mt={25}>
                  Manfaat
                </Heading>
                <StatsCard stat={'Meningkatkan keinginan membaca anak'} />
                <StatsCard stat={'Menambah wawasan anak'} />
                <StatsCard stat={'Mempertajam diri dalam menangkap suatu informasi dari sebuah bacaan'} />
              </SimpleGrid>
            </Box>

          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}

export default TentangKami;
