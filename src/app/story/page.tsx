import { Toaster } from "sonner";

import { PlateEditor } from "@/components/editor/plate-editor";
import { SettingsProvider } from "@/components/editor/settings";

export default function Page() {
  return (
    <>
      <main
        className="flex justify-center items-center w-full h-screen"
        data-registry="plate"
      >
        <div>
          <div className="text-center">
            <h1 className="font-bold text-3xl">Hello, Story teller</h1>
            <p>What story do you have in mind today?</p>
          </div>
          <div className="w-[900px] h-[500px] mt-5">
            <SettingsProvider>
              <PlateEditor />
            </SettingsProvider>

            <Toaster />
          </div>
        </div>
      </main>
    </>
  );
}
