typedef unsigned char   undefined;

typedef unsigned char    bool;
typedef unsigned char    byte;
typedef unsigned int    dword;
float10
typedef unsigned long long    GUID;
typedef pointer32 ImageBaseOffset32;

typedef long long    longlong;
typedef unsigned char    uchar;
typedef unsigned int    uint;
typedef unsigned long    ulong;
typedef unsigned char    undefined1;
typedef unsigned short    undefined2;
typedef unsigned int    undefined4;
typedef unsigned long long    undefined8;
typedef unsigned short    ushort;
typedef unsigned short    wchar16;
typedef short    wchar_t;
typedef unsigned short    word;
#define unkbyte9   unsigned long long
#define unkbyte10   unsigned long long
#define unkbyte11   unsigned long long
#define unkbyte12   unsigned long long
#define unkbyte13   unsigned long long
#define unkbyte14   unsigned long long
#define unkbyte15   unsigned long long
#define unkbyte16   unsigned long long

#define unkuint9   unsigned long long
#define unkuint10   unsigned long long
#define unkuint11   unsigned long long
#define unkuint12   unsigned long long
#define unkuint13   unsigned long long
#define unkuint14   unsigned long long
#define unkuint15   unsigned long long
#define unkuint16   unsigned long long

#define unkint9   long long
#define unkint10   long long
#define unkint11   long long
#define unkint12   long long
#define unkint13   long long
#define unkint14   long long
#define unkint15   long long
#define unkint16   long long

#define unkfloat1   float
#define unkfloat2   float
#define unkfloat3   float
#define unkfloat5   double
#define unkfloat6   double
#define unkfloat7   double
#define unkfloat9   long double
#define unkfloat11   long double
#define unkfloat12   long double
#define unkfloat13   long double
#define unkfloat14   long double
#define unkfloat15   long double
#define unkfloat16   long double

#define BADSPACEBASE   void
#define code   void

typedef struct _s_HandlerType _s_HandlerType, *P_s_HandlerType;

typedef struct _s_HandlerType HandlerType;

typedef struct TypeDescriptor TypeDescriptor, *PTypeDescriptor;

typedef int ptrdiff_t;

struct TypeDescriptor {
    dword hash;
    void *spare;
    char name[0];
};

struct _s_HandlerType {
    uint adjectives;
    struct TypeDescriptor *pType;
    ptrdiff_t dispCatchObj;
    void *addressOfHandler;
};

typedef struct CLIENT_ID CLIENT_ID, *PCLIENT_ID;

struct CLIENT_ID {
    void *UniqueProcess;
    void *UniqueThread;
};

typedef union IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryUnion IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryUnion, *PIMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryUnion;

typedef struct IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryStruct IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryStruct, *PIMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryStruct;

struct IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryStruct {
    dword OffsetToDirectory:31;
    dword DataIsDirectory:1;
};

union IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryUnion {
    dword OffsetToData;
    struct IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryStruct IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryStruct;
};

typedef struct _s_TryBlockMapEntry _s_TryBlockMapEntry, *P_s_TryBlockMapEntry;

typedef int __ehstate_t;

struct _s_TryBlockMapEntry {
    __ehstate_t tryLow;
    __ehstate_t tryHigh;
    __ehstate_t catchHigh;
    int nCatches;
    HandlerType *pHandlerArray;
};

typedef struct _s_FuncInfo _s_FuncInfo, *P_s_FuncInfo;

typedef struct _s_FuncInfo FuncInfo;

typedef struct _s_UnwindMapEntry _s_UnwindMapEntry, *P_s_UnwindMapEntry;

typedef struct _s_UnwindMapEntry UnwindMapEntry;

typedef struct _s_TryBlockMapEntry TryBlockMapEntry;

struct _s_FuncInfo {
    uint magicNumber_and_bbtFlags;
    __ehstate_t maxState;
    UnwindMapEntry *pUnwindMap;
    uint nTryBlocks;
    TryBlockMapEntry *pTryBlockMap;
    uint nIPMapEntries;
    void *pIPToStateMap;
};

struct _s_UnwindMapEntry {
    __ehstate_t toState;
    void (*action)(void);
};

typedef struct _cpinfo _cpinfo, *P_cpinfo;

typedef uint UINT;

typedef uchar BYTE;

struct _cpinfo {
    UINT MaxCharSize;
    BYTE DefaultChar[2];
    BYTE LeadByte[12];
};

typedef struct _cpinfo *LPCPINFO;

typedef struct _FILETIME _FILETIME, *P_FILETIME;

typedef struct _FILETIME *LPFILETIME;

typedef ulong DWORD;

struct _FILETIME {
    DWORD dwLowDateTime;
    DWORD dwHighDateTime;
};

typedef int (*FARPROC)(void);

typedef DWORD *LPDWORD;

typedef ushort WORD;

typedef WORD *LPWORD;

typedef int INT;

typedef struct HINSTANCE__ HINSTANCE__, *PHINSTANCE__;

struct HINSTANCE__ {
    int unused;
};

typedef int BOOL;

typedef BOOL *LPBOOL;

typedef struct HINSTANCE__ *HINSTANCE;

typedef void *LPCVOID;

typedef void *LPVOID;

typedef HINSTANCE HMODULE;

typedef BYTE *LPBYTE;

typedef long *LPLONG;

typedef struct IMAGE_RESOURCE_DIRECTORY_ENTRY IMAGE_RESOURCE_DIRECTORY_ENTRY, *PIMAGE_RESOURCE_DIRECTORY_ENTRY;

typedef union IMAGE_RESOURCE_DIRECTORY_ENTRY_NameUnion IMAGE_RESOURCE_DIRECTORY_ENTRY_NameUnion, *PIMAGE_RESOURCE_DIRECTORY_ENTRY_NameUnion;

typedef struct IMAGE_RESOURCE_DIRECTORY_ENTRY_NameStruct IMAGE_RESOURCE_DIRECTORY_ENTRY_NameStruct, *PIMAGE_RESOURCE_DIRECTORY_ENTRY_NameStruct;

struct IMAGE_RESOURCE_DIRECTORY_ENTRY_NameStruct {
    dword NameOffset:31;
    dword NameIsString:1;
};

union IMAGE_RESOURCE_DIRECTORY_ENTRY_NameUnion {
    struct IMAGE_RESOURCE_DIRECTORY_ENTRY_NameStruct IMAGE_RESOURCE_DIRECTORY_ENTRY_NameStruct;
    dword Name;
    word Id;
};

struct IMAGE_RESOURCE_DIRECTORY_ENTRY {
    union IMAGE_RESOURCE_DIRECTORY_ENTRY_NameUnion NameUnion;
    union IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryUnion DirectoryUnion;
};

typedef struct StringTable StringTable, *PStringTable;

struct StringTable {
    word wLength;
    word wValueLength;
    word wType;
};

typedef struct IMAGE_OPTIONAL_HEADER32 IMAGE_OPTIONAL_HEADER32, *PIMAGE_OPTIONAL_HEADER32;

typedef struct IMAGE_DATA_DIRECTORY IMAGE_DATA_DIRECTORY, *PIMAGE_DATA_DIRECTORY;

struct IMAGE_DATA_DIRECTORY {
    ImageBaseOffset32 VirtualAddress;
    dword Size;
};

struct IMAGE_OPTIONAL_HEADER32 {
    word Magic;
    byte MajorLinkerVersion;
    byte MinorLinkerVersion;
    dword SizeOfCode;
    dword SizeOfInitializedData;
    dword SizeOfUninitializedData;
    ImageBaseOffset32 AddressOfEntryPoint;
    ImageBaseOffset32 BaseOfCode;
    ImageBaseOffset32 BaseOfData;
    pointer32 ImageBase;
    dword SectionAlignment;
    dword FileAlignment;
    word MajorOperatingSystemVersion;
    word MinorOperatingSystemVersion;
    word MajorImageVersion;
    word MinorImageVersion;
    word MajorSubsystemVersion;
    word MinorSubsystemVersion;
    dword Win32VersionValue;
    dword SizeOfImage;
    dword SizeOfHeaders;
    dword CheckSum;
    word Subsystem;
    word DllCharacteristics;
    dword SizeOfStackReserve;
    dword SizeOfStackCommit;
    dword SizeOfHeapReserve;
    dword SizeOfHeapCommit;
    dword LoaderFlags;
    dword NumberOfRvaAndSizes;
    struct IMAGE_DATA_DIRECTORY DataDirectory[16];
};

typedef struct IMAGE_SECTION_HEADER IMAGE_SECTION_HEADER, *PIMAGE_SECTION_HEADER;

typedef union Misc Misc, *PMisc;

typedef enum SectionFlags {
    IMAGE_SCN_TYPE_NO_PAD=8,
    IMAGE_SCN_RESERVED_0001=16,
    IMAGE_SCN_CNT_CODE=32,
    IMAGE_SCN_CNT_INITIALIZED_DATA=64,
    IMAGE_SCN_CNT_UNINITIALIZED_DATA=128,
    IMAGE_SCN_LNK_OTHER=256,
    IMAGE_SCN_LNK_INFO=512,
    IMAGE_SCN_RESERVED_0040=1024,
    IMAGE_SCN_LNK_REMOVE=2048,
    IMAGE_SCN_LNK_COMDAT=4096,
    IMAGE_SCN_GPREL=32768,
    IMAGE_SCN_MEM_16BIT=131072,
    IMAGE_SCN_MEM_PURGEABLE=131072,
    IMAGE_SCN_MEM_LOCKED=262144,
    IMAGE_SCN_MEM_PRELOAD=524288,
    IMAGE_SCN_ALIGN_1BYTES=1048576,
    IMAGE_SCN_ALIGN_2BYTES=2097152,
    IMAGE_SCN_ALIGN_4BYTES=3145728,
    IMAGE_SCN_ALIGN_8BYTES=4194304,
    IMAGE_SCN_ALIGN_16BYTES=5242880,
    IMAGE_SCN_ALIGN_32BYTES=6291456,
    IMAGE_SCN_ALIGN_64BYTES=7340032,
    IMAGE_SCN_ALIGN_128BYTES=8388608,
    IMAGE_SCN_ALIGN_256BYTES=9437184,
    IMAGE_SCN_ALIGN_512BYTES=10485760,
    IMAGE_SCN_ALIGN_1024BYTES=11534336,
    IMAGE_SCN_ALIGN_2048BYTES=12582912,
    IMAGE_SCN_ALIGN_4096BYTES=13631488,
    IMAGE_SCN_ALIGN_8192BYTES=14680064,
    IMAGE_SCN_LNK_NRELOC_OVFL=16777216,
    IMAGE_SCN_MEM_DISCARDABLE=33554432,
    IMAGE_SCN_MEM_NOT_CACHED=67108864,
    IMAGE_SCN_MEM_NOT_PAGED=134217728,
    IMAGE_SCN_MEM_SHARED=268435456,
    IMAGE_SCN_MEM_EXECUTE=536870912,
    IMAGE_SCN_MEM_READ=1073741824,
    IMAGE_SCN_MEM_WRITE=2147483648
} SectionFlags;

union Misc {
    dword PhysicalAddress;
    dword VirtualSize;
};

struct IMAGE_SECTION_HEADER {
    char Name[8];
    union Misc Misc;
    ImageBaseOffset32 VirtualAddress;
    dword SizeOfRawData;
    dword PointerToRawData;
    dword PointerToRelocations;
    dword PointerToLinenumbers;
    word NumberOfRelocations;
    word NumberOfLinenumbers;
    enum SectionFlags Characteristics;
};

typedef struct Var Var, *PVar;

struct Var {
    word wLength;
    word wValueLength;
    word wType;
};

typedef struct VS_VERSION_INFO VS_VERSION_INFO, *PVS_VERSION_INFO;

struct VS_VERSION_INFO {
    word StructLength;
    word ValueLength;
    word StructType;
    wchar16 Info[16];
    byte Padding[2];
    dword Signature;
    word StructVersion[2];
    word FileVersion[4];
    word ProductVersion[4];
    dword FileFlagsMask[2];
    dword FileFlags;
    dword FileOS;
    dword FileType;
    dword FileSubtype;
    dword FileTimestamp;
};

typedef struct IMAGE_RESOURCE_DATA_ENTRY IMAGE_RESOURCE_DATA_ENTRY, *PIMAGE_RESOURCE_DATA_ENTRY;

struct IMAGE_RESOURCE_DATA_ENTRY {
    dword OffsetToData;
    dword Size;
    dword CodePage;
    dword Reserved;
};

typedef struct VarFileInfo VarFileInfo, *PVarFileInfo;

struct VarFileInfo {
    word wLength;
    word wValueLength;
    word wType;
};

typedef struct IMAGE_RESOURCE_DIRECTORY IMAGE_RESOURCE_DIRECTORY, *PIMAGE_RESOURCE_DIRECTORY;

struct IMAGE_RESOURCE_DIRECTORY {
    dword Characteristics;
    dword TimeDateStamp;
    word MajorVersion;
    word MinorVersion;
    word NumberOfNamedEntries;
    word NumberOfIdEntries;
};

typedef struct IMAGE_DIRECTORY_ENTRY_EXPORT IMAGE_DIRECTORY_ENTRY_EXPORT, *PIMAGE_DIRECTORY_ENTRY_EXPORT;

struct IMAGE_DIRECTORY_ENTRY_EXPORT {
    dword Characteristics;
    dword TimeDateStamp;
    word MajorVersion;
    word MinorVersion;
    ImageBaseOffset32 Name;
    dword Base;
    dword NumberOfFunctions;
    dword NumberOfNames;
    ImageBaseOffset32 AddressOfFunctions;
    ImageBaseOffset32 AddressOfNames;
    ImageBaseOffset32 AddressOfNameOrdinals;
};

typedef struct IMAGE_FILE_HEADER IMAGE_FILE_HEADER, *PIMAGE_FILE_HEADER;

struct IMAGE_FILE_HEADER {
    word Machine; // 332
    word NumberOfSections;
    dword TimeDateStamp;
    dword PointerToSymbolTable;
    dword NumberOfSymbols;
    word SizeOfOptionalHeader;
    word Characteristics;
};

typedef struct StringInfo StringInfo, *PStringInfo;

struct StringInfo {
    word wLength;
    word wValueLength;
    word wType;
};

typedef struct IMAGE_NT_HEADERS32 IMAGE_NT_HEADERS32, *PIMAGE_NT_HEADERS32;

struct IMAGE_NT_HEADERS32 {
    char Signature[4];
    struct IMAGE_FILE_HEADER FileHeader;
    struct IMAGE_OPTIONAL_HEADER32 OptionalHeader;
};

typedef struct StringFileInfo StringFileInfo, *PStringFileInfo;

struct StringFileInfo {
    word wLength;
    word wValueLength;
    word wType;
};

typedef struct _iobuf _iobuf, *P_iobuf;

struct _iobuf {
    char *_ptr;
    int _cnt;
    char *_base;
    int _flag;
    int _file;
    int _charbuf;
    int _bufsiz;
    char *_tmpfname;
};

typedef struct _iobuf FILE;

typedef struct _OVERLAPPED _OVERLAPPED, *P_OVERLAPPED;

typedef ulong ULONG_PTR;

typedef union _union_518 _union_518, *P_union_518;

typedef void *HANDLE;

typedef struct _struct_519 _struct_519, *P_struct_519;

typedef void *PVOID;

struct _struct_519 {
    DWORD Offset;
    DWORD OffsetHigh;
};

union _union_518 {
    struct _struct_519 s;
    PVOID Pointer;
};

struct _OVERLAPPED {
    ULONG_PTR Internal;
    ULONG_PTR InternalHigh;
    union _union_518 u;
    HANDLE hEvent;
};

typedef struct _SECURITY_ATTRIBUTES _SECURITY_ATTRIBUTES, *P_SECURITY_ATTRIBUTES;

struct _SECURITY_ATTRIBUTES {
    DWORD nLength;
    LPVOID lpSecurityDescriptor;
    BOOL bInheritHandle;
};

typedef struct _TIME_ZONE_INFORMATION _TIME_ZONE_INFORMATION, *P_TIME_ZONE_INFORMATION;

typedef struct _TIME_ZONE_INFORMATION *LPTIME_ZONE_INFORMATION;

typedef long LONG;

typedef wchar_t WCHAR;

typedef struct _SYSTEMTIME _SYSTEMTIME, *P_SYSTEMTIME;

typedef struct _SYSTEMTIME SYSTEMTIME;

struct _SYSTEMTIME {
    WORD wYear;
    WORD wMonth;
    WORD wDayOfWeek;
    WORD wDay;
    WORD wHour;
    WORD wMinute;
    WORD wSecond;
    WORD wMilliseconds;
};

struct _TIME_ZONE_INFORMATION {
    LONG Bias;
    WCHAR StandardName[32];
    SYSTEMTIME StandardDate;
    LONG StandardBias;
    WCHAR DaylightName[32];
    SYSTEMTIME DaylightDate;
    LONG DaylightBias;
};

typedef DWORD (*PTHREAD_START_ROUTINE)(LPVOID);

typedef PTHREAD_START_ROUTINE LPTHREAD_START_ROUTINE;

typedef struct _OVERLAPPED *LPOVERLAPPED;

typedef struct _SECURITY_ATTRIBUTES *LPSECURITY_ATTRIBUTES;

typedef struct _STARTUPINFOA _STARTUPINFOA, *P_STARTUPINFOA;

typedef char CHAR;

typedef CHAR *LPSTR;

struct _STARTUPINFOA {
    DWORD cb;
    LPSTR lpReserved;
    LPSTR lpDesktop;
    LPSTR lpTitle;
    DWORD dwX;
    DWORD dwY;
    DWORD dwXSize;
    DWORD dwYSize;
    DWORD dwXCountChars;
    DWORD dwYCountChars;
    DWORD dwFillAttribute;
    DWORD dwFlags;
    WORD wShowWindow;
    WORD cbReserved2;
    LPBYTE lpReserved2;
    HANDLE hStdInput;
    HANDLE hStdOutput;
    HANDLE hStdError;
};

typedef struct _PROCESS_INFORMATION _PROCESS_INFORMATION, *P_PROCESS_INFORMATION;

struct _PROCESS_INFORMATION {
    HANDLE hProcess;
    HANDLE hThread;
    DWORD dwProcessId;
    DWORD dwThreadId;
};

typedef struct _STARTUPINFOA *LPSTARTUPINFOA;

typedef struct _PROCESS_INFORMATION *LPPROCESS_INFORMATION;

typedef struct _RTL_CRITICAL_SECTION _RTL_CRITICAL_SECTION, *P_RTL_CRITICAL_SECTION;

typedef struct _RTL_CRITICAL_SECTION *PRTL_CRITICAL_SECTION;

typedef PRTL_CRITICAL_SECTION LPCRITICAL_SECTION;

typedef struct _RTL_CRITICAL_SECTION_DEBUG _RTL_CRITICAL_SECTION_DEBUG, *P_RTL_CRITICAL_SECTION_DEBUG;

typedef struct _RTL_CRITICAL_SECTION_DEBUG *PRTL_CRITICAL_SECTION_DEBUG;

typedef struct _LIST_ENTRY _LIST_ENTRY, *P_LIST_ENTRY;

typedef struct _LIST_ENTRY LIST_ENTRY;

struct _RTL_CRITICAL_SECTION {
    PRTL_CRITICAL_SECTION_DEBUG DebugInfo;
    LONG LockCount;
    LONG RecursionCount;
    HANDLE OwningThread;
    HANDLE LockSemaphore;
    ULONG_PTR SpinCount;
};

struct _LIST_ENTRY {
    struct _LIST_ENTRY *Flink;
    struct _LIST_ENTRY *Blink;
};

struct _RTL_CRITICAL_SECTION_DEBUG {
    WORD Type;
    WORD CreatorBackTraceIndex;
    struct _RTL_CRITICAL_SECTION *CriticalSection;
    LIST_ENTRY ProcessLocksList;
    DWORD EntryCount;
    DWORD ContentionCount;
    DWORD Flags;
    WORD CreatorBackTraceIndexHigh;
    WORD SpareWORD;
};

typedef struct _EXCEPTION_POINTERS _EXCEPTION_POINTERS, *P_EXCEPTION_POINTERS;

typedef LONG (*PTOP_LEVEL_EXCEPTION_FILTER)(struct _EXCEPTION_POINTERS *);

typedef struct _EXCEPTION_RECORD _EXCEPTION_RECORD, *P_EXCEPTION_RECORD;

typedef struct _EXCEPTION_RECORD EXCEPTION_RECORD;

typedef EXCEPTION_RECORD *PEXCEPTION_RECORD;

typedef struct _CONTEXT _CONTEXT, *P_CONTEXT;

typedef struct _CONTEXT CONTEXT;

typedef CONTEXT *PCONTEXT;

typedef struct _FLOATING_SAVE_AREA _FLOATING_SAVE_AREA, *P_FLOATING_SAVE_AREA;

typedef struct _FLOATING_SAVE_AREA FLOATING_SAVE_AREA;

struct _FLOATING_SAVE_AREA {
    DWORD ControlWord;
    DWORD StatusWord;
    DWORD TagWord;
    DWORD ErrorOffset;
    DWORD ErrorSelector;
    DWORD DataOffset;
    DWORD DataSelector;
    BYTE RegisterArea[80];
    DWORD Cr0NpxState;
};

struct _CONTEXT {
    DWORD ContextFlags;
    DWORD Dr0;
    DWORD Dr1;
    DWORD Dr2;
    DWORD Dr3;
    DWORD Dr6;
    DWORD Dr7;
    FLOATING_SAVE_AREA FloatSave;
    DWORD SegGs;
    DWORD SegFs;
    DWORD SegEs;
    DWORD SegDs;
    DWORD Edi;
    DWORD Esi;
    DWORD Ebx;
    DWORD Edx;
    DWORD Ecx;
    DWORD Eax;
    DWORD Ebp;
    DWORD Eip;
    DWORD SegCs;
    DWORD EFlags;
    DWORD Esp;
    DWORD SegSs;
    BYTE ExtendedRegisters[512];
};

struct _EXCEPTION_RECORD {
    DWORD ExceptionCode;
    DWORD ExceptionFlags;
    struct _EXCEPTION_RECORD *ExceptionRecord;
    PVOID ExceptionAddress;
    DWORD NumberParameters;
    ULONG_PTR ExceptionInformation[15];
};

struct _EXCEPTION_POINTERS {
    PEXCEPTION_RECORD ExceptionRecord;
    PCONTEXT ContextRecord;
};

typedef struct _SYSTEMTIME *LPSYSTEMTIME;

typedef PTOP_LEVEL_EXCEPTION_FILTER LPTOP_LEVEL_EXCEPTION_FILTER;

typedef CHAR *LPCSTR;

typedef LONG *PLONG;

typedef CHAR *LPCH;

typedef struct _OSVERSIONINFOA _OSVERSIONINFOA, *P_OSVERSIONINFOA;

struct _OSVERSIONINFOA {
    DWORD dwOSVersionInfoSize;
    DWORD dwMajorVersion;
    DWORD dwMinorVersion;
    DWORD dwBuildNumber;
    DWORD dwPlatformId;
    CHAR szCSDVersion[128];
};

typedef struct _OSVERSIONINFOA *LPOSVERSIONINFOA;

typedef WCHAR *LPWSTR;

typedef WCHAR *PCNZWCH;

typedef WCHAR *LPWCH;

typedef WCHAR *LPCWSTR;

typedef DWORD LCID;

typedef CHAR *PCNZCH;

typedef struct IMAGE_DOS_HEADER IMAGE_DOS_HEADER, *PIMAGE_DOS_HEADER;

struct IMAGE_DOS_HEADER {
    char e_magic[2]; // Magic number
    word e_cblp; // Bytes of last page
    word e_cp; // Pages in file
    word e_crlc; // Relocations
    word e_cparhdr; // Size of header in paragraphs
    word e_minalloc; // Minimum extra paragraphs needed
    word e_maxalloc; // Maximum extra paragraphs needed
    word e_ss; // Initial (relative) SS value
    word e_sp; // Initial SP value
    word e_csum; // Checksum
    word e_ip; // Initial IP value
    word e_cs; // Initial (relative) CS value
    word e_lfarlc; // File address of relocation table
    word e_ovno; // Overlay number
    word e_res[4][4]; // Reserved words
    word e_oemid; // OEM identifier (for e_oeminfo)
    word e_oeminfo; // OEM information; e_oemid specific
    word e_res2[10][10]; // Reserved words
    dword e_lfanew; // File address of new exe header
    byte e_program[64]; // Actual DOS program
};

typedef uint UINT_PTR;

typedef ULONG_PTR SIZE_T;

typedef uint size_t;

typedef int errno_t;




undefined4 FUN_10001000(undefined4 param_1,int param_2);
undefined4 FUN_10001030(void);
undefined4 FUN_10001040(void);
undefined4 FUN_100010f0(void);
void __api32Break(void);
void __api32CheckVersion(int param_1,uint *param_2);
void __api32End(void);
void __api32ErrorCode(void);
void __api32ErrorText(char *param_1,size_t param_2);
void __cdecl __api32GetConfig(byte *param_1,uint *param_2);
void __cdecl __api32InitExt(uint *param_1,char *param_2,char *param_3,char *param_4);
void __api32Init(void);
void __cdecl __api32Job(char *param_1,char *param_2,char *param_3,char *param_4);
void __cdecl __api32JobData(char *param_1,char *param_2,char *param_3,uint param_4,char *param_5);
void __cdecl __api32JobExt(char *param_1,char *param_2,undefined4 *param_3,uint param_4,char *param_5,uint param_6,char *param_7,undefined4 param_8);
void __cdecl __api32JobInfo(char *param_1);
void __cdecl __api32ResultBinary(undefined4 *param_1,ushort *param_2,char *param_3,ushort param_4);
void __cdecl __api32ResultBinaryExt(undefined4 *param_1,uint *param_2,uint param_3,char *param_4,ushort param_5);
void __cdecl __api32ResultByte(double *param_1,char *param_2,ushort param_3);
void __cdecl __api32ResultChar(double *param_1,char *param_2,ushort param_3);
void __cdecl __api32ResultDWord(double *param_1,char *param_2,ushort param_3);
void __cdecl __api32ResultFormat(int *param_1,char *param_2,ushort param_3);
void __cdecl __api32ResultInt(double *param_1,char *param_2,ushort param_3);
void __cdecl __api32ResultLong(double *param_1,char *param_2,ushort param_3);
void __cdecl __api32ResultName(uint *param_1,ushort param_2,ushort param_3);
void __cdecl __api32ResultNumber(undefined2 *param_1,ushort param_2);
void __cdecl __api32ResultReal(double *param_1,char *param_2,ushort param_3);
void __cdecl __api32ResultsDelete(int *param_1);
void __cdecl __api32ResultSets(undefined2 *param_1);
void __api32ResultsNew(void);
void __cdecl __api32ResultsScope(undefined4 *param_1);
void __cdecl __api32ResultText(char *param_1,char *param_2,ushort param_3,char *param_4);
void __cdecl __api32ResultVar(uint *param_1);
void __cdecl __api32ResultWord(double *param_1,char *param_2,ushort param_3);
undefined4 __cdecl __api32SetConfig(byte *param_1,uint *param_2);
void __api32State(void);
void __cdecl __api32StateExt(uint param_1);
void __cdecl __api32SwitchDevice(char *param_1,char *param_2);
void __cdecl __api32Trace(char *param_1);
undefined4 __cdecl __api32XSysSetConfig(byte *param_1,uint *param_2);
bool __cdecl __api32XSetThreadMode(int param_1);
undefined4 __cdecl __api32XSetEcsSupport(int param_1);
void FUN_10001750(void);
void FUN_10001760(void);
void __fastcall FUN_10001780(int param_1);
void __fastcall FUN_100017b0(int param_1);
undefined4 __fastcall FUN_10001850(int param_1);
void __fastcall FUN_10001a90(int param_1);
void __fastcall FUN_10001b70(int param_1);
undefined4 __thiscall FUN_10001bd0(void *this,int param_1,uint *param_2,char *param_3,char *param_4,char *param_5);
void __fastcall FUN_10001cb0(int param_1);
void __thiscall FUN_10001ce0(void *this,int param_1,char *param_2,char *param_3,undefined4 *param_4,uint param_5,char *param_6,uint param_7,char *param_8,undefined4 param_9);
void __fastcall FUN_10001eb0(int param_1);
int __thiscall FUN_10001f20(void *this,uint param_1);
int __thiscall FUN_10001fd0(void *this,char *param_1);
int __fastcall FUN_10002040(int param_1);
char * __fastcall FUN_10002090(int param_1);
void __cdecl FUN_10002320(undefined4 param_1);
void __cdecl FUN_10002330(int param_1,char *param_2);
void __cdecl FUN_10002380(byte *param_1,byte *param_2);
undefined1 * __cdecl FUN_10002430(char *param_1);
undefined * FUN_100024d0(void);
uint __cdecl FUN_100024e0(byte *param_1,short param_2);
uint __cdecl FUN_100025c0(byte *param_1,int param_2);
undefined4 __cdecl FUN_10002770(short *param_1,short param_2,short *param_3);
void __cdecl FUN_100027b0(uint param_1,byte *param_2,char *param_3);
undefined4 * __fastcall FUN_100027f0(undefined4 *param_1);
undefined4 * __thiscall FUN_10002810(void *this,byte param_1);
undefined4 * __thiscall FUN_10002830(void *this,int param_1);
undefined4 * __thiscall FUN_10002850(void *this,char *param_1);
void __fastcall FUN_10002870(undefined4 *param_1);
void * __thiscall FUN_10002890(void *this,int param_1);
void * __thiscall FUN_100028b0(void *this,int param_1);
void * __thiscall FUN_100028d0(void *this,char *param_1);
void * __thiscall FUN_100028f0(void *this,void *param_1,char *param_2);
bool __thiscall FUN_10002960(void *this,byte *param_1);
void __thiscall FUN_10002980(void *this,int param_1);
undefined4 __thiscall FUN_10002990(void *this,int param_1);
void __thiscall FUN_100029b0(void *this,int param_1);
void __cdecl FUN_100029f0(void *param_1,byte *param_2);
int __thiscall FUN_10002a20(void *this,byte *param_1);
undefined4 __thiscall FUN_10002a60(void *this,int param_1);
void * __thiscall FUN_10002a70(void *this,void *param_1,int param_2);
int __thiscall FUN_10002ae0(void *this,char param_1);
void __thiscall FUN_10002b10(void *this,char *param_1);
void __thiscall FUN_10002b30(void *this,uint *param_1);
void __thiscall FUN_10002b70(void *this,char *param_1);
void __thiscall FUN_10002bc0(void *this,char *param_1);
void FUN_10002c30(void);
void FUN_10002c40(void);
void __fastcall FUN_10002c60(undefined4 *param_1);
void __thiscall FUN_10002cb0(void *this,undefined4 param_1,int param_2,undefined4 *param_3);
undefined4 __thiscall FUN_10002d10(void *this,char *param_1,undefined4 param_2,undefined4 param_3);
void __fastcall FUN_10003260(int *param_1);
void __thiscall FUN_100032f0(void *this,int param_1,undefined4 param_2);
char * __cdecl FUN_10003350(char *param_1);
undefined4 FUN_100033f0(void);
void __thiscall FUN_10003480(void *this,byte *param_1,byte *param_2);
void __thiscall FUN_10003530(void *this,byte *param_1,byte *param_2);
bool __cdecl FUN_100035c0(int param_1,uint *param_2);
bool __cdecl FUN_10003680(uint *param_1,char *param_2,char *param_3,char *param_4);
bool __cdecl FUN_10003733(uint *param_1,char *param_2,char *param_3,char *param_4);
undefined4 __cdecl FUN_10003808(char *param_1);
bool __thiscall FUN_100039dc(void *this,byte *param_1,uint *param_2,int param_3);
bool FUN_10003c47(void);
void FUN_10003cbe(void);
int FUN_10003d2d(void);
int __cdecl FUN_10003d4d(char *param_1,uint *param_2);
void * __cdecl FUN_10003df8(byte *param_1,uint *param_2);
void * __cdecl FUN_10003eb6(char *param_1,char *param_2);
void __cdecl FUN_10003f62(char *param_1,char *param_2,char *param_3,char *param_4);
void __cdecl FUN_10004022(char *param_1,char *param_2,undefined4 *param_3,uint param_4,char *param_5);
void __cdecl FUN_100040ed(char *param_1,char *param_2,undefined4 *param_3,uint param_4,undefined4 *param_5,uint param_6,char *param_7,undefined4 param_8);
int __cdecl FUN_100041f3(char *param_1);
int __cdecl FUN_10004274(double *param_1,char *param_2,ushort param_3);
int __cdecl FUN_10004341(double *param_1,char *param_2,ushort param_3);
int __cdecl FUN_1000440f(double *param_1,char *param_2,ushort param_3);
int __cdecl FUN_100044dc(double *param_1,char *param_2,ushort param_3);
int __cdecl FUN_100045ab(double *param_1,char *param_2,ushort param_3);
int __cdecl FUN_10004677(double *param_1,char *param_2,ushort param_3);
int __cdecl FUN_10004743(double *param_1,char *param_2,ushort param_3);
void * __cdecl FUN_10004813(char *param_1,char *param_2,ushort param_3,char *param_4);
void * __cdecl FUN_100048ef(undefined4 *param_1,ushort *param_2,char *param_3,ushort param_4);
int __cdecl FUN_100049ec(undefined4 *param_1,uint *param_2,uint param_3,char *param_4,ushort param_5);
void * __cdecl FUN_10004ade(int *param_1,char *param_2,ushort param_3);
int __cdecl FUN_10004bbe(undefined2 *param_1);
int __cdecl FUN_10004c98(uint *param_1);
int __cdecl FUN_10004d71(undefined2 *param_1,ushort param_2);
int __cdecl FUN_10004e29(uint *param_1,ushort param_2,ushort param_3);
undefined4 FUN_10004ef7(void);
void __cdecl FUN_10004f66(undefined4 *param_1);
void __cdecl FUN_10004fcc(int *param_1);
void __cdecl FUN_10005032(undefined4 param_1);
int FUN_10005094(void);
char * FUN_10005105(void);
int __cdecl FUN_10005170(undefined4 param_1);
int FUN_10005202(void);
void FUN_10005275(void);
void __cdecl FUN_100052c4(undefined4 param_1);
void __cdecl FUN_10005326(char *param_1);
void __cdecl FUN_10005390(int param_1,uint param_2);
void __cdecl FUN_100055a5(char *param_1);
void FUN_1000563d(void);
undefined4 __cdecl FUN_10005677(int param_1,short param_2,short param_3);
void __cdecl FUN_10005b77(short param_1);
DWORD FUN_10005c1e(void);
bool FUN_10005c32(void);
void __cdecl FUN_10005c43(ushort param_1);
void __cdecl FUN_10005cdb(ushort param_1,int param_2);
char * FUN_10005f96(void);
void __cdecl FUN_10005fd7(int *param_1,int *param_2,int *param_3);
void FUN_1000601c(void);
void __cdecl FUN_1000603c(int param_1);
void FUN_100060a3(void);
void __cdecl FUN_100060d2(ushort param_1,int param_2);
void __cdecl FUN_10006103(ushort param_1,char *param_2,int param_3,int param_4);
void __cdecl FUN_1000632a(ushort param_1,char *param_2,int param_3);
void __cdecl FUN_10006346(ushort param_1,undefined4 param_2,int param_3);
void __cdecl FUN_10006379(ushort param_1,undefined4 param_2,int param_3);
void __cdecl FUN_100063b0(uint param_1,int param_2,uint param_3);
void __cdecl FUN_1000648d(ushort param_1);
void __cdecl FUN_1000655a(short param_1);
void __thiscall FUN_10006604(void *this,undefined2 param_1,char *param_2);
void __cdecl FUN_1000661c(uint param_1,char *param_2,int param_3);
void __thiscall FUN_1000671f(void *this,undefined2 param_1,int param_2);
void __cdecl FUN_10006776(undefined2 param_1);
void __cdecl FUN_100067a5(undefined2 param_1);
void __cdecl FUN_100067d8(ushort param_1,int param_2);
void __cdecl FUN_10006a36(ushort param_1,int param_2,int param_3);
void __thiscall FUN_10006bed(void *this,undefined2 param_1,char *param_2);
void __cdecl FUN_10006c05(uint param_1,char *param_2,int param_3);
void __cdecl FUN_10006d08(undefined2 param_1);
void __cdecl FUN_10006d37(undefined2 param_1);
void __cdecl FUN_10006d6a(undefined2 param_1);
void __cdecl FUN_10006d9d(uint param_1,int param_2,uint param_3);
void __fastcall FUN_10006e74(undefined4 param_1,undefined4 param_2,undefined2 param_3,int param_4);
void FUN_10006e93(void);
void FUN_10006f0d(void);
void __cdecl FUN_10006f68(void *param_1);
void FUN_10007020(void);
void __cdecl FUN_10007034(undefined4 param_1);
void FUN_10007041(void);
void __cdecl FUN_10007059(short param_1);
void __cdecl FUN_1000707b(short param_1);
undefined2 FUN_100070a3(void);
undefined * FUN_100070ae(void);
bool __cdecl FUN_100070e0(undefined4 *param_1);
void FUN_10007134(void);
bool __cdecl FUN_1000713e(uint *param_1,char *param_2,char *param_3,int param_4);
void __cdecl FUN_1000718c(char *param_1,char *param_2,undefined4 *param_3,uint param_4,undefined4 *param_5,uint param_6,char *param_7,uint param_8);
short __cdecl FUN_100071bd(undefined4 *param_1,undefined4 *param_2,undefined4 *param_3,undefined4 *param_4,undefined2 *param_5);
void FUN_1000720d(void);
void __cdecl FUN_10007217(byte *param_1,uint *param_2);
void __cdecl FUN_1000722c(byte *param_1,uint *param_2);
void FUN_10007250(void);
void __cdecl FUN_1000725f(short param_1);
undefined2 FUN_1000726d(void);
void __cdecl FUN_10007278(char *param_1,char *param_2,undefined4 *param_3,uint param_4,undefined4 *param_5,uint param_6,uint param_7,char *param_8);
undefined4 FUN_1000731c(void);
bool FUN_100074de(void);
void FUN_10007507(void);
undefined4 __cdecl FUN_10007546(char *param_1);
void __cdecl FUN_10007570(undefined4 param_1);
undefined4 FUN_1000757d(void);
void FUN_100075b0(void);
void __cdecl FUN_10007659(undefined4 *param_1);
void __cdecl FUN_1000767e(undefined *param_1);
void __cdecl FUN_10007695(int *param_1);
void __cdecl FUN_10007704(undefined4 *param_1);
void __cdecl FUN_1000787d(undefined *param_1);
void __cdecl FUN_10007894(undefined *param_1);
void __cdecl FUN_100078ab(undefined *param_1);
undefined4 __cdecl FUN_100078c2(char *param_1,int param_2,int param_3);
int * __cdecl FUN_10007a48(char *param_1);
undefined4 * FUN_10007ab3(void);
int * __cdecl FUN_10007af4(char *param_1);
undefined4 FUN_10007de3(void);
undefined4 __cdecl FUN_1000832e(undefined4 *param_1,undefined4 *param_2);
undefined4 FUN_100083c7(void);
undefined4 __cdecl FUN_10008446(int *param_1);
undefined4 * __cdecl FUN_100084d7(undefined4 *param_1);
void * __cdecl FUN_10008550(uint param_1);
undefined4 * FUN_100085c4(void);
void * __cdecl FUN_100085f7(uint param_1);
undefined4 __cdecl FUN_1000866b(ushort param_1,ushort param_2);
undefined4 __cdecl FUN_100086e5(ushort param_1,undefined4 param_2);
undefined4 __cdecl FUN_10008781(undefined4 *param_1,undefined4 *param_2);
void FUN_10008818(void);
undefined4 * FUN_1000882c(void);
void __cdecl FUN_10008886(undefined4 *param_1);
void __cdecl FUN_100088eb(int *param_1);
void __cdecl FUN_10008952(undefined *param_1);
bool __cdecl FUN_10008969(undefined2 *param_1);
undefined4 __cdecl FUN_10008996(undefined2 *param_1,short param_2);
undefined4 __cdecl FUN_10008a40(undefined4 *param_1,short param_2,short param_3);
void __cdecl FUN_10008b64(undefined *param_1);
undefined4 __cdecl FUN_10008c40(undefined2 *param_1,ushort param_2);
void FUN_10008cba(void);
int __cdecl FUN_10008ce5(undefined4 param_1,ushort param_2);
undefined4 __cdecl FUN_10008d2c(double *param_1,undefined4 param_2,ushort param_3,undefined4 param_4);
bool __cdecl FUN_10008d79(undefined *param_1,undefined4 param_2,double *param_3);
bool __cdecl FUN_100096ec(undefined4 *param_1,undefined4 *param_2,uint param_3,undefined4 param_4,ushort param_5);
int __cdecl FUN_10009775(undefined1 *param_1,undefined4 param_2,ushort param_3,char *param_4);
uint __cdecl FUN_10009c65(char *param_1);
bool __cdecl FUN_10009d70(char *param_1);
bool __cdecl FUN_10009d86(uint *param_1,ushort param_2,ushort param_3);
void FUN_10009e0d(void);
void __cdecl FUN_10009e1c(undefined4 *param_1);
void __cdecl FUN_10009e32(int *param_1);
void __cdecl FUN_10009e50(LPCSTR param_1,LPCSTR param_2);
void FUN_1000a05d(void);
undefined2 __cdecl FUN_1000a082(undefined2 param_1);
undefined4 __cdecl FUN_1000a0a3(ushort param_1);
void __cdecl FUN_1000a0e0(ushort param_1,byte *param_2);
undefined1 * FUN_1000a1b0(void);
undefined1 * FUN_1000a1f1(void);
char * __cdecl FUN_1000a244(char *param_1);
FILE * FUN_1000a279(void);
undefined4 * __cdecl FUN_1000a316(uint param_1);
undefined * __cdecl FUN_1000a39f(uint *param_1);
void __cdecl FUN_1000a5c0(char *param_1);
undefined * FUN_1000a6bb(void);
void __cdecl FUN_1000a6db(char *param_1);
undefined * FUN_1000a7b3(void);
void __cdecl FUN_1000a7f9(DWORD param_1);
undefined * FUN_1000a808(void);
undefined * FUN_1000a820(void);
void __cdecl FUN_1000aa2d(undefined4 param_1);
undefined4 FUN_1000aa3a(void);
undefined4 __cdecl FUN_1000aa50(short param_1);
void __cdecl FUN_1000abd9(short param_1);
void __cdecl FUN_1000adfa(short param_1,short param_2,int param_3);
short __cdecl FUN_1000afd5(short param_1);
undefined4 __cdecl FUN_1000b033(short param_1,short param_2,uint *param_3,int param_4);
uint __cdecl FUN_1000b1f5(short param_1,short param_2,uint *param_3);
bool __cdecl FUN_1000b613(undefined2 *param_1,byte *param_2);
undefined4 __cdecl FUN_1000b6a9(undefined4 param_1,short param_2);
short __cdecl FUN_1000b6e5(undefined4 param_1,short param_2);
undefined4 __cdecl FUN_1000b723(short param_1,undefined2 *param_2);
undefined4 __cdecl FUN_1000b868(short param_1,byte *param_2,uint *param_3);
short __cdecl FUN_1000b8cf(byte *param_1);
undefined4 __cdecl FUN_1000b937(short param_1,undefined2 *param_2);
uint __cdecl FUN_1000b97b(byte *param_1,undefined2 *param_2);
void __cdecl FUN_1000b9e3(int param_1,uint *param_2);
void __cdecl FUN_1000bad2(byte *param_1,void *param_2);
uint __cdecl FUN_1000bb01(byte *param_1,int param_2);
void FUN_1000bc5b(void);
void __cdecl FUN_1000bcbc(char *param_1,short *param_2);
void FUN_1000bd30(void);
void __cdecl FUN_1000bf57(uint *param_1,uint *param_2,int param_3);
void FUN_1000c04e(void);
void FUN_1000c0ab(void);
undefined2 __cdecl FUN_1000c0d1(undefined2 param_1);
void FUN_1000c0e4(void);
void FUN_1000c15c(void);
void FUN_1000c345(void);
undefined4 __cdecl FUN_1000c3c6(uint param_1,uint *param_2,int param_3);
undefined4 __cdecl FUN_1000c458(uint param_1,uint *param_2);
void FUN_1000c5b3(void);
void __cdecl FUN_1000c8c6(short param_1);
bool __cdecl FUN_1000c8e1(byte *param_1);
undefined4 __cdecl FUN_1000c92b(char *param_1,int param_2);
undefined4 __cdecl FUN_1000cbec(int param_1);
char __cdecl FUN_1000cc5b(int param_1);
undefined4 __cdecl FUN_1000cd90(uint param_1);
undefined4 __cdecl FUN_1000cddd(uint param_1);
undefined4 __cdecl FUN_1000ce3b(uint param_1);
void FUN_1000ce83(void);
undefined * __cdecl FUN_1000cf05(char *param_1);
void FUN_1000cfe1(void);
uint __cdecl FUN_1000d0a4(byte *param_1);
undefined4 __cdecl FUN_1000d162(uint param_1,char *param_2,undefined4 *param_3,int param_4);
void FUN_1000d1e6(void);
uint FUN_1000d30f(void);
void FUN_1000d51b(void);
void FUN_1000d55d(void);
void FUN_1000d620(void);
void FUN_1000d760(void);
void FUN_1000d7c6(void);
void FUN_1000d813(void);
void FUN_1000d8b6(void);
void FUN_1000d8f8(void);
void FUN_1000dc20(void);
void FUN_1000dde8(void);
void FUN_1000de9f(void);
void FUN_1000e06f(void);
void FUN_1000e15f(void);
void FUN_1000e19f(void);
void __cdecl FUN_1000e1b9(int param_1);
char * __cdecl FUN_1000e1e7(int param_1);
void FUN_1000e219(void);
short __cdecl FUN_1000e278(uint *param_1,char *param_2,char *param_3,int param_4);
short FUN_1000e741(void);
void __cdecl FUN_1000ea83(char *param_1,char *param_2,undefined4 *param_3,uint param_4,undefined4 *param_5,uint param_6,char *param_7,uint param_8);
void FUN_1000eca0(void);
undefined2 __cdecl FUN_1000ecdc(undefined4 *param_1,undefined4 *param_2,undefined4 *param_3,undefined4 *param_4,undefined2 *param_5);
void FUN_1000ede4(void);
void FUN_1000ee05(void);
void FUN_1000ee30(void);
undefined * FUN_1000ee42(void);
char * FUN_1000eede(void);
void FUN_1000ef2f(void);
uint __cdecl FUN_1000ef50(uint *param_1,char *param_2,char *param_3,char *param_4,short param_5,LPCSTR param_6);
bool __cdecl FUN_1000f1c5(uint param_1,int param_2);
undefined2 FUN_1000f29e(void);
void __cdecl FUN_1000f2b0(undefined4 *param_1);
void FUN_1000f2e1(void);
void __cdecl FUN_1000f2eb(uint *param_1,char *param_2,char *param_3,int param_4);
void __cdecl FUN_1000f312(char *param_1,char *param_2,undefined4 *param_3,uint param_4,undefined4 *param_5,uint param_6,char *param_7,uint param_8);
void __cdecl FUN_1000f343(undefined4 *param_1,undefined4 *param_2,undefined4 *param_3,undefined4 *param_4,undefined2 *param_5);
void FUN_1000f369(void);
void __cdecl FUN_1000f373(byte *param_1,uint *param_2);
uint __cdecl FUN_1000f38a(byte *param_1,uint *param_2);
void FUN_1000f3c0(void);
void FUN_1000f3d0(void);
void __cdecl FUN_1000f4ff(ushort param_1,short param_2);
void __cdecl FUN_1000f5b0(short param_1,int param_2);
void __cdecl FUN_1000f6b9(ushort param_1);
void __cdecl FUN_1000f6f0(ushort param_1);
bool __cdecl FUN_1000f75f(uint param_1);
undefined2 __cdecl FUN_1000f77d(uint param_1);
bool __cdecl FUN_1000f792(ushort param_1,ushort param_2);
void __cdecl FUN_1000f7d9(ushort param_1);
void __cdecl FUN_1000f81f(ushort param_1);
void __cdecl FUN_1000fbaf(int *param_1,int *param_2,int *param_3,int *param_4,int *param_5,int *param_6);
undefined4 __cdecl FUN_1000fc1d(ushort param_1,undefined4 *param_2,uint param_3);
void __cdecl FUN_1000fd0f(ushort param_1,int param_2);
void __cdecl FUN_1000fd9a(ushort param_1);
void __cdecl FUN_1000fdc4(ushort param_1,char *param_2);
void __cdecl FUN_1000fe1b(ushort param_1,short param_2);
void __cdecl FUN_1000fe6c(ushort param_1,short param_2);
void __cdecl FUN_1000ff4b(ushort param_1,uint param_2);
void __cdecl FUN_1000ff9b(ushort param_1,uint param_2);
void __cdecl FUN_10010079(ushort param_1,int param_2,uint param_3);
void __cdecl FUN_10010156(ushort param_1);
void __cdecl FUN_10010182(ushort param_1,ushort param_2,char *param_3);
void __cdecl FUN_100101dc(ushort param_1,ushort param_2,char *param_3,char *param_4,char *param_5);
void __thiscall FUN_10010258(void *this,uint param_1);
void __cdecl FUN_100102af(char *param_1);
undefined4 __cdecl FUN_10010340(byte *param_1,int param_2);
undefined4 __cdecl FUN_100103ee(uint *param_1,byte *param_2);
undefined4 __cdecl FUN_10010479(int param_1,int param_2,uint param_3);
undefined2 __cdecl FUN_100104d3(int param_1,uint *param_2,undefined4 *param_3);
undefined4 __cdecl FUN_1001070a(undefined4 *param_1);
undefined2 __cdecl FUN_100108a2(int param_1,uint *param_2,undefined4 *param_3);
undefined4 __cdecl FUN_10010fd4(int param_1,int param_2,int *param_3,int param_4);
undefined2 __cdecl FUN_100110f4(int param_1,uint *param_2,undefined4 *param_3);
undefined2 __cdecl FUN_1001147c(int param_1,uint *param_2,undefined4 *param_3);
undefined2 __cdecl FUN_10011804(int param_1,uint *param_2,undefined4 *param_3);
undefined2 __cdecl FUN_10011b15(int param_1,uint *param_2,undefined4 *param_3);
undefined2 __cdecl FUN_10011c68(int param_1,uint *param_2,undefined4 *param_3);
void __cdecl FUN_10011f10(undefined2 param_1);
void FUN_10011f24(void);
bool FUN_10011f35(void);
void FUN_10011f47(void);
void __cdecl FUN_10011f70(int param_1);
undefined * __cdecl FUN_10011f88(int param_1,undefined4 *param_2);
undefined1 * FUN_10011fd9(void);
void __cdecl FUN_10012023(int param_1);
undefined * __cdecl FUN_1001203b(int param_1,undefined4 *param_2);
void __cdecl FUN_1001208c(int param_1);
undefined * __cdecl FUN_100120a4(int param_1,undefined4 *param_2);
uint __cdecl FUN_100120f5(int param_1);
void __cdecl FUN_100121bd(int param_1);
undefined * __cdecl FUN_100121d5(int param_1,undefined4 *param_2);
void __cdecl FUN_10012226(int param_1);
undefined * __cdecl FUN_1001223e(int param_1,undefined4 *param_2);
void __cdecl FUN_1001228f(int param_1);
undefined * __cdecl FUN_100122a7(int param_1,undefined4 *param_2);
undefined * __cdecl FUN_100122f8(int param_1);
undefined4 __cdecl FUN_100125c0(int param_1,int param_2,uint param_3,int param_4,int param_5);
void ecsLogin(void);
void ecsIfhRelease(void);
void ecsIfhGet(void);
char * __cdecl _strncpy(char *_Dest,char *_Source,size_t _Count);
undefined4 __cdecl FUN_1001288e(undefined4 param_1);
int __cdecl FUN_1001290c(undefined4 param_1);
HANDLE __cdecl FUN_1001294d(LPSECURITY_ATTRIBUTES param_1,SIZE_T param_2,int param_3,int param_4,DWORD param_5,LPDWORD param_6);
undefined4 FUN_100129b8(DWORD *param_1);
void __cdecl FUN_10012a7e(DWORD param_1);
void FUN_10012ab0(undefined *UNRECOVERED_JUMPTABLE);
void FUN_10012ae4(undefined4 param_1,undefined *UNRECOVERED_JUMPTABLE);
void FUN_10012aeb(undefined4 param_1,undefined *UNRECOVERED_JUMPTABLE);
void FUN_10012af2(PVOID param_1,PEXCEPTION_RECORD param_2);
undefined4 __cdecl FUN_10012b41(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4);
undefined4 __cdecl FUN_10012b77(undefined4 param_1,undefined4 param_2,undefined4 param_3,int param_4,int param_5);
void __cdecl FUN_10012bcb(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3);
undefined4 __cdecl FUN_10012bf0(undefined4 *param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,undefined4 param_6,undefined4 param_7);
undefined4 __cdecl FUN_10012ca6(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3);
int __cdecl FUN_10012d1b(int param_1,int param_2,int param_3,uint *param_4,uint *param_5);
void __cdecl __global_unwind2(PVOID param_1);
void __cdecl __local_unwind2(int param_1,int param_2);
int __cdecl __abnormal_termination(void);
void __fastcall __NLG_Notify1(undefined4 param_1);
void FUN_10012e6e(void);
char * __cdecl _strncat(char *_Dest,char *_Source,size_t _Count);
char * __cdecl _strrchr(char *_Str,int _Ch);
void __cdecl FUN_10012fe7(undefined *param_1);
void __cdecl FUN_10012ff2(undefined *param_1);
void FUN_1001305c(void);
void FUN_100130b4(void);
int __cdecl FUN_100130db(undefined1 *param_1,byte *param_2,undefined4 *param_3);
char * __cdecl _strchr(char *_Str,int _Val);
char * __cdecl _strstr(char *_Str,char *_SubStr);
byte * __cdecl FUN_10013280(byte *param_1,uint *param_2);
void FUN_1001340b(void);
void FUN_10013559(void);
void * __cdecl _malloc(size_t _Size);
void * __cdecl __nh_malloc(size_t _Size,int _NhFlag);
void __cdecl FUN_100135ed(uint *param_1);
void FUN_10013654(void);
void FUN_100136b3(void);
float10 __cdecl FUN_100136e9(int param_1,int param_2);
void __cdecl FUN_100136fa(int *param_1);
void FUN_100137d6(void);
void FUN_100137ed(void);
void FUN_100137ee(void);
int __cdecl FUN_10013826(undefined1 *param_1,byte *param_2);
int __thiscall FUN_10013878(void *this,byte *param_1);
void __thiscall FUN_10013903(void *this,byte *param_1);
undefined4 FUN_1001390e(undefined4 param_1,int param_2);
int entry(undefined4 param_1,int param_2,undefined4 param_3);
void __cdecl __amsg_exit(int param_1);
uint * __cdecl FUN_10013ac0(uint *param_1,uint *param_2);
uint * __cdecl FUN_10013ad0(uint *param_1,uint *param_2);
uint __cdecl FUN_10013bb0(byte *param_1,byte *param_2);
size_t __cdecl _strlen(char *_Str);
uint __thiscall FUN_10013cdb(void *this,int param_1,uint param_2);
int * __cdecl FUN_10013d50(int *param_1);
undefined1 * __cdecl FUN_10013eb0(int *param_1);
int __cdecl _strncmp(char *_Str1,char *_Str2,size_t _MaxCount);
undefined4 * __cdecl FUN_10013f10(undefined4 *param_1,undefined4 *param_2,uint param_3);
void __cdecl FUN_10014245(int *param_1,undefined4 *param_2,uint param_3,undefined *param_4);
void __cdecl FUN_10014399(undefined1 *param_1,undefined1 *param_2,int param_3,undefined *param_4);
void __cdecl FUN_100143e7(undefined1 *param_1,undefined1 *param_2,int param_3);
uint __cdecl FUN_10014413(undefined4 param_1,uint param_2,uint param_3,int param_4,undefined *param_5);
float10 __thiscall FUN_1001449f(undefined *param_1,byte *param_2);
void __cdecl FUN_100144f6(char *param_1,byte *param_2);
longlong __ftol(void);
int __cdecl FUN_10014553(undefined1 *param_1,int param_2,byte *param_3);
undefined4 __cdecl FUN_100145a4(FILE *param_1);
undefined4 __cdecl __fclose_lk(FILE *param_1);
int __cdecl FUN_10014621(char *param_1,int *param_2);
int __cdecl FUN_1001466f(int *param_1,byte *param_2,undefined4 *param_3);
int __cdecl FUN_100146aa(int *param_1,byte *param_2);
undefined4 __cdecl FUN_100146e6(LPCSTR param_1,LPCSTR param_2);
int __cdecl FUN_10014714(char *param_1);
int __cdecl FUN_10014736(char *param_1);
int __cdecl FUN_10014897(int *param_1,int param_2,DWORD param_3);
int __cdecl FUN_100148c3(int *param_1,int param_2,DWORD param_3);
void __cdecl FUN_10014950(uint param_1);
DWORD * FUN_100149c3(void);
DWORD * FUN_100149cc(void);
undefined4 * __cdecl FUN_100149d5(LPCSTR param_1,char *param_2,uint param_3);
void __cdecl FUN_10014a06(LPCSTR param_1,char *param_2);
int __cdecl FUN_10014a19(uchar *param_1);
int __cdecl FUN_10014a3a(uchar *param_1);
int __cdecl _strcmp(char *_Str1,char *_Str2);
int __cdecl _memcmp(void *_Buf1,void *_Buf2,size_t _Size);
void FUN_10014bfc(void);
void __cdecl __exit(int _Code);
void FUN_10014c3a(void);
void __cdecl FUN_10014c49(UINT param_1,int param_2,int param_3);
void FUN_10014cee(void);
void FUN_10014cf7(void);
void __cdecl FUN_10014d00(undefined4 *param_1,undefined4 *param_2);
SIZE_T __cdecl FUN_10014d1a(undefined *param_1);
void FUN_10014d84(void);
void FUN_10014dff(void);
undefined4 FUN_10014e08(void);
void FUN_10014e5c(void);
void __cdecl FUN_10014e7a(int param_1);
DWORD * FUN_10014e8d(void);
void __cdecl FUN_10014ef4(undefined *param_1);
int * __cdecl FUN_10014f94(int param_1,int param_2);
void FUN_1001502d(void);
void FUN_100150b6(void);
LONG __cdecl FUN_100150d1(int param_1,_EXCEPTION_POINTERS *param_2);
int * __cdecl FUN_1001520f(int param_1,int *param_2);
void FUN_10015311(int param_1);
undefined4 __cdecl FUN_1001532c(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int *param_5,int param_6,PVOID param_7,char param_8);
void __cdecl FUN_100153c7(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,char param_6,int param_7,PVOID param_8);
void __cdecl FUN_1001557a(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,int param_6,int param_7,PVOID param_8);
undefined4 __cdecl FUN_10015624(byte *param_1,byte *param_2,uint *param_3);
void __cdecl FUN_10015681(int param_1,undefined4 param_2,int param_3,int param_4);
void __cdecl FUN_10015735(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,byte *param_6,byte *param_7,int *param_8,int param_9,PVOID param_10);
undefined4 __cdecl FUN_100157b0(DWORD param_1,undefined4 param_2,DWORD param_3,undefined4 param_4,undefined4 param_5,int param_6,int param_7);
void FUN_1001587d(void);
void __cdecl FUN_100158f5(int param_1,int param_2,byte *param_3,byte *param_4);
void __cdecl FUN_10015ab9(int param_1);
int __cdecl FUN_10015b20(int param_1,int *param_2);
void __CallSettingFrame@12(undefined4 param_1,undefined4 param_2,int param_3);
void FUN_10015b9c(void);
void FUN_10015bfd(void);
void __cdecl FUN_10015c53(undefined4 *param_1);
int FUN_10015c80(void);
undefined4 __cdecl FUN_10015dc8(int param_1);
void FUN_10015e25(void);
undefined4 __cdecl FUN_10015ecd(undefined4 param_1);
uint __cdecl FUN_10015f15(int param_1);
void __cdecl FUN_10015f40(uint *param_1,int param_2);
int * __cdecl FUN_10016269(uint *param_1);
undefined4 * FUN_10016572(void);
int __cdecl FUN_10016623(int param_1);
undefined4 __cdecl FUN_1001671e(uint *param_1,int param_2,int param_3);
undefined ** FUN_10016a14(void);
void __cdecl FUN_10016b58(undefined **param_1);
void __cdecl FUN_10016bae(int param_1);
int __cdecl FUN_10016c70(undefined *param_1,undefined4 *param_2,uint *param_3);
void __cdecl FUN_10016cc7(int param_1,int param_2,byte *param_3);
int * __cdecl FUN_10016d0c(uint param_1);
int __cdecl FUN_10016f14(int *param_1,uint param_2,uint param_3);
undefined4 __cdecl FUN_10017038(int param_1,int *param_2,byte *param_3,uint param_4);
void FUN_100170e1(void);
void FUN_1001710a(void);
void __cdecl FUN_10017176(int param_1);
void __cdecl FUN_100171d7(int param_1);
uint __cdecl FUN_100171ec(uint param_1,int *param_2);
int __cdecl FUN_10017304(int *param_1,byte *param_2,undefined4 *param_3);
void __cdecl FUN_10017aa2(uint param_1,int *param_2,int *param_3);
void __cdecl FUN_10017ad7(uint param_1,int param_2,int *param_3,int *param_4);
void __cdecl FUN_10017b08(char *param_1,int param_2,int *param_3,int *param_4);
undefined4 __cdecl FUN_10017b40(int *param_1);
undefined8 __cdecl FUN_10017b4d(int *param_1);
undefined4 __cdecl FUN_10017b5d(int *param_1);
undefined4 __cdecl FUN_10017b6b(undefined4 param_1);
int __cdecl FUN_10017b86(int param_1,int param_2,int param_3,int param_4,int param_5,int param_6,int param_7);
void __fastcall FUN_10017c48(void *param_1);
undefined4 FUN_10017c5a(void);
void FUN_10017c98(void);
void __cdecl FUN_10017cc1(char *param_1);
void __cdecl __fassign(int flag,char *argument,char *number);
undefined1 * __cdecl FUN_10017dbf(undefined8 *param_1,undefined1 *param_2,int param_3,int param_4);
undefined1 * __cdecl FUN_10017e20(undefined1 *param_1,int param_2,int param_3,int *param_4,char param_5);
char * __cdecl FUN_10017ee2(undefined8 *param_1,char *param_2,size_t param_3);
char * __cdecl FUN_10017f37(char *param_1,size_t param_2,int *param_3,char param_4);
void __cdecl FUN_10017fde(undefined8 *param_1,char *param_2,size_t param_3,int param_4);
errno_t __cdecl __cfltcvt(double *arg,char *buffer,size_t sizeInBytes,int format,int precision,int caps);
void __cdecl FUN_100180c2(char *param_1,int param_2);
longlong __allmul(uint param_1,int param_2,uint param_3,int param_4);
void FUN_10018124(void);
void FUN_100182e0(void);
void FUN_10018334(void);
void FUN_100183ed(void);
void __cdecl FUN_10018486(byte *param_1,undefined4 *param_2,byte *param_3,int *param_4,int *param_5);
LPSTR FUN_1001863a(void);
void FUN_1001876c(void);
void __cdecl FUN_100187a5(DWORD param_1);
BOOL __cdecl FUN_100188f8(DWORD param_1,LPCSTR param_2,int param_3,LPWORD param_4,UINT param_5,LCID param_6,int param_7);
void FUN_10018a41(void);
void FUN_10018a6f(void);
bool __cdecl FUN_10018cf6(int *param_1);
bool __cdecl FUN_10018d17(int *param_1);
void __cdecl FUN_10018ec3(int param_1,int param_2,uint param_3,int param_4,int param_5,int param_6,int param_7,int param_8,int param_9,int param_10,int param_11);
int * __cdecl FUN_10019003(int *param_1);
undefined1 * __cdecl FUN_1001910d(int *param_1);
char * __cdecl FUN_100191d7(char *param_1,int param_2);
void __thiscall FUN_100191ff(void *this,uint *param_1,byte *param_2);
int __thiscall FUN_1001927e(void *this,int *param_1,byte *param_2,undefined4 *param_3);
uint __thiscall FUN_10019ca3(void *this,uint param_1);
uint __cdecl FUN_10019cda(undefined4 *param_1);
void __cdecl FUN_10019cf4(uint param_1,int *param_2);
uint __cdecl FUN_10019d0b(int *param_1,undefined4 *param_2);
void __cdecl FUN_10019deb(undefined1 *param_1);
void __cdecl FUN_10019e1a(int param_1,int param_2);
void __cdecl FUN_10019e3d(undefined1 *param_1);
void __cdecl FUN_10019e6c(int param_1,int param_2);
undefined4 __cdecl FUN_10019e8f(uint param_1);
undefined4 __cdecl FUN_10019eec(uint param_1);
void __cdecl __freebuf(FILE *_File);
int __cdecl FUN_10019f9a(int *param_1);
undefined4 __cdecl FUN_10019fc8(int *param_1);
int __cdecl FUN_1001a02d(int param_1);
undefined4 __cdecl FUN_1001a0d1(undefined4 *param_1);
void __cdecl FUN_1001a15e(int param_1,int *param_2);
uint __cdecl FUN_1001a188(char *param_1,uint param_2,uint param_3,int *param_4);
DWORD __cdecl FUN_1001a292(uint param_1,LONG param_2,DWORD param_3);
DWORD __cdecl FUN_1001a2f7(uint param_1,LONG param_2,DWORD param_3);
undefined4 * __cdecl FUN_1001a36a(LPCSTR param_1,char *param_2,uint param_3,undefined4 *param_4);
undefined4 * FUN_1001a4da(void);
int __cdecl __mbsnbicoll(uchar *_Str1,uchar *_Str2,size_t _MaxCount);
undefined4 FUN_1001a5e1(void);
void * __cdecl _memset(void *_Dst,int _Val,size_t _Size);
int FUN_1001a6a8(int *param_1);
bool __cdecl FUN_1001a70c(void *param_1,UINT_PTR param_2);
bool __cdecl FUN_1001a728(LPVOID param_1,UINT_PTR param_2);
bool __cdecl FUN_1001a744(FARPROC param_1);
undefined4 * __cdecl FUN_1001a760(undefined4 *param_1,undefined4 *param_2,uint param_3);
void FUN_1001aa95(void);
void __thiscall FUN_1001aaac(void *this,byte *param_1,int *param_2,void *param_3);
void * __thiscall FUN_1001aac3(void *this,byte *param_1,int *param_2,void *param_3,uint param_4);
void __thiscall FUN_1001acc8(void *this,byte *param_1,int *param_2,void *param_3);
void FUN_1001ace0(void);
int __cdecl FUN_1001ad0f(uint param_1,char *param_2,uint param_3);
int __cdecl FUN_1001ad74(DWORD param_1,char *param_2,uint param_3);
void __cdecl FUN_1001aeff(undefined4 *param_1);
byte __cdecl FUN_1001af43(uint param_1);
int __cdecl FUN_1001af6c(LPSTR param_1,WCHAR param_2);
int __cdecl FUN_1001afc5(LPSTR param_1,WCHAR param_2);
undefined8 __aulldiv(uint param_1,uint param_2,uint param_3,uint param_4);
undefined8 __aullrem(uint param_1,uint param_2,uint param_3,uint param_4);
void FUN_1001b115(void);
uint __thiscall FUN_1001b129(void *this,uint param_1,uint param_2);
void __thiscall FUN_1001b15e(void *this,uint param_1,uint param_2);
uint __cdecl FUN_1001b174(uint param_1);
uint __cdecl FUN_1001b206(uint param_1);
uint __cdecl FUN_1001b28f(byte param_1);
uint __cdecl FUN_1001b2c4(uint param_1);
uint __thiscall FUN_1001b333(void *this,uint param_1);
undefined4 __cdecl FUN_1001b3fe(int param_1,int param_2);
void __cdecl FUN_1001b447(int param_1,int param_2);
undefined4 __cdecl FUN_1001b49d(int param_1,int param_2);
void __cdecl FUN_1001b529(int param_1,undefined4 *param_2);
void __cdecl FUN_1001b544(undefined4 *param_1);
undefined4 __cdecl FUN_1001b550(int *param_1);
void __cdecl FUN_1001b56b(uint *param_1,uint param_2);
undefined4 __cdecl FUN_1001b5f8(ushort *param_1,uint *param_2,int *param_3);
void __cdecl FUN_1001b764(ushort *param_1,uint *param_2);
void __cdecl FUN_1001b77a(ushort *param_1,uint *param_2);
void __thiscall FUN_1001b790(void *this,uint *param_1,byte *param_2);
void __thiscall FUN_1001b7bd(void *this,uint *param_1,byte *param_2);
void __cdecl FUN_1001b7ea(char *param_1,int param_2,int param_3);
int * __cdecl FUN_1001b861(undefined4 param_1,undefined4 param_2,int *param_3,uint *param_4);
void __cdecl FUN_1001b8bd(uint *param_1,uint *param_2);
void __cdecl __fptrap(void);
undefined4 __cdecl FUN_1001b97c(int param_1);
int __cdecl FUN_1001bb29(int param_1);
undefined4 __cdecl FUN_1001bb73(int param_1);
void FUN_1001bba6(void);
void FUN_1001bbcf(void);
void FUN_1001bd54(void);
int __cdecl FUN_1001bd70(undefined4 param_1,undefined4 param_2,undefined4 param_3);
undefined4 __thiscall FUN_1001bdf9(void *this,ushort *param_1,int *param_2,byte *param_3,int param_4,int param_5,int param_6,int param_7);
uint __cdecl FUN_1001c2ca(LPWSTR param_1,byte *param_2,uint param_3);
uint __cdecl FUN_1001c327(LPWSTR param_1,byte *param_2,uint param_3);
uint __thiscall FUN_1001c3f0(void *this,int param_1);
longlong __fastcall __allshl(byte param_1,int param_2);
uint __cdecl FUN_1001c43f(undefined4 *param_1);
uint __cdecl FUN_1001c51b(uint param_1,int *param_2);
uint FUN_1001c60a(void);
undefined4 __cdecl FUN_1001c72d(uint param_1,HANDLE param_2);
undefined4 __cdecl FUN_1001c7a9(uint param_1);
undefined4 __cdecl FUN_1001c828(uint param_1);
void __cdecl FUN_1001c86a(uint param_1);
void __cdecl FUN_1001c8c9(uint param_1);
undefined4 __cdecl FUN_1001c8eb(uint param_1);
void __cdecl FUN_1001c97e(LPCSTR param_1,uint param_2,uint param_3);
uint __cdecl FUN_1001c995(LPCSTR param_1,uint param_2,uint param_3,uint param_4);
int __cdecl FUN_1001cc64(LCID param_1,DWORD param_2,byte *param_3,int param_4,byte *param_5,int param_6,UINT param_7);
undefined4 __cdecl FUN_1001cee1(uint *param_1,int param_2);
int __cdecl FUN_1001d068(uchar *param_1,size_t param_2);
undefined4 * __cdecl FUN_1001d0c0(int *param_1);
undefined4 __cdecl FUN_1001d127(DWORD *param_1);
uint __cdecl FUN_1001d2a9(int param_1,uint param_2);
uint __cdecl FUN_1001d2e6(uint param_1);
uint __thiscall FUN_1001d355(void *this,uint param_1);
int __cdecl FUN_1001d421(LCID param_1,uint param_2,char *param_3,int param_4,LPWSTR param_5,int param_6,UINT param_7,int param_8);
int __cdecl FUN_1001d645(char *param_1,int param_2);
undefined4 __cdecl FUN_1001d670(uint param_1,uint param_2,uint *param_3);
void __cdecl ___add_12(uint *param_1,uint *param_2);
void __cdecl FUN_1001d6ef(uint *param_1);
void __cdecl FUN_1001d71d(uint *param_1);
void __cdecl FUN_1001d74a(char *param_1,int param_2,uint *param_3);
undefined4 __cdecl FUN_1001d811(uint param_1,uint param_2,uint param_3,int param_4,byte param_5,short *param_6);
void __cdecl FUN_1001daa4(int *param_1,int *param_2);
void __cdecl FUN_1001dcc4(int *param_1,uint param_2,int param_3);
int __cdecl FUN_1001dd40(uint param_1,char *param_2,char *param_3);
int __cdecl FUN_1001dda5(uint param_1,char *param_2,char *param_3);
int __cdecl FUN_1001df7e(uint param_1,int param_2);
byte * __cdecl FUN_1001e0a3(byte *param_1,uint param_2);
uint * __cdecl FUN_1001e13a(uint *param_1);
int __cdecl FUN_1001e170(byte *param_1,byte *param_2);
byte * __cdecl FUN_1001e1b0(byte *param_1,byte *param_2);
int __cdecl FUN_1001e1ea(uint param_1,int param_2);
char * __cdecl FUN_1001e24b(uint param_1,char *param_2,uint param_3);
void __cdecl FUN_1001e278(uint param_1,char *param_2,uint param_3,int param_4);
char * __cdecl FUN_1001e2d4(uint param_1,char *param_2,uint param_3);
char * __cdecl FUN_1001e2fe(uint param_1,char *param_2,uint param_3);
uint __thiscall FUN_1001e320(void *this,byte *param_1,byte *param_2);
undefined4 __cdecl FUN_1001e3f0(byte *param_1,char *param_2,void *param_3);
void RtlUnwind(PVOID TargetFrame,PVOID TargetIp,PEXCEPTION_RECORD ExceptionRecord,PVOID ReturnValue);
undefined4 __cdecl FUN_1001e510(char *param_1,char *param_2);
void __cdecl FUN_1001e5e5(int param_1);
undefined4 __cdecl FUN_1001e665(char *param_1,char *param_2);
undefined4 FUN_1001e75e(void);
undefined4 __cdecl FUN_1001e7ea(uint param_1,uint param_2,undefined4 param_3,uint param_4,uint param_5);
undefined2 __thiscall FUN_1001ea89(void *this,short param_1,uint *param_2,undefined4 *param_3);
void __cdecl FUN_1001ed21(short param_1);
void hdTuneOpcodeCount(short param_1);
void __cdecl FUN_1001ed47(undefined2 param_1);
void hdTuneSeekSteps(undefined2 param_1);
void __thiscall FUN_1001ed6d(void *this,byte *param_1,uint *param_2);
void __cdecl FUN_1001edd0(char *param_1,int param_2);
void __cdecl FUN_1001ede5(char *param_1,short *param_2);
undefined4 FUN_1001ee44(void);
undefined4 FUN_1001fc7d(void);
undefined4 __cdecl FUN_1001fc84(undefined4 *param_1);
void __cdecl FUN_1001fc8e(undefined4 *param_1);
undefined4 __cdecl FUN_1001fcf7(undefined4 *param_1,char *param_2,uint param_3);
int __cdecl FUN_1001fdbc(int *param_1);
void __cdecl FUN_1001fde1(undefined4 *param_1);
void __cdecl FUN_1001fdf2(undefined4 *param_1);
bool __cdecl FUN_1001fe1c(undefined4 *param_1,uint *param_2,uint param_3);
void __cdecl FUN_1001fe61(int *param_1);
void FUN_1001fe72(void);
void FUN_1001fec5(void);
void FUN_1001ffa9(void);
void FUN_10020050(void);
void FUN_1002005a(void);
void __cdecl FUN_10020093(ushort param_1);
undefined4 __cdecl FUN_100201dd(char *param_1,uint param_2);
undefined4 __cdecl FUN_10020385(char *param_1);
ushort FUN_1002058f(void);
ushort __cdecl FUN_10020633(char *param_1);
void __cdecl FUN_100206a3(ushort param_1);
void FUN_10020861(void);
undefined4 __cdecl FUN_100208e0(undefined4 param_1,undefined2 param_2,undefined4 param_3,undefined2 param_4);
void __cdecl FUN_100209cb(int param_1,ushort param_2);
void __cdecl FUN_10020a62(uint param_1,int param_2,uint param_3);
void __cdecl FUN_10020beb(int param_1,undefined2 param_2);
void __cdecl FUN_10020c03(int param_1,undefined2 param_2);
undefined4 __cdecl FUN_10020c95(undefined4 param_1,int param_2);
void __cdecl FUN_10020dbb(int param_1);
void __cdecl FUN_10020dce(uint param_1);
undefined4 FUN_10020ec0(void);
undefined4 __cdecl FUN_100210aa(char *param_1,char *param_2);
undefined4 FUN_10021111(void);
undefined4 FUN_1002116a(void);
undefined4 FUN_100211c6(void);
undefined4 FUN_1002123a(void);
undefined4 FUN_10021296(void);
undefined4 FUN_1002132c(void);
undefined4 FUN_100213c2(void);
undefined4 FUN_10021452(void);
undefined4 FUN_100214e8(void);
undefined4 FUN_1002157e(void);
undefined4 FUN_10021614(void);
undefined4 FUN_100216aa(void);
undefined4 FUN_10021732(void);
undefined4 FUN_1002178b(void);
undefined4 FUN_100217e4(void);
undefined4 FUN_1002183d(void);
undefined2 FUN_10021896(void);
undefined4 FUN_100218ab(void);
undefined4 FUN_10021904(void);
undefined4 FUN_1002195d(void);
undefined4 FUN_100219b6(void);
undefined4 FUN_10021a0f(void);
undefined4 FUN_10021a68(void);
undefined4 FUN_10021afe(void);
undefined4 FUN_10021b86(void);
undefined4 FUN_10021bdf(void);
undefined4 FUN_10021c38(void);
undefined4 FUN_10021cc1(void);
undefined4 FUN_10021d57(void);
undefined4 FUN_10021e1f(void);
undefined4 FUN_10021ea8(void);
undefined4 FUN_10021f01(void);
undefined4 FUN_10021f4f(void);
undefined2 FUN_10021f85(void);
undefined4 FUN_10021fa4(void);
undefined4 FUN_1002204b(void);
undefined4 FUN_100220e4(void);
undefined4 FUN_1002213d(void);
undefined4 * __cdecl FUN_100223b8(int param_1);
void __cdecl FUN_100224ed(int *param_1,int param_2);
void __cdecl FUN_100225a8(int param_1,int param_2);
bool __cdecl FUN_100225fb(undefined4 *param_1);
int * __cdecl FUN_1002260c(short param_1);
int FUN_1002267c(void);
void __cdecl FUN_100226a0(undefined4 param_1,undefined2 param_2,undefined2 param_3,undefined2 param_4);
undefined2 __cdecl FUN_100226e0(short param_1);
undefined4 __cdecl FUN_10022700(short param_1);
undefined * __cdecl FUN_10022838(uint param_1,byte param_2,byte param_3);
void __cdecl FUN_100229d7(undefined1 param_1,undefined1 param_2);
int __cdecl FUN_1002396c(byte param_1);
byte * __cdecl FUN_10023a0d(byte param_1);
int __cdecl FUN_10023a61(int param_1);
void __cdecl FUN_10023ad0(undefined4 param_1,LONG param_2);
void __cdecl FUN_10023ae9(int param_1,DWORD param_2);
undefined4 FUN_10023b1c(void);
undefined4 FUN_10023b26(void);
undefined4 FUN_10023b30(void);
undefined4 FUN_10023b3a(void);
void __cdecl FUN_10023b44(undefined4 *param_1,uint param_2);
void __cdecl FUN_10023bb9(undefined4 *param_1,uint param_2);
void __cdecl FUN_10023c2e(int param_1);
void __cdecl FUN_10023ca5(int param_1);
void __cdecl FUN_10023ce1(DWORD param_1);
void __cdecl FUN_10023d18(LONG param_1);
void __cdecl FUN_10023dec(DWORD param_1);
undefined2 __cdecl FUN_10023ee0(undefined2 param_1);
undefined4 FUN_10023f01(void);
undefined4 FUN_10023f76(void);
undefined4 FUN_10023fc9(void);
undefined4 FUN_100240f6(void);
undefined4 FUN_10024229(void);
undefined4 FUN_10024353(void);
undefined4 FUN_10024481(void);
undefined4 FUN_100245b8(void);
undefined4 FUN_10024714(void);
undefined4 FUN_1002483d(void);
undefined4 FUN_1002489d(void);
undefined4 FUN_100248fe(void);
undefined4 FUN_1002495e(void);
undefined4 FUN_100249be(void);
undefined4 FUN_10024a17(void);
undefined4 FUN_10024a30(void);
undefined4 FUN_10024aac(void);
undefined4 FUN_10024b1e(void);
undefined4 FUN_10024b43(void);
undefined4 FUN_10024b68(void);
undefined4 FUN_10024b8d(void);
undefined4 FUN_10024bb2(void);
undefined4 FUN_10024bd7(void);
undefined4 FUN_10024bfc(void);
undefined4 FUN_10024c21(void);
undefined4 FUN_10024c46(void);
undefined4 FUN_10024c7c(void);
undefined4 FUN_10024cb2(void);
undefined4 FUN_10024ce8(void);
undefined4 FUN_10024d1e(void);
undefined4 FUN_10024d4e(void);
undefined2 FUN_10024d7e(void);
undefined2 FUN_10024d90(void);
undefined4 FUN_10024da2(void);
undefined4 FUN_10024e78(void);
undefined4 FUN_10024f38(void);
undefined2 FUN_10024fec(void);
undefined4 FUN_10024ff5(void);
undefined4 FUN_10025068(void);
undefined4 FUN_100250d2(void);
undefined4 FUN_1002517c(void);
undefined4 FUN_1002520d(void);
undefined4 FUN_10025299(void);
undefined4 FUN_100252e1(void);
undefined4 FUN_10025352(void);
undefined4 FUN_10025370(void);
undefined4 FUN_10025477(void);
undefined4 FUN_10025503(void);
undefined4 FUN_1002558a(void);
undefined4 FUN_10025611(void);
undefined4 FUN_10025699(void);
undefined4 FUN_10025721(void);
undefined4 FUN_100257a8(void);
undefined4 FUN_1002582f(void);
undefined4 FUN_100258b8(void);
undefined4 FUN_1002599f(void);
undefined2 FUN_10025a44(void);
undefined4 FUN_10025a56(void);
undefined4 FUN_10025afe(void);
undefined4 FUN_10025b1c(void);
undefined4 FUN_10025b38(void);
undefined2 FUN_10025b67(void);
undefined4 FUN_10025b82(void);
undefined4 FUN_10025bef(void);
undefined4 FUN_10025c50(void);
undefined4 FUN_10025da7(void);
undefined4 FUN_10025df7(void);
undefined2 FUN_10025e46(void);
undefined2 FUN_10025e5f(void);
undefined4 FUN_10025e71(void);
undefined4 FUN_10025ea1(void);
undefined4 FUN_10025ee2(void);
undefined4 FUN_10025fbd(void);
undefined4 FUN_1002606b(void);
undefined4 FUN_1002618e(void);
undefined4 FUN_1002621e(void);
undefined4 FUN_10026394(void);
undefined4 FUN_10026415(void);
undefined4 FUN_1002658c(void);
undefined4 FUN_100265df(void);
undefined4 FUN_1002662a(void);
undefined4 FUN_10026663(void);
undefined4 FUN_100266e4(void);
undefined4 FUN_100267a6(void);
undefined4 __cdecl FUN_1002691a(short param_1);
undefined4 __cdecl FUN_100269e8(short param_1);
undefined4 FUN_10026ab0(void);
undefined4 FUN_10026c55(void);
undefined4 FUN_10026cb5(void);
undefined4 FUN_10026ce1(void);
undefined4 FUN_10026d0d(void);
undefined4 FUN_10026d39(void);
undefined4 FUN_10026db0(void);
undefined4 FUN_10026de7(void);
undefined4 FUN_10026e6d(void);
undefined4 FUN_10026f64(void);
undefined4 FUN_10026f9e(void);
undefined4 FUN_10027051(void);
undefined4 FUN_10027141(void);
undefined4 __cdecl FUN_100271cb(short param_1);
undefined4 __cdecl FUN_1002733a(short param_1);
undefined4 FUN_100274be(void);
undefined4 FUN_10027598(void);
undefined4 FUN_100275ae(void);
undefined4 FUN_1002762f(void);
undefined4 FUN_10027670(void);
undefined4 FUN_100276b1(void);
undefined4 FUN_100276f2(void);
undefined4 FUN_10027743(void);
undefined2 FUN_10027996(void);
undefined4 FUN_100279d4(void);
undefined4 FUN_10027a27(void);
undefined4 FUN_10027a90(void);
undefined4 FUN_10027ac8(void);
undefined4 FUN_10027b53(void);
undefined4 FUN_10027cbc(void);
undefined4 FUN_10027d8d(void);
undefined4 FUN_10027e4c(void);
undefined4 FUN_10027f71(void);
undefined4 FUN_1002809b(void);
undefined4 FUN_10028123(void);
undefined4 FUN_100281fa(void);
undefined4 FUN_10028259(void);
undefined4 FUN_10028306(void);
undefined4 FUN_1002838f(void);
undefined4 FUN_100283b8(void);
undefined4 FUN_100284ab(void);
undefined4 FUN_10028550(void);
undefined4 FUN_100285c8(void);
undefined4 FUN_10028611(void);
undefined4 __cdecl FUN_10028658(short param_1);
undefined4 FUN_10028831(void);
undefined4 FUN_100288ff(void);
undefined4 FUN_10028943(void);
undefined4 FUN_100289b6(void);
undefined4 FUN_10028a1c(void);
undefined4 FUN_10028a50(void);
undefined4 FUN_10028aa6(void);
undefined4 FUN_10028ac5(void);
undefined4 FUN_10028b06(void);
undefined4 FUN_10028b25(void);
undefined4 FUN_10028b69(void);
undefined4 FUN_10028b89(void);
undefined4 FUN_10028c16(void);
undefined4 FUN_10028cc6(void);
undefined4 FUN_10028cee(void);
undefined4 FUN_10028d15(void);
void __cdecl FUN_10028d4d(int param_1,int param_2);
void __cdecl FUN_10028dd4(double *param_1);
undefined4 __cdecl FUN_10028e40(undefined4 *param_1);
void __cdecl FUN_10028e4a(undefined1 *param_1,undefined4 param_2);
undefined2 __cdecl FUN_10028e91(undefined2 *param_1);
void __cdecl FUN_10028e9c(undefined1 *param_1,undefined2 param_2);
undefined1 __cdecl FUN_10028ec2(undefined1 *param_1);
void __cdecl FUN_10028ecc(undefined1 *param_1,undefined1 param_2);
char * FUN_10028ed9(void);
DWORD __cdecl FUN_10028fff(uint *param_1);
int __cdecl FUN_10029339(int param_1,char *param_2);
undefined4 __cdecl FUN_1002959a(double param_1);
void * __cdecl __memccpy(void *_Dst,void *_Src,int _Val,size_t _MaxCount);
uint * __cdecl FUN_10029663(uint *param_1);
uint * __cdecl FUN_10029797(uint *param_1);
undefined4 __cdecl FUN_100298cb(LPCSTR param_1);
void __cdecl FUN_100298f5(LPCSTR param_1);
uint * __cdecl FUN_10029900(uint *param_1,size_t param_2);
uint * __cdecl FUN_10029927(uint param_1,uint *param_2,size_t param_3);
undefined4 __cdecl FUN_100299fc(uint param_1);
undefined4 __cdecl __setjmp3(undefined4 *param_1,int param_2,void *param_3,undefined4 param_4);
void __cdecl _longjmp(int *_Buf,int _Value);
float10 __thiscall FUN_10029b29(undefined *param_1,byte *param_2,int *param_3);
bool __cdecl FUN_10029bd3(undefined4 param_1,undefined4 param_2);
void FUN_10029be7(void);
void __cdecl FUN_10029c50(undefined4 param_1,char *param_2);
uint __cdecl FUN_10029c80(int param_1,uint param_2);
void FUN_10029ca0(int param_1);
void FUN_10029cc0(void);
uint __cdecl FUN_10029cd0(char *param_1,char *param_2);
void __cdecl FUN_10029e20(undefined2 param_1);
void FUN_10029e80(void);
void __fastcall FUN_10029ef0(undefined4 param_1,undefined4 param_2,undefined2 param_3,undefined2 *param_4);
void __cdecl FUN_10029fa0(undefined2 param_1);
void __cdecl FUN_1002a010(undefined2 param_1,uint *param_2,undefined4 *param_3);
void __cdecl FUN_1002a0c0(char *param_1);
void FUN_1002a130(void);
void __cdecl FUN_1002a180(undefined2 *param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a200(undefined2 param_1);
void __cdecl FUN_1002a260(undefined2 param_1);
void __cdecl FUN_1002a2c0(undefined2 param_1);
void __cdecl FUN_1002a320(undefined2 param_1);
void __cdecl FUN_1002a380(undefined2 param_1);
void __cdecl FUN_1002a3e0(undefined2 param_1);
void __cdecl FUN_1002a440(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a4a0(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a500(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a560(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a5c0(undefined2 param_1);
void __cdecl FUN_1002a620(undefined2 param_1);
void __cdecl FUN_1002a680(undefined2 param_1);
void __cdecl FUN_1002a6e0(undefined2 param_1);
void __cdecl FUN_1002a740(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a7a0(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a800(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a860(undefined2 param_1);
void __cdecl FUN_1002a8c0(undefined2 param_1);
void __cdecl FUN_1002a920(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a980(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002a9e0(undefined2 param_1);
void __cdecl FUN_1002aa40(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002aaa0(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002ab00(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002ab60(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002abc0(undefined2 param_1,undefined2 param_2,undefined4 param_3);
void __cdecl FUN_1002ac20(undefined2 param_1);
undefined4 __cdecl FUN_1002ac80(char *param_1,char *param_2);
undefined4 __cdecl FUN_1002ad40(char *param_1,int param_2);
void __cdecl FUN_1002ae90(char *param_1,undefined2 *param_2);
void __cdecl FUN_1002afd0(undefined2 param_1,undefined2 *param_2,undefined2 *param_3,undefined2 *param_4,undefined2 *param_5);
void __cdecl FUN_1002b080(undefined2 param_1,undefined4 param_2);
undefined4 __cdecl FUN_1002b0e0(char *param_1);
void FUN_1002b220(void);
undefined4 __cdecl FUN_1002b270(undefined4 param_1,undefined4 param_2);
void FUN_1002b290(void);
undefined4 FUN_1002b2a0(void);
void FUN_1002b2c0(void);
undefined4 __cdecl FUN_1002b2e0(undefined4 param_1);
undefined2 __cdecl FUN_1002b300(short *param_1,short *param_2);
void __cdecl FUN_1002b3d0(uint param_1);
void __cdecl FUN_1002b3e1(undefined4 *param_1);
void __cdecl FUN_1002b4c6(undefined8 param_1,int param_2,int *param_3,uint *param_4);
char * __cdecl FUN_1002b503(int *param_1,int param_2,int *param_3,uint *param_4);
void Unwind@1002b560(void);
void Unwind@1002b568(void);
void Unwind@1002b570(void);
void Unwind@1002b590(void);
void Unwind@1002b5b0(void);
void Unwind@1002b5d0(void);
void Unwind@1002b5db(void);
void Unwind@1002b5e6(void);
void Unwind@1002b5f1(void);
void Unwind@1002b5fc(void);
void Unwind@1002b607(void);
void Unwind@1002b612(void);
void Unwind@1002b61d(void);
void Unwind@1002b628(void);

