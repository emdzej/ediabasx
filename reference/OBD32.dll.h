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

typedef ulong DWORD;

typedef int (*FARPROC)(void);

typedef ushort WORD;

typedef WORD *LPWORD;

typedef DWORD *LPDWORD;

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

typedef struct HWND__ HWND__, *PHWND__;

typedef struct HWND__ *HWND;

struct HWND__ {
    int unused;
};

typedef HINSTANCE HMODULE;

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

typedef struct _COMSTAT _COMSTAT, *P_COMSTAT;

struct _COMSTAT {
    DWORD fCtsHold:1;
    DWORD fDsrHold:1;
    DWORD fRlsdHold:1;
    DWORD fXoffHold:1;
    DWORD fXoffSent:1;
    DWORD fEof:1;
    DWORD fTxim:1;
    DWORD fReserved:25;
    DWORD cbInQue;
    DWORD cbOutQue;
};

typedef struct _OVERLAPPED _OVERLAPPED, *P_OVERLAPPED;

typedef ulong ULONG_PTR;

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

struct _OVERLAPPED {
    ULONG_PTR Internal;
    ULONG_PTR InternalHigh;
    union _union_518 u;
    HANDLE hEvent;
};

typedef struct _DCB _DCB, *P_DCB;

struct _DCB {
    DWORD DCBlength;
    DWORD BaudRate;
    DWORD fBinary:1;
    DWORD fParity:1;
    DWORD fOutxCtsFlow:1;
    DWORD fOutxDsrFlow:1;
    DWORD fDtrControl:2;
    DWORD fDsrSensitivity:1;
    DWORD fTXContinueOnXoff:1;
    DWORD fOutX:1;
    DWORD fInX:1;
    DWORD fErrorChar:1;
    DWORD fNull:1;
    DWORD fRtsControl:2;
    DWORD fAbortOnError:1;
    DWORD fDummy2:17;
    WORD wReserved;
    WORD XonLim;
    WORD XoffLim;
    BYTE ByteSize;
    BYTE Parity;
    BYTE StopBits;
    char XonChar;
    char XoffChar;
    char ErrorChar;
    char EofChar;
    char EvtChar;
    WORD wReserved1;
};

typedef struct _SYSTEMTIME _SYSTEMTIME, *P_SYSTEMTIME;

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

typedef struct _DCB *LPDCB;

typedef struct _COMSTAT *LPCOMSTAT;

typedef struct _RTL_CRITICAL_SECTION _RTL_CRITICAL_SECTION, *P_RTL_CRITICAL_SECTION;

typedef struct _RTL_CRITICAL_SECTION *PRTL_CRITICAL_SECTION;

typedef PRTL_CRITICAL_SECTION LPCRITICAL_SECTION;

typedef struct _RTL_CRITICAL_SECTION_DEBUG _RTL_CRITICAL_SECTION_DEBUG, *P_RTL_CRITICAL_SECTION_DEBUG;

typedef struct _RTL_CRITICAL_SECTION_DEBUG *PRTL_CRITICAL_SECTION_DEBUG;

typedef long LONG;

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

typedef struct _OVERLAPPED *LPOVERLAPPED;

typedef struct _SYSTEMTIME *LPSYSTEMTIME;

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

typedef LONG *PLONG;

typedef CHAR *LPCH;

typedef WCHAR *LPWSTR;

typedef WCHAR *PCNZWCH;

typedef WCHAR *LPWCH;

typedef WCHAR *LPCWSTR;

typedef DWORD LCID;

typedef CHAR *PCNZCH;

typedef ULONG_PTR DWORD_PTR;

typedef void (TIMECALLBACK)(UINT, UINT, DWORD_PTR, DWORD_PTR, DWORD_PTR);

typedef TIMECALLBACK *LPTIMECALLBACK;

typedef UINT MMRESULT;

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




char __cdecl FUN_10001000(ushort *param_1,uint param_2);
undefined4 __cdecl FUN_10001120(ushort *param_1,int param_2,int param_3);
void __cdecl FUN_10001290(ushort *param_1);
void __cdecl FUN_100012d0(ushort *param_1);
bool __cdecl FUN_10001310(ushort *param_1);
bool __cdecl FUN_10001340(ushort *param_1);
void FUN_10001390(uint param_1,byte *param_2,ushort *param_3,byte *param_4);
undefined4 __cdecl FUN_100016f0(byte *param_1);
undefined4 __cdecl FUN_10001870(LPCSTR param_1);
undefined4 FUN_100019e0(void);
undefined4 __cdecl FUN_10001a50(uint param_1,byte *param_2,uint param_3);
undefined4 _SendData_Byte_delay@20(undefined4 param_1,undefined4 param_2,LPCVOID param_3);
int __cdecl FUN_10001bb0(uint param_1,byte *param_2,uint param_3);
undefined4 __cdecl FUN_10002190(undefined1 *param_1,int param_2);
uint __cdecl FUN_100022d0(ushort *param_1,uint param_2);
undefined4 __cdecl FUN_10002370(ushort *param_1,int param_2);
void FUN_10002560(void);
char __cdecl FUN_100034f0(ushort *param_1,uint param_2);
undefined4 __cdecl FUN_100036e0(ushort *param_1,int param_2);
char __cdecl FUN_10003800(ushort *param_1,uint param_2);
undefined4 __cdecl FUN_10003a20(ushort *param_1,int param_2,int param_3);
int _Wakeup_timer@20(undefined4 param_1,undefined4 param_2,int param_3);
undefined4 FUN_10003bf0(void);
void _TesterPresentService@20(undefined4 param_1,undefined4 param_2,DWORD_PTR param_3);
char __cdecl FUN_10003d20(ushort *param_1,uint param_2);
void FUN_10003ed0(void);
char __cdecl FUN_10003f10(ushort *param_1,uint param_2);
undefined4 __cdecl FUN_10004000(ushort *param_1,int param_2,int param_3);
void FUN_10004110(void);
undefined4 FUN_100041b0(undefined4 param_1,undefined4 param_2);
uint INITIALIZE(undefined2 *param_1);
uint CLOSE(undefined2 *param_1);
undefined2 GETSTATUS(short *param_1);
uint WRITEDATA(undefined2 *param_1,byte *param_2,uint param_3);
uint READDATA(undefined2 *param_1,undefined4 *param_2,undefined2 *param_3);
uint READDATA16(undefined2 *param_1,undefined4 *param_2,undefined2 *param_3);
undefined4 __cdecl FUN_10004420(int *param_1);
undefined1 __cdecl FUN_10004490(int *param_1);
undefined4 __cdecl FUN_100044c0(uint *param_1);
undefined1 FUN_10004660(void);
undefined1 FUN_10004680(void);
undefined1 FUN_100046a0(void);
undefined1 FUN_100046c0(void);
undefined1 FUN_100046e0(void);
undefined1 FUN_10004700(void);
undefined1 FUN_10004720(void);
undefined1 FUN_10004740(void);
undefined4 __cdecl FUN_10004760(undefined2 *param_1);
undefined4 __cdecl FUN_10004800(undefined2 *param_1);
undefined4 __cdecl FUN_10004890(byte *param_1);
char __cdecl FUN_10004980(ushort *param_1,int *param_2);
char __cdecl FUN_10004a40(uint *param_1,ushort param_2,uint *param_3);
char __cdecl FUN_10004c10(ushort *param_1,ushort *param_2,undefined4 *param_3);
undefined4 __cdecl FUN_10004e30(int *param_1,uint *param_2,undefined1 *param_3);
void __cdecl FUN_10004f10(ushort *param_1,ushort param_2,uint *param_3);
undefined4 __cdecl FUN_10005000(byte *param_1,ushort param_2,uint *param_3);
undefined4 __cdecl FUN_10005110(uint *param_1,ushort param_2,uint *param_3);
undefined4 __cdecl FUN_100051c0(int param_1,short param_2,undefined4 *param_3);
undefined4 __cdecl FUN_100052d0(uint *param_1,ushort param_2,uint *param_3);
undefined4 __cdecl FUN_10005400(uint *param_1,ushort param_2,uint *param_3);
undefined4 __cdecl FUN_10005510(uint *param_1,short param_2,uint *param_3);
void __cdecl FUN_10005590(int param_1);
void __cdecl FUN_10005620(int param_1,char *param_2,int param_3,byte *param_4);
void __cdecl FUN_10005950(int param_1);
char * __cdecl _strchr(char *_Str,int _Val);
void * __thiscall FUN_10005a7c(void *this,byte *param_1,int *param_2,void *param_3,uint param_4);
void __thiscall FUN_10005c81(void *this,byte *param_1,int *param_2,void *param_3);
int __cdecl _strncmp(char *_Str1,char *_Str2,size_t _MaxCount);
int __cdecl FUN_10005cd8(undefined1 *param_1,byte *param_2);
int __cdecl FUN_10005d2a(uchar *param_1);
int __cdecl FUN_10005d4b(uchar *param_1);
undefined4 * __cdecl FUN_10005dd0(undefined4 *param_1,undefined4 *param_2,uint param_3);
void FUN_10006110(void);
undefined4 FUN_1000613f(undefined4 param_1,int param_2);
int entry(undefined4 param_1,int param_2,undefined4 param_3);
void __cdecl __amsg_exit(int param_1);
void __cdecl FUN_100062e8(uint param_1);
DWORD * FUN_1000635b(void);
DWORD * FUN_10006364(void);
uint __cdecl FUN_1000636d(uint param_1);
uint __thiscall FUN_100063dc(void *this,uint param_1);
uint __thiscall FUN_100064a8(void *this,int param_1,uint param_2);
uint __cdecl FUN_1000651d(uint param_1,int *param_2);
int __cdecl FUN_10006635(int *param_1,byte *param_2,undefined4 *param_3);
void __cdecl FUN_10006d76(uint param_1,int *param_2,int *param_3);
void __cdecl FUN_10006dab(uint param_1,int param_2,int *param_3,int *param_4);
void __cdecl FUN_10006ddc(char *param_1,int param_2,int *param_3,int *param_4);
undefined4 __cdecl FUN_10006e14(int *param_1);
undefined8 __cdecl FUN_10006e21(int *param_1);
undefined4 __cdecl FUN_10006e31(int *param_1);
void FUN_10006e3f(void);
void FUN_10006e68(void);
void __cdecl FUN_10006ed4(int param_1);
void __cdecl FUN_10006f35(int param_1);
int __cdecl __mbsnbicoll(uchar *_Str1,uchar *_Str2,size_t _MaxCount);
size_t __cdecl _strlen(char *_Str);
undefined4 FUN_1000700b(void);
void FUN_10007079(void);
void __cdecl __exit(int _Code);
void FUN_100070b7(void);
void __cdecl FUN_100070c6(UINT param_1,int param_2,int param_3);
void FUN_1000716b(void);
void FUN_10007174(void);
void __cdecl FUN_1000717d(undefined4 *param_1,undefined4 *param_2);
undefined4 FUN_10007197(void);
void FUN_100071eb(void);
void __cdecl FUN_10007209(int param_1);
DWORD * FUN_1000721c(void);
void __cdecl FUN_10007283(LPVOID param_1);
void FUN_10007323(void);
void FUN_100074df(void);
void FUN_10007533(void);
void FUN_100075ec(void);
void __cdecl FUN_10007685(byte *param_1,undefined4 *param_2,byte *param_3,int *param_4,int *param_5);
LPSTR FUN_10007839(void);
undefined4 __cdecl FUN_1000796b(int param_1);
void FUN_100079a7(void);
void FUN_10007a1c(void);
void __cdecl FUN_10007a55(DWORD param_1);
int __cdecl FUN_10007ba8(LCID param_1,uint param_2,char *param_3,int param_4,LPWSTR param_5,int param_6,UINT param_7,int param_8);
int __cdecl FUN_10007dcc(char *param_1,int param_2);
BOOL __cdecl FUN_10007df7(DWORD param_1,LPCSTR param_2,int param_3,LPWORD param_4,UINT param_5,LCID param_6,int param_7);
DWORD __cdecl FUN_10007f40(uint param_1,LONG param_2,DWORD param_3);
DWORD __cdecl FUN_10007fa5(uint param_1,LONG param_2,DWORD param_3);
int __cdecl FUN_10008018(uint param_1,char *param_2,uint param_3);
int __cdecl FUN_1000807d(DWORD param_1,char *param_2,uint param_3);
void __cdecl FUN_10008208(undefined4 *param_1);
byte __cdecl FUN_1000824c(uint param_1);
void __cdecl FUN_10008331(uint param_1);
void __cdecl FUN_10008360(int param_1,int param_2);
void __cdecl FUN_10008383(uint param_1);
void __cdecl FUN_100083b2(int param_1,int param_2);
int __cdecl FUN_100083d5(LPSTR param_1,WCHAR param_2);
int __cdecl FUN_1000842e(LPSTR param_1,WCHAR param_2);
undefined8 __aulldiv(uint param_1,uint param_2,uint param_3,uint param_4);
undefined8 __aullrem(uint param_1,uint param_2,uint param_3,uint param_4);
void __cdecl FUN_10008585(LPVOID param_1);
void * __cdecl _malloc(size_t _Size);
void * __cdecl __nh_malloc(size_t _Size,int _NhFlag);
int * __cdecl FUN_1000860b(uint *param_1);
int __cdecl FUN_10008659(LCID param_1,DWORD param_2,byte *param_3,int param_4,byte *param_5,int param_6,UINT param_7);
undefined4 __cdecl FUN_100088d6(int param_1);
int __cdecl FUN_10008a83(int param_1);
undefined4 __cdecl FUN_10008acd(int param_1);
void FUN_10008b00(void);
void FUN_10008b29(void);
void FUN_10008cae(void);
undefined4 __cdecl FUN_10008cca(uint *param_1,int param_2);
int __cdecl FUN_10008e51(uchar *param_1,size_t param_2);
undefined4 * __cdecl FUN_10008ea9(int *param_1);
int * __cdecl FUN_10008f10(int param_1,int param_2);
uint * __cdecl FUN_10008fa0(uint *param_1,uint *param_2);
uint * __cdecl FUN_10008fb0(uint *param_1,uint *param_2);
undefined4 * __cdecl FUN_10009090(undefined4 *param_1,undefined4 *param_2,uint param_3);
undefined4 FUN_100093c5(void);
uint __cdecl FUN_10009403(int param_1);
void __cdecl FUN_1000942e(uint *param_1,uint param_2);
int * __cdecl FUN_10009759(uint *param_1);
undefined4 * FUN_10009a62(void);
int __cdecl FUN_10009b13(int param_1);
undefined4 __cdecl FUN_10009c0e(uint *param_1,int param_2,int param_3);
int __cdecl FUN_10009f04(undefined4 param_1,undefined4 param_2,undefined4 param_3);
char * __cdecl _strncpy(char *_Dest,char *_Source,size_t _Count);
int __cdecl FUN_1000a120(byte *param_1,byte *param_2);
byte * __cdecl FUN_1000a160(byte *param_1,byte *param_2);
void * __cdecl _memset(void *_Dst,int _Val,size_t _Size);
void __cdecl __global_unwind2(PVOID param_1);
void __cdecl __local_unwind2(int param_1,int param_2);
void FUN_1000a2ce(void);
void FUN_1000a3ad(int param_1);
uint FUN_1000a3c8(void);
undefined4 __cdecl FUN_1000a4eb(uint param_1,HANDLE param_2);
undefined4 __cdecl FUN_1000a567(uint param_1);
undefined4 __cdecl FUN_1000a5e6(uint param_1);
void __cdecl FUN_1000a628(uint param_1);
void __cdecl FUN_1000a687(uint param_1);
int __cdecl FUN_1000a72a(int *param_1);
undefined4 __cdecl FUN_1000a758(int *param_1);
int __cdecl FUN_1000a7bd(int param_1);
void __cdecl __fptrap(void);
undefined4 __cdecl FUN_1000a86a(undefined4 param_1);
int * __cdecl FUN_1000a885(int *param_1,uint *param_2);
byte * __cdecl FUN_1000a9bd(byte *param_1,uint param_2);
uint * __cdecl FUN_1000aa54(uint *param_1);
uint __thiscall FUN_1000aa80(void *this,byte *param_1,byte *param_2);
undefined4 __cdecl FUN_1000ab50(byte *param_1,char *param_2,void *param_3);
undefined4 __cdecl FUN_1000ac51(FILE *param_1);
undefined4 __cdecl FUN_1000ac82(FILE *param_1);
undefined4 __cdecl FUN_1000acce(uint param_1);
uint __thiscall FUN_1000ad61(void *this,uint param_1);
undefined4 __cdecl FUN_1000ae64(uint param_1);
undefined4 __cdecl FUN_1000aec1(uint param_1);
void __cdecl __freebuf(FILE *_File);
void RtlUnwind(PVOID TargetFrame,PVOID TargetIp,PEXCEPTION_RECORD ExceptionRecord,PVOID ReturnValue);
uint * __cdecl FUN_1000af76(uint *param_1);
void __cdecl FUN_1000b0aa(LPCSTR param_1,uint param_2,uint param_3);
uint __cdecl FUN_1000b0c1(LPCSTR param_1,uint param_2,uint param_3,uint param_4);
int __cdecl FUN_1000b390(uint param_1,int param_2);
int __cdecl FUN_1000b4b5(uint param_1,char *param_2,char *param_3);
int __cdecl FUN_1000b68e(uint param_1,int param_2);

