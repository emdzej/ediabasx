<script lang="ts">
  // Thin wrapper bridging local runtime state to the shared
  // presentational ConnectButton from @emdzej/ediabasx-web-ui.
  import { ConnectButton as SharedConnectButton } from "@emdzej/ediabasx-web-ui";
  import { state as app } from "../lib/app.svelte";
  import { connect, disconnect, runtime } from "../lib/runtime.svelte";

  const idleTitle = $derived(
    app.config.mode === "client"
      ? "Connect to EdiabasX server"
      : "Open the configured interface — Web Serial, J2534, or remote gateway",
  );
</script>

<SharedConnectButton
  phase={runtime.phase}
  message={runtime.message}
  errorMessage={runtime.errorMessage ?? undefined}
  {idleTitle}
  onconnect={connect}
  ondisconnect={disconnect}
/>
