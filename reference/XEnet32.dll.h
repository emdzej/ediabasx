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
    void *pVFTable;
    void *spare;
    char name[0];
};

struct _s_HandlerType {
    uint adjectives;
    struct TypeDescriptor *pType;
    ptrdiff_t dispCatchObj;
    void *addressOfHandler;
};

typedef struct CDC CDC, *PCDC;

struct CDC { // PlaceHolder Class Structure
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

typedef struct _s_TryBlockMapEntry TryBlockMapEntry;

typedef struct _s_UnwindMapEntry _s_UnwindMapEntry, *P_s_UnwindMapEntry;

struct _s_UnwindMapEntry {
    __ehstate_t toState;
    void (*action)(void);
};

typedef struct _s_UnwindMapEntry UnwindMapEntry;

typedef struct CWnd CWnd, *PCWnd;

struct CWnd { // PlaceHolder Class Structure
};

typedef struct CLIENT_ID CLIENT_ID, *PCLIENT_ID;

struct CLIENT_ID {
    void *UniqueProcess;
    void *UniqueThread;
};

typedef struct _s_FuncInfo _s_FuncInfo, *P_s_FuncInfo;

typedef struct _s_FuncInfo FuncInfo;

struct _s_FuncInfo {
    uint magicNumber_and_bbtFlags;
    __ehstate_t maxState;
    UnwindMapEntry *pUnwindMap;
    uint nTryBlocks;
    TryBlockMapEntry *pTryBlockMap;
    uint nIPMapEntries;
    void *pIPToStateMap;
};

typedef struct CCmdUI CCmdUI, *PCCmdUI;

struct CCmdUI { // PlaceHolder Class Structure
};

typedef struct CSimpleException CSimpleException, *PCSimpleException;

struct CSimpleException { // PlaceHolder Class Structure
};

typedef struct tagMSG tagMSG, *PtagMSG;

typedef struct tagMSG MSG;

typedef struct HWND__ HWND__, *PHWND__;

typedef struct HWND__ *HWND;

typedef uint UINT;

typedef uint UINT_PTR;

typedef UINT_PTR WPARAM;

typedef long LONG_PTR;

typedef LONG_PTR LPARAM;

typedef ulong DWORD;

typedef struct tagPOINT tagPOINT, *PtagPOINT;

typedef struct tagPOINT POINT;

typedef long LONG;

struct tagPOINT {
    LONG x;
    LONG y;
};

struct tagMSG {
    HWND hwnd;
    UINT message;
    WPARAM wParam;
    LPARAM lParam;
    DWORD time;
    POINT pt;
};

struct HWND__ {
    int unused;
};

typedef int BOOL;

typedef struct HDC__ HDC__, *PHDC__;

typedef struct HDC__ *HDC;

typedef BOOL (*GRAYSTRINGPROC)(HDC, LPARAM, int);

struct HDC__ {
    int unused;
};

typedef struct tagWINDOWPLACEMENT tagWINDOWPLACEMENT, *PtagWINDOWPLACEMENT;

typedef struct tagWINDOWPLACEMENT WINDOWPLACEMENT;

typedef struct tagRECT tagRECT, *PtagRECT;

typedef struct tagRECT RECT;

struct tagRECT {
    LONG left;
    LONG top;
    LONG right;
    LONG bottom;
};

struct tagWINDOWPLACEMENT {
    UINT length;
    UINT flags;
    UINT showCmd;
    POINT ptMinPosition;
    POINT ptMaxPosition;
    RECT rcNormalPosition;
};

typedef struct tagWNDCLASSA tagWNDCLASSA, *PtagWNDCLASSA;

typedef LONG_PTR LRESULT;

typedef LRESULT (*WNDPROC)(HWND, UINT, WPARAM, LPARAM);

typedef struct HINSTANCE__ HINSTANCE__, *PHINSTANCE__;

typedef struct HINSTANCE__ *HINSTANCE;

typedef struct HICON__ HICON__, *PHICON__;

typedef struct HICON__ *HICON;

typedef HICON HCURSOR;

typedef struct HBRUSH__ HBRUSH__, *PHBRUSH__;

typedef struct HBRUSH__ *HBRUSH;

typedef char CHAR;

typedef CHAR *LPCSTR;

struct HBRUSH__ {
    int unused;
};

struct tagWNDCLASSA {
    UINT style;
    WNDPROC lpfnWndProc;
    int cbClsExtra;
    int cbWndExtra;
    HINSTANCE hInstance;
    HICON hIcon;
    HCURSOR hCursor;
    HBRUSH hbrBackground;
    LPCSTR lpszMenuName;
    LPCSTR lpszClassName;
};

struct HICON__ {
    int unused;
};

struct HINSTANCE__ {
    int unused;
};

typedef struct tagMSG *LPMSG;

typedef LRESULT (*HOOKPROC)(int, WPARAM, LPARAM);

typedef struct tagWNDCLASSA WNDCLASSA;

typedef struct tagWNDCLASSA *LPWNDCLASSA;

typedef struct _cpinfo _cpinfo, *P_cpinfo;

typedef uchar BYTE;

struct _cpinfo {
    UINT MaxCharSize;
    BYTE DefaultChar[2];
    BYTE LeadByte[12];
};

typedef struct _cpinfo *LPCPINFO;

typedef struct _devicemodeA _devicemodeA, *P_devicemodeA;

typedef ushort WORD;

typedef union _union_655 _union_655, *P_union_655;

typedef union _union_658 _union_658, *P_union_658;

typedef struct _struct_656 _struct_656, *P_struct_656;

typedef struct _struct_657 _struct_657, *P_struct_657;

typedef struct _POINTL _POINTL, *P_POINTL;

typedef struct _POINTL POINTL;

struct _POINTL {
    LONG x;
    LONG y;
};

struct _struct_657 {
    POINTL dmPosition;
    DWORD dmDisplayOrientation;
    DWORD dmDisplayFixedOutput;
};

struct _struct_656 {
    short dmOrientation;
    short dmPaperSize;
    short dmPaperLength;
    short dmPaperWidth;
    short dmScale;
    short dmCopies;
    short dmDefaultSource;
    short dmPrintQuality;
};

union _union_655 {
    struct _struct_656 field0;
    struct _struct_657 field1;
};

union _union_658 {
    DWORD dmDisplayFlags;
    DWORD dmNup;
};

struct _devicemodeA {
    BYTE dmDeviceName[32];
    WORD dmSpecVersion;
    WORD dmDriverVersion;
    WORD dmSize;
    WORD dmDriverExtra;
    DWORD dmFields;
    union _union_655 field6_0x2c;
    short dmColor;
    short dmDuplex;
    short dmYResolution;
    short dmTTOption;
    short dmCollate;
    BYTE dmFormName[32];
    WORD dmLogPixels;
    DWORD dmBitsPerPel;
    DWORD dmPelsWidth;
    DWORD dmPelsHeight;
    union _union_658 field17_0x74;
    DWORD dmDisplayFrequency;
    DWORD dmICMMethod;
    DWORD dmICMIntent;
    DWORD dmMediaType;
    DWORD dmDitherType;
    DWORD dmReserved1;
    DWORD dmReserved2;
    DWORD dmPanningWidth;
    DWORD dmPanningHeight;
};

typedef struct _devicemodeA *PDEVMODEA;

typedef struct _devicemodeA *LPDEVMODEA;

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

typedef void *LPVOID;

struct _SECURITY_ATTRIBUTES {
    DWORD nLength;
    LPVOID lpSecurityDescriptor;
    BOOL bInheritHandle;
};

typedef struct _TIME_ZONE_INFORMATION _TIME_ZONE_INFORMATION, *P_TIME_ZONE_INFORMATION;

typedef struct _TIME_ZONE_INFORMATION *LPTIME_ZONE_INFORMATION;

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

typedef CHAR *LPSTR;

typedef BYTE *LPBYTE;

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

typedef WCHAR *LPWSTR;

typedef WCHAR *PCNZWCH;

typedef WCHAR *LPWCH;

typedef WCHAR *LPCWSTR;

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

typedef DWORD ACCESS_MASK;

typedef short SHORT;

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

typedef struct tagPOINT *LPPOINT;

typedef struct HBITMAP__ HBITMAP__, *PHBITMAP__;

struct HBITMAP__ {
    int unused;
};

typedef struct HKEY__ HKEY__, *PHKEY__;

struct HKEY__ {
    int unused;
};

typedef DWORD *LPDWORD;

typedef struct HHOOK__ HHOOK__, *PHHOOK__;

struct HHOOK__ {
    int unused;
};

typedef struct tagSIZE tagSIZE, *PtagSIZE;

struct tagSIZE {
    LONG cx;
    LONG cy;
};

typedef HINSTANCE HMODULE;

typedef int INT;

typedef HANDLE HLOCAL;

typedef struct tagSIZE *LPSIZE;

typedef long *LPLONG;

typedef struct HMENU__ HMENU__, *PHMENU__;

typedef struct HMENU__ *HMENU;

struct HMENU__ {
    int unused;
};

typedef int (*FARPROC)(void);

typedef HANDLE *LPHANDLE;

typedef WORD *LPWORD;

typedef struct HKEY__ *HKEY;

typedef HKEY *PHKEY;

typedef WORD ATOM;

typedef struct tagRECT *LPRECT;

typedef HANDLE HGLOBAL;

typedef BOOL *LPBOOL;

typedef void *HGDIOBJ;

typedef void *LPCVOID;

typedef struct HHOOK__ *HHOOK;

typedef DWORD COLORREF;

typedef struct HBITMAP__ *HBITMAP;

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

typedef LONG LSTATUS;

typedef ACCESS_MASK REGSAM;

typedef struct CException CException, *PCException;

struct CException { // PlaceHolder Structure
};

typedef struct CWinThread CWinThread, *PCWinThread;

struct CWinThread { // PlaceHolder Structure
};

typedef struct AFX_MSGMAP_ENTRY AFX_MSGMAP_ENTRY, *PAFX_MSGMAP_ENTRY;

struct AFX_MSGMAP_ENTRY { // PlaceHolder Structure
};

typedef struct AFX_MODULE_THREAD_STATE AFX_MODULE_THREAD_STATE, *PAFX_MODULE_THREAD_STATE;

struct AFX_MODULE_THREAD_STATE { // PlaceHolder Structure
};

typedef struct CTypeLibCache CTypeLibCache, *PCTypeLibCache;

struct CTypeLibCache { // PlaceHolder Structure
};

typedef uint size_t;

typedef int errno_t;

typedef struct _PRINTER_DEFAULTSA _PRINTER_DEFAULTSA, *P_PRINTER_DEFAULTSA;

struct _PRINTER_DEFAULTSA {
    LPSTR pDatatype;
    LPDEVMODEA pDevMode;
    ACCESS_MASK DesiredAccess;
};

typedef struct _PRINTER_DEFAULTSA *LPPRINTER_DEFAULTSA;




void FUN_10001020(void);
undefined4 * __fastcall FUN_10001030(undefined4 *param_1);
undefined * __thiscall FUN_10001060(void *this,byte param_1);
void thunk_FUN_1001f79b(void);
void FUN_10001090(void);
void FUN_100010f0(void);
LPCRITICAL_SECTION __thiscall FUN_10001110(void *this,LONG param_1,HANDLE param_2);
void FUN_10001170(void);
void __fastcall FUN_100011a0(LPCRITICAL_SECTION param_1);
void FUN_10001200(void);
void FUN_10001210(void);
void __fastcall thunk_FUN_1000adb0(undefined4 *param_1);
undefined4 * __fastcall FUN_10001250(undefined4 *param_1);
undefined4 * FUN_10001270(void);
void FUN_100012e0(undefined *param_1);
undefined4 * __fastcall FUN_100012f0(undefined4 *param_1);
void __fastcall FUN_10001360(int *param_1);
int * __thiscall FUN_100013e0(void *this,byte param_1);
undefined4 * FUN_10001400(void);
undefined4 * __thiscall FUN_10001460(void *this,byte param_1);
void FUN_10001490(void);
void FUN_100014a0(void);
int __cdecl FUN_100014f0(LPCSTR param_1);
void FUN_10001630(void);
uint FUN_10001680(void);
undefined2 FUN_100016d0(void);
undefined4 __cdecl FUN_10001720(ushort param_1);
short __cdecl FUN_10001770(ushort param_1,short *param_2,undefined4 param_3);
short FUN_10001810(void);
void FUN_10001890(void);
short __cdecl FUN_100018e0(ushort param_1,undefined4 param_2,int param_3);
short __cdecl FUN_10001940(ushort param_1,undefined4 param_2,int param_3);
undefined4 __cdecl FUN_100019a0(ushort param_1);
uint __cdecl FUN_10001a00(ushort param_1,short *param_2);
uint __cdecl FUN_10001a80(undefined4 *param_1);
uint __cdecl FUN_10001ac0(ushort param_1,ushort *param_2,undefined4 *param_3);
uint __cdecl FUN_10001b30(undefined2 *param_1,undefined4 *param_2);
uint __thiscall FUN_10001bc0(void *this,byte *param_1);
undefined4 __cdecl FUN_10001bf0(byte *param_1);
void __cdecl FUN_10001dd0(byte *param_1,undefined4 *param_2);
void __cdecl FUN_10001e10(char *param_1);
uint __cdecl FUN_10001e70(ushort param_1);
uint __cdecl FUN_10001f30(ushort *param_1,undefined4 param_2);
undefined4 __cdecl FUN_10001f70(ushort *param_1);
undefined1 * Catch@100020c9(void);
uint __cdecl FUN_10002120(uint param_1);
void __cdecl FUN_10002180(undefined2 param_1);
short __cdecl FUN_100021d0(ushort param_1,undefined2 param_2);
short __cdecl FUN_10002220(ushort param_1,undefined2 param_2,short param_3);
void FUN_10002290(void);
void FUN_100022b0(void);
void FUN_100022c0(void);
int dllStartupIFH(LPCSTR param_1);
void dllShutdownIFH(void);
uint dllCheckIFH(short param_1);
undefined4 dllLockIFH(void);
void dllExitIFH(void);
uint dllCallIFH(short *param_1,short *param_2);
undefined4 * __thiscall FUN_100028b0(void *this,LONG param_1);
undefined4 * __thiscall FUN_100028e0(void *this,byte param_1);
void __fastcall FUN_10002900(undefined4 *param_1);
void __fastcall FUN_10002930(int param_1);
void __fastcall FUN_10002940(void *param_1);
undefined4 __thiscall FUN_10002960(void *this,DWORD param_1);
LPCRITICAL_SECTION __fastcall FUN_10002990(LPCRITICAL_SECTION param_1);
void __fastcall FUN_100029b0(LPCRITICAL_SECTION param_1);
void __fastcall FUN_100029d0(LPCRITICAL_SECTION param_1);
void __fastcall FUN_100029e0(LPCRITICAL_SECTION param_1);
bool __fastcall FUN_100029f0(int param_1);
void __fastcall FUN_10002a20(int param_1);
bool __fastcall FUN_10002a50(LPCRITICAL_SECTION param_1);
void __fastcall FUN_10002a80(int param_1);
undefined4 __fastcall FUN_10002a90(LPCRITICAL_SECTION param_1);
void __fastcall FUN_10002bc0(int param_1);
undefined4 * __fastcall FUN_10002c30(undefined4 *param_1);
undefined4 * __fastcall FUN_10002cf0(undefined4 *param_1);
void __fastcall FUN_10002d60(int *param_1);
int * __thiscall FUN_10002d70(void *this,byte param_1);
int * __thiscall FUN_10002d90(void *this,byte param_1);
void __fastcall FUN_10002db0(int *param_1);
void __fastcall FUN_10002ea0(int param_1);
void __thiscall FUN_10002ed0(void *this,undefined4 *param_1,uint *param_2);
undefined4 __fastcall FUN_10002ef0(int param_1);
void __fastcall FUN_10003050(int param_1);
uint __thiscall FUN_100030b0(void *this,undefined4 *param_1,uint param_2);
int __thiscall FUN_10003150(void *this,int param_1);
void __thiscall FUN_10003190(void *this,int param_1);
void __fastcall FUN_10003210(undefined4 *param_1);
undefined4 * __thiscall FUN_10003250(void *this,byte param_1);
undefined4 * __fastcall FUN_10003270(undefined4 *param_1);
void __fastcall FUN_10003430(undefined4 *param_1);
undefined4 * __thiscall FUN_10003500(void *this,byte param_1);
void __fastcall FUN_10003520(undefined4 *param_1);
void __fastcall FUN_10003560(int *param_1);
void __thiscall FUN_100035c0(void *this,undefined2 *param_1);
void __fastcall FUN_10003640(int param_1);
int * __thiscall FUN_10003680(void *this,byte param_1);
void __fastcall FUN_100036a0(int *param_1);
undefined4 * __thiscall FUN_10003740(void *this,byte param_1);
void __fastcall FUN_10003760(undefined4 *param_1);
void __fastcall FUN_10003900(int *param_1);
void __fastcall FUN_100039c0(undefined4 *param_1);
void __fastcall FUN_100039d0(int param_1);
short __fastcall FUN_10003a60(int param_1);
void __fastcall FUN_10003d40(int param_1);
undefined4 __thiscall FUN_10003e90(void *this,int *param_1,byte *param_2);
void __fastcall FUN_100041f0(int param_1);
void __thiscall FUN_10004210(void *this,undefined2 param_1);
int __fastcall FUN_100042b0(int param_1);
undefined4 __thiscall FUN_100045c0(void *this,undefined ***param_1,undefined2 param_2);
undefined4 __fastcall FUN_10004820(void *param_1);
undefined4 FUN_100048d0(undefined4 param_1);
undefined4 __thiscall FUN_100048f0(void *this,byte *param_1);
short __thiscall FUN_10005640(void *this,undefined4 *param_1);
undefined2 __thiscall FUN_10005890(void *this,int param_1,int param_2,int param_3,int *param_4);
undefined4 __thiscall FUN_10005a30(void *this,uint *param_1);
short __thiscall FUN_10005a60(void *this,int param_1,int param_2,undefined4 param_3,int param_4);
short FUN_10005dd0(void);
void __fastcall FUN_100060c0(undefined4 *param_1);
int __thiscall FUN_100060e0(void *this,undefined4 *param_1);
void __fastcall FUN_10006110(int param_1);
undefined4 __fastcall FUN_10006130(int *param_1);
void __thiscall FUN_10006180(void *this,undefined2 *param_1);
void __thiscall FUN_100061f0(void *this,undefined2 *param_1);
void __fastcall FUN_10006270(undefined4 *param_1);
void __fastcall FUN_100062a0(undefined4 *param_1);
void __fastcall FUN_100062b0(undefined4 *param_1);
undefined4 * __thiscall FUN_100062f0(void *this,byte param_1);
int * __thiscall FUN_10006330(void *this,byte param_1);
void __fastcall FUN_10006350(int *param_1);
undefined4 * __thiscall FUN_100063f0(void *this,byte param_1);
void __fastcall FUN_10006470(int param_1);
void __fastcall FUN_10006480(int param_1);
undefined4 * __thiscall FUN_100064a0(void *this,byte param_1);
undefined4 * __thiscall FUN_100064c0(void *this,undefined2 *param_1,undefined4 *param_2,int *param_3);
void __fastcall FUN_100067b0(undefined4 *param_1);
uint __thiscall FUN_10006840(void *this,undefined2 *param_1);
short __thiscall FUN_10006980(void *this,ushort *param_1,undefined4 *param_2);
int __fastcall FUN_10006b80(int param_1);
undefined4 __fastcall FUN_10006bb0(void *param_1);
undefined2 __thiscall FUN_10006bf0(void *this,short *param_1,undefined4 param_2);
short __thiscall FUN_10006f40(void *this,undefined4 param_1,int param_2);
short __thiscall FUN_10006fb0(void *this,undefined4 param_1,int param_2);
void __fastcall FUN_10007020(void *param_1);
short __thiscall FUN_10007030(void *this,undefined2 param_1,short param_2);
undefined4 __fastcall FUN_100070a0(int param_1);
void __thiscall FUN_100070d0(void *this,undefined2 param_1);
void __thiscall FUN_100070e0(void *this,undefined4 param_1);
undefined4 __thiscall FUN_10007100(void *this,uint param_1);
void __fastcall FUN_10007180(undefined4 *param_1);
undefined4 * __thiscall FUN_100071a0(void *this,byte param_1);
void __fastcall FUN_100071c0(undefined4 *param_1);
undefined4 __thiscall FUN_100071d0(void *this,undefined4 *param_1,uint param_2);
undefined4 __thiscall FUN_100072a0(void *this,undefined4 *param_1,uint *param_2);
undefined4 __thiscall FUN_10007380(void *this,undefined4 *param_1,uint *param_2);
undefined4 __thiscall FUN_100074a0(void *this,uint *param_1);
int __fastcall FUN_10007570(void *param_1);
void __fastcall FUN_100075a0(void *param_1);
int __fastcall FUN_100075f0(int param_1);
int __fastcall FUN_10007620(int param_1);
void __fastcall FUN_10007660(undefined4 *param_1);
undefined4 * __fastcall FUN_10007680(undefined4 *param_1);
undefined4 * __thiscall FUN_100076d0(void *this,byte param_1);
void __fastcall FUN_100076f0(undefined4 *param_1);
undefined4 __thiscall FUN_10007740(void *this,undefined1 param_1);
bool __fastcall FUN_10007800(void *param_1);
undefined4 __thiscall FUN_10007810(void *this,DWORD param_1);
void __thiscall FUN_10007850(void *this,DWORD param_1);
undefined4 __thiscall FUN_100078c0(void *this,undefined1 param_1);
void FUN_10007b70(int *param_1);
undefined * Catch@10007bb6(void);
void FUN_10007bc9(void);
undefined4 * __fastcall FUN_10007bf0(undefined4 *param_1);
undefined4 * __thiscall FUN_10007ca0(void *this,byte param_1);
void __fastcall FUN_10007cc0(undefined4 *param_1);
short __thiscall FUN_10007d20(void *this,int param_1,undefined1 param_2);
void __fastcall FUN_10007df0(void *param_1);
void __fastcall FUN_10007e60(int param_1);
void __fastcall FUN_10007e70(int param_1);
ushort __thiscall FUN_10007e80(void *this,uint param_1,undefined4 param_2,undefined2 param_3,undefined4 param_4);
undefined4 __thiscall FUN_10008080(void *this,ushort param_1);
void __fastcall FUN_10008240(int param_1);
void __fastcall FUN_100082d0(int param_1);
void __fastcall FUN_10008550(int param_1);
void __fastcall FUN_10008590(int param_1);
void __fastcall FUN_100085c0(undefined4 *param_1);
undefined4 * __thiscall FUN_100085e0(void *this,byte param_1);
void __fastcall FUN_10008600(undefined4 *param_1);
void __fastcall FUN_10008610(int param_1);
void __fastcall FUN_10008620(int param_1);
void __fastcall FUN_10008630(int param_1);
void __fastcall FUN_10008640(undefined4 *param_1);
undefined4 * __thiscall FUN_10008660(void *this,undefined4 param_1,undefined4 param_2);
void __fastcall FUN_10008770(undefined4 *param_1);
undefined4 * __thiscall FUN_100087a0(void *this,byte param_1);
void __fastcall FUN_100087c0(undefined4 *param_1);
uint __fastcall FUN_10008840(int param_1);
short __thiscall FUN_100088b0(void *this,undefined4 param_1,int param_2);
undefined2 __thiscall FUN_10008a80(void *this,DWORD param_1);
uint __fastcall FUN_10008b10(void *param_1);
undefined2 __fastcall FUN_10008bb0(int param_1);
undefined4 __thiscall FUN_10008bc0(void *this,DWORD param_1);
void __thiscall FUN_10008bf0(void *this,uint param_1);
void __thiscall FUN_100093d0(void *this,int param_1);
void __thiscall FUN_100095e0(void *this,undefined2 param_1);
void __thiscall FUN_10009800(void *this,uint param_1,int param_2);
void __fastcall FUN_10009a20(int param_1);
void __fastcall FUN_10009a90(undefined4 *param_1);
void __cdecl FUN_10009b60(short param_1,undefined4 param_2,undefined4 *param_3);
void __thiscall FUN_10009bf0(void *this,short param_1);
undefined4 __thiscall FUN_10009f10(void *this,uint param_1);
void __thiscall FUN_1000a020(void *this,undefined4 param_1);
void __fastcall FUN_1000a030(int param_1);
undefined4 * __thiscall FUN_1000a050(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_1000a0d0(void *this,byte param_1);
void __fastcall FUN_1000a0f0(undefined4 *param_1);
uint __thiscall FUN_1000a380(void *this,short *param_1,ushort param_2);
undefined4 * __thiscall FUN_1000a410(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_1000a480(void *this,byte param_1);
void __fastcall FUN_1000a4a0(undefined4 *param_1);
uint __thiscall FUN_1000a4b0(void *this,short *param_1,ushort param_2);
undefined4 __thiscall FUN_1000a5a0(void *this,byte *param_1,uint param_2);
undefined4 * thunk_FUN_1000aae0(void);
void __fastcall FUN_1000aa10(undefined4 *param_1);
undefined4 * __thiscall FUN_1000aa30(void *this,byte param_1);
void __fastcall FUN_1000aa50(undefined4 *param_1);
void __fastcall FUN_1000aab0(undefined4 *param_1);
undefined4 * FUN_1000aae0(void);
int __fastcall FUN_1000ab20(int param_1);
uint __fastcall FUN_1000ac40(int param_1);
void __fastcall FUN_1000acb0(undefined4 *param_1);
void FUN_1000acd0(int *param_1);
void FUN_1000ad30(int *param_1);
undefined4 * __thiscall FUN_1000ad90(void *this,byte param_1);
void __fastcall FUN_1000adb0(undefined4 *param_1);
int __fastcall FUN_1000adf0(int *param_1);
void __fastcall FUN_1000aec0(int param_1);
undefined4 * __thiscall FUN_1000aee0(void *this,undefined4 param_1,undefined4 param_2);
void __fastcall FUN_1000af90(undefined4 *param_1);
undefined4 * __thiscall FUN_1000afd0(void *this,byte param_1);
undefined4 * __thiscall FUN_1000aff0(void *this,undefined4 param_1,undefined4 param_2);
int * __thiscall FUN_1000b060(void *this,byte param_1);
void __fastcall FUN_1000b080(int *param_1);
undefined4 __thiscall FUN_1000b0f0(void *this,int param_1,int param_2,undefined4 param_3);
void __fastcall FUN_1000b260(int param_1);
undefined4 __fastcall FUN_1000b2b0(int *param_1);
bool __fastcall FUN_1000b2e0(int param_1);
int __thiscall FUN_1000b300(void *this,int param_1,int param_2,undefined4 param_3);
int __thiscall FUN_1000b350(void *this,int param_1,int param_2,undefined4 param_3);
void __thiscall FUN_1000b3c0(void *this,undefined4 param_1);
void * __thiscall FUN_1000b440(void *this,void *param_1);
void __fastcall FUN_1000b460(int param_1);
void __thiscall FUN_1000b4e0(void *this,int param_1,undefined4 param_2,undefined4 param_3);
int __thiscall FUN_1000b530(void *this,int param_1,int param_2);
int __thiscall FUN_1000b580(void *this,int param_1);
int __thiscall FUN_1000b620(void *this,int param_1);
int __thiscall FUN_1000b6c0(void *this,int param_1);
byte __fastcall FUN_1000b770(int param_1);
int __cdecl FUN_1000b780(char *param_1);
undefined4 FUN_1000b910(void);
void FUN_1000bbb0(void);
char * __cdecl FUN_1000bbf0(int param_1);
undefined4 __cdecl FUN_1000bc30(undefined4 param_1,undefined4 param_2);
undefined4 __cdecl FUN_1000bc60(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,undefined4 param_6,undefined4 param_7,undefined4 param_8);
undefined4 __cdecl FUN_1000bcb0(undefined4 param_1);
undefined4 __cdecl FUN_1000bcd0(undefined4 param_1);
undefined4 __cdecl FUN_1000bcf0(undefined4 param_1);
undefined4 __cdecl FUN_1000bd10(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
undefined4 __cdecl FUN_1000bd40(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
int FUN_1000bd70(int param_1,int param_2);
undefined4 FUN_1000be68(void);
undefined * __thiscall FUN_1000be7c(void *this,byte param_1);
void FUN_1000be98(void);
undefined4 * __thiscall FUN_1000bee0(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_1000bf0a(void *this,byte param_1);
void __fastcall FUN_1000bf26(undefined4 *param_1);
undefined4 * __thiscall FUN_1000bf2d(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_1000bf57(void *this,byte param_1);
void __fastcall FUN_1000bf73(undefined4 *param_1);
undefined * __thiscall FUN_1000bf7a(void *this,byte param_1);
void FUN_1000bf96(void);
void __thiscall FUN_1000bfff(void *this,int param_1,int param_2,UINT param_3,RECT *param_4,LPCSTR param_5,UINT param_6,INT *param_7);
int * __thiscall FUN_1000c024(void *this,int *param_1,int param_2,int param_3,LPCSTR param_4,int param_5,int param_6,INT *param_7,int param_8);
void __thiscall FUN_1000c078(void *this,int param_1,GRAYSTRINGPROC param_2,LPARAM param_3,int param_4,int param_5,int param_6,int param_7,int param_8);
undefined4 * __thiscall FUN_1000c0c4(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_1000c0ee(void *this,byte param_1);
void __fastcall FUN_1000c10a(undefined4 *param_1);
undefined4 * __thiscall FUN_1000c111(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_1000c13b(void *this,byte param_1);
void __fastcall FUN_1000c157(undefined4 *param_1);
bool FUN_1000c15e(void);
undefined4 FUN_1000c236(int *param_1,uint param_2);
undefined4 xMonitorFromWindow(HWND param_1,uint param_2);
undefined4 FUN_1000c2f7(int param_1,uint *param_2);
CWnd * __thiscall CWnd::GetOwner(CWnd *this);
void FUN_1000c3bc(void);
undefined4 * __thiscall FUN_1000c3c9(void *this,undefined4 param_1,undefined4 param_2);
void __fastcall FUN_1000c3f1(int param_1);
void __fastcall FUN_1000c405(int param_1);
int * FUN_1000c42d(void);
void Catch@1000c4a6(undefined4 *param_1);
void __thiscall FUN_1000c4bc(void *this,undefined4 *param_1);
undefined * __thiscall FUN_1000c4e8(void *this,byte param_1);
void FUN_1000c504(void);
undefined4 __cdecl FUN_1000c52d(undefined4 param_1);
int __cdecl FUN_1000c5ab(undefined4 param_1);
int __cdecl FUN_1000c5ec(undefined1 *param_1,byte *param_2,undefined4 *param_3);
void FUN_1000c63d(undefined *UNRECOVERED_JUMPTABLE);
void FUN_1000c671(undefined4 param_1,undefined *UNRECOVERED_JUMPTABLE);
void FUN_1000c678(undefined4 param_1,undefined *UNRECOVERED_JUMPTABLE);
void FUN_1000c67f(PVOID param_1,PEXCEPTION_RECORD param_2);
undefined4 __cdecl FUN_1000c6ce(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4);
undefined4 __cdecl FUN_1000c704(undefined4 param_1,undefined4 param_2,undefined4 param_3,int param_4,int param_5);
void __cdecl FUN_1000c758(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3);
undefined4 __cdecl FUN_1000c77d(undefined4 *param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,undefined4 param_6,undefined4 param_7);
undefined4 __cdecl FUN_1000c833(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3);
int __cdecl FUN_1000c8a8(int param_1,int param_2,int param_3,uint *param_4,uint *param_5);
void __cdecl __global_unwind2(PVOID param_1);
void __cdecl __local_unwind2(int param_1,int param_2);
int __cdecl __abnormal_termination(void);
void __fastcall __NLG_Notify1(undefined4 param_1);
void FUN_1000c9fa(void);
undefined4 FUN_1000ca12(undefined4 param_1,int param_2);
int entry(int param_1,int param_2,undefined4 param_3);
void __cdecl __amsg_exit(int param_1);
int __cdecl FUN_1000cbbb(undefined1 *param_1,byte *param_2);
int __thiscall FUN_1000cc0d(void *this,byte *param_1);
void __thiscall FUN_1000cc98(void *this,byte *param_1);
void __fastcall FUN_1000cca3(undefined4 *param_1);
undefined4 * __thiscall FUN_1000cccc(void *this,byte param_1);
char * __cdecl _strncpy(char *_Dest,char *_Source,size_t _Count);
void FUN_1000cdee(undefined4 param_1,undefined4 param_2,int param_3,undefined *param_4);
void FUN_1000ce56(void);
void FUN_1000ce6e(undefined4 param_1,undefined4 param_2,int param_3,undefined *param_4);
void FUN_1000cecc(undefined4 param_1,undefined4 param_2,int param_3,undefined *param_4);
void FUN_1000cf36(void);
uint __thiscall FUN_1000cf50(void *this,byte *param_1,byte *param_2);
int __cdecl _strncmp(char *_Str1,char *_Str2,size_t _MaxCount);
void __CxxThrowException@8(undefined4 param_1,undefined4 param_2);
HANDLE __cdecl FUN_1000d09b(LPSECURITY_ATTRIBUTES param_1,SIZE_T param_2,int param_3,int param_4,DWORD param_5,LPDWORD param_6);
undefined4 FUN_1000d106(DWORD *param_1);
void __cdecl FUN_1000d1cc(DWORD param_1);
undefined8 __alldiv(uint param_1,uint param_2,uint param_3,uint param_4);
longlong __allmul(uint param_1,int param_2,uint param_3,int param_4);
void FUN_1000d2e4(void);
uint * __cdecl FUN_1000d303(uint *param_1);
void FUN_1000d32e(void);
void __cdecl __exit(int _Code);
void FUN_1000d36c(void);
void __cdecl FUN_1000d37b(UINT param_1,int param_2,int param_3);
void FUN_1000d420(void);
void FUN_1000d429(void);
void __cdecl FUN_1000d432(undefined4 *param_1,undefined4 *param_2);
void __cdecl FUN_1000d44c(undefined *param_1);
void FUN_1000d4b6(void);
void FUN_1000d50e(void);
void * __cdecl _memset(void *_Dst,int _Val,size_t _Size);
int __cdecl _memcmp(void *_Buf1,void *_Buf2,size_t _Size);
void * __cdecl _malloc(size_t _Size);
void * __cdecl __nh_malloc(size_t _Size,int _NhFlag);
void __cdecl FUN_1000d68a(uint *param_1);
void FUN_1000d6f1(void);
void FUN_1000d750(void);
undefined4 * __cdecl FUN_1000d790(undefined4 *param_1,undefined4 *param_2,uint param_3);
int __cdecl FUN_1000dac5(short *param_1);
byte * __cdecl FUN_1000dae2(byte *param_1,uint param_2);
byte * __cdecl FUN_1000db79(byte *param_1);
undefined4 * __cdecl FUN_1000db90(undefined4 *param_1,undefined4 *param_2,uint param_3);
byte * __cdecl FUN_1000dec5(byte *param_1,uint param_2);
char __cdecl FUN_1000df37(byte *param_1);
size_t __cdecl _strlen(char *_Str);
int __cdecl FUN_1000dfcb(byte *param_1,byte *param_2,size_t param_3);
uint __cdecl FUN_1000e0ba(void *param_1);
void FUN_1000e149(void);
void FUN_1000e160(void);
void FUN_1000e161(void);
void FUN_1000e1a0(void);
SIZE_T __cdecl FUN_1000e1cf(undefined *param_1);
void FUN_1000e239(void);
void FUN_1000e2b4(void);
undefined * FUN_1000e2bd(undefined *param_1,uint param_2);
void FUN_1000e34f(void);
void FUN_1000e3e4(void);
undefined4 FUN_1000e3ed(void);
undefined4 __cdecl FUN_1000e421(UINT param_1);
UINT __cdecl FUN_1000e5ce(UINT param_1);
undefined4 __cdecl FUN_1000e618(int param_1);
void FUN_1000e64b(void);
void FUN_1000e674(void);
void FUN_1000e7f9(void);
void __cdecl FUN_1000e815(undefined *param_1);
DWORD * FUN_1000e888(void);
DWORD * FUN_1000e891(void);
void __cdecl FUN_1000e89a(int *param_1);
int * __cdecl FUN_1000e976(int *param_1);
int * __cdecl FUN_1000ea80(int *param_1);
byte * __cdecl FUN_1000ebe0(byte *param_1,uint *param_2);
void FUN_1000ed6b(void);
void FUN_1000eeb9(void);
uint __cdecl FUN_1000ef0f(uint param_1,int *param_2);
int __cdecl FUN_1000f027(int *param_1,byte *param_2,undefined4 *param_3);
void __cdecl FUN_1000f7c5(uint param_1,int *param_2,int *param_3);
void __cdecl FUN_1000f7fa(uint param_1,int param_2,int *param_3,int *param_4);
void __cdecl FUN_1000f82b(char *param_1,int param_2,int *param_3,int *param_4);
undefined4 __cdecl FUN_1000f863(int *param_1);
undefined8 __cdecl FUN_1000f870(int *param_1);
undefined4 __cdecl FUN_1000f880(int *param_1);
undefined4 __cdecl FUN_1000f88e(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int *param_5,int param_6,PVOID param_7,char param_8);
void __cdecl FUN_1000f929(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,char param_6,int param_7,PVOID param_8);
void __cdecl FUN_1000fadc(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,int param_6,int param_7,PVOID param_8);
undefined4 __cdecl FUN_1000fb86(byte *param_1,byte *param_2,uint *param_3);
void __cdecl FUN_1000fbe3(int param_1,undefined4 param_2,int param_3,int param_4);
void __cdecl FUN_1000fc97(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,byte *param_6,byte *param_7,int *param_8,int param_9,PVOID param_10);
undefined4 __cdecl FUN_1000fd12(DWORD param_1,undefined4 param_2,DWORD param_3,undefined4 param_4,undefined4 param_5,int param_6,int param_7);
void FUN_1000fddf(void);
void __cdecl FUN_1000fe57(int param_1,int param_2,byte *param_3,byte *param_4);
void __cdecl FUN_1001001b(int param_1);
int __cdecl FUN_10010082(int param_1,int *param_2);
void __CallSettingFrame@12(undefined4 param_1,undefined4 param_2,int param_3);
undefined4 FUN_100100fc(void);
void FUN_10010150(void);
void __cdecl FUN_1001016e(int param_1);
DWORD * FUN_10010181(void);
void __cdecl FUN_100101e8(undefined *param_1);
void FUN_10010288(void);
void FUN_100102e9(void);
void FUN_1001033f(void);
void FUN_100104fb(void);
void FUN_1001054f(void);
void FUN_10010608(void);
void __cdecl FUN_100106a1(byte *param_1,undefined4 *param_2,byte *param_3,int *param_4,int *param_5);
LPSTR FUN_10010855(void);
void __cdecl FUN_10010987(undefined4 *param_1);
int FUN_100109b4(void);
undefined4 __cdecl FUN_10010afc(int param_1);
void FUN_10010b59(void);
void FUN_10010c01(void);
void __cdecl FUN_10010c3a(undefined *param_1);
uint __thiscall FUN_10010d8d(void *this,int param_1,uint param_2);
void FUN_10010e02(void);
void FUN_10010e2b(void);
void __cdecl FUN_10010e97(int param_1);
void __cdecl FUN_10010ef8(int param_1);
int __cdecl _strcmp(char *_Str1,char *_Str2);
void FUN_10011059(int param_1);
uint __cdecl FUN_10011074(uint param_1);
uint __thiscall FUN_100110e3(void *this,uint param_1);
int FUN_100111ae(int *param_1);
int * __cdecl FUN_10011212(int param_1,int param_2);
void FUN_100112ab(void);
void FUN_10011334(void);
LONG __cdecl FUN_1001134f(int param_1,_EXCEPTION_POINTERS *param_2);
int * __cdecl FUN_1001148d(int param_1,int *param_2);
uint * __cdecl FUN_100114d0(uint *param_1,uint *param_2);
uint * __cdecl FUN_100114e0(uint *param_1,uint *param_2);
undefined4 __cdecl FUN_100115c0(undefined4 param_1);
uint __cdecl FUN_10011608(int param_1);
void __cdecl FUN_10011633(uint *param_1,int param_2);
int * __cdecl FUN_1001195c(uint *param_1);
undefined4 * FUN_10011c65(void);
int __cdecl FUN_10011d16(int param_1);
undefined4 __cdecl FUN_10011e11(uint *param_1,int param_2,int param_3);
undefined ** FUN_10012107(void);
void __cdecl FUN_1001224b(undefined **param_1);
void __cdecl FUN_100122a1(int param_1);
int __cdecl FUN_10012363(undefined *param_1,undefined4 *param_2,uint *param_3);
void __cdecl FUN_100123ba(int param_1,int param_2,byte *param_3);
int * __cdecl FUN_100123ff(uint param_1);
int __cdecl FUN_10012607(int *param_1,uint param_2,uint param_3);
undefined4 __cdecl FUN_1001272b(int param_1,int *param_2,byte *param_3,uint param_4);
undefined4 __cdecl FUN_100127d4(undefined4 param_1);
char * __cdecl _strchr(char *_Str,int _Val);
byte * __cdecl FUN_100128c0(byte *param_1,byte *param_2);
int __cdecl FUN_100128fa(LCID param_1,uint param_2,char *param_3,int param_4,LPWSTR param_5,int param_6,UINT param_7,int param_8);
char * __cdecl __strrev(char *_Str);
char * __cdecl _strstr(char *_Str,char *_SubStr);
int __cdecl FUN_10012bd0(byte *param_1,byte *param_2);
int __cdecl FUN_10012c10(byte *param_1,byte *param_2);
char * __cdecl _strrchr(char *_Str,int _Ch);
BOOL __cdecl FUN_10012c77(DWORD param_1,LPCSTR param_2,int param_3,LPWORD param_4,UINT param_5,LCID param_6,int param_7);
void __fastcall FUN_10012dc0(void *param_1);
undefined4 FUN_10012dd2(void);
void FUN_10012e10(void);
void __cdecl FUN_10012e39(char *param_1);
void __cdecl __fassign(int flag,char *argument,char *number);
undefined1 * __cdecl FUN_10012f37(undefined8 *param_1,undefined1 *param_2,int param_3,int param_4);
undefined1 * __cdecl FUN_10012f98(undefined1 *param_1,int param_2,int param_3,int *param_4,char param_5);
char * __cdecl FUN_1001305a(undefined8 *param_1,char *param_2,size_t param_3);
char * __cdecl FUN_100130af(char *param_1,size_t param_2,int *param_3,char param_4);
void __cdecl FUN_10013156(undefined8 *param_1,char *param_2,size_t param_3,int param_4);
errno_t __cdecl __cfltcvt(double *arg,char *buffer,size_t sizeInBytes,int format,int precision,int caps);
void __cdecl FUN_1001323a(char *param_1,int param_2);
void FUN_1001325f(void);
void FUN_1001328d(void);
bool __cdecl FUN_10013514(int *param_1);
bool __cdecl FUN_10013535(int *param_1);
void __cdecl FUN_100136e1(int param_1,int param_2,uint param_3,int param_4,int param_5,int param_6,int param_7,int param_8,int param_9,int param_10,int param_11);
int __cdecl FUN_10013821(int param_1,int param_2,int param_3,int param_4,int param_5,int param_6,int param_7);
DWORD __cdecl FUN_100138e3(uint param_1,LONG param_2,DWORD param_3);
DWORD __cdecl FUN_10013948(uint param_1,LONG param_2,DWORD param_3);
int __cdecl FUN_100139bb(undefined *param_1,char *param_2,uint param_3);
int __cdecl FUN_10013a20(undefined *param_1,char *param_2,uint param_3);
void __cdecl FUN_10013bab(undefined4 *param_1);
byte __cdecl FUN_10013bef(uint param_1);
void __cdecl FUN_10013cd4(uint param_1);
void __cdecl FUN_10013d03(int param_1,int param_2);
void __cdecl FUN_10013d26(uint param_1);
void __cdecl FUN_10013d55(int param_1,int param_2);
int __cdecl FUN_10013d78(LPSTR param_1,WCHAR param_2);
int __cdecl FUN_10013dd1(LPSTR param_1,WCHAR param_2);
undefined8 __aulldiv(uint param_1,uint param_2,uint param_3,uint param_4);
undefined8 __aullrem(uint param_1,uint param_2,uint param_3,uint param_4);
bool __cdecl FUN_10013f25(void *param_1,UINT_PTR param_2);
bool __cdecl FUN_10013f41(LPVOID param_1,UINT_PTR param_2);
bool __cdecl FUN_10013f5d(FARPROC param_1);
void FUN_10013f75(void);
void __thiscall FUN_10013f8c(void *this,byte *param_1,int *param_2,void *param_3);
void * __thiscall FUN_10013fa3(void *this,byte *param_1,int *param_2,void *param_3,uint param_4);
int __cdecl FUN_100141a8(undefined4 param_1,undefined4 param_2,undefined4 param_3);
uint __thiscall FUN_10014231(void *this,uint param_1,uint param_2);
void __thiscall FUN_10014266(void *this,uint param_1,uint param_2);
uint __cdecl FUN_1001427c(uint param_1);
uint __cdecl FUN_1001430e(uint param_1);
undefined4 __cdecl FUN_10014397(int param_1,int param_2);
void __cdecl FUN_100143e0(int param_1,int param_2);
undefined4 __cdecl FUN_10014436(int param_1,int param_2);
void __cdecl FUN_100144c2(int param_1,undefined4 *param_2);
void __cdecl FUN_100144dd(undefined4 *param_1);
undefined4 __cdecl FUN_100144e9(int *param_1);
void __cdecl FUN_10014504(uint *param_1,uint param_2);
undefined4 __cdecl FUN_10014591(ushort *param_1,uint *param_2,int *param_3);
void __cdecl FUN_100146fd(ushort *param_1,uint *param_2);
void __cdecl FUN_10014713(ushort *param_1,uint *param_2);
void __thiscall FUN_10014729(void *this,uint *param_1,byte *param_2);
void __thiscall FUN_10014756(void *this,uint *param_1,byte *param_2);
void __cdecl FUN_10014783(char *param_1,int param_2,int param_3);
int * __cdecl FUN_100147fa(undefined4 param_1,undefined4 param_2,int *param_3,uint *param_4);
void __cdecl FUN_10014856(uint *param_1,uint *param_2);
void __cdecl __fptrap(void);
int __cdecl FUN_10014915(uchar *param_1);
int __cdecl FUN_10014936(uchar *param_1);
uint FUN_100149b3(void);
undefined4 __cdecl FUN_10014ad6(uint param_1,HANDLE param_2);
undefined4 __cdecl FUN_10014b52(uint param_1);
undefined4 __cdecl FUN_10014bd1(uint param_1);
void __cdecl FUN_10014c13(uint param_1);
void __cdecl FUN_10014c72(uint param_1);
int __cdecl FUN_10014d15(int *param_1);
undefined4 __cdecl FUN_10014d43(int *param_1);
int __cdecl FUN_10014da8(int param_1);
undefined4 __cdecl FUN_10014e4c(DWORD *param_1);
uint __cdecl FUN_10014fce(int param_1,uint param_2);
uint __cdecl FUN_1001500b(uint param_1);
uint __thiscall FUN_1001507a(void *this,uint param_1);
void __cdecl FUN_10015146(uint param_1,char *param_2,uint param_3,int param_4);
char * __cdecl FUN_100151a2(uint param_1,char *param_2,uint param_3);
undefined4 __cdecl FUN_100151d0(byte *param_1,char *param_2,void *param_3);
undefined4 __cdecl FUN_100152d1(uint param_1,uint param_2,uint *param_3);
void __cdecl ___add_12(uint *param_1,uint *param_2);
void __cdecl FUN_10015350(uint *param_1);
void __cdecl FUN_1001537e(uint *param_1);
void __cdecl FUN_100153ab(char *param_1,int param_2,uint *param_3);
undefined4 __thiscall FUN_10015472(void *this,ushort *param_1,int *param_2,byte *param_3,int param_4,int param_5,int param_6,int param_7);
undefined4 __cdecl FUN_10015943(uint param_1,uint param_2,uint param_3,int param_4,byte param_5,short *param_6);
int __cdecl __mbsnbicoll(uchar *_Str1,uchar *_Str2,size_t _MaxCount);
undefined4 FUN_10015c15(void);
undefined4 __cdecl FUN_10015c83(FILE *param_1);
undefined4 __cdecl __fclose_lk(FILE *param_1);
undefined4 __cdecl FUN_10015d00(uint param_1);
void __cdecl FUN_10015d93(int *param_1,int *param_2);
void __cdecl FUN_10015fb3(int *param_1,uint param_2,int param_3);
int __cdecl FUN_1001602f(LCID param_1,DWORD param_2,byte *param_3,int param_4,byte *param_5,int param_6,UINT param_7);
int __cdecl FUN_100162ac(char *param_1,int param_2);
undefined4 __cdecl FUN_100162d7(uint *param_1,int param_2);
int __cdecl FUN_1001645e(uchar *param_1,size_t param_2);
undefined4 * __cdecl FUN_100164b6(int *param_1);
undefined4 __cdecl FUN_1001651d(uint param_1);
undefined4 __cdecl FUN_1001657a(uint param_1);
void __cdecl __freebuf(FILE *_File);
void RtlUnwind(PVOID TargetFrame,PVOID TargetIp,PEXCEPTION_RECORD ExceptionRecord,PVOID ReturnValue);
BOOL ClosePrinter(HANDLE hPrinter);
LONG DocumentPropertiesA(HWND hWnd,HANDLE hPrinter,LPSTR pDeviceName,PDEVMODEA pDevModeOutput,PDEVMODEA pDevModeInput,DWORD fMode);
BOOL OpenPrinterA(LPSTR pPrinterName,LPHANDLE phPrinter,LPPRINTER_DEFAULTSA pDefault);
void Ordinal_3(void);
void Ordinal_12(void);
void Ordinal_17(void);
void Ordinal_20(void);
void Ordinal_11(void);
void Ordinal_9(void);
void Ordinal_21(void);
void Ordinal_111(void);
void Ordinal_23(void);
void Ordinal_115(void);
undefined4 __cdecl FUN_10016680(undefined4 param_1);
void FUN_100166a0(void);
void __cdecl FUN_10016780(char *param_1,char *param_2,char *param_3,ushort param_4,int param_5);
void __cdecl FUN_10016920(char *param_1);
DWORD GetTickCount(void);
void __cdecl FUN_100169a0(char *param_1);
char * __cdecl FUN_10016a40(short param_1);
void FUN_10016a70(void);
void __cdecl FUN_10016ab0(undefined4 param_1,short param_2);
void __cdecl FUN_10016c80(short param_1);
void __cdecl FUN_10016e20(ushort param_1,int param_2);
void __cdecl FUN_10016ea0(ushort param_1,int param_2);
void __cdecl FUN_10016f20(int *param_1);
void __cdecl FUN_10016f80(int *param_1);
void FUN_10016fe0(void);
void FUN_10017000(void);
void FUN_10017010(void);
void FUN_10017050(void);
void FUN_10017060(void);
void FUN_10017090(void);
void FUN_10017110(void);
int FUN_10017130(void);
void * __cdecl FUN_10017140(void *param_1,int param_2);
FILE * __cdecl FUN_10017210(int param_1);
void __cdecl FUN_100172c0(FILE *param_1);
undefined1 * FUN_100172d0(void);
void __cdecl FUN_10017380(byte *param_1);
void FUN_10017470(void);
void FUN_10017480(void);
void FUN_100174c0(void);
void FUN_100174d0(void);
undefined4 __cdecl FUN_10017500(undefined4 *param_1);
uint __thiscall FUN_10017a40(void *this,byte *param_1);
undefined4 __cdecl FUN_10017d60(byte *param_1,char *param_2);
void * __cdecl FUN_10017e60(void *param_1);
undefined4 __cdecl FUN_100180f0(undefined1 *param_1,int param_2);
undefined4 * __fastcall FUN_10018130(undefined4 *param_1);
void __fastcall FUN_10018220(int param_1);
void __fastcall FUN_100182d0(int param_1);
void __fastcall FUN_10018350(undefined4 *param_1);
void __fastcall FUN_100183a0(int *param_1);
void __thiscall FUN_100183f0(void *this,undefined4 param_1);
void __thiscall FUN_10018400(void *this,undefined4 param_1);
void * __thiscall FUN_10018410(void *this,void *param_1);
void * __thiscall FUN_10018430(void *this,void *param_1);
undefined4 __fastcall FUN_10018470(int param_1);
undefined4 __fastcall FUN_10018480(int param_1);
undefined1 * __cdecl FUN_10018490(int *param_1);
char * __cdecl _strncat(char *_Dest,char *_Source,size_t _Count);
undefined4 __cdecl FUN_100185d3(LPCSTR param_1,LPCSTR param_2);
int __cdecl FUN_10018601(undefined1 *param_1,int param_2,byte *param_3);
int __cdecl FUN_10018652(char *param_1);
int __cdecl FUN_10018674(char *param_1);
int __cdecl FUN_100187d5(int *param_1,int param_2,DWORD param_3);
int __cdecl FUN_10018801(int *param_1,int param_2,DWORD param_3);
undefined4 * __cdecl FUN_1001888e(LPCSTR param_1,char *param_2,uint param_3);
void __cdecl FUN_100188bf(LPCSTR param_1,char *param_2);
undefined1 * __cdecl FUN_100188d2(int *param_1);
char * __cdecl FUN_1001899c(char *param_1,int param_2);
int __cdecl FUN_100189c4(int *param_1,byte *param_2);
void __cdecl FUN_10018a00(char *param_1,byte *param_2);
void __cdecl FUN_10018a34(byte *param_1,byte *param_2,byte *param_3,byte *param_4,byte *param_5);
void __cdecl FUN_10018ac5(byte *param_1,byte *param_2,byte *param_3,byte *param_4,byte *param_5);
undefined4 * __cdecl FUN_10018c0c(LPCSTR param_1,char *param_2,uint param_3,undefined4 *param_4);
undefined4 * FUN_10018d7c(void);
undefined4 __cdecl FUN_10018e44(undefined4 *param_1);
void __cdecl FUN_10018ed1(int param_1,int *param_2);
int __thiscall FUN_10018efb(void *this,int *param_1,byte *param_2,undefined4 *param_3);
uint __thiscall FUN_10019920(void *this,uint param_1);
uint __cdecl FUN_10019957(undefined4 *param_1);
void __cdecl FUN_10019971(uint param_1,int *param_2);
uint __cdecl FUN_10019988(int *param_1,undefined4 *param_2);
byte * __cdecl FUN_100199ac(byte *param_1,byte *param_2);
byte * __cdecl FUN_10019a19(byte *param_1,byte *param_2,uint param_3);
undefined * __cdecl FUN_10019ab3(LPCSTR param_1,uint param_2,uint param_3,uint param_4);
uint __cdecl FUN_10019d82(LPWSTR param_1,byte *param_2,uint param_3);
uint __cdecl FUN_10019ddf(LPWSTR param_1,byte *param_2,uint param_3);
uint __thiscall FUN_10019ea8(void *this,int param_1);
longlong __fastcall __allshl(byte param_1,int param_2);
uint __cdecl FUN_10019eef(undefined4 *param_1);
uint __cdecl FUN_10019fcb(uint param_1,int *param_2);
int __cdecl FUN_1001a039(undefined *param_1,int param_2);
int __cdecl FUN_1001a15e(uint param_1,char *param_2,char *param_3);
int __cdecl FUN_1001a1c3(uint param_1,char *param_2,char *param_3);
int __cdecl FUN_1001a39c(uint param_1,int param_2);
undefined4 __cdecl FUN_1001a400(LPCSTR param_1);
void __cdecl FUN_1001a42a(LPCSTR param_1);
int __thiscall FUN_1001a435(void *this,int param_1,int param_2);
void __thiscall FUN_1001a48d(void *this,byte *param_1,size_t *param_2);
void __cdecl FUN_1001a7da(void *param_1,byte *param_2);
void __thiscall CSimpleException::InitString(CSimpleException *this);
void FUN_1001a859(void);
void __fastcall RemoveAll(int param_1);
void __thiscall FUN_1001a892(void *this,undefined4 *param_1);
int __fastcall FUN_1001a8ab(void *param_1);
void FUN_1001a8cf(undefined4 *param_1,int param_2,int param_3);
void __fastcall FUN_1001a8ef(undefined4 *param_1);
void __thiscall CMap<>(void *this,undefined4 param_1);
undefined * __thiscall FUN_1001a92c(void *this,byte param_1);
void __thiscall FUN_1001a948(void *this,int param_1,int param_2);
void __fastcall RemoveAll(int param_1);
void FUN_1001a9b8(void);
void __fastcall FUN_1001a9e1(int param_1);
void __thiscall FUN_1001aa2e(void *this,undefined4 *param_1);
undefined4 * __thiscall FUN_1001aa47(void *this,uint param_1,uint *param_2);
undefined4 __thiscall FUN_1001aa79(void *this,uint param_1);
undefined4 * __thiscall FUN_1001aaac(void *this,uint param_1);
undefined4 __thiscall FUN_1001aafc(void *this,uint param_1);
void __thiscall FUN_1001ab3e(void *this,int *param_1,int *param_2,int *param_3);
void __fastcall FUN_1001abb6(int *param_1);
void __thiscall FUN_1001abd8(void *this,undefined4 param_1,undefined4 param_2);
bool __thiscall FUN_1001ac86(void *this,int param_1);
void __thiscall FUN_1001acf0(void *this,LPSTR param_1);
CWinThread * AfxGetThread(void);
void FUN_1001adb2(void);
void FUN_1001ae11(void);
undefined4 Catch@1001ae93(void);
void __fastcall FUN_1001aeb3(int *param_1);
bool __thiscall FUN_1001af8f(void *this,int param_1);
undefined4 __thiscall FUN_1001b09a(void *this,int param_1);
long AfxInternalProcessWndProcException(CException *param_1,tagMSG *param_2);
undefined4 FUN_1001b1ef(int param_1);
undefined4 FUN_1001b23a(int param_1,undefined4 *param_2);
undefined4 __fastcall FUN_1001b39f(int *param_1);
void __fastcall FUN_1001b3df(int param_1);
void FUN_1001b3f9(void);
uint FUN_1001b424(undefined4 param_1,undefined4 *param_2,undefined4 param_3,undefined *param_4,undefined4 *param_5,uint param_6,undefined4 *param_7);
uint __thiscall FUN_1001b52b(void *this,undefined4 *param_1,uint param_2,undefined4 *param_3,undefined4 *param_4);
void FUN_1001b648(void);
void FUN_1001b65d(void);
void __fastcall FUN_1001b68a(int *param_1);
void __thiscall CCmdUI::CCmdUI(CCmdUI *this);
void __thiscall FUN_1001b6ee(void *this,int param_1);
void __thiscall FUN_1001b77e(void *this,WPARAM param_1);
void __thiscall FUN_1001b7e0(void *this,int param_1);
void __thiscall FUN_1001b836(void *this,LPCSTR param_1);
undefined4 FUN_1001b88d(void);
undefined * FUN_1001b895(undefined *param_1);
void * __cdecl FUN_1001b8a7(size_t param_1);
void __cdecl FUN_1001b8d0(undefined *param_1);
int * __thiscall FUN_1001b8db(void *this,int *param_1);
void FUN_1001b918(void);
void FUN_1001b927(void);
void FUN_1001b947(void);
void FUN_1001b959(void);
void FUN_1001b979(void);
void FUN_1001b98b(void);
void FUN_1001b9ab(void);
void FUN_1001b9bd(void);
void __thiscall FUN_1001b9d3(void *this,int param_1);
void __fastcall FUN_1001ba55(undefined4 *param_1);
void __fastcall FUN_1001ba9d(int *param_1);
void FUN_1001bace(LONG *param_1);
void __fastcall FUN_1001baf1(int *param_1);
void __thiscall FUN_1001bb1f(void *this,int param_1);
void __fastcall FUN_1001bb48(int *param_1);
undefined4 * __thiscall FUN_1001bb72(void *this,LPCSTR param_1);
void __thiscall FUN_1001bbc4(void *this,uint param_1,undefined4 *param_2);
int * __thiscall FUN_1001bbf1(void *this,int *param_1);
void * __thiscall FUN_1001bc41(void *this,LPCSTR param_1);
void __thiscall FUN_1001bc68(void *this,uint param_1,undefined4 *param_2,uint param_3,undefined4 *param_4);
void __thiscall FUN_1001bca6(void *this,uint param_1,undefined4 *param_2);
void * __thiscall FUN_1001bd05(void *this,LPCSTR param_1);
int __thiscall FUN_1001bd2c(void *this,int param_1);
void __thiscall FUN_1001bd7b(void *this,int param_1);
int __thiscall FUN_1001bda3(void *this,byte param_1,int param_2);
void __thiscall FUN_1001bdd6(void *this,int param_1);
undefined4 FUN_1001bde8(void);
undefined4 Catch@1001be20(void);
undefined4 __thiscall FUN_1001be2e(void *this,int param_1);
void FUN_1001be47(void);
bool FUN_1001be50(SIZE_T param_1);
undefined4 * FUN_1001bf4a(void);
int FUN_1001bfaf(void);
void Catch@1001c05d(void);
void __fastcall FUN_1001c06e(int param_1);
void __thiscall FUN_1001c0d3(void *this,undefined4 param_1);
void __fastcall FUN_1001c0df(int *param_1);
void __thiscall FUN_1001c0f1(void *this,UINT param_1);
void __fastcall FUN_1001c15d(int param_1);
void __fastcall FUN_1001c177(int param_1);
void __thiscall FUN_1001c191(void *this,int param_1,int param_2,int param_3,int param_4,int param_5,UINT param_6);
void __thiscall FUN_1001c1e0(void *this,int param_1);
void __fastcall FUN_1001c207(int param_1);
void __thiscall FUN_1001c222(void *this,BOOL param_1);
void __fastcall FUN_1001c249(int param_1);
void __thiscall FUN_1001c26a(void *this,int param_1);
void FUN_1001c2c7(void);
void FUN_1001c2d4(void);
void FUN_1001c305(void);
void FUN_1001c312(void);
void FUN_1001c343(void);
void FUN_1001c350(void);
void FUN_1001c381(void);
void FUN_1001c38e(void);
undefined4 * __fastcall FUN_1001c3b5(undefined4 *param_1);
void * __thiscall CWnd::`scalar_deleting_destructor'(CWnd *this,uint param_1);
undefined4 * __thiscall FUN_1001c3f3(void *this,undefined4 param_1);
void FUN_1001c41f(int param_1,LPRECT param_2,undefined4 *param_3);
void FUN_1001c442(int *param_1,int *param_2,uint param_3);
void FUN_1001c4bb(int param_1,WPARAM param_2,int param_3);
undefined4 FUN_1001c51c(int param_1,int param_2,int param_3);
undefined4 FUN_1001c592(void);
undefined * Catch@1001c63c(void);
undefined4 FUN_1001c670(void);
int FUN_1001c68f(void);
void __fastcall FUN_1001c6c4(int *param_1);
undefined4 FUN_1001c6eb(void);
void * FUN_1001c75d(void);
undefined4 FUN_1001c784(uint param_1);
bool __thiscall FUN_1001c7a2(void *this,uint param_1);
HWND__ * __thiscall CWnd::Detach(CWnd *this);
LRESULT FUN_1001c809(HWND param_1,UINT param_2,WPARAM param_3,LPARAM param_4);
undefined * FUN_1001c854(void);
undefined4 FUN_1001c85a(void);
undefined4 Catch@1001c97d(void);
undefined4 FUN_1001c9b9(undefined4 param_1,int param_2,HDC param_3,HWND param_4);
LRESULT FUN_1001ca35(int param_1,HWND param_2,int *param_3);
void FUN_1001cc2b(int param_1);
undefined4 FUN_1001cc77(void);
bool __thiscall FUN_1001ccb9(void *this,DWORD param_1,LPCSTR param_2,LPCSTR param_3,DWORD param_4,int param_5,int param_6,int param_7,int param_8,HWND param_9,HMENU param_10,LPVOID param_11);
undefined4 FUN_1001cd7f(int param_1);
void __thiscall FUN_1001cd9f(void *this,LPCSTR param_1,LPCSTR param_2,uint param_3,int *param_4,int param_5,HMENU param_6,LPVOID param_7);
void __thiscall CWnd::~CWnd(CWnd *this);
void __fastcall FUN_1001ce67(int *param_1);
void __fastcall FUN_1001ce85(CWnd *param_1);
BOOL __fastcall FUN_1001cfa9(CWnd *param_1);
void __thiscall FUN_1001cff6(void *this,UINT param_1,WPARAM param_2,LPARAM param_3);
undefined4 __thiscall FUN_1001d041(void *this,undefined4 param_1);
uint __thiscall FUN_1001d0b7(void *this,LONG param_1,LONG param_2,uint *param_3);
void __thiscall FUN_1001d128(void *this,undefined4 param_1,int *param_2);
undefined4 __thiscall FUN_1001d165(void *this,undefined4 param_1,undefined4 param_2);
void * __thiscall FUN_1001d1af(void *this,undefined4 param_1,void *param_2);
undefined4 FUN_1001d2b5(void);
void Catch@1001d346(undefined4 param_1,undefined4 param_2);
void FUN_1001d39c(void);
AFX_MSGMAP_ENTRY *AfxFindMessageEntry(AFX_MSGMAP_ENTRY *param_1,uint param_2,uint param_3,uint param_4);
undefined4 __thiscall FUN_1001d4c4(void *this,undefined4 param_1,undefined4 param_2,undefined4 param_3);
undefined4 FUN_1001d508(void);
CCmdUI * __fastcall FUN_1001da7a(CCmdUI *param_1);
undefined4 __thiscall FUN_1001daa4(void *this,uint param_1,int param_2);
undefined4 __thiscall FUN_1001db30(void *this,undefined4 param_1,undefined4 *param_2,undefined4 param_3);
int * __fastcall FUN_1001dbaa(int param_1);
HWND__ * AfxGetParentOwner(HWND__ *param_1);
void * __fastcall FUN_1001dc2d(int param_1);
int * __fastcall FUN_1001dc55(int *param_1);
void * FUN_1001dc96(HWND param_1,int param_2,int param_3);
void FUN_1001dd0f(HWND param_1,UINT param_2,WPARAM param_3,LPARAM param_4,int param_5,int param_6);
void __thiscall FUN_1001dd91(void *this,LPRECT param_1,int param_2);
undefined4 FUN_1001ddbc(HWND param_1,undefined4 *param_2);
void __thiscall FUN_1001ddfe(void *this,undefined4 param_1);
undefined4 FUN_1001de2b(void);
uint __thiscall FUN_1001decf(void *this,uint param_1,int *param_2,int param_3,int *param_4);
uint __thiscall FUN_1001df2a(void *this,uint param_1,int *param_2,int param_3,int *param_4);
void __fastcall FUN_1001e061(int *param_1);
void __fastcall FUN_1001e0de(CWnd *param_1);
void __thiscall OnDevModeChange(void *this,LPSTR param_1);
undefined4 __fastcall FUN_1001e17c(int *param_1);
long __thiscall CWnd::OnDisplayChange(CWnd *this,uint param_1,long param_2);
undefined4 __thiscall FUN_1001e229(void *this,undefined4 param_1,undefined4 param_2);
void __thiscall FUN_1001e253(void *this,undefined4 param_1,undefined4 param_2,void *param_3);
void __fastcall FUN_1001e274(int *param_1);
void * __thiscall FUN_1001e2be(void *this,undefined4 param_1,void *param_2);
undefined4 FUN_1001e2e5(HDC param_1,HWND param_2,int param_3,HANDLE param_4,COLORREF param_5);
void __thiscall FUN_1001e35a(void *this,int param_1);
void AfxRegisterWithIcon(int param_1,undefined4 param_2,ushort param_3);
uint FUN_1001e57f(undefined4 param_1,uint param_2);
bool FUN_1001e5f6(uint param_1);
undefined4 __fastcall FUN_1001e8b0(int param_1);
void __cdecl FUN_1001e8cf(undefined4 *param_1);
void __fastcall FUN_1001e8de(int param_1);
void __fastcall FUN_1001e922(int param_1);
bool FUN_1001e97a(UINT param_1);
void FUN_1001e9fe(UINT param_1,LPSTR param_2,int param_3);
undefined4 FUN_1001ea25(void);
void FUN_1001ea97(void);
undefined4 FUN_1001eaac(uint param_1);
int __fastcall Detach(int param_1);
BOOL __fastcall FUN_1001eaf4(int param_1);
bool FUN_1001eb20(HWND param_1,uint param_2);
HWND FUN_1001eb6a(HWND param_1,LONG param_2,LONG param_3);
void FUN_1001ebdf(HWND param_1,LPCSTR param_2);
void FUN_1001ec37(undefined4 *param_1);
void FUN_1001ec50(HGLOBAL param_1);
void __fastcall FUN_1001ecd8(undefined4 *param_1);
undefined * __thiscall FUN_1001ecec(void *this,byte param_1);
undefined4 FUN_1001ed08(void);
void FUN_1001ed7a(void);
HDC__ * __thiscall CDC::Detach(CDC *this);
void FUN_1001edc0(void);
int __fastcall FUN_1001ee14(int param_1);
int __thiscall FUN_1001ee45(void *this,int param_1);
void __thiscall FUN_1001ee83(void *this,int param_1);
void __thiscall FUN_1001eebf(void *this,int param_1);
COLORREF __thiscall FUN_1001ef05(void *this,COLORREF param_1);
COLORREF __thiscall FUN_1001ef34(void *this,COLORREF param_1);
int __thiscall FUN_1001ef63(void *this,int param_1);
void __thiscall FUN_1001ef91(void *this,int *param_1,int param_2,int param_3);
void __thiscall FUN_1001efdd(void *this,int *param_1,int param_2,int param_3);
void __thiscall FUN_1001f029(void *this,int *param_1,int param_2,int param_3);
void __thiscall FUN_1001f075(void *this,int *param_1,int param_2,int param_3,int param_4,int param_5);
void __thiscall FUN_1001f0cd(void *this,int *param_1,int param_2,int param_3);
void __thiscall FUN_1001f119(void *this,int *param_1,int param_2,int param_3,int param_4,int param_5);
undefined4 FUN_1001f181(void);
void FUN_1001f1f3(void);
int __fastcall Detach(int param_1);
BOOL __fastcall FUN_1001f232(int param_1);
void __thiscall FUN_1001f248(void *this,int param_1);
void FUN_1001f351(undefined4 param_1);
int __thiscall FUN_1001f37f(void *this,LPCSTR param_1,UINT param_2,int param_3);
void FUN_1001f466(LPCSTR param_1,UINT param_2,int param_3);
undefined4 FUN_1001f49e(void);
HWND FUN_1001f4f7(HWND param_1,undefined4 *param_2);
undefined4 FUN_1001f593(void);
uint __thiscall FUN_1001f59f(void *this,LPCSTR param_1,LPCSTR param_2,undefined4 param_3);
bool FUN_1001f614(void);
undefined4 FUN_1001f624(void);
void __fastcall FUN_1001f62d(undefined4 *param_1);
HLOCAL __thiscall FUN_1001f636(void *this,byte param_1);
CWinThread * FUN_1001f651(void);
undefined * __thiscall FUN_1001f73b(void *this,byte param_1);
void FUN_1001f79b(void);
void __fastcall FUN_1001f8d1(void *param_1);
undefined4 __fastcall FUN_1001f901(void *param_1);
void FUN_1001f947(void);
void FUN_1001f948(void);
void * __thiscall CWinThread::`scalar_deleting_destructor'(CWinThread *this,uint param_1);
undefined4 * __thiscall CWinThread::CWinThread(CWinThread *this);
void __fastcall FUN_1001f9ed(int param_1);
HLOCAL __thiscall FUN_1001fa83(void *this,byte param_1);
HLOCAL __thiscall FUN_1001fa9e(void *this,byte param_1);
void FUN_1001fab9(void);
void __thiscall FUN_1001fb99(void *this,int param_1);
undefined4 __thiscall FUN_1001fbac(void *this,int param_1);
HLOCAL FUN_1001fbf2(SIZE_T param_1);
void FUN_1001fc10(HLOCAL param_1);
DWORD * __fastcall FUN_1001fc24(DWORD *param_1);
void __fastcall FUN_1001fc66(DWORD *param_1);
int __fastcall FUN_1001fcbd(int param_1);
void __thiscall FUN_1001fdcf(void *this,int param_1);
void __thiscall FUN_1001fe2c(void *this,int param_1,int param_2);
HLOCAL __thiscall FUN_1001ff16(void *this,byte param_1);
void FUN_1001ff31(void);
void __thiscall FUN_1001ff32(void *this,undefined4 param_1);
void __thiscall FUN_1001ff73(void *this,undefined4 *param_1,int param_2);
void __thiscall FUN_1002000c(void *this,int param_1,int param_2);
int __thiscall FUN_10020065(void *this,undefined *param_1);
undefined4 __fastcall FUN_100200dc(int *param_1);
void __fastcall FUN_10020109(int *param_1);
int FUN_10020127(void);
void Catch@10020172(void);
void FUN_100201a7(undefined4 param_1);
void FUN_100201bd(int param_1,int param_2);
void FUN_100201d7(void);
void __fastcall FUN_10020206(undefined4 *param_1);
HLOCAL __thiscall FUN_1002021d(void *this,byte param_1);
void FUN_10020238(void);
void FUN_100202ac(void);
void FUN_100202c6(void);
void FUN_100202c7(void);
void __thiscall FUN_100202dd(void *this,undefined1 param_1);
HLOCAL __thiscall FUN_10020340(void *this,byte param_1);
void FUN_1002035b(void);
void __fastcall thunk_FUN_10020109(int *param_1);
void __fastcall FUN_100203d5(undefined4 *param_1);
HLOCAL __thiscall FUN_100203f4(void *this,byte param_1);
void FUN_1002040f(void);
void FUN_100204c7(void);
void FUN_100204c8(void);
void FUN_100204de(void);
AFX_MODULE_THREAD_STATE * AfxGetModuleThreadState(void);
void __thiscall CTypeLibCache::Unlock(CTypeLibCache *this);
HLOCAL __thiscall FUN_10020578(void *this,byte param_1);
void thunk_FUN_1002035b(void);
undefined4 FUN_10020598(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void __fastcall FUN_100205fb(int param_1);
int FUN_10020718(byte *param_1,LPSTR param_2,int param_3);
int FUN_1002076e(void);
void FUN_100207b3(void);
void FUN_10020801(int param_1);
void FUN_10020871(int param_1);
HKEY __fastcall FUN_10020892(int param_1);
HKEY __thiscall GetSectionKey(void *this,LPCSTR param_1);
void FUN_1002097c(void);
void FUN_1002098e(void);
void FUN_100209b4(void);
void FUN_100209c6(void);
undefined4 * __thiscall FUN_10020a3f(void *this,byte param_1);
void thunk_FUN_1001edc0(void);
undefined4 * __thiscall FUN_10020a86(void *this,byte param_1);
void FUN_10020aa6(void);
void FUN_10020adf(void);
void FUN_10020aee(void);
void FUN_10020b1f(void);
void FUN_10020b2e(void);
void FUN_10020b65(void);
void FUN_10020b77(void);
void FUN_10020b9d(void);
void FUN_10020baf(void);
CWnd * __thiscall FUN_10020c3d(void *this,byte param_1);
void __thiscall CWnd::~CWnd(CWnd *this);
void FUN_10020c72(void);
void FUN_10020c81(void);
void FUN_10020ce3(void);
void FUN_10020ced(void);
void FUN_10020d03(void);
void FUN_10020d33(void);
int __fastcall FUN_10020d55(int param_1);
void FUN_10020df0(void);
void FUN_10020e31(void);
void FUN_10020e71(void);
void FUN_10020e72(void);
void FUN_10020e92(void);
void FUN_10020e93(void);
bool FUN_10020eaf(void);
undefined4 * __thiscall FUN_10020f1e(void *this,byte param_1);
void FUN_10020f3e(void);
void FUN_10020f77(void);
void FUN_10020f86(void);
void FUN_10020fad(void);
void AfxPostQuitMessage(int param_1);
void __thiscall CWinThread::~CWinThread(CWinThread *this);
void FUN_1002104c(void);
void Unwind@10021110(void);
void Unwind@10021130(void);
void Unwind@10021150(void);
void Unwind@10021170(void);
void Unwind@10021190(void);
void Unwind@100211b0(void);
void Unwind@100211d0(void);
void Unwind@100211f0(void);
void Unwind@100211f8(void);
void Unwind@10021203(void);
void Unwind@10021220(void);
void Unwind@10021240(void);
void Unwind@10021248(void);
void Unwind@10021253(void);
void Unwind@10021270(void);
void Unwind@10021278(void);
void Unwind@10021283(void);
void Unwind@1002128e(void);
void Unwind@1002129c(void);
void Unwind@100212aa(void);
void Unwind@100212c3(void);
void Unwind@100212d1(void);
void Unwind@100212e7(void);
void Unwind@10021300(void);
void Unwind@10021319(void);
void Unwind@10021340(void);
void Unwind@10021356(void);
void Unwind@10021364(void);
void Unwind@10021380(void);
void Unwind@10021388(void);
void Unwind@10021393(void);
void Unwind@1002139e(void);
void Unwind@100213ac(void);
void Unwind@100213ba(void);
void Unwind@100213c8(void);
void Unwind@100213de(void);
void Unwind@100213ec(void);
void Unwind@100213fa(void);
void Unwind@10021413(void);
void Unwind@10021430(void);
void Unwind@10021450(void);
void Unwind@10021470(void);
void Unwind@10021478(void);
void Unwind@10021480(void);
void Unwind@100214a0(void);
void Unwind@100214c0(void);
void Unwind@100214c8(void);
void Unwind@100214d0(void);
void Unwind@100214d8(void);
void Unwind@100214f0(void);
void Unwind@10021510(void);
void Unwind@10021530(void);
void Unwind@10021550(void);
void Unwind@10021570(void);
void Unwind@10021578(void);
void Unwind@10021590(void);
void Unwind@10021598(void);
void Unwind@100215b0(void);
void Unwind@100215b8(void);
void Unwind@100215c0(void);
void Unwind@100215c8(void);
void Unwind@100215e0(void);
void Unwind@100215e8(void);
void Unwind@10021600(void);
void Unwind@10021620(void);
void Unwind@10021640(void);
void Unwind@10021656(void);
void Unwind@10021664(void);
void Unwind@10021680(void);
void Unwind@1002168b(void);
void Unwind@10021696(void);
void Unwind@100216b0(void);
void Unwind@100216d0(void);
void Unwind@100216d8(void);
void Unwind@100216e3(void);
void Unwind@10021710(void);
void Unwind@10021718(void);
void Unwind@10021730(void);
void Unwind@10021738(void);
void Unwind@10021750(void);
void Unwind@10021758(void);
void Unwind@10021766(void);
void Unwind@10021780(void);
void Unwind@100217a0(void);
void Unwind@100217c0(void);
void Unwind@100217e0(void);
void Unwind@100217e8(void);
void Unwind@100217f0(void);
void Unwind@10021810(void);
void Unwind@10021818(void);
void Unwind@10021830(void);
void Unwind@10021838(void);
void Unwind@10021850(void);
void Unwind@10021858(void);
void Unwind@10021870(void);
void Unwind@10021890(void);
void Unwind@10021898(void);
void Unwind@100218a0(void);
void Unwind@100218c0(void);
void Unwind@100218e0(void);
void Unwind@10021900(void);
void Unwind@10021920(void);
void Unwind@10021940(void);
void Unwind@10021960(void);
void Unwind@10021968(void);
void Unwind@10021980(void);
void Unwind@10021988(void);
void Unwind@10021990(void);
void Unwind@1002199b(void);
void Unwind@100219b0(void);
void Unwind@100219d0(void);
void Unwind@100219d8(void);
void Unwind@100219e0(void);
void Unwind@10021a00(void);
void Unwind@10021a08(void);
void Unwind@10021a13(void);
void Unwind@10021a1e(void);
void Unwind@10021a30(void);
void Unwind@10021a38(void);
void Unwind@10021a50(void);
void Unwind@10021a70(void);
void Unwind@10021a90(void);
void Unwind@10021ab0(void);
void Unwind@10021ab8(void);
void Unwind@10021ad0(void);
void Unwind@10021ad8(void);
void Unwind@10021af0(void);
void Unwind@10021af8(void);
void Unwind@10021b0c(void);
void Unwind@10021b20(void);
void Unwind@10021b34(void);
void Unwind@10021b48(void);
void Unwind@10021b5c(void);
void Unwind@10021b7c(void);
void Unwind@10021b90(void);
void Unwind@10021ba4(void);
void Unwind@10021bb8(void);
void Unwind@10021be4(void);
void Unwind@10021bef(void);
void Unwind@10021c10(void);
void Unwind@10021c1b(void);
void Unwind@10021c30(void);
void Unwind@10021c44(void);
void Unwind@10021c4c(void);
void Unwind@10021c64(void);
void Unwind@10021c78(void);
void Unwind@10021c8c(void);
void Unwind@10021ca0(void);
void Unwind@10021cb4(void);
void Unwind@10021cc8(void);
void Unwind@10021ce8(void);
void Unwind@10021d08(void);
void Unwind@10021d28(void);
void Unwind@10021d3c(void);
void Unwind@10021d44(void);
void Unwind@10021d4c(void);
void Unwind@10021d60(void);
void Unwind@10021d74(void);
void Unwind@10021d88(void);
void Unwind@10021d9c(void);
void Unwind@10021db0(void);
void Unwind@10021dc4(void);
void Unwind@10021de4(void);
void Unwind@10021df8(void);
void Unwind@10021e0c(void);
void Unwind@10021e20(void);
void Unwind@10021e40(void);
void Unwind@10021e57(void);
void Unwind@10021e70(void);
void Unwind@10021e78(void);
void Unwind@10021e80(void);
void Unwind@10021ea0(void);
void Unwind@10021ec0(void);
void Unwind@10021ecb(void);
void Unwind@10021ef0(void);
void Unwind@10021ef8(void);
void Unwind@10021f03(void);
void Unwind@10021f0e(void);
void Unwind@10021f16(void);
void Unwind@10021f21(void);
void Unwind@10021f2c(void);
void Unwind@10021f34(void);
void Unwind@10021f3f(void);
void Unwind@10021f4a(void);
void Unwind@10021f52(void);
void Unwind@10021f70(void);
void Unwind@10021f7b(void);
void Unwind@10021f86(void);
void Unwind@10021f91(void);
void Unwind@10021f99(void);
void Unwind@10021fa1(void);
void Unwind@10021fa9(void);
void Unwind@10021fc0(void);

