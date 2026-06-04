cmake_minimum_required(VERSION 3.20)
project(ediabasx-native C)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)

option(EDXN_BUILD_TESTS "Build test executables" ON)

add_library(ediabasx
  src/prg.c
  src/registers.c
  src/flags.c
  src/stack.c
  src/vm.c
  src/ediabas.c
  src/opcodes_arith.c
  src/opcodes_flow.c
  src/opcodes_string.c
  src/opcodes_result.c
  src/opcodes_table.c
  src/opcodes_comm.c
  src/opcodes_misc.c
  src/result.c
  src/table.c
  src/decode.c
)

# Platform-specific sources
if(UNIX)
  target_sources(ediabasx PRIVATE
    platform/posix/serial.c
    platform/posix/loaders.c
  )
endif()

target_include_directories(ediabasx PUBLIC include)

if(EDXN_BUILD_TESTS)
  enable_testing()

  add_executable(test_prg test/test_prg.c)
  target_link_libraries(test_prg ediabasx)
  add_test(NAME prg_parser COMMAND test_prg)

  add_executable(test_vm test/test_vm.c)
  target_link_libraries(test_vm ediabasx)
  add_test(NAME vm_core COMMAND test_vm)

  add_executable(test_ediabas test/test_ediabas.c)
  target_link_libraries(test_ediabas ediabasx)
  add_test(NAME ediabas_wrapper COMMAND test_ediabas)

  add_executable(edxn_run test/run.c)
  target_link_libraries(edxn_run ediabasx)
endif()
