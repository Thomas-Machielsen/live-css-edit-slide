import CodeMirrorEditor from "./comps/CodeMirrorEditor/CodeMirrorEditor";

export default function Home() {
  const initialCSS = `p { color: red; }`;
  const htmlInput = { __html: "<p>This is a paragraph</p>" };
  return (
    <main>
      <h1>CodeMirror Editor</h1>
      <CodeMirrorEditor initialCSS={initialCSS} htmlTemplate={htmlInput} />
    </main>
  );
}
