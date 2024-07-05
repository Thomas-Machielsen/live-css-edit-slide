import { CSSLiveEdit } from "@/app/comps/css-live-edit/css-live-edit";

export default function Home() {
  return (
    <main>
      <CSSLiveEdit>
        <p>This is a sample text to demonstrate the CSS effects.</p>
        <p>You can add more HTML here to see how the CSS affects it.</p>
      </CSSLiveEdit>
    </main>
  );
}
