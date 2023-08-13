// lib
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const viewProductClicked = () => {
    navigate("/product");
  };
  return (
    <div className="flex flex-1 py-6 px-2 xl:px-0 gap-2 flex-col">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Innoloft</h1>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo purus at mauris fringilla, eu auctor dui feugiat.
      </p>
      <button
        onClick={viewProductClicked}
        className="mt-4 self-start bg-primary hover:bg-white text-white hover:text-primary hover:border hover:border-primary font-semibold py-2 px-4 rounded"
      >
        View Product
      </button>
    </div>
  );
};

export default Home;
