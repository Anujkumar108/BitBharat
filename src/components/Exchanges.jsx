// 🎯 Motive of This Page
// This page shows a list of top crypto exchanges (like Binance, Coinbase, etc.)
// It fetches data from CoinGecko API and displays each exchange in a beautiful card format.

// 🔁 Fetches exchange data from internet

// 🧾 Displays name, logo, rank

// 📦 Uses cards for clean layout

// 🌀 Shows loader while fetching

// 🚨 Shows error if data fetch fails



// Exhanges listing page

// useEffect → API call after component loads
// useState → hold data, loading, and error states
// axios → HTTP library for fetching data
// server → base API URL
// Chakra UI components for layout/design
// Loader → spinner for loading screen
// ErrorComponent → UI in case of error
import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";


const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]); // stores API from list
  const [loading, setLoading] = useState(true); // when the data is true
  const [error, setError] = useState(false); //when error shows, it might be true


  // it ensures when
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);



  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />; // if api call is fail than  shows ErrorComponent
  return (

    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
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
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;


// useEffect -	API call on page load
// useState -	Manage data, loading & error
// Loader -	Spinner while loading
// ErrorComponent -	Shown on API failure
// ExchangeCard -	Beautiful cards for each exchange

