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

typedef DWORD *LPDWORD;

typedef WORD *LPWORD;

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

typedef struct _SECURITY_ATTRIBUTES _SECURITY_ATTRIBUTES, *P_SECURITY_ATTRIBUTES;

struct _SECURITY_ATTRIBUTES {
    DWORD nLength;
    LPVOID lpSecurityDescriptor;
    BOOL bInheritHandle;
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

typedef ulong ULONG_PTR;

struct _OVERLAPPED {
    ULONG_PTR Internal;
    ULONG_PTR InternalHigh;
    union _union_518 u;
    HANDLE hEvent;
};

typedef struct _OVERLAPPED *LPOVERLAPPED;

typedef struct _SECURITY_ATTRIBUTES *LPSECURITY_ATTRIBUTES;

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

typedef long LONG;

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

typedef ULONG_PTR SIZE_T;

typedef uint size_t;




void __cdecl __best1Init(undefined4 param_1,undefined4 param_2,undefined4 param_3,char *param_4,undefined2 param_5,undefined4 param_6,char *param_7,byte *param_8,undefined2 param_9);
void __cdecl __best1Config(undefined4 param_1,undefined4 param_2,undefined4 param_3);
void __cdecl __best1Options(undefined4 param_1);
short __cdecl __best1Asm(char *param_1,char *param_2);
undefined4 * __best1AsmVersion(void);
void __best2Init(void);
void __cdecl __best2Config(undefined4 param_1,undefined4 param_2,undefined4 param_3);
void __cdecl __best2Options(undefined4 param_1,undefined4 param_2,undefined4 param_3);
short __cdecl __best2Cc(byte *param_1,char *param_2,undefined4 *param_3,LPCSTR param_4,char *param_5);
void __cdecl __best2Rev(undefined4 *param_1,char *param_2);
undefined4 __best2AsmTotal(void);
undefined4 FUN_10001190(void);
undefined4 FUN_100011a0(void);
undefined4 __cdecl __best32Startup(uint param_1,void *param_2,int param_3);
void __best32Shutdown(void);
bool __cdecl __best32LogOpen(char *param_1);
void __best32LogClose(void);
void __cdecl __best32LogLine(char *param_1);
char * __cdecl __best32MapFile(char *param_1);
void __best32FlushFiles(void);
void __cdecl FUN_100013e0(undefined4 param_1);
void __cdecl FUN_100013f0(int param_1,char *param_2);
void __cdecl FUN_10001440(byte *param_1,byte *param_2);
undefined1 * __cdecl FUN_100014f0(char *param_1);
bool __cdecl FUN_10001590(uint param_1);
undefined * FUN_10001640(void);
uint __cdecl FUN_10001650(char *param_1);
uint __cdecl FUN_100016d0(byte *param_1,short param_2);
undefined4 __cdecl FUN_100017b0(byte *param_1,byte *param_2,byte *param_3);
void __thiscall FUN_10001a20(void *this,byte *param_1,uint param_2,uint param_3,int *param_4);
void FUN_10001ab0(void);
uint __cdecl FUN_10001ad0(int param_1);
short __cdecl FUN_10001b30(char *param_1,char *param_2);
void FUN_10001d50(undefined4 param_1,undefined4 param_2,undefined4 param_3,char *param_4,undefined2 param_5,undefined4 param_6,char *param_7,byte *param_8,undefined2 param_9);
void __cdecl FUN_10001db0(undefined4 param_1,undefined4 param_2,undefined4 param_3);
void __cdecl FUN_10001df0(char *param_1,short param_2);
void __cdecl FUN_10001f50(undefined1 *param_1,short param_2);
void __cdecl FUN_10002110(undefined4 param_1,short param_2);
void FUN_10002160(void);
void FUN_100021e0(void);
void __cdecl FUN_10002200(byte *param_1);
void __cdecl FUN_100022b0(ushort param_1);
void __cdecl FUN_100022d0(byte *param_1);
void __cdecl FUN_10002340(undefined1 param_1);
void __cdecl FUN_10002370(undefined2 param_1);
void __cdecl FUN_100023b0(undefined4 param_1);
void __cdecl FUN_100023e0(char *param_1);
void FUN_100024d0(void);
void FUN_10002500(void);
int FUN_10002530(void);
void __cdecl FUN_10002540(short param_1,undefined4 param_2,undefined4 param_3);
uint FUN_10002650(void);
void __cdecl FUN_100026d0(undefined4 param_1,char *param_2,undefined4 param_3,char *param_4,byte *param_5);
void __cdecl FUN_100027f0(byte *param_1,int *param_2,byte *param_3);
void __fastcall FUN_10002960(void *param_1);
uint FUN_10002a00(void);
void __cdecl FUN_10002a40(char *param_1);
void __cdecl FUN_10002c70(int param_1);
void FUN_10002ce0(void);
void __cdecl FUN_10002d30(int param_1);
int __cdecl FUN_10002d80(char *param_1,char *param_2,int param_3,int param_4);
void __cdecl FUN_10002ed0(int param_1);
bool __cdecl FUN_10002f10(char *param_1);
char * __cdecl FUN_10002f70(char *param_1,char *param_2);
int __cdecl FUN_10003010(FILE *param_1);
int * __cdecl FUN_100030a0(int param_1);
int __cdecl FUN_100030c0(int *param_1);
char * __cdecl FUN_100031a0(char *param_1);
int __cdecl FUN_100031e0(char *param_1);
void __cdecl FUN_10003230(undefined4 param_1);
void * __cdecl FUN_10003280(size_t param_1);
char * __cdecl FUN_100032b0(char *param_1);
void __cdecl FUN_10003320(undefined *param_1);
void FUN_10003350(void);
void __cdecl FUN_10003380(undefined4 param_1);
void __cdecl FUN_10003390(uint *param_1);
void __cdecl FUN_10003470(uint *param_1);
void __cdecl FUN_10003560(char *param_1);
void FUN_100035d0(void);
uint FUN_10003640(void);
void FUN_100037b0(void);
void FUN_10003840(void);
void __cdecl FUN_10003890(char *param_1,undefined4 param_2);
void __cdecl FUN_100038d0(uint *param_1,undefined4 param_2);
void __cdecl FUN_10003930(uint *param_1,undefined4 param_2);
void __cdecl FUN_10003990(uint *param_1,undefined4 param_2);
void __cdecl FUN_100039c0(undefined4 param_1);
uint __cdecl FUN_100039e0(int param_1,undefined4 *param_2);
uint FUN_10003a70(void);
uint FUN_10003b40(void);
void __fastcall FUN_10003c00(void *param_1);
void FUN_10003c90(void);
void FUN_10003d80(void);
void FUN_10003dd0(void);
void __cdecl FUN_10003e20(int *param_1,int *param_2,char *param_3,undefined4 param_4);
undefined4 * __cdecl FUN_10003e90(undefined4 *param_1,byte *param_2);
void FUN_10003ef0(void);
undefined4 __cdecl FUN_10003f00(char *param_1);
undefined4 FUN_10003f30(void);
int FUN_10004700(void);
uint FUN_10004dd0(void);
int __cdecl FUN_10004e70(int param_1);
void FUN_10004f00(void);
undefined4 FUN_10004f30(void);
undefined1 * FUN_10004f40(void);
char FUN_10004f50(void);
undefined1 * FUN_10005020(void);
undefined4 __cdecl FUN_100050d0(int *param_1);
undefined4 FUN_100051c0(void);
undefined2 __cdecl FUN_10005210(undefined2 param_1);
undefined4 FUN_10005260(void);
void FUN_10005270(void);
uint FUN_100052c0(void);
int __cdecl FUN_10005420(byte *param_1);
void __cdecl FUN_100054d0(byte *param_1);
void __cdecl FUN_10005580(byte *param_1);
void __cdecl FUN_10005640(byte *param_1);
uint FUN_100056d0(void);
short __cdecl FUN_100057e0(byte *param_1,char *param_2,undefined4 *param_3,LPCSTR param_4,char *param_5);
void FUN_10005b70(void);
void __cdecl FUN_10005b90(undefined4 param_1,undefined4 param_2,undefined4 param_3);
void __cdecl FUN_10005bd0(undefined4 *param_1,char *param_2);
void __cdecl FUN_10005c00(uint *param_1);
void __cdecl FUN_10005c20(char *param_1,short param_2);
void __cdecl FUN_10005df0(undefined1 *param_1,short param_2);
void __cdecl FUN_10006160(undefined1 *param_1,short param_2);
void __cdecl FUN_100061e0(byte *param_1);
void FUN_10006240(void);
undefined4 __cdecl FUN_10006250(char *param_1);
undefined4 FUN_10006280(void);
void __cdecl FUN_10008620(int param_1);
void FUN_100086b0(void);
void __cdecl FUN_100086e0(byte *param_1,char *param_2);
void __cdecl FUN_10008720(byte *param_1,char *param_2);
char * __cdecl FUN_10008750(char *param_1);
undefined4 * __cdecl FUN_100087d0(byte *param_1);
int FUN_100089d0(void);
uint FUN_10009080(void);
int __cdecl FUN_10009120(int param_1);
undefined2 FUN_100091b0(void);
char FUN_10009240(void);
undefined1 * FUN_10009310(void);
undefined4 __cdecl FUN_10009360(int *param_1);
void FUN_10009450(void);
undefined4 FUN_10009490(void);
void __cdecl FUN_100094a0(undefined4 param_1);
undefined4 * FUN_100094b0(void);
char * FUN_100094c0(void);
undefined1 * FUN_100094e0(void);
void __cdecl FUN_10009570(byte *param_1);
void __cdecl FUN_10009600(byte *param_1);
void __cdecl FUN_10009990(char *param_1);
void __cdecl FUN_100099d0(char *param_1);
short __cdecl FUN_10009a50(byte *param_1,byte *param_2,char *param_3);
void __cdecl FUN_10009b80(int param_1,short param_2);
undefined4 FUN_10009ba0(void);
undefined4 * __cdecl FUN_10009bb0(undefined4 *param_1);
uint __cdecl FUN_10009bd0(char *param_1,undefined4 *param_2,int *param_3);
uint __cdecl FUN_10009d00(undefined4 *param_1,int *param_2,int *param_3,int *param_4,int *param_5);
int __cdecl FUN_10009f10(undefined4 *param_1,char *param_2,uint param_3,ushort *param_4,int *param_5);
uint __cdecl FUN_1000a010(int *param_1,char *param_2,uint param_3,undefined4 param_4);
short __cdecl FUN_1000a270(int *param_1,char *param_2,undefined4 param_3);
char * __cdecl FUN_1000a3d0(char *param_1,int param_2,undefined4 *param_3);
void FUN_1000a580(void);
void FUN_1000a590(void);
undefined4 * __cdecl FUN_1000a5c0(char *param_1);
void FUN_1000a610(void);
undefined4 * __cdecl FUN_1000a660(byte *param_1);
void __cdecl FUN_1000a6e0(byte *param_1);
undefined4 * __cdecl FUN_1000a700(undefined4 *param_1,char *param_2,undefined2 param_3,undefined2 param_4);
undefined4 * __cdecl FUN_1000a7b0(undefined4 *param_1,undefined4 *param_2);
undefined4 * __cdecl FUN_1000a830(undefined4 *param_1,char *param_2,undefined2 param_3);
undefined4 * __cdecl FUN_1000a900(undefined4 *param_1);
void __cdecl FUN_1000a980(undefined4 *param_1,short param_2);
int __cdecl FUN_1000a9b0(int param_1);
void FUN_1000a9e0(void);
undefined4 * __cdecl FUN_1000aa70(undefined4 *param_1);
undefined4 * __cdecl FUN_1000ab00(undefined4 *param_1);
void __cdecl FUN_1000aba0(int param_1);
void FUN_1000ac00(void);
undefined4 __cdecl FUN_1000ac10(char *param_1);
void FUN_1000ac60(void);
void FUN_1000acb0(void);
void FUN_1000acc0(void);
void FUN_1000ace0(void);
void FUN_1000ad00(void);
undefined2 __cdecl FUN_1000ad30(undefined2 param_1);
undefined * FUN_1000ad50(void);
undefined2 __cdecl FUN_1000ad70(undefined4 param_1,undefined2 param_2);
void FUN_1000ada0(void);
void __cdecl FUN_1000adb0(undefined2 param_1);
void __cdecl FUN_1000add0(undefined4 param_1,undefined2 param_2);
void __cdecl FUN_1000adf0(undefined2 param_1);
void FUN_1000ae10(void);
undefined4 __cdecl FUN_1000ae30(undefined *param_1);
void FUN_1000ae60(void);
void FUN_1000ae80(void);
undefined2 __cdecl FUN_1000aeb0(undefined2 *param_1);
void FUN_1000aed0(void);
void FUN_1000af00(void);
void FUN_1000af10(void);
void FUN_1000af20(void);
void FUN_1000af30(void);
void __cdecl FUN_1000af50(undefined2 param_1,int param_2);
undefined2 __cdecl FUN_1000afb0(undefined4 *param_1);
undefined2 FUN_1000b020(void);
void FUN_1000b080(void);
void FUN_1000b0b0(void);
void FUN_1000b0d0(void);
void __cdecl FUN_1000b0f0(short param_1,int param_2);
void FUN_1000b270(void);
int __cdecl FUN_1000b290(int param_1);
void __cdecl FUN_1000b710(int param_1);
void __cdecl FUN_1000b800(ushort param_1);
void __cdecl FUN_1000b8a0(int param_1,char *param_2,ushort param_3);
undefined4 * __cdecl FUN_1000baa0(undefined4 *param_1);
uint __cdecl FUN_1000bd20(undefined4 *param_1);
undefined2 __cdecl FUN_1000be90(int param_1);
undefined2 __cdecl FUN_1000c140(int param_1);
ushort __cdecl FUN_1000c270(undefined4 param_1,undefined4 param_2,ushort param_3,uint param_4,int param_5);
void __cdecl FUN_1000c600(int param_1,undefined4 param_2,uint param_3,undefined4 param_4,int param_5);
void __cdecl FUN_1000c6a0(undefined4 *param_1,undefined4 param_2,uint param_3,undefined4 param_4,int param_5);
ushort __cdecl FUN_1000c7e0(undefined4 param_1,undefined4 param_2,ushort param_3,uint param_4,int param_5);
void __cdecl FUN_1000cb60(int param_1,undefined4 param_2,uint param_3,undefined4 param_4,int param_5);
void __cdecl FUN_1000cc00(undefined4 *param_1,undefined4 param_2,uint param_3,undefined4 param_4,int param_5);
undefined4 __cdecl FUN_1000cd40(undefined4 param_1);
undefined4 __cdecl FUN_1000cdc0(byte *param_1);
void __cdecl FUN_1000cec0(int param_1);
void __cdecl FUN_1000cf60(int param_1,char *param_2);
void FUN_1000d0d0(void);
void FUN_1000d120(void);
void FUN_1000d180(void);
void __cdecl FUN_1000d1c0(undefined4 *param_1,int param_2);
void __cdecl FUN_1000d870(undefined2 param_1);
void FUN_1000dad0(void);
void FUN_1000dc90(void);
void FUN_1000de50(void);
undefined4 * __cdecl FUN_1000de70(undefined4 *param_1,char *param_2,undefined2 param_3);
void __cdecl FUN_1000df80(int param_1);
void FUN_1000dfc0(void);
void __cdecl FUN_1000dfe0(int param_1);
void __cdecl FUN_1000e020(int param_1);
void __cdecl FUN_1000e200(int param_1);
void FUN_1000e240(void);
undefined4 __cdecl FUN_1000e270(int *param_1,byte *param_2,byte *param_3);
void __cdecl FUN_1000e410(int *param_1,byte *param_2);
undefined4 __cdecl FUN_1000e490(byte *param_1);
undefined4 __cdecl FUN_1000e4b0(char *param_1);
undefined4 __cdecl FUN_1000e4e0(undefined4 *param_1);
undefined4 * __cdecl FUN_1000e510(byte *param_1);
undefined4 __thiscall FUN_1000e580(void *this,char *param_1);
undefined4 __cdecl FUN_1000e5e0(byte *param_1,char *param_2);
void __cdecl FUN_1000e870(byte *param_1);
void __cdecl FUN_1000e8a0(FILE *param_1);
undefined4 * __cdecl FUN_1000e8b0(byte *param_1);
undefined4 __cdecl FUN_1000eaa0(int *param_1,undefined4 param_2,int *param_3,int *param_4);
undefined4 * __cdecl FUN_1000eb30(int *param_1,undefined2 *param_2,int *param_3,int *param_4);
char * __cdecl _strrchr(char *_Str,int _Ch);
int __cdecl FUN_1000eec7(char *param_1,int *param_2);
char * __cdecl _strncat(char *_Dest,char *_Source,size_t _Count);
char * __cdecl _strncpy(char *_Dest,char *_Source,size_t _Count);
uint __cdecl FUN_1000f13e(char *param_1,uint param_2,uint param_3,int *param_4);
int * __thiscall FUN_1000f248(void *this,int *param_1,uint *param_2);
void __cdecl FUN_1000f4e8(undefined *param_1);
uint __cdecl FUN_1000f551(char *param_1,uint param_2,uint param_3,int *param_4);
undefined4 FUN_1000f639(undefined4 param_1,int param_2);
int entry(undefined4 param_1,int param_2,undefined4 param_3);
void __cdecl __amsg_exit(int param_1);
undefined4 __cdecl FUN_1000f7c1(LPCSTR param_1);
undefined4 __cdecl FUN_1000f7eb(FILE *param_1);
void __cdecl FUN_1000f841(LPCSTR param_1,char *param_2,uint param_3);
void __cdecl FUN_1000f861(LPCSTR param_1,char *param_2);
int __cdecl FUN_1000f874(undefined1 *param_1,byte *param_2);
int __cdecl FUN_1000f8c6(char *param_1);
int __cdecl FUN_1000fa1e(int *param_1,int param_2,DWORD param_3);
void __thiscall FUN_1000faaa(void *this,byte *param_1,int *param_2,void *param_3);
void * __thiscall FUN_1000fac1(void *this,byte *param_1,int *param_2,void *param_3,uint param_4);
void __thiscall FUN_1000fcc9(void *this,byte *param_1,int *param_2,void *param_3);
uint __cdecl FUN_1000fce0(byte *param_1,byte *param_2);
char * __cdecl FUN_1000fd7c(char *param_1,int param_2,undefined4 *param_3);
undefined4 __cdecl FUN_1000fdd3(LPCSTR param_1,byte param_2);
void FUN_1000fe17(void);
void __cdecl __exit(int _Code);
void FUN_1000fe55(void);
void __cdecl FUN_1000fe64(UINT param_1,int param_2,int param_3);
void __cdecl FUN_1000fefd(undefined4 *param_1,undefined4 *param_2);
undefined4 __cdecl FUN_1000ff17(LPCSTR param_1);
int __cdecl FUN_1000ff43(uchar *param_1);
undefined4 __cdecl FUN_1000ffc0(LPCSTR param_1);
void * __cdecl _malloc(size_t _Size);
void * __cdecl __nh_malloc(size_t _Size,int _NhFlag);
void __cdecl FUN_10010028(uint *param_1);
uint __thiscall FUN_1001009c(void *this,uint param_1);
int FUN_10010168(void);
undefined4 FUN_100101ab(void);
int __cdecl FUN_100101ff(int *param_1,byte *param_2);
uint __cdecl FUN_10010231(uint param_1,int *param_2);
uint __cdecl FUN_10010346(undefined4 *param_1);
undefined4 * __cdecl FUN_10010420(undefined4 *param_1,undefined4 *param_2,uint param_3);
int __cdecl FUN_1001080e(undefined1 *param_1,byte *param_2,undefined4 *param_3);
uint __thiscall FUN_1001085f(void *this,int param_1,uint param_2);
int __cdecl _strncmp(char *_Str1,char *_Str2,size_t _MaxCount);
int __cdecl FUN_10010920(byte *param_1,byte *param_2);
int __thiscall FUN_1001095e(void *this,byte *param_1);
void __thiscall FUN_100109e9(void *this,byte *param_1);
void __cdecl FUN_100109f4(byte *param_1,byte *param_2,byte *param_3,byte *param_4,byte *param_5);
char * __cdecl _strchr(char *_Str,int _Val);
undefined4 __cdecl FUN_10010c0c(undefined4 *param_1);
void __cdecl FUN_10010c99(int param_1,int *param_2);
size_t __cdecl _strlen(char *_Str);
int __cdecl FUN_10010d5b(undefined *param_1,char *param_2,uint param_3);
int __cdecl FUN_10010f08(int *param_1);
undefined4 __cdecl FUN_10010f43(int *param_1);
int __cdecl flsall(int param_1);
undefined4 * __cdecl FUN_10011020(undefined4 *param_1,undefined4 *param_2,uint param_3);
undefined4 __cdecl FUN_10011355(undefined4 param_1);
uint __cdecl FUN_1001139d(int param_1);
void __cdecl FUN_100113c8(uint *param_1,int param_2);
int * __cdecl FUN_100116f1(uint *param_1);
undefined4 * FUN_100119fa(void);
int __cdecl FUN_10011aab(int param_1);
undefined4 __cdecl FUN_10011ba6(uint *param_1,int param_2,int param_3);
void FUN_10011e9c(void);
undefined ** FUN_10011f6d(void);
void __cdecl FUN_100120b1(undefined **param_1);
void __cdecl FUN_10012107(int param_1);
int __cdecl FUN_100121c9(undefined *param_1,undefined4 *param_2,uint *param_3);
void __cdecl FUN_10012220(int param_1,int param_2,byte *param_3);
int * __cdecl FUN_10012265(uint param_1);
int __cdecl FUN_1001246d(int *param_1,uint param_2,uint param_3);
undefined4 __cdecl FUN_10012591(int param_1,int *param_2,byte *param_3,uint param_4);
undefined4 __cdecl FUN_1001263a(undefined4 param_1);
void __cdecl FUN_10012655(undefined4 *param_1);
int FUN_10012682(void);
undefined4 __cdecl FUN_100127ca(int param_1);
void FUN_10012827(void);
int __cdecl FUN_100128cf(uint param_1,char *param_2,char *param_3);
void FUN_10012ac5(void);
void FUN_10012c70(void);
void FUN_10012c93(void);
void FUN_10012d4c(void);
void __cdecl FUN_10012de5(byte *param_1,undefined4 *param_2,byte *param_3,int *param_4,int *param_5);
LPSTR FUN_10012f99(void);
void FUN_100130cb(void);
void __cdecl FUN_10013104(DWORD param_1);
void __cdecl FUN_10013257(undefined *param_1);
undefined4 __cdecl FUN_100132be(uint param_1);
void __cdecl __freebuf(FILE *_File);
undefined4 * __cdecl FUN_1001339c(LPCSTR param_1,char *param_2,uint param_3,undefined4 *param_4);
undefined4 * FUN_1001350c(void);
int __cdecl FUN_10013584(int *param_1,byte *param_2,undefined4 *param_3);
void __cdecl FUN_10013d22(uint param_1,int *param_2,int *param_3);
void __cdecl FUN_10013d57(uint param_1,int param_2,int *param_3,int *param_4);
void __cdecl FUN_10013d88(char *param_1,int param_2,int *param_3,int *param_4);
undefined4 __cdecl FUN_10013dc0(int *param_1);
undefined8 __cdecl FUN_10013dcd(int *param_1);
undefined4 __cdecl FUN_10013ddd(int *param_1);
DWORD __cdecl FUN_10013deb(uint param_1,LONG param_2,DWORD param_3);
int __cdecl __mbsnbicoll(uchar *_Str1,uchar *_Str2,size_t _MaxCount);
undefined4 FUN_10013ec4(void);
int __cdecl FUN_10013f32(LCID param_1,uint param_2,char *param_3,int param_4,LPWSTR param_5,int param_6,UINT param_7,int param_8);
void __cdecl FUN_10014156(undefined4 *param_1);
byte __cdecl FUN_1001419a(uint param_1);
int * __cdecl FUN_100141c0(int param_1,int param_2);
BOOL __cdecl FUN_100142c9(DWORD param_1,LPCSTR param_2,int param_3,LPWORD param_4,UINT param_5,LCID param_6,int param_7);
undefined4 __cdecl FUN_10014454(int param_1);
int __cdecl FUN_100145ed(int param_1);
undefined4 __cdecl FUN_10014637(int param_1);
void FUN_1001466a(void);
void FUN_10014693(void);
void FUN_10014818(void);
byte * __cdecl FUN_10014834(byte *param_1,byte *param_2,uint param_3);
undefined4 __cdecl FUN_100148be(uint param_1);
void * __cdecl _memset(void *_Dst,int _Val,size_t _Size);
char * __cdecl _strstr(char *_Str,char *_SubStr);
void FUN_10014a00(void);
uint * __cdecl FUN_10014a30(uint *param_1,uint *param_2);
uint * __cdecl FUN_10014a40(uint *param_1,uint *param_2);
int __cdecl FUN_10014b20(undefined4 param_1,undefined4 param_2,undefined4 param_3);
int FUN_10014ba9(void);
undefined4 __cdecl FUN_10014c3e(uint param_1,HANDLE param_2);
undefined4 __cdecl FUN_10014cb5(uint param_1);
undefined4 __cdecl FUN_10014d2f(uint param_1);
void __cdecl FUN_10014d6c(LPCSTR param_1,uint param_2,uint param_3);
undefined * __cdecl FUN_10014d83(LPCSTR param_1,uint param_2,uint param_3,uint param_4);
int __cdecl FUN_1001503c(LPSTR param_1,WCHAR param_2);
undefined8 __aulldiv(uint param_1,uint param_2,uint param_3,uint param_4);
undefined8 __aullrem(uint param_1,uint param_2,uint param_3,uint param_4);
int __cdecl FUN_10015195(LCID param_1,DWORD param_2,byte *param_3,int param_4,byte *param_5,int param_6,UINT param_7);
int __cdecl FUN_10015412(char *param_1,int param_2);
undefined4 __cdecl FUN_1001543d(uint *param_1,int param_2);
int __cdecl FUN_100155c4(uchar *param_1,size_t param_2);
undefined4 * __cdecl FUN_1001561c(int *param_1);
void __cdecl __global_unwind2(PVOID param_1);
void __cdecl __local_unwind2(int param_1,int param_2);
void FUN_1001575a(void);
void FUN_10015839(int param_1);
int __cdecl FUN_10015854(undefined *param_1,int param_2);
void __cdecl __fptrap(void);
byte * __cdecl FUN_100159a3(byte *param_1,uint param_2);
uint * __cdecl FUN_10015a16(uint *param_1);
int __cdecl FUN_10015a41(uint param_1,int param_2);
void RtlUnwind(PVOID TargetFrame,PVOID TargetIp,PEXCEPTION_RECORD ExceptionRecord,PVOID ReturnValue);
void * __cdecl __memccpy(void *_Dst,void *_Src,int _Val,size_t _MaxCount);
int __cdecl __strcmpi(char *_Str1,char *_Str2);
uint * __cdecl FUN_10015bbc(uint *param_1);
DWORD __cdecl FUN_10015c5a(uint param_1);
undefined4 __cdecl FUN_10015cd2(int param_1);
uint __thiscall FUN_10015cda(void *this,uint param_1);

