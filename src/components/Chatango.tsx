import { useEffect, useRef } from "react";

export default function Chatango() {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current) return;
    
    // Clear any previous instances to handle React StrictMode or navigation re-renders
    chatRef.current.innerHTML = '';

    const script = document.createElement("script");
    script.id = "cid0020000358024307098";
    script.src = "//st.chatango.com/js/gz/emb.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.style.width = "100%";
    script.style.height = "100%";
    script.innerHTML = JSON.stringify({
      handle: "jengkafm",
      arch: "js",
      styles: {
        a: "ff0000",
        b: 100,
        c: "ffffff",
        d: "ff0000",
        e: "ffffff",
        h: "ffffff",
        k: "000000",
        l: "000000",
        m: "cc0000",
        n: "FFFFFF",
        p: "10",
        q: "ff0000",
        r: 100,
        ab: false,
        usricon: 0,
        sbc: "c0c0c0",
        surl: 0,
        allowpm: 0,
        cnrs: "0.77"
      }
    });

    chatRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-[350px] mx-auto h-[400px] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(255,0,0,0.15)] bg-white border border-border">
      <div ref={chatRef} className="w-full h-full" />
    </div>
  );
}
