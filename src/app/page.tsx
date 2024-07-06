import CodeMirrorEditor from "./components/CodeMirrorEditor/CodeMirrorEditor";

export default function Home() {
  const initialCSS = `p { color: red; }`;
  const htmlInput = { __html: "<p>This is a paragraph</p>" };

  return (
    <main>
      <hgroup>
        <h1>CodeMirror Editor</h1>
        <p>You can edit the CSS and see it applied live</p>
      </hgroup>
      <div className="layout u-align-items-center">
        <CodeMirrorEditor initialCSS={initialCSS} htmlTemplate={htmlInput} />
      </div>
    </main>
  );
}
