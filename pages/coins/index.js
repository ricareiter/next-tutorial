import axios from "axios";

const CoinList = ({ coinData }) => {
  return (
    <div>
      <h1>Coin List</h1>
      <div>
        {coinData.coins.map((coin) => {
          return (
            <div>
              <h2>{coin.name}</h2>
              <img src={coin.icon} />
              <p>{coin.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};
export default CoinList;
