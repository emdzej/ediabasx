<script lang="ts">
  // Thin wrapper bridging local runtime state to the shared
  // presentational ConnectButton from @emdzej/ediabasx-web-ui.
  import { ConnectButton as SharedConnectButton } from "@emdzej/ediabasx-web-ui";
  import { connect, disconnect, runtime } from "../lib/runtime.svelte";
</script>

<SharedConnectButton
  phase={runtime.phase}
  message={runtime.message}
  errorMessage={runtime.errorMessage ?? undefined}
  idleTitle="Open the configured interface — Web Serial, J2534, or remote gateway"
  onconnect={connect}
  ondisconnect={disconnect}
/>
