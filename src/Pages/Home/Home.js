import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import HeaderComponentMenu from "../../Components/HeaderComponents/HeaderComponents";
import MainAuth from "../../Components/Auth/MainAuth";
import {
  Container,
  MainContent,
  MarketInfoContainer,
  MarketInfoHeader,
  MarketInfoDescription,
  CryptoTable,
  CryptoTableHeader,
  CryptoTableRow,
  CryptoTableData,
  CryptoTableHeaderCell,
  CryptoSymbolContainer,
  CryptoLogo,
  CryptoName,
  CryptoSymbol,
} from "./homeStyle";

function Home() {
  const [isRegister, setIsRegister] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cryptoData, setCryptoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("Authorization");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
  
    const fetchCryptoData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/cryptodata/crypto-data?timestamp=${new Date().getTime()}`;
        console.log("Fetching data from:", apiUrl);
  
        const response = await fetch(apiUrl, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log("Response status:", response.status);
  
        const contentType = response.headers.get("content-type");
        console.log("Content-Type:", contentType);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log("Fetched crypto data:", data);
          setCryptoData(data);
        } else {
          const text = await response.text();
          console.log("Response text:", text);
          throw new Error("Response is not JSON");
        }
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };
  
    const interval = setInterval(fetchCryptoData, 60000);
    fetchCryptoData();
    return () => clearInterval(interval);
  }, []);
  
  const openModal = (isRegisterMode) => {
    setIsRegister(isRegisterMode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSuccess = (token) => {
    setIsAuthenticated(true);
    closeModal();
  };

  const handleRegisterSuccess = (token) => {
    setIsAuthenticated(true);
    closeModal();
  };

  const handleLogout = () => {
    Cookies.remove("Authorization");
    setIsAuthenticated(false);
    navigate('/');
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cryptoData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (indexOfLastItem < cryptoData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (indexOfFirstItem > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container>
      <HeaderComponentMenu
        handleLogout={handleLogout}
        openModal={openModal}
        isAuthenticated={isAuthenticated}
        isRegister={isRegister}
      />

      <MainContent>
        <MarketInfoContainer>
          <MarketInfoHeader>
            Today's Cryptocurrency Prices by Market Cap
          </MarketInfoHeader>
          <MarketInfoDescription>
            The global crypto market cap is $2.12T, a 2.62% increase over the last day. Read More
          </MarketInfoDescription>
          <CryptoTable>
            <CryptoTableHeader>
              <tr>
                <CryptoTableHeaderCell>#</CryptoTableHeaderCell>
                <CryptoTableHeaderCell>Name</CryptoTableHeaderCell>
                <CryptoTableHeaderCell>Price (24h)</CryptoTableHeaderCell>
                <CryptoTableHeaderCell>Volume (24h)</CryptoTableHeaderCell>
                <CryptoTableHeaderCell>Market Cap</CryptoTableHeaderCell>
              </tr>
            </CryptoTableHeader>
            <tbody>
              {cryptoData.length > 0 ? (
                currentItems
                  .filter((crypto) => crypto?.quote?.usd?.price && crypto?.quote?.usd?.market_Cap) // Filtering out coins without a price or market_Cap
                  .map((crypto, index) => {
                    const price = crypto?.quote?.usd?.price;
                    const volume24h = crypto?.quote?.usd?.volume_24h;
                    const marketCap = crypto?.quote?.usd?.market_Cap;

                    const formattedPrice = price ? price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }) : 'N/A';

                    const formattedVolume24h = volume24h ? volume24h.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }) : 'N/A';

                    const formattedMarketCap = marketCap ? marketCap.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }) : 'N/A';

                    return (
                      <CryptoTableRow key={crypto.id || index}>
                        <CryptoTableData>{indexOfFirstItem + index + 1}</CryptoTableData>
                        <CryptoTableData>
                          <CryptoSymbolContainer>
                            <CryptoLogo
                              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`}
                              alt={`${crypto.symbol} logo`}
                            />
                            <CryptoName>{crypto.name}</CryptoName>
                            <CryptoSymbol>{crypto.symbol}</CryptoSymbol>
                          </CryptoSymbolContainer>
                        </CryptoTableData>
                        <CryptoTableData>{formattedPrice}</CryptoTableData>
                        <CryptoTableData>{formattedVolume24h}</CryptoTableData>
                        <CryptoTableData>{formattedMarketCap}</CryptoTableData>
                      </CryptoTableRow>
                    );
                  })
              ) : (
                <tr>
                  <CryptoTableData colSpan="5">No data available</CryptoTableData>
                </tr>
              )}
            </tbody>
          </CryptoTable>
          <div>
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <button onClick={nextPage} disabled={indexOfLastItem >= cryptoData.length}>Next</button>
          </div>
        </MarketInfoContainer>
      </MainContent>

      <MainAuth
        isRegister={isRegister}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        handleLoginSuccess={handleLoginSuccess}
        handleRegisterSuccess={handleRegisterSuccess}
      />
    </Container>
  );
}

export default Home;
