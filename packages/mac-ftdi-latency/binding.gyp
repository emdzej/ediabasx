{
  "targets": [
    {
      "target_name": "mac_ftdi_latency",
      "sources": [ "src/native/mac_ftdi_latency.c" ],
      "include_dirs": [],
      "defines": [ "NAPI_VERSION=8" ],
      "conditions": [
        [ "OS==\"mac\"", {
          "xcode_settings": {
            "GCC_ENABLE_CPP_EXCEPTIONS": "NO",
            "MACOSX_DEPLOYMENT_TARGET": "10.15"
          }
        } ]
      ]
    }
  ]
}
