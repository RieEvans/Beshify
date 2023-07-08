import React, { useState } from "react";
import { ColorModeToggle } from "./Components/colorModeToggle";
import CardComponents from "./Components/cardComponents";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [text, setText] = useState("")
  
  const toggleMode = () => {
    setToggle(!toggle);
  };

  const [toggle, setToggle] = useState(false)
  const generateText = () => {
    const trimmText = text.trim();
    if (trimmText.length > 0) {
      const replaceValue = trimmText.replace(/\s+/g, " ")
      const newValue = replaceValue.replace(/\s/g, "🤸")
      setText(newValue)
      return newValue
    } else {
      setText(trimmText)
      toast ("🤸 Text Copied ! 🤸")
    }
    
  }

  const copyText = () => {
    const textarea = document.createElement("textarea")
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea)
    
    toast("🤸 Text Copied 🤸")
  }
  
  
  return (
    <div className={` ${toggle ? "bg-gray-100 " : "bg-slate-900 text-white "} h-screen w-full flex items-center justify-center`}>
      <div className="flex flex-col gap-5">
        <h1 className="font-[shrikhand]  text-4xl md:text-3xl xl:text-5xl ">
          🤸 Beshify 🤸
        </h1>
        <div className="mt-5 flex items-center justify-between gap-5">
            <input onChange={(e) => setText(e.target.value)} className="w-full py-3 px-2 rounded bg-slate-900 outline-cyan-500 border border-cyan-500 font-semibold text-white" type="text" placeholder="🤸 Enter Text .... 🤸" />
            <ColorModeToggle toggle = {toggle} setToggle = {setToggle} toggleMode = {toggleMode} />
            
        </div>
        {text.length > 0 && <CardComponents text = {text} generateText = {generateText} copyText = {copyText} /> }

        <ToastContainer />
        
      </div>
    </div>
  );
}
