"use client";

import React, { useRef } from "react";
import styles from "./css-live-edit.module.css";

export const CSSLiveEdit: React.FC = () => {
  const editor = useRef<HTMLTextAreaElement>(null);

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
          className={styles.editor}
        ></textarea>
      </div>
      <div className={`css-output ${styles.output}`}>
        <h2>Output</h2>
        <p>This is a sample text to demonstrate the CSS effects.</p>
        <p>You can add more HTML here to see how the CSS affects it.</p>
      </div>
    </>
  );
};
