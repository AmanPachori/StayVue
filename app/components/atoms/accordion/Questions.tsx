"use client";
import React, { useState } from "react";
import Accordion from "./Accordian";
import Heading from "../Heading/Heading";

const data = [
  {
    Question: "How do I book a place?",
    Answer:
      "To book a place, log in to your account, choose your desired dates and location.",
  },
  {
    Question: "How do I contact the host?",
    Answer:
      "After booking a place, you can communicate with the host through our Call.",
  },
  {
    Question: "How do I book a place?",
    Answer:
      "To book a place, log in to your account, choose your desired dates and location.",
  },
  {
    Question: "How do I contact the host?",
    Answer:
      "After booking a place, you can communicate with the host through our Call.",
  },
];

interface FAQProps {
  Questions: [
    {
      question: string;
      answer: string;
    }
  ];
}

const Quess = () => {
  const [active, setActive] = useState(new Array(3));

  return (
    <div>
      {data.map((element, i) => (
        <Accordion
          key={element.Question}
          Selected={active[i] === true}
          setSelected={() => {
            active[i] = !active[i];
            setActive([...active]);
          }}
          className=""
          title={element.Question}
        >
          {element.Answer}
        </Accordion>
      ))}
    </div>
  );
};

export default Quess;
