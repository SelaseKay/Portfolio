import { HStack, VStack, Text, Flex, Pressable, Image, Box, Spacer, ZStack, Center, Circle, Button, Heading } from "native-base"
import { useState } from "react"

export const Homepage = () => {
    return (
        <VStack
            flex={1}>
            <NavBar />
            <Header />
            <Footer />
        </VStack>
    )
}

const NavBar = () => {

    const Title = () => (
        <Text
            fontSize="lg"
            fontWeight="bold"
            color="black">
            Personal
        </Text>
    )

    const MenuItem = ({ item }) => {

        const [textColor, setTextColor] = useState("black")

        return (
            <Pressable
                onHoverIn={() => {
                    setTextColor("#F1C940")
                }}
                onHoverOut={() => {
                    setTextColor("black")
                }}
                onPressIn={() => {
                    setTextColor("#BD9E38")
                }}
                onPressOut={() => {
                    setTextColor("#F1C940")
                }}>
                <Text
                    fontSize="md"
                    fontWeight="medium"
                    color={textColor}>
                    {item}
                </Text>
            </Pressable>
        )
    }

    return (
        <HStack
            alignItems="center"
            p={["16px", "24px", "48px"]}>

            <Title />
            <HStack
                space="80px"
                ml="auto">
                <MenuItem
                    item="Home" />
                <MenuItem
                    item="About Us" />
                <MenuItem
                    item="Service" />
                <MenuItem
                    item="Contact Us" />
            </HStack>
        </HStack>
    )
}

const Header = () => {
    return (
        <Flex
            flexDirection="row"
            p={["16px", "24px", "48px"]}>
            <VStack
                flex={3}>
                <Text
                    fontWeight="bold"
                    fontSize={["3xl", "4xl", "5xl"]}
                    color="black">
                    Hy! I Am
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize={["4xl", "5xl", "6xl"]}
                    color="#EDBA0E">
                    Jude Kwashie
                </Text>
                <Text
                    fontSize="md"
                    color="black">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </VStack>
            <Spacer />
            <Box
                flexDirection="column"
                flex={2}>
                <Image
                    flex={1}
                    resizeMode="contain"
                    source={require('../assets/dummy_img.jfif')} />
            </Box>
        </Flex>
    )
}

const Footer = () => {
    return (
        <Flex
            mt={20}
            mx={10}
            flex={1}
            flexDirection={["column", "column", "column", "row", "row"]}>
            <VStack
                flex={8}
                height={300}>
                <AchievementCard
                    bg="#DCA69C"
                    bgText="Job Completed Successfully"
                    circleText="5.2k" />
                <Spacer h={20} />
                <AchievementCard
                    bg="#9DD2F0"
                    bgText="Award winner"
                    circleText="12" />
            </VStack>
            <Box flex={1} />
            <ServiceCard flex={8} />
            <Box flex={1} />
            <ServiceInfo flex={8} />
        </Flex>
    )
}

const AchievementCard = ({ bg, bgText, circleText }) => {
    return (
        <HStack
            flexDirection="row"
            alignItems="center"
            // ml={10}
            bg={bg}
            borderRadius={10}
            height={20}>
            <VStack
                zIndex={2}
                shadow={2}
                borderRadius={10}
                flex={1}
                mx={4}
                mt={-8}
                height={20}
                alignItems="center"
                bg="white">
                <Circle
                    mt={-10}
                    borderWidth={5}
                    borderColor={bg}
                    size={20}
                >
                    <Text
                        fontSize="md"
                        color="black"
                        fontWeight="bold">
                        {circleText}
                    </Text>
                </Circle>
                <Spacer />
                <Text
                    mb={2}
                    color="black"
                    fontSize="md">
                    {bgText}
                </Text>
            </VStack>
            <Box>

            </Box>
        </HStack>
    )
}

const ServiceCard = ({ flex }) => {
    return (
        <Box
            // ml={4}
            flexDirection="column"
            flex={flex}>
            <VStack flex={1}
                borderRadius={10}
                alignItems="center"
                bg="#9C6FE7" >
                <Heading
                    color="white">
                    Services
                </Heading>
                <Text
                    p = {8}
                    color="gray.300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </VStack>
        </Box>
    )
}

const ServiceInfo = ({ flex }) => {
    return (
        <VStack flex={flex}>
            <Text
                fontSize={["3xl", "4xl", "5xl"]}
                color="black"
                fontWeight="semibold">
                My awesome
            </Text>
            <Text
                fontSize={["3xl", "4xl", "5xl"]}
                color="#EDBA0E"
                fontWeight="semibold">
                services
            </Text>
            <Text
                fontSize="md"
                color="black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </Text>
            <Button
                width={300}
                mt={10}
                colorScheme = "amber"
                height="56px">
                Download Cv
            </Button>
        </VStack>
    )
}