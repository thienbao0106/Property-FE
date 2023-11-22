import axios from "axios";
import { useEffect, useState } from "react";
import ContractCard from "../components/ContractCard";
import { Link } from "react-router-dom";
import CreateContract from "./CreateContract";

const Contracts = () => {
  const [listContracts, setListContracts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const getContracts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/contracts`,
        {
          signal: controller.signal,
        }
      );

      console.log(response.status);
      if (response.status === 200 && response.data)
        setListContracts(response.data.contracts);
    };
    getContracts();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main className="h-screen space-y-5 px-4">
      <h1 className="text-center text-3xl font-bold mt-5">List of Contracts</h1>
      <div className="grid grid-cols-4 gap-5">
        {listContracts.map((contract) => (
          <ContractCard {...contract} key={contract.id} />
        ))}
      </div>
      <div className="flex h-fit justify-center items-center">
        <Link
          className="bg-subColor font-bold text-lg px-5 py-3 rounded-lg hover:bg-mainColor"
          to="/create"
        >
          Create New Contract
        </Link>
      </div>
    </main>
  );
};

export default Contracts;
