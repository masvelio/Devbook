import * as React from 'react';
import {
  Box,
  Flex,
  Text,
  Icon,
  Input,
  Stack,
  Button,
  Avatar,
  Select,
  chakra,
  Heading,
  Textarea,
  GridItem,
  FormLabel,
  SimpleGrid,
  InputGroup,
  FormControl,
  InputLeftAddon,
  FormHelperText,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUser, FaGithub, FaLinkedin } from 'react-icons/fa';

import countries from '../../utils/constants/countries';
import countryToFlag from '../../utils/countryToFlag';
import technologies from '../../utils/constants/technologies';
import MultiSelect from '../Multiselect';

const ProfileForm = () => (
  <>
    <Box bg={['white', 'gray.50']} p={[0, 10]}>
      {/* ==== Personal information section ==== */}
      <Box>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Personal Information
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Start completing your profile by providing basic information
                about yourself.
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form shadow="base" rounded={[null, 'md']}>
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="firstName"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      First name
                    </FormLabel>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="lastName"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Last name
                    </FormLabel>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6} id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="shortBio"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Short Bio
                    </FormLabel>
                    <Textarea
                      placeholder="Write here a few sentences about your achievements or motivation to work. This text will be displayed as a summary on your profile."
                      mt={1}
                      rows={6}
                      shadow="sm"
                      id="shortBio"
                      name="shortBio"
                      focusBorderColor="blue.400"
                      fontSize={{ sm: 'sm' }}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="country"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Country
                    </FormLabel>
                    <Select
                      id="country"
                      name="country"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      {countries.map((country) => (
                        <option key={country.code}>
                          {countryToFlag(country.code)} {country.label}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="photoURL"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Photo
                    </FormLabel>
                    <Flex
                      direction={['column', 'row']}
                      alignItems="center"
                      mt={1}
                    >
                      <Avatar
                        mr="6"
                        mb={[4, 0]}
                        boxSize={16}
                        bg={useColorModeValue('gray.100', 'gray.800')}
                        icon={
                          <Icon
                            as={FaUser}
                            boxSize={10}
                            mt={1}
                            rounded="full"
                            color={useColorModeValue('gray.300', 'gray.700')}
                          />
                        }
                      />
                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg={useColorModeValue('gray.50', 'gray.800')}
                          color={useColorModeValue('gray.500', 'gay.50')}
                          rounded="md"
                        >
                          https://
                        </InputLeftAddon>
                        <Input
                          type="text"
                          placeholder="www.example.com"
                          id="photoURL"
                          name="photoURL"
                          focusBorderColor="blue.400"
                          rounded="md"
                        />
                      </InputGroup>
                    </Flex>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="blue"
                  _focus={{ shadow: '' }}
                  fontWeight="md"
                >
                  Save
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box visibility={{ base: 'hidden', sm: 'visible' }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
          />
        </Box>
      </Box>

      {/* ==== Work Experience section ==== */}
      <Box>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Work Experience Information
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Enrich your profile by sharing information about your work
                experience and the technologies you specialize in.
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form shadow="base" rounded={[null, 'md']}>
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="jobPosition"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Job position
                    </FormLabel>
                    <Input
                      type="text"
                      name="jobPosition"
                      id="jobPosition"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="yearsOfExp"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Years Of Experience
                    </FormLabel>
                    <Input
                      min={0}
                      step={0.1}
                      type="number"
                      name="yearsOfExp"
                      id="yearsOfExp"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6} id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="superPowers"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Super Powers
                    </FormLabel>
                    <MultiSelect
                      id="superPowers"
                      name="superPowers"
                      placeholder="Select Super Powers"
                      isMulti
                      options={technologies.map((technology) => ({
                        label: technology,
                        value: technology,
                      }))}
                    />
                    <FormHelperText>
                      Choose up to two technologies that you are a master at.
                    </FormHelperText>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6} id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="technologies"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Technologies
                    </FormLabel>
                    <MultiSelect
                      placeholder="Select technologies"
                      isMulti
                      id="technologies"
                      name="technologies"
                      options={technologies.map((technology) => ({
                        label: technology,
                        value: technology,
                      }))}
                    />
                    <FormHelperText>
                      Choose the few remaining technologies you are comfortable
                      to work with.
                    </FormHelperText>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="blue"
                  _focus={{ shadow: '' }}
                  fontWeight="md"
                >
                  Save
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box visibility={{ base: 'hidden', sm: 'visible' }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
          />
        </Box>
      </Box>

      {/* ==== Social Media section ==== */}
      <Box>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Social Media Information
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Share your social media so you can be contacted more easily.
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form shadow="base" rounded={[null, 'md']}>
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="githubUrl"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Github URL
                    </FormLabel>
                    <InputGroup size="sm">
                      <InputLeftAddon
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        color={useColorModeValue('gray.500', 'gay.50')}
                        rounded="md"
                      >
                        <Icon
                          as={FaGithub}
                          boxSize={4}
                          mt={0}
                          rounded="full"
                          color={useColorModeValue('gray.400', 'gray.700')}
                        />
                      </InputLeftAddon>
                      <Input
                        type="text"
                        id="githubUrl"
                        name="githubUrl"
                        placeholder="https://github.com/your_profile"
                        focusBorderColor="blue.400"
                        rounded="md"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="linkedInUrl"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      LinkedIn URL
                    </FormLabel>
                    <InputGroup size="sm">
                      <InputLeftAddon
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        color={useColorModeValue('gray.500', 'gay.50')}
                        rounded="md"
                      >
                        <Icon
                          as={FaLinkedin}
                          boxSize={4}
                          mt={0}
                          rounded="full"
                          color={useColorModeValue('gray.400', 'gray.700')}
                        />
                      </InputLeftAddon>
                      <Input
                        type="text"
                        id="linkedInUrl"
                        name="linkedInUrl"
                        placeholder="https://www.linkedin.com/in/your_profile/"
                        focusBorderColor="blue.400"
                        rounded="md"
                      />
                    </InputGroup>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="blue"
                  _focus={{ shadow: '' }}
                  fontWeight="md"
                >
                  Save
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  </>
);

export default ProfileForm;
