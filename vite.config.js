import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import discretizeVitePluginYaml from "./yamlplugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), discretizeVitePluginYaml()],
});
