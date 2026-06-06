"use client";
import {useState} from "react";
import {emperors} from "../lib/Lists";


export function EmperorButton() { 
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)} className="hover:bg-pink-200">
        List of Emperors
      </button>
      { show && (
        <ul>
          {emperors.map(emperor => (
            <li key={emperor.id}>
              {emperor.Name}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export function WikiButton() {
  return (
    <button className="hover:bg-blue-200">
      Wikipedia
    </button>
  );
}