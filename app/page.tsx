"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [numbers, setNumbers] = useState<number[][]>([
    [9, 11, 17, 22, 30, 32, 36],
    [1, 10, 32, 25, 11, 4, 22],
  ]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState(
    "Generating lotto numbers(로또번호 생성중)...",
  );
  const [dots, setDots] = useState("...");

  const generateLottoNumbers = () => {
    console.log("Generating lotto numbers(로또번호 생성중)...");
    setIsAnimating(true);
  };

  return (
    <div
      className="min-h-screen bg-gray-900 p-4 sm:p-8 flex flex-col 
  items-center justify-center"
    >
      {/* 로또 번호 생성기 */}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-4xl font-bold
         text-gray-100 mb-4 sm:mb-8 text-center"
      >
        Lotto Number Generator(로또 번호 생성기)
      </motion.h1>
      {/* 로또 번호 세트 수 선택 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800 rounded-lg p-4 sm:p-6 
      shadow-lg mb-4 sm:mb-8 w-full max-w-md"
      >
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Lotto Number of Sets(생성할 로또 번호 세트 수):
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min={1}
            max={10}
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="shadow appearance-none 
          border bg-gray-700 border-gray-600 rounded          
          w-full px-3 py-2 text-gray-100 leading-tight mr-2           
          focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateLottoNumbers}
            className="bg-indigo-600 hover:bg-indigo-700
           text-white font-bold 
          py-2 px-4 rounded focus:outline-none focus:ring-2 
          focus:ring-blue-500"
          >
            Generate(생성)
          </motion.button>
        </div>
      </motion.div>
      {/* 로또 번호 생성 중 로딩 화면 또는 생성된 로또 번호 화면 */}
      <div className="w-full max-w-md text-white">
        {isAnimating ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg text-center"
          >
            <div className="flex justify-center mb-4 h-40">
              <motion.div
                className="w-4 h-4 bg-indigo-600 rounded-full mx-1"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                  delay: 0,
                }}
              />
            </div>

            <p className="text-center text-gray-400 font-medium mb-2">
              {loadingPhrase}
              <span className="inline-block w-8 text-left">{dots}</span>
            </p>
          </motion.div>
        ) : (
          <div>
            {numbers.map((numberSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-4 shadow-lg
                        flex justify-center space-x-2 mb-4"
              >
                <div className="flex flex-wrap justify-center gap-2">
                  {numberSet.slice(0, 6).map((num, i) => {
                    return (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: i * 0.1,
                        }}
                        className="w-10 h-10 rounded-full 
                      flex items-center justify-center text-white
                       font-bold text-lg bg-blue-500"
                      >
                        {num}
                      </motion.div>
                    );
                  })}
                  <span className="flex items-center text-gray-400 mx-1">
                    +
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.6,
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg bg-red-500"
                  >
                    {numberSet[6]}
                  </motion.div>
                </div>
                <p className="text-center text-gray-400 mt-2">
                  LottoNumber(당첨번호)
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
