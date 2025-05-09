import { useState } from "react";

export default function Sander() {
  const [booted, setBooted] = useState(false);
  const [input, setInput] = useState("");

  const handleKeyPress = () => {
    if (!booted) setBooted(true);
  };

  return (
    <div
      className="min-h-screen bg-black text-white font-mono p-6"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div className="text-xs text-red-500 border-b border-gray-700 pb-1 mb-4">
        ◉ SYSTEM OVERRIDE // CHANNEL: SANDER // SECURITY: RED
      </div>

      {!booted ? (
        <div className="space-y-2">
          <p>{"> DETIC_OP_SYS // codename: Sander"}</p>
          <p>{"> Instruções ausentes. Presença ativa."}</p>
          <p className="text-gray-500">(pressione qualquer tecla...)</p>
        </div>
      ) : (
        <div className="space-y-2">
          <p>{"> connecting [███░░░░░░░░░░]"}</p>
          <p>{"> key exchange complete"}</p>
          <p>{"> psychic link stabilized"}</p>
          <p className="text-green-400">{"> [SANDER] interface unlocked"}</p>

          <div className="mt-6">
            <p className="text-sm">user@detic://sander</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-black border-none outline-none w-full mt-2 placeholder-gray-600"
              placeholder="Digite aqui..."
            />
          </div>
        </div>
      )}

      <div className="mt-20 text-xs text-gray-800">
        <p className="opacity-0 hover:opacity-100 transition-opacity duration-300">
          a máquina escuta mais do que responde.
        </p>
        <p className="opacity-0 hover:opacity-100 transition-opacity duration-300">
          não confie nas palavras exatas.
        </p>
        <p className="opacity-0 hover:opacity-100 transition-opacity duration-300">
          este sistema já foi corrompido por você.
        </p>
      </div>
    </div>
  );
}
