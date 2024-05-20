import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const Lines = () => {
  const [contract, setContract] = useState();
  const [cycleNum, setCycleNum] = useState([0]);
  const [matrixId, setMatrixId] = useState([]);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // const matrix = async () => {
  //     // const myWallet = await wallet();
  //     return mContract;
  // };
  // contra()

  const searchHandler = async () => {
    const provider = new ethers.JsonRpcProvider(
      "https://rpc.testnet.fantom.network/"
    );
    const mContract = new ethers.Contract(address, abi, provider);
    setContract(mContract);
    console.log("mContract.LastIdUser---->", await mContract.LastIdUser());
    const contra = async () => {
      const newIds = [];
      for (let i = 0; i < 85; i++) {
        try {
          const res = await mContract.PositionToId(
            formData.address,
            +formData.cycle,
            +formData.select,
            i
          );
          newIds.push(res.toString());
          //   setMatrixId([...matrixId, res.toString()]);
        } catch (error) {
          console.log(error);
        }
      }
      console.log("newIds---->", newIds);
      setMatrixId([...newIds]);
    };
    contra();
  };
  const cycleSearchHandler = async () => {
    const provider = new ethers.JsonRpcProvider(
      "https://rpc.testnet.fantom.network/"
    );
    const mContract = new ethers.Contract(address, abi, provider);
    setContract(mContract);
    try {
      const res = await mContract.CurrentCycleNo(
        formData.address,
        +formData.select
      );
      setCycleNum((prev) => [...prev, parseInt(Number(res))]);
      console.log("res------>", parseInt(Number(res)));
      console.log("cycleNum------>", cycleNum);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="flex gap-3 justify-center">
        <div className="py-4 border min-w-80 rounded-lg px-5 ">
          <div className="mb-6 flex justify-center items-center gap-3">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              placeholder="Address..."
              onChange={handleChange}
              className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            />
            <button
              onClick={searchHandler}
              className="py-2 px-3 bg-black border border-teal-500 rounded-lg"
            >
              Search
            </button>
          </div>
          <div className="mb-5 flex items-center gap-4">
            <label
              htmlFor="cycle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cycle:
            </label>
            <input
              type="number"
              id="cycle"
              placeholder="Cycle..."
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            />
          </div>
          <select
            id="select"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          >
            <option>Select No</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
        <div className="p-3 border border-teal-500 rounded-lg">
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-400 p-2">
            Your Current Cycle
          </h2>
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl text-yellow-400 font-semibold p-2 text-center">
              {cycleNum[1] && cycleNum[1]}
            </p>
            <button
              onClick={cycleSearchHandler}
              className="py-2 px-3 bg-black border border-teal-500 rounded-lg"
            >
              Search Cycle
            </button>
          </div>
        </div>
      </div>
      <div className="px-2 py-2 mt-5 bg-gray-800 text-white text-sm rounded-md shadow-lg flex flex-col items-center justify-between p-24">
        {/* Head ID: */}
        <div>
          <div className="text-center">User Id : 0</div>
          {/* First ID  */}
          <div className="flex text-center mt-3">
            <div className=" z-10  px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
              1 = Id : {matrixId[1]}
              <div className="flex text-center">
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  5 = ID: {matrixId[5]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      21 = ID: {matrixId[21]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      37 = ID: {matrixId[37]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      53 = ID: {matrixId[53]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      69 = ID: {matrixId[69]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  9 = ID: {matrixId[9]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      25 = ID: {matrixId[25]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      41 = ID: {matrixId[41]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      57 = ID: {matrixId[57]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      73 = ID: {matrixId[73]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  13 = ID: {matrixId[13]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      29 = ID: {matrixId[29]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      45 = ID: {matrixId[45]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      61 = ID: {matrixId[61]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      77 = ID: {matrixId[77]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  17 = ID: {matrixId[17]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      33 = ID: {matrixId[33]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      49 = ID: {matrixId[49]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      65 = ID: {matrixId[65]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      81 = ID: {matrixId[81]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second ID */}
          <div className="flex text-center mt-3">
            <div className=" z-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
              2 = ID: {matrixId[2]}
              <div className="flex text-center">
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  6 = ID: {matrixId[6]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      22 = ID: {matrixId[22]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      38 = ID: {matrixId[38]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      54 = ID: {matrixId[54]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      70 = ID: {matrixId[70]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  10 = ID: {matrixId[10]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      26 = ID: {matrixId[26]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      42 = ID: {matrixId[42]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      58 = ID: {matrixId[58]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      74 = ID: {matrixId[74]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  14 = ID: {matrixId[14]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      30 = ID: {matrixId[30]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      46 = ID: {matrixId[46]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      62 = ID: {matrixId[62]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      78 = ID: {matrixId[78]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  18 = ID: {matrixId[18]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      34 = ID: {matrixId[34]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      50 = ID: {matrixId[50]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      66 = ID: {matrixId[66]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      82 = ID: {matrixId[82]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third ID */}
          <div className="flex text-center mt-3">
            <div className=" z-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
              3 = ID: {matrixId[3]}
              <div className="flex text-center">
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  7 = ID: {matrixId[7]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      23 = ID: {matrixId[23]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      39 = ID: {matrixId[39]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      55 = ID: {matrixId[55]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      71 = ID: {matrixId[71]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  11 = ID: {matrixId[11]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      27 = ID: {matrixId[27]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      43 = ID: {matrixId[43]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      59 = ID: {matrixId[59]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      75 = ID: {matrixId[75]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  15 = ID: {matrixId[15]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      31 = ID: {matrixId[31]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      47 = ID: {matrixId[47]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      63 = ID: {matrixId[63]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      79 = ID: {matrixId[79]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  19 = ID: {matrixId[19]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      35 = ID: {matrixId[35]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      51 = ID: {matrixId[51]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      67 = ID: {matrixId[67]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      83 = ID: {matrixId[83]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Forth ID  */}
          <div className="flex text-center mt-3">
            <div className=" z-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
              4 = ID: {matrixId[4]}
              <div className="flex text-center">
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  8 = ID: {matrixId[8]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      24 = ID: {matrixId[24]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      40 = ID: {matrixId[40]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      56 = ID: {matrixId[56]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      72 = ID: {matrixId[72]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  12 = ID: {matrixId[12]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      28 = ID: {matrixId[28]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      44 = ID: {matrixId[44]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      60 = ID: {matrixId[60]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      76 = ID: {matrixId[76]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  16 = ID: {matrixId[16]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      32 = ID: {matrixId[32]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      48 = ID: {matrixId[48]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      64 = ID: {matrixId[64]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      80 = ID: {matrixId[80]}
                    </div>
                  </div>
                </div>
                <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                  20 = ID: {matrixId[20]}
                  <div className="flex">
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      36 = ID: {matrixId[35]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      52 = ID: {matrixId[52]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      68 = ID: {matrixId[68]}
                    </div>
                    <div className=" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                      84 = ID: {matrixId[84]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lines;
export const address = "0xd47E52DEeE727380540823541E53C3C35331Ef13";
export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_Idx",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dai",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "AddUpgradeAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "AddressToId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_matrix",
        type: "uint256",
      },
    ],
    name: "CurrentCycleNo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EmergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "IdToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ref",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cycle",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_matrix",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "IdToPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "IsUserExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LAST_LEVEL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LastIdUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LastUserId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "MatrixRates",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "one_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "two_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "third_",
        type: "uint256",
      },
    ],
    name: "PositionCalculator",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ref",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "cycle",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_matrix",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_postion",
        type: "uint256",
      },
    ],
    name: "PositionToId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newUser",
        type: "address",
      },
      {
        internalType: "address",
        name: "_Ref",
        type: "address",
      },
    ],
    name: "Register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newUser",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_matrix",
        type: "uint256",
      },
    ],
    name: "Upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "Users",
    outputs: [
      {
        internalType: "uint256",
        name: "Id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "DirectRefs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ReinvestCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "Earnings",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "Amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "upgradeBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycleBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycle1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycle2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycle3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycle4",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycle5",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycle6",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycle7",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recycle8",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "DRef",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "withdrawFeeAmount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
