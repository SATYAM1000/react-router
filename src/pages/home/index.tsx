import { useOutletContext } from "react-router-dom";

interface IOutletResult {
  title: string;
}
const Home = () => {
  const data = useOutletContext() as IOutletResult;
  return (
    <div>
      <h1>Home</h1>
      {data.title}
    </div>
  );
};

export default Home;
