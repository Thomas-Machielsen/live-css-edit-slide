"use client";

import hljs from "highlight.js";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./css-live-edit.module.css";

interface CSSLiveEditProps extends PropsWithChildren {}

export const CSSLiveEdit: React.FC<CSSLiveEditProps> = ({ children }) => {
  const editor = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    {
      hljs.highlightAll();
    }
    [];
  });

  const handleChange = () => {
    if (editor.current) {
      const style = document.createElement("style");
      style.innerHTML = editor.current.value;
      document.head.appendChild(style);
    }
  };

  return (
    <>
      <div className="css-input">
        <h2>Edit CSS</h2>
        <textarea
          ref={editor}
          onChange={handleChange}
          className="language-css"
        ></textarea>
      </div>
      <div className={`css-output ${styles.output}`}>
        <h2>Output</h2>
        <pre>
          <code className="language-html">
            <p>bla</p>
          </code>
        </pre>
        {children}
      </div>
    </>
  );
};
