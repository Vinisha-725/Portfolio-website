"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

interface Command {
  command: string;
  output: string;
  delay?: number;
}

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [history, setHistory] = useState<Command[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    { command: "whoami", output: "Vinisha Sahoo - AI/ML Student & Developer" },
    { command: "skills", output: "Python, React, Next.js, TensorFlow, PyTorch, Node.js" },
    { command: "education", output: "B.Tech CSE (AI/ML) @ SRM Institute of Science and Technology" },
    { command: "contact", output: "GitHub: github.com/yourusername | LinkedIn: linkedin.com/in/yourusername" },
  ];

  const scrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let output = "";

    switch (command) {
      case "help":
        output = "Available commands: whoami, skills, education, contact, projects, experience";
        break;
      case "whoami":
        output = "Vinisha Sahoo - AI/ML Student & Developer";
        break;
      case "skills":
        output = "Python, React, Next.js, TensorFlow, PyTorch, Node.js";
        break;
      case "education":
        output = "B.Tech CSE (AI/ML) @ SRM Institute of Science and Technology";
        break;
      case "contact":
        output = "GitHub: github.com/yourusername | LinkedIn: linkedin.com/in/yourusername";
        break;
      case "projects":
        output = "Scrolling to projects section...";
        setTimeout(() => scrollTo("#projects"), 500);
        break;
      case "experience":
        output = "Scrolling to experience section...";
        setTimeout(() => scrollTo("#experience"), 500);
        break;
      case "clear":
        setHistory([]);
        setInputValue("");
        return;
      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    if (command !== "clear") {
      setHistory([...history, { command: cmd, output }]);
    }
    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLine < commands.length) {
      const targetCommand = commands[currentLine].command;
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < targetCommand.length) {
          setTypedText(targetCommand.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setHistory([...history, { command: targetCommand, output: commands[currentLine].output }]);
            setTypedText("");
            setCurrentLine(currentLine + 1);
          }, 800);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    }
  }, [currentLine, history]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleCommand(inputValue);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-xl">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-sm font-mono">
          portfolio@vinisha:~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm h-80 overflow-y-auto bg-gray-900">
        <div className="text-green-400 mb-2">
          <span className="text-gray-500"># Welcome to my interactive terminal</span>
          <br />
          <span className="text-gray-500"># Type 'help' for available commands</span>
        </div>

        {history.map((cmd, index) => (
          <div key={index} className="mb-3">
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-gray-300">{cmd.command}</span>
            </div>
            <div className="text-gray-400 ml-4 mt-1">{cmd.output}</div>
          </div>
        ))}

        {typedText && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-400">$</span>
            <span className="text-gray-300">{typedText}</span>
            <span className={`text-green-400 ${showCursor ? "opacity-100" : "opacity-0"}`}>▋</span>
          </div>
        )}

        {/* Input */}
        <div className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-gray-300 outline-none font-mono text-sm"
            placeholder="Type a command..."
            autoComplete="off"
          />
          <span className={`text-green-400 ${showCursor ? "opacity-100" : "opacity-0"}`}>▋</span>
        </div>

        {/* Quick Commands */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="text-gray-500 text-xs mb-2">Quick commands:</div>
          <div className="flex flex-wrap gap-2">
            {["whoami", "skills", "projects", "experience"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs rounded transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
