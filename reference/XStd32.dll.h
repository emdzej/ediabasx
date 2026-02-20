typedef unsigned char   undefined;

typedef unsigned char    bool;
typedef unsigned char    byte;
typedef unsigned int    dword;
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

typedef struct _s_UnwindMapEntry _s_UnwindMapEntry, *P_s_UnwindMapEntry;

typedef struct _s_UnwindMapEntry UnwindMapEntry;

typedef int __ehstate_t;

struct _s_UnwindMapEntry {
    __ehstate_t toState;
    void (*action)(void);
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

struct _s_TryBlockMapEntry {
    __ehstate_t tryLow;
    __ehstate_t tryHigh;
    __ehstate_t catchHigh;
    int nCatches;
    HandlerType *pHandlerArray;
};

typedef struct _s_FuncInfo _s_FuncInfo, *P_s_FuncInfo;

typedef struct _s_FuncInfo FuncInfo;

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

typedef struct _cpinfo _cpinfo, *P_cpinfo;

typedef uint UINT;

typedef uchar BYTE;

struct _cpinfo {
    UINT MaxCharSize;
    BYTE DefaultChar[2];
    BYTE LeadByte[12];
};

typedef struct _cpinfo *LPCPINFO;

typedef ulong DWORD;

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

typedef struct _STARTUPINFOA *LPSTARTUPINFOA;

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

typedef void (*PTIMERAPCROUTINE)(LPVOID, DWORD, DWORD);

typedef struct _SYSTEMTIME *LPSYSTEMTIME;

typedef PTOP_LEVEL_EXCEPTION_FILTER LPTOP_LEVEL_EXCEPTION_FILTER;

typedef CHAR *LPCSTR;

typedef LONG *PLONG;

typedef CHAR *LPCH;

typedef union _LARGE_INTEGER _LARGE_INTEGER, *P_LARGE_INTEGER;

typedef struct _struct_19 _struct_19, *P_struct_19;

typedef struct _struct_20 _struct_20, *P_struct_20;

typedef double LONGLONG;

struct _struct_20 {
    DWORD LowPart;
    LONG HighPart;
};

struct _struct_19 {
    DWORD LowPart;
    LONG HighPart;
};

union _LARGE_INTEGER {
    struct _struct_19 s;
    struct _struct_20 u;
    LONGLONG QuadPart;
};

typedef union _LARGE_INTEGER LARGE_INTEGER;

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




undefined4 * FUN_10001000(void);
undefined2 FUN_10001070(void);
undefined * __cdecl FUN_10001080(ushort param_1);
undefined ** FUN_100010a0(void);
void __cdecl FUN_10001120(undefined1 param_1,int param_2);
undefined2 FUN_10001500(void);
undefined2 FUN_10001a50(void);
undefined4 FUN_10001c30(void);
undefined4 __cdecl FUN_10001f80(short param_1,char *param_2);
void FUN_10002350(void);
uint FUN_10002390(void);
undefined2 FUN_100024c0(void);
undefined4 __cdecl FUN_100024d0(undefined4 param_1,undefined4 *param_2);
short __cdecl FUN_100024e0(byte *param_1,char *param_2);
undefined4 __cdecl FUN_10002630(byte *param_1,char *param_2,short param_3);
uint __cdecl FUN_100026d0(char *param_1);
undefined4 FUN_10002780(undefined4 param_1,int param_2);
undefined4 dllLockIFH(void);
void dllExitIFH(void);
uint dllStartupIFH(LPCSTR param_1,uint *param_2);
void dllShutdownIFH(void);
byte dllCheckIFH(short param_1);
uint dllCallIFH(ushort *param_1,uint *param_2);
undefined ** FUN_10002f90(void);
void __cdecl FUN_10002fa0(short param_1);
void FUN_10003d30(void);
undefined4 FUN_10003d60(void);
short __cdecl FUN_10003df0(char *param_1,char *param_2);
undefined2 FUN_10003fc0(void);
undefined4 FUN_10004110(void);
undefined2 FUN_10004140(void);
undefined2 FUN_10004170(void);
undefined2 FUN_10004210(void);
undefined2 __cdecl FUN_10004240(int *param_1);
undefined2 __cdecl FUN_10004320(int *param_1);
undefined1 * FUN_100043e0(void);
undefined4 FUN_10004500(void);
undefined2 FUN_10004550(void);
undefined2 FUN_10004580(void);
undefined2 FUN_100045c0(void);
uint FUN_10004600(void);
ushort __cdecl FUN_10004640(undefined4 *param_1);
ushort __cdecl FUN_10004730(int *param_1,char param_2,uint param_3);
undefined4 FUN_10004860(void);
undefined4 __cdecl FUN_10004960(short param_1);
undefined4 FUN_10004ad0(void);
uint __cdecl FUN_10004ae0(LPCSTR param_1);
void FUN_10004bd0(void);
undefined4 __cdecl FUN_10004c30(char *param_1,char *param_2);
undefined2 FUN_10004d60(void);
undefined2 FUN_10004dd0(void);
undefined2 FUN_10004e60(void);
undefined2 __cdecl FUN_10004f60(LONG param_1);
undefined4 __cdecl FUN_10005000(char *param_1);
ushort __cdecl FUN_100050e0(byte *param_1);
ushort __cdecl FUN_10005250(byte *param_1);
ushort __cdecl FUN_10005490(char *param_1);
ushort __cdecl FUN_10005900(ushort param_1,char *param_2);
ushort __cdecl FUN_10005a70(ushort *param_1,int param_2);
undefined4 FUN_10005c40(void);
void __cdecl FUN_10005c60(ushort param_1);
undefined2 __cdecl FUN_10005ca0(ushort param_1,uint param_2,undefined4 *param_3);
void FUN_10005f80(void);
void FUN_10005fb0(void);
uint FUN_10005fe0(void);
undefined1 * __cdecl FUN_10006110(char *param_1);
DWORD GetTickCount(void);
undefined * FUN_10006190(void);
char * __cdecl FUN_10006240(short param_1);
void FUN_10006270(void);
void FUN_10006300(void);
undefined2 FUN_100063f0(void);
void FUN_10006410(void);
void FUN_10006490(void);
void __cdecl FUN_100064c0(short param_1);
void __cdecl FUN_10006660(short param_1);
void __cdecl FUN_10006850(ushort param_1,int param_2);
void __cdecl FUN_100068f0(char *param_1,char *param_2,char *param_3,ushort param_4,int param_5);
void __cdecl FUN_10006a90(ushort param_1,int param_2);
void __cdecl FUN_10006b30(char param_1,uint param_2,uint param_3,uint param_4);
void __cdecl FUN_10006da0(int *param_1);
void __cdecl FUN_10006e40(int *param_1);
undefined4 * thunk_FUN_10006fc0(void);
void __fastcall FUN_10006ef0(undefined4 *param_1);
undefined4 * __thiscall FUN_10006f10(void *this,byte param_1);
void __fastcall FUN_10006f30(undefined4 *param_1);
void __fastcall FUN_10006f90(undefined4 *param_1);
undefined4 * FUN_10006fc0(void);
int __fastcall FUN_10007000(int param_1);
uint __fastcall FUN_10007140(int param_1);
undefined4 * __thiscall FUN_10007210(void *this,byte param_1);
void __fastcall FUN_10007230(undefined4 *param_1);
void __thiscall FUN_10007270(void *this,undefined4 param_1,undefined4 param_2);
void __fastcall FUN_100072b0(int param_1);
uint __thiscall FUN_10007340(void *this,short *param_1,uint param_2);
undefined4 __thiscall FUN_10007440(void *this,byte *param_1,ushort param_2);
short __thiscall FUN_10007660(void *this,uint param_1,byte *param_2);
undefined4 __fastcall FUN_10007730(int param_1);
undefined4 __thiscall FUN_10007850(void *this,uint param_1,byte *param_2);
uint __thiscall FUN_10007b10(void *this,short param_1);
undefined4 __thiscall FUN_10007c40(void *this,uint param_1,byte *param_2);
void __thiscall FUN_10007e70(void *this,short param_1);
void __thiscall FUN_10007ed0(void *this,short param_1);
undefined4 __fastcall FUN_10007fd0(int param_1);
void __thiscall FUN_10008000(void *this,undefined4 param_1);
undefined4 __fastcall FUN_10008020(int param_1);
void __fastcall FUN_10008030(int param_1);
ushort __cdecl FUN_10008090(byte *param_1,byte *param_2,undefined2 *param_3);
ushort __cdecl FUN_10008130(byte *param_1,char *param_2);
undefined4 * FUN_100081b0(void);
void __cdecl FUN_10008260(undefined1 *param_1);
void __cdecl FUN_100082c0(undefined2 param_1);
undefined4 FUN_100082e0(void);
ushort __cdecl FUN_100082f0(byte *param_1,byte *param_2);
undefined4 FUN_10008390(void);
undefined ** FUN_100083d0(void);
void __cdecl FUN_10008400(undefined2 *param_1,undefined2 *param_2,undefined2 *param_3,undefined2 *param_4);
undefined * __cdecl FUN_10008500(ushort param_1);
undefined4 * __thiscall FUN_10009420(void *this,byte param_1);
void __fastcall FUN_10009440(undefined4 *param_1);
uint __thiscall FUN_10009490(void *this,undefined4 param_1,undefined4 param_2);
void __thiscall FUN_10009510(void *this,int param_1);
void __thiscall FUN_10009600(void *this,undefined2 param_1,undefined2 param_2);
void __thiscall FUN_10009620(void *this,undefined2 param_1,undefined2 param_2);
int __thiscall FUN_10009670(void *this,undefined2 *param_1,DWORD param_2);
uint __thiscall FUN_100096e0(void *this,uint *param_1,uint *param_2);
uint __thiscall FUN_10009770(void *this,undefined2 *param_1);
short __thiscall FUN_10009850(void *this,undefined2 *param_1,DWORD param_2);
uint __fastcall FUN_10009900(int param_1);
undefined4 __fastcall FUN_10009950(void *param_1);
void __fastcall FUN_100099c0(void *param_1);
undefined2 __fastcall FUN_10009a10(int param_1);
void __thiscall FUN_10009a20(void *this,undefined2 param_1);
undefined4 __fastcall FUN_10009a30(int param_1);
void __thiscall FUN_10009a40(void *this,undefined4 param_1);
undefined4 __fastcall FUN_10009a50(int param_1);
undefined4 * __thiscall FUN_10009a60(void *this,char *param_1);
undefined4 * __thiscall FUN_10009b80(void *this,byte param_1);
void __fastcall FUN_10009ba0(undefined4 *param_1);
int __thiscall FUN_10009c50(void *this,ushort param_1);
void __thiscall FUN_10009ca0(void *this,undefined2 *param_1);
short __fastcall FUN_10009cc0(int param_1);
undefined4 __thiscall FUN_10009d80(void *this,undefined2 *param_1,undefined4 param_2);
uint __thiscall FUN_10009f20(void *this,ushort param_1);
uint __thiscall FUN_10009f60(void *this,ushort param_1);
uint __thiscall FUN_10009f80(void *this,undefined2 *param_1);
short __thiscall FUN_10009fb0(void *this,undefined2 *param_1,int param_2);
short __thiscall FUN_1000a050(void *this,undefined2 *param_1,int param_2);
short __thiscall FUN_1000a130(void *this,undefined2 *param_1);
undefined4 __thiscall FUN_1000a1c0(void *this,int param_1);
uint __thiscall FUN_1000a1f0(void *this,ushort param_1,uint *param_2,uint *param_3);
int __thiscall FUN_1000a240(void *this,ushort param_1,undefined2 *param_2);
undefined2 __thiscall FUN_1000a280(void *this,ushort param_1);
uint __thiscall FUN_1000a2c0(void *this,int param_1);
void __fastcall FUN_1000a330(void *param_1);
void __thiscall FUN_1000a370(void *this,int param_1);
uint __fastcall FUN_1000a3c0(int param_1);
undefined4 * __fastcall FUN_1000a4b0(undefined4 *param_1);
undefined4 * __thiscall FUN_1000a5f0(void *this,byte param_1);
undefined4 * __thiscall FUN_1000a630(void *this,byte param_1);
void __fastcall FUN_1000a650(undefined4 *param_1);
void __fastcall FUN_1000a760(undefined4 *param_1);
void __thiscall FUN_1000a790(void *this,int param_1,uint param_2,int param_3);
undefined4 __thiscall FUN_1000a800(void *this,undefined4 param_1,undefined2 param_2);
short __thiscall FUN_1000a8c0(void *this,int param_1,uint param_2,int param_3,uint param_4,undefined4 *param_5);
uint __fastcall FUN_1000aa80(void *param_1);
void __thiscall FUN_1000ab90(void *this,int param_1);
uint __thiscall FUN_1000acc0(void *this,byte *param_1);
void __thiscall FUN_1000ade0(void *this,int param_1);
short __fastcall FUN_1000b3c0(void *param_1);
void __thiscall FUN_1000bab0(void *this,short param_1);
void __thiscall FUN_1000baf0(void *this,short param_1);
uint __fastcall FUN_1000bb10(int param_1);
undefined4 __thiscall FUN_1000bdb0(void *this,int param_1);
void __thiscall FUN_1000bdf0(void *this,ushort param_1);
undefined4 __thiscall FUN_1000be20(void *this,byte *param_1,uint *param_2,undefined4 param_3,byte *param_4);
void __fastcall FUN_1000bfc0(int param_1);
void __fastcall FUN_1000bfe0(int param_1);
uint __thiscall FUN_1000c010(void *this,void *param_1,uint param_2);
undefined4 __fastcall FUN_1000c230(int param_1);
undefined4 __thiscall FUN_1000c250(void *this,ushort param_1);
short __thiscall FUN_1000c280(void *this,ushort *param_1,undefined4 *param_2);
void __fastcall FUN_1000c3e0(int *param_1);
void __fastcall FUN_1000c460(int param_1);
undefined4 __fastcall FUN_1000c470(int *param_1);
int * __thiscall FUN_1000c500(void *this,byte param_1);
void __cdecl FUN_1000c520(uint param_1);
void FUN_1000c5b0(void);
void FUN_1000c630(void);
void FUN_1000c6f0(void);
void __cdecl FUN_1000c770(byte *param_1,byte *param_2,ushort param_3);
void FUN_1000c8b0(void);
undefined4 __cdecl FUN_1000c910(ushort param_1,byte *param_2,byte *param_3);
void FUN_1000cbb0(void);
void FUN_1000cbd0(void);
void __cdecl FUN_1000cbf0(byte *param_1,byte *param_2,ushort param_3);
void __cdecl FUN_1000ccf0(byte *param_1,byte *param_2,short param_3);
void __cdecl FUN_1000cdc0(byte *param_1,byte *param_2,short param_3,uint param_4,short param_5,short param_6);
void __cdecl FUN_1000cff0(byte *param_1,byte *param_2,ushort param_3,char *param_4,char *param_5,char *param_6);
void __cdecl FUN_1000d120(byte *param_1,byte *param_2,ushort param_3,char *param_4,char *param_5,uint param_6);
void __cdecl FUN_1000d290(byte *param_1,byte *param_2,ushort param_3,byte *param_4);
void __cdecl FUN_1000d360(ushort param_1);
undefined * FUN_1000d420(void);
void FUN_1000d480(void);
undefined4 * __thiscall FUN_1000d5a0(void *this,LONG param_1);
undefined4 * __thiscall FUN_1000d5d0(void *this,byte param_1);
void __fastcall FUN_1000d5f0(undefined4 *param_1);
void __fastcall FUN_1000d620(int param_1);
void __fastcall FUN_1000d630(void *param_1);
undefined4 __thiscall FUN_1000d650(void *this,DWORD param_1);
LPCRITICAL_SECTION __fastcall FUN_1000d680(LPCRITICAL_SECTION param_1);
void __fastcall FUN_1000d6c0(LPCRITICAL_SECTION param_1);
void __fastcall FUN_1000d700(LPCRITICAL_SECTION param_1);
void __fastcall FUN_1000d710(LPCRITICAL_SECTION param_1);
uint FUN_1000d720(void);
undefined2 FUN_1000d890(void);
short __cdecl FUN_1000d8f0(uint *param_1,char *param_2,char *param_3);
short __cdecl FUN_1000dc80(uint param_1);
short __cdecl FUN_1000dd40(uint param_1);
short __cdecl FUN_1000de10(byte *param_1,uint param_2);
uint __cdecl FUN_1000e340(byte *param_1,uint *param_2);
short __cdecl FUN_1000e740(byte *param_1,uint *param_2);
uint __cdecl FUN_1000eb70(byte *param_1,char *param_2,short param_3);
short FUN_1000eec0(void);
undefined2 FUN_1000ef70(void);
uint __cdecl FUN_1000f020(undefined2 *param_1);
undefined2 __cdecl FUN_1000f100(short param_1);
uint FUN_1000f180(void);
uint __cdecl FUN_1000f200(ushort *param_1,undefined4 *param_2);
uint __cdecl FUN_1000f2d0(ushort *param_1,undefined4 *param_2);
uint __cdecl FUN_1000f380(undefined2 *param_1,undefined2 *param_2,undefined2 *param_3,undefined2 *param_4);
uint __cdecl FUN_1000f4b0(byte *param_1);
undefined2 FUN_1000f590(void);
uint FUN_1000f5e0(void);
uint FUN_1000f650(void);
uint __cdecl FUN_1000f6c0(undefined2 param_1,uint param_2,undefined4 *param_3);
uint FUN_1000f750(void);
uint __cdecl FUN_1000f7c0(uint param_1,undefined4 *param_2);
uint FUN_1000f840(void);
uint __cdecl FUN_1000f8b0(uint param_1,undefined4 *param_2);
uint __cdecl FUN_1000f930(uint param_1,undefined4 *param_2);
uint FUN_1000f9b0(void);
uint FUN_1000fa20(void);
undefined4 __cdecl FUN_1000fa90(undefined2 *param_1);
undefined4 FUN_1000fb10(void);
void FUN_1000fb30(void);
void FUN_1000fb40(void);
undefined4 FUN_1000fb50(void);
undefined4 __cdecl FUN_1000fb70(char *param_1,char *param_2,char *param_3,undefined4 *param_4);
undefined4 __cdecl FUN_1000fc60(char *param_1,char *param_2,char *param_3,uint param_4,uint param_5);
undefined2 FUN_1000fcb0(void);
undefined2 __cdecl FUN_1000fd20(undefined1 param_1,undefined4 param_2);
undefined2 FUN_1000fda0(void);
undefined2 FUN_1000fe10(void);
undefined2 FUN_1000fe80(void);
undefined2 FUN_1000fef0(void);
undefined2 FUN_1000ff60(void);
undefined2 FUN_1000ffd0(void);
undefined2 FUN_10010040(void);
undefined2 __cdecl FUN_100100b0(uint param_1,undefined4 *param_2);
undefined2 __cdecl FUN_10010120(uint param_1,undefined4 *param_2);
undefined2 FUN_10010190(void);
undefined2 FUN_10010200(void);
undefined2 FUN_10010270(void);
undefined2 __cdecl FUN_100102e0(uint param_1,undefined4 *param_2);
undefined2 __cdecl FUN_10010350(uint param_1,undefined4 *param_2);
undefined4 * __fastcall FUN_100103b0(undefined4 *param_1);
undefined4 * __thiscall FUN_10010420(void *this,byte param_1);
void __fastcall FUN_10010440(undefined4 *param_1);
undefined4 __thiscall FUN_100104c0(void *this,undefined1 param_1);
bool __fastcall FUN_10010580(void *param_1);
undefined4 __thiscall FUN_10010590(void *this,DWORD param_1);
void __thiscall FUN_100105d0(void *this,DWORD param_1);
undefined4 __thiscall FUN_10010640(void *this,undefined1 param_1);
void FUN_100108f0(int *param_1);
undefined * Catch@10010936(void);
void FUN_10010949(void);
undefined4 * __fastcall FUN_10010970(undefined4 *param_1);
undefined4 * __thiscall FUN_10010a40(void *this,byte param_1);
void __fastcall FUN_10010a60(undefined4 *param_1);
short __thiscall FUN_10010af0(void *this,int param_1,undefined1 param_2);
void __fastcall FUN_10010bc0(void *param_1);
void __fastcall FUN_10010c30(int param_1);
ushort __thiscall FUN_10010c40(void *this,uint param_1,undefined4 param_2,undefined2 param_3,undefined4 param_4);
undefined4 __thiscall FUN_10010e40(void *this,ushort param_1);
void __fastcall FUN_10011050(int param_1);
void __fastcall FUN_100110e0(int param_1);
void __fastcall FUN_10011390(int param_1);
void __fastcall FUN_100113d0(int param_1);
undefined4 * __fastcall FUN_10011400(undefined4 *param_1);
undefined4 * __thiscall FUN_10011420(void *this,byte param_1);
void __fastcall FUN_10011440(undefined4 *param_1);
undefined4 * FUN_10011450(void);
void FUN_10011500(void);
void __cdecl FUN_10011540(int param_1);
byte * __cdecl FUN_10011560(int param_1,undefined4 *param_2);
undefined1 * FUN_100115d0(void);
void __cdecl FUN_10011610(int param_1);
byte * __cdecl FUN_10011630(int param_1,undefined4 *param_2);
void __cdecl FUN_100116a0(int param_1);
byte * __cdecl FUN_100116c0(int param_1,undefined4 *param_2);
void __cdecl FUN_10011730(int param_1);
byte * __cdecl FUN_10011750(int param_1,undefined4 *param_2);
uint __cdecl FUN_100117c0(uint param_1);
uint __thiscall FUN_1001182f(void *this,uint param_1);
void __cdecl FUN_100118fb(int *param_1);
char * __cdecl _strncpy(char *_Dest,char *_Source,size_t _Count);
char * __cdecl _strncat(char *_Dest,char *_Source,size_t _Count);
void * __cdecl operator_new(uint param_1);
uint * __cdecl FUN_10011c20(uint *param_1,char *param_2);
uint __cdecl FUN_10011ca0(uint param_1);
uint __thiscall FUN_10011d0f(void *this,uint param_1);
void __cdecl FUN_10011dda(uint param_1);
DWORD * FUN_10011e4d(void);
DWORD * FUN_10011e56(void);
undefined1 * __cdecl FUN_10011e5f(int *param_1);
void __cdecl FUN_10011e78(undefined *param_1);
void FUN_10011e8c(undefined *UNRECOVERED_JUMPTABLE);
void FUN_10011ec0(undefined4 param_1,undefined *UNRECOVERED_JUMPTABLE);
void FUN_10011ec7(undefined4 param_1,undefined *UNRECOVERED_JUMPTABLE);
void FUN_10011ece(PVOID param_1,PEXCEPTION_RECORD param_2);
undefined4 __cdecl FUN_10011f1d(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4);
undefined4 __cdecl FUN_10011f53(undefined4 param_1,undefined4 param_2,undefined4 param_3,int param_4,int param_5);
void __cdecl FUN_10011fa7(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3);
undefined4 __cdecl FUN_10011fcc(undefined4 *param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,undefined4 param_6,undefined4 param_7);
undefined4 __cdecl FUN_10012082(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3);
int __cdecl FUN_100120f7(int param_1,int param_2,int param_3,uint *param_4,uint *param_5);
void __cdecl __global_unwind2(PVOID param_1);
void __cdecl __local_unwind2(int param_1,int param_2);
int __cdecl __abnormal_termination(void);
void __fastcall __NLG_Notify1(undefined4 param_1);
void FUN_1001224a(void);
undefined8 __alldiv(uint param_1,uint param_2,uint param_3,uint param_4);
longlong __allmul(uint param_1,int param_2,uint param_3,int param_4);
int __thiscall FUN_10012354(void *this,byte *param_1);
void __thiscall FUN_100123df(void *this,byte *param_1);
void FUN_100123ea(undefined4 param_1,undefined4 param_2,int param_3,undefined *param_4);
void FUN_10012452(void);
void FUN_1001246a(undefined4 param_1,undefined4 param_2,int param_3,undefined *param_4);
void FUN_100124de(undefined4 param_1,undefined4 param_2,int param_3,undefined *param_4);
void FUN_10012548(void);
void __thiscall FUN_10012560(void *this,byte *param_1,int *param_2,void *param_3);
void * __thiscall FUN_10012577(void *this,byte *param_1,int *param_2,void *param_3,uint param_4);
void __cdecl FUN_1001277c(undefined *param_1);
void FUN_100127e6(void);
void FUN_1001283e(void);
byte * __cdecl FUN_10012865(byte *param_1,uint *param_2);
void FUN_100129f0(void);
void FUN_10012b3e(void);
DWORD GetCurrentProcessId(void);
int __cdecl FUN_10012b9a(undefined1 *param_1,byte *param_2);
int __cdecl FUN_10012bec(undefined1 *param_1,int param_2,byte *param_3);
int __cdecl FUN_10012c3d(undefined1 *param_1,int param_2,byte *param_3,undefined4 *param_4);
int * __cdecl FUN_10012c8d(int *param_1);
uint * __cdecl FUN_10012e00(uint *param_1,char param_2);
uint __cdecl FUN_10012ebc(byte *param_1,byte *param_2);
void __cdecl FUN_10012f60(byte *param_1,byte *param_2,byte *param_3,byte *param_4,byte *param_5);
HANDLE __cdecl FUN_100130a7(LPSECURITY_ATTRIBUTES param_1,SIZE_T param_2,int param_3,int param_4,DWORD param_5,LPDWORD param_6);
undefined4 FUN_10013112(DWORD *param_1);
void __cdecl FUN_100131d8(DWORD param_1);
undefined4 FUN_1001320a(undefined4 param_1,int param_2);
int entry(undefined4 param_1,int param_2,undefined4 param_3);
void __cdecl __amsg_exit(int param_1);
void FUN_100133b3(void);
void FUN_100133dc(void);
void __cdecl FUN_10013448(int param_1);
void __cdecl FUN_100134a9(int param_1);
int __cdecl FUN_100134be(LCID param_1,uint param_2,char *param_3,int param_4,LPWSTR param_5,int param_6,UINT param_7,int param_8);
uint __thiscall FUN_100136e2(void *this,int param_1,uint param_2);
int __cdecl FUN_10013757(int param_1,int param_2,int param_3,int param_4,int param_5,int param_6,int param_7);
void * __cdecl _malloc(size_t _Size);
void * __cdecl __nh_malloc(size_t _Size,int _NhFlag);
void __cdecl FUN_10013857(uint *param_1);
void FUN_100138be(void);
void FUN_1001391d(void);
uint * __cdecl FUN_10013960(uint *param_1,uint *param_2);
uint * __cdecl FUN_10013970(uint *param_1,uint *param_2);
undefined4 FUN_10013a50(void);
void FUN_10013aa4(void);
void __cdecl FUN_10013ac2(int param_1);
DWORD * FUN_10013ad5(void);
void __cdecl FUN_10013b3c(undefined *param_1);
undefined1 * __cdecl FUN_10013bdc(int *param_1);
char * __cdecl FUN_10013ca6(char *param_1,int param_2);
undefined4 __cdecl FUN_10013cce(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int *param_5,int param_6,PVOID param_7,char param_8);
void __cdecl FUN_10013d69(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,char param_6,int param_7,PVOID param_8);
void __cdecl FUN_10013f1c(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,int param_6,int param_7,PVOID param_8);
undefined4 __cdecl FUN_10013fc6(byte *param_1,byte *param_2,uint *param_3);
void __cdecl FUN_10014023(int param_1,undefined4 param_2,int param_3,int param_4);
void __cdecl FUN_100140c1(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,byte *param_6,byte *param_7,int *param_8,int param_9,PVOID param_10);
undefined4 __cdecl FUN_1001413c(DWORD param_1,undefined4 param_2,DWORD param_3,undefined4 param_4,undefined4 param_5,int param_6,int param_7);
void FUN_10014209(void);
void __cdecl FUN_10014281(int param_1,int param_2,byte *param_3,byte *param_4);
void __cdecl FUN_10014445(int param_1);
int __cdecl FUN_100144ac(int param_1,int *param_2);
void __CallSettingFrame@12(undefined4 param_1,undefined4 param_2,int param_3);
void FUN_1001451c(void);
void FUN_1001457d(void);
void FUN_10014699(int param_1);
void __cdecl FUN_100146b4(undefined4 *param_1);
int FUN_100146e1(void);
undefined4 __cdecl FUN_10014829(int param_1);
void FUN_10014886(void);
undefined4 __cdecl FUN_1001492e(undefined4 param_1);
uint __cdecl FUN_10014976(int param_1);
void __cdecl FUN_100149a1(uint *param_1,int param_2);
int * __cdecl FUN_10014cca(uint *param_1);
undefined4 * FUN_10014fd3(void);
int __cdecl FUN_10015084(int param_1);
undefined4 __cdecl FUN_1001517f(uint *param_1,int param_2,int param_3);
undefined ** FUN_10015475(void);
void __cdecl FUN_100155b9(undefined **param_1);
void __cdecl FUN_1001560f(int param_1);
int __cdecl FUN_100156d1(undefined *param_1,undefined4 *param_2,uint *param_3);
void __cdecl FUN_10015728(int param_1,int param_2,byte *param_3);
int * __cdecl FUN_1001576d(uint param_1);
int __cdecl FUN_10015975(int *param_1,uint param_2,uint param_3);
undefined4 __cdecl FUN_10015a99(int param_1,int *param_2,byte *param_3,uint param_4);
undefined4 __cdecl FUN_10015b42(undefined4 param_1);
undefined4 * __cdecl FUN_10015b60(undefined4 *param_1,undefined4 *param_2,uint param_3);
uint __cdecl FUN_10015e95(uint param_1,int *param_2);
int __cdecl FUN_10015fad(int *param_1,byte *param_2,undefined4 *param_3);
void __cdecl FUN_1001674b(uint param_1,int *param_2,int *param_3);
void __cdecl FUN_10016780(uint param_1,int param_2,int *param_3,int *param_4);
void __cdecl FUN_100167b1(char *param_1,int param_2,int *param_3,int *param_4);
undefined4 __cdecl FUN_100167e9(int *param_1);
undefined8 __cdecl FUN_100167f6(int *param_1);
undefined4 __cdecl FUN_10016806(int *param_1);
void FUN_10016814(void);
void FUN_10016842(void);
bool __cdecl FUN_10016ac9(int *param_1);
bool __cdecl FUN_10016aea(int *param_1);
void __cdecl FUN_10016c96(int param_1,int param_2,uint param_3,int param_4,int param_5,int param_6,int param_7,int param_8,int param_9,int param_10,int param_11);
int * __cdecl FUN_10016dd6(int *param_1);
undefined4 __cdecl FUN_10016ee0(int param_1);
int __cdecl FUN_1001708d(int param_1);
undefined4 __cdecl FUN_100170d7(int param_1);
void FUN_1001710a(void);
void FUN_10017133(void);
void FUN_100172b8(void);
byte * __cdecl FUN_100172d4(byte *param_1,byte *param_2,uint param_3);
size_t __cdecl _strlen(char *_Str);
int * __cdecl FUN_100173eb(int param_1,int param_2);
void FUN_10017484(void);
void FUN_1001750d(void);
void FUN_10017528(void);
void __cdecl __exit(int _Code);
void FUN_10017566(void);
void __cdecl FUN_10017575(UINT param_1,int param_2,int param_3);
void FUN_1001761a(void);
void FUN_10017623(void);
void __cdecl FUN_1001762c(undefined4 *param_1,undefined4 *param_2);
LONG __cdecl FUN_10017646(int param_1,_EXCEPTION_POINTERS *param_2);
int * __cdecl FUN_10017784(int param_1,int *param_2);
void FUN_100177be(void);
void FUN_1001797a(void);
void FUN_100179ce(void);
void FUN_10017a87(void);
void __cdecl FUN_10017b20(byte *param_1,undefined4 *param_2,byte *param_3,int *param_4,int *param_5);
LPSTR FUN_10017cd4(void);
void FUN_10017e06(void);
void __cdecl FUN_10017e3f(DWORD param_1);
int __cdecl _strcmp(char *_Str1,char *_Str2);
int __cdecl FUN_10018030(byte *param_1,byte *param_2);
int __cdecl _strncmp(char *_Str1,char *_Str2,size_t _MaxCount);
byte * __cdecl FUN_100180b0(byte *param_1,byte *param_2);
void * __cdecl _memset(void *_Dst,int _Val,size_t _Size);
void FUN_10018150(void);
BOOL __cdecl FUN_1001817f(DWORD param_1,LPCSTR param_2,int param_3,LPWORD param_4,UINT param_5,LCID param_6,int param_7);
int FUN_100182c8(int *param_1);
bool __cdecl FUN_1001832c(void *param_1,UINT_PTR param_2);
bool __cdecl FUN_10018348(LPVOID param_1,UINT_PTR param_2);
bool __cdecl FUN_10018364(FARPROC param_1);
undefined4 * __cdecl FUN_10018380(undefined4 *param_1,undefined4 *param_2,uint param_3);
void FUN_100186b5(void);
DWORD __cdecl FUN_100186cc(uint param_1,LONG param_2,DWORD param_3);
DWORD __cdecl FUN_10018731(uint param_1,LONG param_2,DWORD param_3);
int __cdecl FUN_100187a4(uint param_1,char *param_2,uint param_3);
int __cdecl FUN_10018809(DWORD param_1,char *param_2,uint param_3);
void __cdecl FUN_10018994(undefined4 *param_1);
byte __cdecl FUN_100189d8(uint param_1);
void __cdecl FUN_10018abd(uint param_1);
void __cdecl FUN_10018aec(int param_1,int param_2);
void __cdecl FUN_10018b0f(uint param_1);
void __cdecl FUN_10018b3e(int param_1,int param_2);
int __cdecl FUN_10018b61(LPSTR param_1,WCHAR param_2);
int __cdecl FUN_10018bba(LPSTR param_1,WCHAR param_2);
undefined8 __aulldiv(uint param_1,uint param_2,uint param_3,uint param_4);
undefined8 __aullrem(uint param_1,uint param_2,uint param_3,uint param_4);
int __cdecl FUN_10018d15(uchar *param_1);
int __cdecl FUN_10018d92(undefined4 param_1,undefined4 param_2,undefined4 param_3);
void __cdecl FUN_10018e1b(uint param_1,char *param_2,uint param_3,int param_4);
char * __cdecl FUN_10018e77(uint param_1,char *param_2,uint param_3);
char * __cdecl FUN_10018ea1(uint param_1,char *param_2,uint param_3);
uint __thiscall FUN_10018ec0(void *this,byte *param_1,byte *param_2);
undefined4 __cdecl FUN_10018f90(byte *param_1,char *param_2,void *param_3);
undefined4 __cdecl FUN_10019091(DWORD *param_1);
uint __cdecl FUN_10019213(int param_1,uint param_2);
uint FUN_10019250(void);
undefined4 __cdecl FUN_10019373(uint param_1,HANDLE param_2);
undefined4 __cdecl FUN_100193ef(uint param_1);
undefined4 __cdecl FUN_1001946e(uint param_1);
void __cdecl FUN_100194b0(uint param_1);
void __cdecl FUN_1001950f(uint param_1);
int __cdecl FUN_100195b2(int *param_1);
undefined4 __cdecl FUN_100195e0(int *param_1);
int __cdecl FUN_10019645(int param_1);
void __cdecl __fptrap(void);
int __cdecl __mbsnbicoll(uchar *_Str1,uchar *_Str2,size_t _MaxCount);
undefined4 FUN_10019731(void);
undefined4 __cdecl FUN_1001979f(FILE *param_1);
undefined4 __cdecl __fclose_lk(FILE *param_1);
undefined4 __cdecl FUN_1001981c(uint param_1);
int __cdecl FUN_100198af(LCID param_1,DWORD param_2,byte *param_3,int param_4,byte *param_5,int param_6,UINT param_7);
int __cdecl FUN_10019b2c(char *param_1,int param_2);
undefined4 __cdecl FUN_10019b57(uint *param_1,int param_2);
int __cdecl FUN_10019cde(uchar *param_1,size_t param_2);
undefined4 * __cdecl FUN_10019d36(int *param_1);
undefined4 __cdecl FUN_10019d9d(uint param_1);
undefined4 __cdecl FUN_10019dfa(uint param_1);
void __cdecl __freebuf(FILE *_File);
uint * __cdecl FUN_10019ea8(uint *param_1,uint param_2);
uint * __cdecl FUN_10019f3f(uint *param_1);
void RtlUnwind(PVOID TargetFrame,PVOID TargetIp,PEXCEPTION_RECORD ExceptionRecord,PVOID ReturnValue);
int __cdecl FUN_10019f76(uint param_1,char *param_2,char *param_3);
int __cdecl FUN_10019fdb(uint param_1,char *param_2,char *param_3);
void __cdecl FUN_1001a1b4(LPCSTR param_1,uint param_2,uint param_3);
uint __cdecl FUN_1001a1cb(LPCSTR param_1,uint param_2,uint param_3,uint param_4);
int __cdecl FUN_1001a49a(uint param_1,int param_2);
int __cdecl FUN_1001a5bf(uint param_1,int param_2);
void Unwind@1001a620(void);
void Unwind@1001a640(void);
void Unwind@1001a64b(void);
void Unwind@1001a670(void);
void Unwind@1001a67b(void);
void Unwind@1001a6a0(void);
void Unwind@1001a6a8(void);
void Unwind@1001a6b3(void);
void Unwind@1001a6d0(void);
void Unwind@1001a6d8(void);
void Unwind@1001a6e3(void);
void Unwind@1001a6fb(void);
void Unwind@1001a709(void);
void Unwind@1001a714(void);
void Unwind@1001a730(void);
void Unwind@1001a73b(void);
void Unwind@1001a760(void);
void Unwind@1001a768(void);
void Unwind@1001a780(void);
void Unwind@1001a788(void);
void Unwind@1001a7a0(void);

