typedef unsigned char   undefined;

typedef unsigned char    bool;
typedef unsigned char    byte;
typedef unsigned int    dword;
typedef unsigned long long    GUID;
typedef pointer32 ImageBaseOffset32;

typedef unsigned char    uchar;
typedef unsigned int    uint;
typedef unsigned long    ulong;
typedef unsigned char    undefined1;
typedef unsigned short    undefined2;
typedef unsigned int    undefined4;
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

typedef struct _cpinfo _cpinfo, *P_cpinfo;

typedef uint UINT;

typedef uchar BYTE;

struct _cpinfo {
    UINT MaxCharSize;
    BYTE DefaultChar[2];
    BYTE LeadByte[12];
};

typedef struct _cpinfo *LPCPINFO;

typedef ushort WORD;

typedef ulong DWORD;

typedef int (*FARPROC)(void);

typedef struct HINSTANCE__ HINSTANCE__, *PHINSTANCE__;

typedef struct HINSTANCE__ *HINSTANCE;

struct HINSTANCE__ {
    int unused;
};

typedef void *LPCVOID;

typedef void *LPVOID;

typedef int BOOL;

typedef HINSTANCE HMODULE;

typedef WORD *LPWORD;

typedef DWORD *LPDWORD;

typedef BOOL *LPBOOL;

typedef BYTE *LPBYTE;

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

typedef struct _STARTUPINFOA _STARTUPINFOA, *P_STARTUPINFOA;

typedef char CHAR;

typedef CHAR *LPSTR;

typedef void *HANDLE;

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

typedef struct _RTL_CRITICAL_SECTION _RTL_CRITICAL_SECTION, *P_RTL_CRITICAL_SECTION;

typedef struct _RTL_CRITICAL_SECTION *PRTL_CRITICAL_SECTION;

typedef PRTL_CRITICAL_SECTION LPCRITICAL_SECTION;

typedef struct _RTL_CRITICAL_SECTION_DEBUG _RTL_CRITICAL_SECTION_DEBUG, *P_RTL_CRITICAL_SECTION_DEBUG;

typedef struct _RTL_CRITICAL_SECTION_DEBUG *PRTL_CRITICAL_SECTION_DEBUG;

typedef long LONG;

typedef ulong ULONG_PTR;

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

typedef struct _STARTUPINFOA *LPSTARTUPINFOA;

typedef union _union_518 _union_518, *P_union_518;

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

typedef struct _OVERLAPPED _OVERLAPPED, *P_OVERLAPPED;

struct _OVERLAPPED {
    ULONG_PTR Internal;
    ULONG_PTR InternalHigh;
    union _union_518 u;
    HANDLE hEvent;
};

typedef struct _OVERLAPPED *LPOVERLAPPED;

typedef struct _EXCEPTION_RECORD _EXCEPTION_RECORD, *P_EXCEPTION_RECORD;

typedef struct _EXCEPTION_RECORD EXCEPTION_RECORD;

typedef EXCEPTION_RECORD *PEXCEPTION_RECORD;

struct _EXCEPTION_RECORD {
    DWORD ExceptionCode;
    DWORD ExceptionFlags;
    struct _EXCEPTION_RECORD *ExceptionRecord;
    PVOID ExceptionAddress;
    DWORD NumberParameters;
    ULONG_PTR ExceptionInformation[15];
};

typedef wchar_t WCHAR;

typedef CHAR *LPCSTR;

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

typedef WCHAR *LPWCH;

typedef WCHAR *LPCWSTR;

typedef DWORD LCID;

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

typedef ULONG_PTR SIZE_T;

typedef uint size_t;




undefined4 FUN_10001000(undefined4 param_1,int param_2);
void FUN_10001040(void);
void ___apiCheckVersion@8(int param_1,char *param_2);
undefined4 FUN_100010a0(void);
void ___apiInitExt@20(undefined4 *param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5);
void FUN_10001600(void);
void ___apiInit@4(undefined4 *param_1);
void ___apiEnd@4(int param_1);
bool FUN_10001670(void);
undefined4 __cdecl FUN_10001680(int param_1);
void ___apiSwitchDevice@12(int param_1,undefined4 param_2,undefined4 param_3);
void ___apiJob@20(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5);
void ___apiJobData@24(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,undefined4 param_6);
void ___apiJobExt@36(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,undefined4 param_6,undefined4 param_7,undefined4 param_8,undefined4 param_9);
void ___apiJobInfo@8(int param_1,undefined4 param_2);
void ___apiResultChar@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultByte@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultInt@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultWord@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultLong@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultDWord@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultReal@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultText@20(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5);
void ___apiResultBinary@20(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5);
void ___apiResultBinaryExt@24(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,undefined4 param_6);
void ___apiResultFormat@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultNumber@12(int param_1,undefined4 param_2,undefined4 param_3);
void ___apiResultName@16(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void ___apiResultSets@8(int param_1,undefined4 param_2);
void ___apiResultVar@8(int param_1,undefined4 param_2);
void ___apiResultsNew@4(int param_1);
void ___apiResultsScope@8(int param_1,undefined4 param_2);
void ___apiResultsDelete@8(int param_1,undefined4 param_2);
undefined4 ___apiState@4(int param_1);
undefined4 ___apiStateExt@8(int param_1,undefined4 param_2);
void ___apiBreak@4(int param_1);
int ___apiErrorCode@4(int param_1);
void ___apiErrorText@12(int param_1,char *param_2,size_t param_3);
void ___apiSetConfig@12(int param_1,undefined4 param_2,undefined4 param_3);
void ___apiGetConfig@12(int param_1,undefined4 param_2,undefined4 param_3);
void ___apiTrace@8(int param_1,undefined4 param_2);
void ___apiXSysSetConfig@8(undefined4 param_1,undefined4 param_2);
void closeServer(void);
bool enableServer(int param_1);
undefined4 enableMultiThreading(int param_1);
bool __cdecl FUN_10001f90(int param_1,char *param_2);
char * __cdecl _strrchr(char *_Str,int _Ch);
char * __cdecl _strncpy(char *_Dest,char *_Source,size_t _Count);
int __thiscall FUN_1000217e(void *this,byte *param_1);
void __thiscall FUN_10002209(void *this,byte *param_1);
uint __cdecl FUN_10002214(byte *param_1,byte *param_2);
undefined4 FUN_100022b8(undefined4 param_1,int param_2);
int entry(undefined4 param_1,int param_2,undefined4 param_3);
void __cdecl __amsg_exit(int param_1);
uint __thiscall FUN_10002461(void *this,int param_1,uint param_2);
undefined4 FUN_10002514(void);
void FUN_10002568(void);
void __cdecl FUN_10002586(int param_1);
DWORD * FUN_10002599(void);
void __cdecl FUN_10002600(undefined *param_1);
void FUN_100026a0(void);
void __cdecl __exit(int _Code);
void FUN_100026de(void);
void __cdecl FUN_100026ed(UINT param_1,int param_2,int param_3);
void FUN_10002792(void);
void FUN_1000279b(void);
void __cdecl FUN_100027a4(undefined4 *param_1,undefined4 *param_2);
void FUN_100027be(void);
void FUN_1000297a(void);
void FUN_100029ce(void);
void FUN_10002a87(void);
void __cdecl FUN_10002b20(byte *param_1,undefined4 *param_2,byte *param_3,int *param_4,int *param_5);
LPSTR FUN_10002cd4(void);
void __cdecl FUN_10002e06(undefined4 *param_1);
int FUN_10002e33(void);
undefined4 __cdecl FUN_10002f7b(int param_1);
void FUN_10002fd8(void);
void FUN_10003080(void);
void __cdecl FUN_100030b9(DWORD param_1);
BOOL __cdecl FUN_1000320c(DWORD param_1,LPCSTR param_2,int param_3,LPWORD param_4,UINT param_5,LCID param_6,int param_7);
int * __cdecl FUN_10003355(int param_1,int param_2);
void FUN_100033ee(void);
void FUN_10003477(void);
void FUN_10003492(void);
void FUN_100034bb(void);
void __cdecl FUN_10003527(int param_1);
void __cdecl FUN_10003588(int param_1);
void __cdecl FUN_1000359d(undefined *param_1);
void FUN_10003607(void);
void FUN_1000365f(void);
void * __cdecl _malloc(size_t _Size);
void * __cdecl __nh_malloc(size_t _Size,int _NhFlag);
void __cdecl FUN_100036c4(uint *param_1);
void FUN_1000372b(void);
void FUN_1000378a(void);
uint * __cdecl FUN_100037c0(uint *param_1,uint *param_2);
uint * __cdecl FUN_100037d0(uint *param_1,uint *param_2);
size_t __cdecl _strlen(char *_Str);
undefined4 __cdecl FUN_1000392b(int param_1);
int __cdecl FUN_10003ad8(int param_1);
undefined4 __cdecl FUN_10003b22(int param_1);
void FUN_10003b55(void);
void FUN_10003b7e(void);
void FUN_10003d03(void);
undefined4 * __cdecl FUN_10003d20(undefined4 *param_1,undefined4 *param_2,uint param_3);
void __thiscall FUN_10004055(void *this,byte *param_1,int *param_2,void *param_3);
void * __thiscall FUN_1000406c(void *this,byte *param_1,int *param_2,void *param_3,uint param_4);
char * __cdecl _strchr(char *_Str,int _Val);
char * __cdecl _strstr(char *_Str,char *_SubStr);
int __cdecl _strncmp(char *_Str1,char *_Str2,size_t _MaxCount);
void FUN_10004410(void);
undefined4 __cdecl FUN_1000443f(undefined4 param_1);
uint __cdecl FUN_10004487(int param_1);
void __cdecl FUN_100044b2(uint *param_1,int param_2);
int * __cdecl FUN_100047db(uint *param_1);
undefined4 * FUN_10004ae4(void);
int __cdecl FUN_10004b95(int param_1);
undefined ** FUN_10004c90(void);
void __cdecl FUN_10004dd4(undefined **param_1);
void __cdecl FUN_10004e2a(int param_1);
int __cdecl FUN_10004eec(undefined *param_1,undefined4 *param_2,uint *param_3);
void __cdecl FUN_10004f43(int param_1,int param_2,byte *param_3);
int * __cdecl FUN_10004f88(uint param_1);
int __cdecl FUN_10005190(int *param_1,uint param_2,uint param_3);
int __cdecl FUN_100052b4(undefined4 param_1,undefined4 param_2,undefined4 param_3);
void * __cdecl _memset(void *_Dst,int _Val,size_t _Size);
void __cdecl __global_unwind2(PVOID param_1);
void __cdecl __local_unwind2(int param_1,int param_2);
void FUN_1000546e(void);
void FUN_1000554d(int param_1);
undefined4 __cdecl FUN_10005568(undefined4 param_1);
int __cdecl FUN_10005583(LCID param_1,uint param_2,char *param_3,int param_4,LPWSTR param_5,int param_6,UINT param_7,int param_8);
int __cdecl FUN_100057a7(char *param_1,int param_2);
DWORD * FUN_100057d2(void);
uint __cdecl FUN_100057db(uint param_1);
uint __thiscall FUN_1000584a(void *this,uint param_1);
undefined4 * __cdecl FUN_10005920(undefined4 *param_1,undefined4 *param_2,uint param_3);
int __cdecl FUN_10005cf0(byte *param_1,byte *param_2);
byte * __cdecl FUN_10005d30(byte *param_1,byte *param_2);
uint __thiscall FUN_10005d70(void *this,byte *param_1,byte *param_2);
undefined4 __cdecl FUN_10005e40(byte *param_1,char *param_2,void *param_3);
uint __thiscall FUN_10006035(void *this,uint param_1);
void RtlUnwind(PVOID TargetFrame,PVOID TargetIp,PEXCEPTION_RECORD ExceptionRecord,PVOID ReturnValue);

