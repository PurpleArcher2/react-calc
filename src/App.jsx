import "./App.css";
import moon from "./assets/moon.png";
import sun from "./assets/sun.png";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  // This is for themes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const clickActivityLight = () => {
    setTheme("light");
  };

  const clickActivityDark = () => {
    setTheme("dark");
  };

  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  // This is for calculations;

  useEffect(() => {
    if (number === "RESET") {
      setNumber("");
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);

    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, []);

  const detectKeyDown = (e) => {
    if (
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "9" ||
      e.key === "0" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "*" ||
      e.key === "/"
    ) {
      setNumber((prevNumber) => prevNumber + e.key);
    } else if (e.key === "Enter") {
      setNumber(eval(number));
    } else if (e.key === "Backspace") {
      if (number.length > 0) setNumber(number.slice(0, -1));
    }
  };

  return (
    <>
      <main className="font-Spartan mt-40 ">
        <div className="flex justify-center gap-40 phone1:gap-14">
          <h1 className="text-5xl text-dark-grayish-blue dark:text-dark-grayish-blue">
            calc
          </h1>

          <div className="flex gap-4">
            <div className="self-center">
              <h6 className="text-dark-grayish-blue dark:text-dark-grayish-blue">
                THEME
              </h6>
            </div>
            <div className="self-center flex gap-4 bg-desaturated-blue-result rounded-lg px-2 py-1">
              <img src={moon} className="h-4 w-4" alt="" />
              <input
                type="radio"
                id="theme1"
                name="theme"
                className="accent-equalRed border-2 appearance-none rounded-lg transition-all checked:bg-equalRed self-center w-3 h-3"
                checked={theme === "dark"}
                onClick={clickActivityDark}
              />
              <img src={sun} className="h-4 w-4" alt="" />
              <input
                type="radio"
                id="theme2"
                className="accent-equalRed border-2 appearance-none rounded-lg transition-all self-center checked:bg-equalRed w-3 h-3"
                name="theme"
                checked={theme === "light"}
                onClick={clickActivityLight}
              />
            </div>
          </div>
        </div>

        <div className="m-auto text-right w-1/3 py-3 pr-3 mb-5 rounded-lg bg-desaturated-blue-result text-dark-grayish-blue text-3xl dark:bg-screen-white ipad1:w-4/5">
          <input
            readOnly
            disabled
            value={result}
            type="text"
            className=" bg-desaturated-blue-result text-dark-grayish-blue text-3xl text-right w-full dark:bg-screen-white"
          />

          <input
            disabled
            type="text"
            className=" bg-desaturated-blue-result text-dark-grayish-blue text-3xl text-right w-full dark:bg-screen-white"
            value={number}
            readOnly
          />
        </div>

        <section className=" bg-main-screen-white w-1/3 m-auto text-dark-blue-key px-5 py-10 rounded-md ipad1:w-3/4 ">
          <div className="flex flex-wrap text-3xl justify-center gap-3 font-bold box-border w-full text-center">
            <button
              value="7"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg text-center bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)] transition-all active:translate-y-0.5"
            >
              7
            </button>
            <button
              value="8"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              8
            </button>
            <button
              value="9"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              9
            </button>
            <button
              value="DEL"
              onClick={(e) => setNumber(number.slice(0, -1))}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 text-lg rounded-lg bg-dark-cyan-del text-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(224,_28%,_35%)]  transition-all active:translate-y-0.5"
            >
              DEL
            </button>
            <button
              value="4"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              4
            </button>
            <button
              value="5"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              5
            </button>
            <button
              value="6"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20  desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              6
            </button>
            <button
              value="+"
              onClick={(e) => setNumber(number + e.target.value)}
              className="w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              +
            </button>
            <button
              value="1"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              1
            </button>
            <button
              value="2"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              2
            </button>
            <button
              value="3"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              3
            </button>
            <button
              value="-"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              -
            </button>
            <button
              value="."
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              .
            </button>
            <button
              value="0"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              0
            </button>
            <button
              value="/"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20 desktop2:w-[20%] desktop1:w-16 rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              /
            </button>
            <button
              value="*"
              onClick={(e) => setNumber(number + e.target.value)}
              className=" w-20  desktop2:w-[20%] desktop1:w-16  rounded-lg bg-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(28,_16%,_65%)]  transition-all active:translate-y-0.5"
            >
              x
            </button>

            <div className="flex w-screen justify-center space-x-2 text-lg mt-2">
              <button
                value="reset"
                onClick={() => setNumber("RESET")}
                className="bg-dark-cyan-del w-44 desktop2:w-2/4 rounded-lg text-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(224,_28%,_35%)]  transition-all active:translate-y-0.5"
              >
                RESET
              </button>
              <button
                value="="
                onClick={() => setNumber(eval(number))}
                className="text-3xl w-44 desktop2:w-2/4 rounded-lg bg-equalRed text-ligh-gray-main-keys shadow-[0px_5px_0px_0px_hsl(6,_70%,_34%)]  transition-all active:translate-y-0.5"
              >
                =
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default App;
