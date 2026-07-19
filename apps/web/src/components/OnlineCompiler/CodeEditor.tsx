"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

const defaultCode = `function greet() {
  console.log("Hello, World!");
}

greet();`;

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const logs: string[] = [];
      const originalLog = console.log;

      console.log = (...args: unknown[]) => {
        logs.push(args.map((arg) => String(arg)).join(" "));
      };

      eval(code);

      console.log = originalLog;

      setOutput(logs.join("\n") || "Program executed successfully.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: ${message}`);
    }
  };

  return (
    <div className="h-screen bg-[#0d1117] text-white flex flex-col">

      {/* Header */}
      <header className="h-14 border-b border-white/10 flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] text-lg font-semibold text-white shadow-lg shadow-purple-500/20">
            M
          </div>
        </div>
        <button
          onClick={runCode}
          className="px-5 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-medium transition"
        >
          ▶ Run Code
        </button>
        
      </header>

      {/* Main Editor Layout */}
      <main className="flex-1 flex overflow-hidden">

        {/* Left Side - Code Editor */}
        <section className="w-1/2 border-r border-white/10 flex flex-col">

          {/* Editor Header */}
          <div className="h-10 px-4 flex items-center justify-between bg-[#161b22] border-b border-white/10">
            <span className="text-sm text-gray-300">
              main.js
            </span>

            <span className="text-xs text-gray-500">
              JavaScript
            </span>
          </div>

          {/* Monaco Editor */}
          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              loading={<div className="flex h-full items-center justify-center text-sm text-gray-400">Loading editor...</div>}
              options={{
                fontSize: 15,
                minimap: {
                  enabled: false,
                },
                automaticLayout: true,
                padding: {
                  top: 15,
                },
                scrollBeyondLastLine: false,
                wordWrap: "on",
              }}
            />
          </div>
        </section>

        {/* Right Side - Output */}
        <section className="w-1/2 flex flex-col">

          {/* Output Header */}
          <div className="h-10 px-4 flex items-center justify-between bg-[#161b22] border-b border-white/10">
            <span className="text-sm text-gray-300">
              Output
            </span>
            

            <button
              onClick={() => setOutput("")}
              className="text-xs text-gray-500 hover:text-white"
            >
              Clear
            </button>
          </div>

          {/* Output Content */}
          <div className="flex-1 p-5 overflow-auto font-mono text-sm">

            {output ? (
              <pre className="whitespace-pre-wrap text-green-400">
                {output}
              </pre>
            ) : (
              <div className="text-gray-500">
                Run your code to see the output here...
              </div>
            )}

          </div>
        </section>

      </main>
    </div>
  );
}