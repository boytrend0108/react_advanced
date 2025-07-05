import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
    liveReload: false, // Disable live reload to prevent conflicts with hot reload
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  }
}