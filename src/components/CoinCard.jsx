import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>

    <VStack
      w={"52"}   // width
      shadow={"lg"} // shadow for 3D feel
      p={"8"} // padding
      borderRadius={"lg"} // rounded corners
      transition={"all 0.3s"} // smooth over animation
      m={"4"} // margin
      css={{
        "&:hover": {
          transform: "scale(1.1)", //zoom on hover
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />


      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);

export default CoinCard;

// Link to={/coin/${id}} -	Navigate to details page
// VStack -	Card layout
// Image -	Coin logo
// Heading -	Coin symbol
// Text -	Name and price
// Hover effect -	Card zooms on hover

