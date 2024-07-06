"use client";

import { css } from "@codemirror/lang-css";
import { EditorView, basicSetup } from "codemirror";
import { useEffect, useRef } from "react";

interface CodeMirrorEditorProps {
  initialCSS: string;
  htmlTemplate: { __html: string };
}

const CodeMirrorEditor = ({
  initialCSS,
  htmlTemplate,
}: CodeMirrorEditorProps) => {
  const editorContainerRef = useRef(null);

  useEffect(() => {
    if (editorContainerRef.current) {
      const view = new EditorView({
        doc: initialCSS,
        extensions: [
          basicSetup,
          css(),
          EditorView.updateListener.of((update) => {
            if (update.changes) {
              const styleTag = document.getElementById("styleTag");
              if (!styleTag) return;

              styleTag.textContent = view.state.doc.toString();
            }
          }),
        ],
        parent: editorContainerRef.current,
      });

      return () => {
        view.destroy();
      };
    }
  }, []);

  return (
    <>
      <div ref={editorContainerRef}></div>
      <style id="styleTag"></style>
      <div dangerouslySetInnerHTML={htmlTemplate}></div>
    </>
  );
};

export default CodeMirrorEditor;
