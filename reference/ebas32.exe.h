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

typedef struct _s_UnwindMapEntry _s_UnwindMapEntry, *P_s_UnwindMapEntry;

typedef struct _s_UnwindMapEntry UnwindMapEntry;

typedef int __ehstate_t;

struct _s_UnwindMapEntry {
    __ehstate_t toState;
    void (*action)(void);
};

typedef struct CScrollView CScrollView, *PCScrollView;

struct CScrollView { // PlaceHolder Class Structure
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

typedef struct _s_TryBlockMapEntry TryBlockMapEntry;

typedef struct CDialog CDialog, *PCDialog;

struct CDialog { // PlaceHolder Class Structure
};

typedef struct CDocTemplate CDocTemplate, *PCDocTemplate;

struct CDocTemplate { // PlaceHolder Class Structure
};

typedef struct CWnd CWnd, *PCWnd;

struct CWnd { // PlaceHolder Class Structure
};

typedef struct CFrameWnd CFrameWnd, *PCFrameWnd;

struct CFrameWnd { // PlaceHolder Class Structure
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

typedef struct CPtrList CPtrList, *PCPtrList;

struct CPtrList { // PlaceHolder Class Structure
};

typedef struct CFormView CFormView, *PCFormView;

struct CFormView { // PlaceHolder Class Structure
};

typedef struct CPaintDC CPaintDC, *PCPaintDC;

struct CPaintDC { // PlaceHolder Class Structure
};

typedef struct CSimpleException CSimpleException, *PCSimpleException;

struct CSimpleException { // PlaceHolder Class Structure
};

typedef struct CCmdUI CCmdUI, *PCCmdUI;

struct CCmdUI { // PlaceHolder Class Structure
};

typedef struct DLGTEMPLATE DLGTEMPLATE, *PDLGTEMPLATE;

typedef struct DLGTEMPLATE *LPCDLGTEMPLATEA;

typedef ulong DWORD;

typedef ushort WORD;

struct DLGTEMPLATE {
    DWORD style;
    DWORD dwExtendedStyle;
    WORD cdit;
    short x;
    short y;
    short cx;
    short cy;
};

typedef int BOOL;

typedef struct HDC__ HDC__, *PHDC__;

typedef struct HDC__ *HDC;

typedef long LONG_PTR;

typedef LONG_PTR LPARAM;

typedef BOOL (*GRAYSTRINGPROC)(HDC, LPARAM, int);

struct HDC__ {
    int unused;
};

typedef struct tagWINDOWPLACEMENT tagWINDOWPLACEMENT, *PtagWINDOWPLACEMENT;

typedef struct tagWINDOWPLACEMENT WINDOWPLACEMENT;

typedef uint UINT;

typedef struct tagPOINT tagPOINT, *PtagPOINT;

typedef struct tagPOINT POINT;

typedef struct tagRECT tagRECT, *PtagRECT;

typedef struct tagRECT RECT;

typedef long LONG;

struct tagPOINT {
    LONG x;
    LONG y;
};

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

typedef struct HWND__ HWND__, *PHWND__;

typedef struct HWND__ *HWND;

typedef uint UINT_PTR;

typedef UINT_PTR WPARAM;

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

struct HWND__ {
    int unused;
};

typedef struct tagMSG tagMSG, *PtagMSG;

typedef struct tagMSG MSG;

struct tagMSG {
    HWND hwnd;
    UINT message;
    WPARAM wParam;
    LPARAM lParam;
    DWORD time;
    POINT pt;
};

typedef struct tagMSG *LPMSG;

typedef struct tagSCROLLINFO tagSCROLLINFO, *PtagSCROLLINFO;

struct tagSCROLLINFO {
    UINT cbSize;
    UINT fMask;
    int nMin;
    int nMax;
    UINT nPage;
    int nPos;
    int nTrackPos;
};

typedef struct tagSCROLLINFO SCROLLINFO;

typedef LRESULT (*HOOKPROC)(int, WPARAM, LPARAM);

typedef SCROLLINFO *LPCSCROLLINFO;

typedef struct tagWNDCLASSA WNDCLASSA;

typedef struct tagPAINTSTRUCT tagPAINTSTRUCT, *PtagPAINTSTRUCT;

typedef struct tagPAINTSTRUCT *LPPAINTSTRUCT;

typedef uchar BYTE;

struct tagPAINTSTRUCT {
    HDC hdc;
    BOOL fErase;
    RECT rcPaint;
    BOOL fRestore;
    BOOL fIncUpdate;
    BYTE rgbReserved[32];
};

typedef struct tagPAINTSTRUCT PAINTSTRUCT;

typedef struct tagSCROLLINFO *LPSCROLLINFO;

typedef void (*TIMERPROC)(HWND, UINT, UINT_PTR, DWORD);

typedef struct tagWNDCLASSA *LPWNDCLASSA;

typedef int INT_PTR;

typedef INT_PTR (*DLGPROC)(HWND, UINT, WPARAM, LPARAM);

typedef void *HANDLE;

typedef HANDLE HDWP;

typedef struct _cpinfo _cpinfo, *P_cpinfo;

struct _cpinfo {
    UINT MaxCharSize;
    BYTE DefaultChar[2];
    BYTE LeadByte[12];
};

typedef struct _cpinfo *LPCPINFO;

typedef struct tagRGBQUAD tagRGBQUAD, *PtagRGBQUAD;

struct tagRGBQUAD {
    BYTE rgbBlue;
    BYTE rgbGreen;
    BYTE rgbRed;
    BYTE rgbReserved;
};

typedef struct tagBITMAPINFO tagBITMAPINFO, *PtagBITMAPINFO;

typedef struct tagBITMAPINFO BITMAPINFO;

typedef struct tagBITMAPINFOHEADER tagBITMAPINFOHEADER, *PtagBITMAPINFOHEADER;

typedef struct tagBITMAPINFOHEADER BITMAPINFOHEADER;

typedef struct tagRGBQUAD RGBQUAD;

struct tagBITMAPINFOHEADER {
    DWORD biSize;
    LONG biWidth;
    LONG biHeight;
    WORD biPlanes;
    WORD biBitCount;
    DWORD biCompression;
    DWORD biSizeImage;
    LONG biXPelsPerMeter;
    LONG biYPelsPerMeter;
    DWORD biClrUsed;
    DWORD biClrImportant;
};

struct tagBITMAPINFO {
    BITMAPINFOHEADER bmiHeader;
    RGBQUAD bmiColors[1];
};

typedef struct _devicemodeA _devicemodeA, *P_devicemodeA;

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

typedef struct _TIME_ZONE_INFORMATION _TIME_ZONE_INFORMATION, *P_TIME_ZONE_INFORMATION;

typedef struct _TIME_ZONE_INFORMATION *LPTIME_ZONE_INFORMATION;

typedef wchar_t WCHAR;

struct _TIME_ZONE_INFORMATION {
    LONG Bias;
    WCHAR StandardName[32];
    SYSTEMTIME StandardDate;
    LONG StandardBias;
    WCHAR DaylightName[32];
    SYSTEMTIME DaylightDate;
    LONG DaylightBias;
};

typedef struct _WIN32_FIND_DATAA _WIN32_FIND_DATAA, *P_WIN32_FIND_DATAA;

typedef struct _FILETIME _FILETIME, *P_FILETIME;

typedef struct _FILETIME FILETIME;

struct _FILETIME {
    DWORD dwLowDateTime;
    DWORD dwHighDateTime;
};

struct _WIN32_FIND_DATAA {
    DWORD dwFileAttributes;
    FILETIME ftCreationTime;
    FILETIME ftLastAccessTime;
    FILETIME ftLastWriteTime;
    DWORD nFileSizeHigh;
    DWORD nFileSizeLow;
    DWORD dwReserved0;
    DWORD dwReserved1;
    CHAR cFileName[260];
    CHAR cAlternateFileName[14];
};

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

typedef struct _WIN32_FIND_DATAA *LPWIN32_FIND_DATAA;

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

typedef struct _SYSTEMTIME *LPSYSTEMTIME;

typedef PTOP_LEVEL_EXCEPTION_FILTER LPTOP_LEVEL_EXCEPTION_FILTER;

typedef PVOID PSECURITY_DESCRIPTOR;

typedef WCHAR *LPWSTR;

typedef DWORD SECURITY_INFORMATION;

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

typedef ULONG_PTR DWORD_PTR;

typedef ULONG_PTR SIZE_T;

typedef uint *PUINT_PTR;

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

typedef struct HACCEL__ HACCEL__, *PHACCEL__;

struct HACCEL__ {
    int unused;
};

typedef struct HHOOK__ HHOOK__, *PHHOOK__;

struct HHOOK__ {
    int unused;
};

typedef struct HACCEL__ *HACCEL;

typedef int *LPINT;

typedef struct tagSIZE tagSIZE, *PtagSIZE;

struct tagSIZE {
    LONG cx;
    LONG cy;
};

typedef struct HRSRC__ HRSRC__, *PHRSRC__;

struct HRSRC__ {
    int unused;
};

typedef HINSTANCE HMODULE;

typedef int INT;

typedef HANDLE HLOCAL;

typedef struct tagSIZE *LPSIZE;

typedef struct HMENU__ HMENU__, *PHMENU__;

typedef struct HMENU__ *HMENU;

struct HMENU__ {
    int unused;
};

typedef struct _FILETIME *LPFILETIME;

typedef int (*FARPROC)(void);

typedef HANDLE *LPHANDLE;

typedef struct HKEY__ *HKEY;

typedef HKEY *PHKEY;

typedef WORD *LPWORD;

typedef WORD ATOM;

typedef struct tagRECT *LPRECT;

typedef HANDLE HGLOBAL;

typedef BOOL *LPBOOL;

typedef void *HGDIOBJ;

typedef void *LPCVOID;

typedef struct HRSRC__ *HRSRC;

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

typedef LONG LSTATUS;

typedef ACCESS_MASK REGSAM;

typedef struct tagOFNA tagOFNA, *PtagOFNA;

typedef struct tagOFNA *LPOPENFILENAMEA;

typedef UINT_PTR (*LPOFNHOOKPROC)(HWND, UINT, WPARAM, LPARAM);

struct tagOFNA {
    DWORD lStructSize;
    HWND hwndOwner;
    HINSTANCE hInstance;
    LPCSTR lpstrFilter;
    LPSTR lpstrCustomFilter;
    DWORD nMaxCustFilter;
    DWORD nFilterIndex;
    LPSTR lpstrFile;
    DWORD nMaxFile;
    LPSTR lpstrFileTitle;
    DWORD nMaxFileTitle;
    LPCSTR lpstrInitialDir;
    LPCSTR lpstrTitle;
    DWORD Flags;
    WORD nFileOffset;
    WORD nFileExtension;
    LPCSTR lpstrDefExt;
    LPARAM lCustData;
    LPOFNHOOKPROC lpfnHook;
    LPCSTR lpTemplateName;
    void *pvReserved;
    DWORD dwReserved;
    DWORD FlagsEx;
};

typedef struct AFX_MSGMAP_ENTRY AFX_MSGMAP_ENTRY, *PAFX_MSGMAP_ENTRY;

struct AFX_MSGMAP_ENTRY { // PlaceHolder Structure
};

typedef struct CWinThread CWinThread, *PCWinThread;

struct CWinThread { // PlaceHolder Structure
};

typedef struct AFX_MODULE_THREAD_STATE AFX_MODULE_THREAD_STATE, *PAFX_MODULE_THREAD_STATE;

struct AFX_MODULE_THREAD_STATE { // PlaceHolder Structure
};

typedef struct CMiniDockFrameWnd CMiniDockFrameWnd, *PCMiniDockFrameWnd;

struct CMiniDockFrameWnd { // PlaceHolder Structure
};

typedef struct CView CView, *PCView;

struct CView { // PlaceHolder Structure
};

typedef struct CParkingWnd CParkingWnd, *PCParkingWnd;

struct CParkingWnd { // PlaceHolder Structure
};

typedef struct CException CException, *PCException;

struct CException { // PlaceHolder Structure
};

typedef struct CTypeLibCache CTypeLibCache, *PCTypeLibCache;

struct CTypeLibCache { // PlaceHolder Structure
};

typedef struct __POSITION __POSITION, *P__POSITION;

struct __POSITION { // PlaceHolder Structure
};

typedef struct CPoint CPoint, *PCPoint;

struct CPoint { // PlaceHolder Structure
};

typedef struct CDocument CDocument, *PCDocument;

struct CDocument { // PlaceHolder Structure
};

typedef struct HDROP__ HDROP__, *PHDROP__;

struct HDROP__ {
    int unused;
};

typedef struct HDROP__ *HDROP;

typedef struct _SHFILEINFOA _SHFILEINFOA, *P_SHFILEINFOA;

typedef struct _SHFILEINFOA SHFILEINFOA;

struct _SHFILEINFOA {
    HICON hIcon;
    int iIcon;
    DWORD dwAttributes;
    CHAR szDisplayName[260];
    CHAR szTypeName[80];
};

typedef struct _NOTIFYICONDATAA _NOTIFYICONDATAA, *P_NOTIFYICONDATAA;

struct _NOTIFYICONDATAA {
    DWORD cbSize;
    HWND hWnd;
    UINT uID;
    UINT uFlags;
    UINT uCallbackMessage;
    HICON hIcon;
    CHAR szTip[64];
};

typedef struct _NOTIFYICONDATAA *PNOTIFYICONDATAA;

typedef uint size_t;

typedef int errno_t;

typedef struct _PRINTER_DEFAULTSA _PRINTER_DEFAULTSA, *P_PRINTER_DEFAULTSA;

struct _PRINTER_DEFAULTSA {
    LPSTR pDatatype;
    LPDEVMODEA pDevMode;
    ACCESS_MASK DesiredAccess;
};

typedef struct _PRINTER_DEFAULTSA *LPPRINTER_DEFAULTSA;




undefined4 * __fastcall FUN_00401040(undefined4 *param_1);
undefined4 * __thiscall FUN_00401070(void *this,byte param_1);
void __fastcall FUN_00401090(undefined4 *param_1);
void __fastcall FUN_004010c0(int *param_1);
void __thiscall FUN_004010f0(void *this,LPCSTR param_1);
void __fastcall FUN_00401190(int param_1);
undefined * __thiscall FUN_004011c0(undefined *param_1,byte param_2);
char * __thiscall FUN_00401300(char *param_1,undefined4 param_2,LPCSTR param_3);
void __fastcall FUN_00401430(CWnd *param_1);
void __thiscall FUN_00401470(void *this,LPCSTR param_1);
undefined4 * __fastcall FUN_00401570(undefined4 *param_1);
undefined4 * __thiscall FUN_00401600(void *this,byte param_1);
void __fastcall FUN_00401620(undefined4 *param_1);
void __cdecl FUN_00401910(undefined4 param_1,undefined4 *param_2);
char * __cdecl FUN_00401d80(char *param_1);
void FUN_00401e70(void);
void FUN_00401e80(void);
undefined4 * __fastcall FUN_00401ea0(undefined4 *param_1);
undefined * __thiscall FUN_00401ec0(void *this,byte param_1);
undefined4 __fastcall FUN_00401ee0(int param_1);
undefined4 * __fastcall FUN_00401fa0(undefined4 *param_1);
undefined4 * __thiscall FUN_00401fc0(void *this,byte param_1);
void __fastcall FUN_00401fe0(undefined4 *param_1);
void __fastcall FUN_00402080(int *param_1);
void FUN_00402710(undefined *param_1);
undefined4 FUN_0040271d(void);
void __fastcall FUN_00402731(undefined4 *param_1);
bool FUN_0040273d(void);
undefined4 FUN_00402815(int *param_1,uint param_2);
undefined4 xMonitorFromWindow(HWND param_1,uint param_2);
undefined4 FUN_004028d6(int param_1,uint *param_2);
CWnd * __thiscall CWnd::GetOwner(CWnd *this);
void FUN_00402980(void);
undefined * __thiscall FUN_0040298e(void *this,byte param_1);
void FUN_004029aa(void);
void __fastcall FUN_004029ed(undefined4 *param_1);
undefined * __thiscall FUN_004029f9(void *this,byte param_1);
void FUN_00402a15(void);
undefined4 * __thiscall FUN_00402a3e(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_00402a68(void *this,byte param_1);
void __fastcall FUN_00402a84(undefined4 *param_1);
undefined4 * __thiscall FUN_00402a8b(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_00402ab5(void *this,byte param_1);
void __fastcall FUN_00402ad1(undefined4 *param_1);
undefined * __thiscall FUN_00402ad8(void *this,byte param_1);
void FUN_00402af4(void);
undefined4 * __thiscall FUN_00402b3c(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_00402b66(void *this,byte param_1);
void __fastcall FUN_00402b82(undefined4 *param_1);
undefined4 * __thiscall FUN_00402b89(void *this,undefined4 param_1,undefined4 param_2);
undefined4 * __thiscall FUN_00402bb3(void *this,byte param_1);
void __fastcall FUN_00402bcf(undefined4 *param_1);
undefined * __thiscall FUN_00402bd6(void *this,byte param_1);
void FUN_00402bf2(void);
void __thiscall FUN_00402c5b(void *this,int param_1,int param_2,UINT param_3,RECT *param_4,LPCSTR param_5,UINT param_6,INT *param_7);
int * __thiscall FUN_00402c80(void *this,int *param_1,int param_2,int param_3,LPCSTR param_4,int param_5,int param_6,INT *param_7,int param_8);
void __thiscall FUN_00402cd4(void *this,int param_1,GRAYSTRINGPROC param_2,LPARAM param_3,int param_4,int param_5,int param_6,int param_7,int param_8);
undefined4 * __thiscall FUN_00402d20(void *this,undefined4 param_1,undefined4 param_2);
void __fastcall FUN_00402d48(int param_1);
void __fastcall FUN_00402d5c(int param_1);
int * FUN_00402d84(void);
void Catch@00402dfd(undefined4 *param_1);
void __thiscall FUN_00402e13(void *this,undefined4 *param_1);
void __thiscall CDialog::~CDialog(CDialog *this);
void __thiscall FUN_00402e54(void *this,byte *param_1,int *param_2,void *param_3);
void * __thiscall FUN_00402e6b(void *this,byte *param_1,int *param_2,void *param_3,uint param_4);
void __thiscall FUN_00403070(void *this,byte *param_1,int *param_2,void *param_3);
uint __cdecl FUN_00403087(byte *param_1,byte *param_2);
int __cdecl FUN_0040312b(undefined1 *param_1,byte *param_2);
undefined4 __cdecl FUN_0040317d(undefined4 param_1);
int __cdecl FUN_004031fb(undefined4 param_1);
void entry(void);
void __cdecl __amsg_exit(int param_1);
void __cdecl FUN_00403369(DWORD param_1);
void __fastcall FUN_0040338d(undefined4 *param_1);
undefined4 * __thiscall FUN_004033b6(void *this,byte param_1);
void FUN_004033d2(undefined *UNRECOVERED_JUMPTABLE);
void FUN_00403406(undefined4 param_1,undefined *UNRECOVERED_JUMPTABLE);
void FUN_0040340d(undefined4 param_1,undefined *UNRECOVERED_JUMPTABLE);
void FUN_00403414(PVOID param_1,PEXCEPTION_RECORD param_2);
undefined4 __cdecl FUN_00403463(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4);
undefined4 __cdecl FUN_00403499(undefined4 param_1,undefined4 param_2,undefined4 param_3,int param_4,int param_5);
void __cdecl FUN_004034ed(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3);
undefined4 __cdecl FUN_00403512(undefined4 *param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,undefined4 param_6,undefined4 param_7);
undefined4 __cdecl FUN_004035c8(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3);
int __cdecl FUN_0040363d(int param_1,int param_2,int param_3,uint *param_4,uint *param_5);
void __cdecl __global_unwind2(PVOID param_1);
void __cdecl __local_unwind2(int param_1,int param_2);
int __cdecl __abnormal_termination(void);
void __fastcall __NLG_Notify1(undefined4 param_1);
void FUN_0040378e(void);
void FUN_004037a8(void);
void * __cdecl _memset(void *_Dst,int _Val,size_t _Size);
byte * __cdecl FUN_00403828(byte *param_1,uint param_2);
void * __cdecl _malloc(size_t _Size);
void * __cdecl __nh_malloc(size_t _Size,int _NhFlag);
void __cdecl FUN_004038fd(uint *param_1);
void FUN_00403964(void);
void FUN_004039c3(void);
void __cdecl FUN_004039f9(undefined *param_1);
void FUN_00403a63(void);
void FUN_00403abb(void);
void __CxxThrowException@8(undefined4 param_1,undefined4 param_2);
int __cdecl _memcmp(void *_Buf1,void *_Buf2,size_t _Size);
undefined4 * __cdecl FUN_00403bd0(undefined4 *param_1,undefined4 *param_2,uint param_3);
int __cdecl FUN_00403f05(short *param_1);
byte * __cdecl FUN_00403f22(byte *param_1,byte *param_2);
byte * __cdecl FUN_00403fb7(byte *param_1);
byte * __cdecl FUN_00404041(byte *param_1);
undefined4 * __cdecl FUN_00404060(undefined4 *param_1,undefined4 *param_2,uint param_3);
byte * __cdecl FUN_00404395(byte *param_1,uint param_2);
int __cdecl FUN_00404407(undefined1 *param_1,byte *param_2,undefined4 *param_3);
char __cdecl FUN_00404458(byte *param_1);
size_t __cdecl _strlen(char *_Str);
int __cdecl FUN_004044eb(byte *param_1,byte *param_2,size_t param_3);
uint __cdecl FUN_004045da(void *param_1);
int __thiscall FUN_00404669(void *this,byte *param_1);
void __thiscall FUN_004046f4(void *this,byte *param_1);
void FUN_004046ff(void);
void FUN_00404717(void);
void FUN_00404750(void);
uint * __cdecl FUN_0040477f(uint *param_1);
void FUN_004047aa(void);
void __cdecl FUN_004047d7(UINT param_1);
void __cdecl __exit(int _Code);
void __cdecl FUN_004047f9(UINT param_1,int param_2,int param_3);
void FUN_0040489e(void);
void FUN_004048a7(void);
void __cdecl FUN_004048b0(undefined4 *param_1,undefined4 *param_2);
undefined * FUN_004048d3(undefined *param_1,uint param_2);
void FUN_00404965(void);
void FUN_004049fa(void);
undefined4 FUN_00404a03(void);
SIZE_T __cdecl FUN_00404a37(undefined *param_1);
void FUN_00404aa1(void);
void FUN_00404b1c(void);
undefined4 __cdecl FUN_00404b25(UINT param_1);
UINT __cdecl FUN_00404cd2(UINT param_1);
undefined4 __cdecl FUN_00404d1c(int param_1);
void FUN_00404d4f(void);
void FUN_00404d78(void);
void FUN_00404efd(void);
void __cdecl FUN_00404f19(undefined *param_1);
DWORD * FUN_00404f8c(void);
DWORD * FUN_00404f95(void);
int __cdecl FUN_00404f9e(byte *param_1,byte *param_2);
void __cdecl FUN_0040504d(int *param_1);
int __cdecl FUN_0040505b(int *param_1,int param_2);
int * __cdecl FUN_0040523f(int *param_1);
int * __cdecl FUN_00405349(int *param_1);
uint __cdecl FUN_004054a9(uint param_1);
uint __thiscall FUN_00405518(void *this,uint param_1);
uint __thiscall FUN_004055e4(void *this,int param_1,uint param_2);
undefined4 FUN_00405659(void);
void __cdecl FUN_004056ad(int param_1);
DWORD * FUN_004056c0(void);
uint __cdecl FUN_00405727(uint param_1,int *param_2);
int __cdecl FUN_0040583f(int *param_1,byte *param_2,undefined4 *param_3);
void __cdecl FUN_00405fdd(uint param_1,int *param_2,int *param_3);
void __cdecl FUN_00406012(uint param_1,int param_2,int *param_3,int *param_4);
void __cdecl FUN_00406043(char *param_1,int param_2,int *param_3,int *param_4);
undefined4 __cdecl FUN_0040607b(int *param_1);
undefined8 __cdecl FUN_00406088(int *param_1);
undefined4 __cdecl FUN_00406098(int *param_1);
byte * __cdecl FUN_004060a6(byte *param_1,uint *param_2);
void FUN_00406231(void);
void FUN_0040637f(void);
LONG __cdecl FUN_004063d5(int param_1,_EXCEPTION_POINTERS *param_2);
int * __cdecl FUN_00406513(int param_1,int *param_2);
byte * FUN_0040654d(void);
void FUN_004065a5(void);
void FUN_0040665e(void);
void __cdecl FUN_004066f7(byte *param_1,undefined4 *param_2,byte *param_3,int *param_4,int *param_5);
LPSTR FUN_004068ab(void);
void FUN_004069dd(void);
void __cdecl FUN_00406b99(undefined4 *param_1);
int FUN_00406bc6(void);
undefined4 __cdecl FUN_00406d0e(int param_1);
void FUN_00406e31(int param_1);
void FUN_00406e4c(void);
void __cdecl FUN_00406e85(DWORD param_1);
void FUN_00406fd8(void);
void __cdecl FUN_00407001(int param_1);
void __cdecl FUN_00407062(int param_1);
int __cdecl _strcmp(char *_Str1,char *_Str2);
undefined4 __cdecl FUN_00407104(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int *param_5,int param_6,PVOID param_7,char param_8);
void __cdecl FUN_0040719f(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,char param_6,int param_7,PVOID param_8);
void __cdecl FUN_00407352(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,int param_6,int param_7,PVOID param_8);
undefined4 __cdecl FUN_004073fc(byte *param_1,byte *param_2,uint *param_3);
void __cdecl FUN_00407459(int param_1,undefined4 param_2,int param_3,int param_4);
void __cdecl FUN_0040750d(PEXCEPTION_RECORD param_1,PVOID param_2,DWORD param_3,undefined4 param_4,int param_5,byte *param_6,byte *param_7,int *param_8,int param_9,PVOID param_10);
undefined4 __cdecl FUN_00407588(DWORD param_1,undefined4 param_2,DWORD param_3,undefined4 param_4,undefined4 param_5,int param_6,int param_7);
void FUN_00407655(void);
void __cdecl FUN_004076cd(int param_1,int param_2,byte *param_3,byte *param_4);
void __cdecl FUN_00407891(int param_1);
int __cdecl FUN_004078f8(int param_1,int *param_2);
void __CallSettingFrame@12(undefined4 param_1,undefined4 param_2,int param_3);
void FUN_0040796c(void);
void FUN_004079cd(void);
char * __cdecl _strchr(char *_Str,int _Val);
undefined4 __cdecl FUN_00407afc(undefined4 param_1);
undefined4 __cdecl FUN_00407b17(undefined4 param_1);
uint __cdecl FUN_00407b5f(int param_1);
void __cdecl FUN_00407b8a(uint *param_1,int param_2);
int * __cdecl FUN_00407eb3(uint *param_1);
undefined4 * FUN_004081bc(void);
int __cdecl FUN_0040826d(int param_1);
undefined4 __cdecl FUN_00408368(uint *param_1,int param_2,int param_3);
undefined ** FUN_0040865e(void);
void __cdecl FUN_004087a2(undefined **param_1);
void __cdecl FUN_004087f8(int param_1);
int __cdecl FUN_004088ba(undefined *param_1,undefined4 *param_2,uint *param_3);
void __cdecl FUN_00408911(int param_1,int param_2,byte *param_3);
int * __cdecl FUN_00408956(uint param_1);
int __cdecl FUN_00408b5e(int *param_1,uint param_2,uint param_3);
undefined4 __cdecl FUN_00408c82(int param_1,int *param_2,byte *param_3,uint param_4);
int FUN_00408d2b(int *param_1);
int * __cdecl FUN_00408d8f(int param_1,int param_2);
void FUN_00408e28(void);
void FUN_00408eb1(void);
byte * __cdecl FUN_00408ed0(byte *param_1,byte *param_2);
int __cdecl FUN_00408f0a(LCID param_1,uint param_2,char *param_3,int param_4,LPWSTR param_5,int param_6,UINT param_7,int param_8);
int __cdecl FUN_0040912e(char *param_1,int param_2);
char * __cdecl __strrev(char *_Str);
char * __cdecl _strstr(char *_Str,char *_SubStr);
int __cdecl FUN_00409210(byte *param_1,byte *param_2);
int __cdecl FUN_00409250(byte *param_1,byte *param_2);
char * __cdecl _strrchr(char *_Str,int _Ch);
int __cdecl _strncmp(char *_Str1,char *_Str2,size_t _MaxCount);
BOOL __cdecl FUN_004092f8(DWORD param_1,LPCSTR param_2,int param_3,LPWORD param_4,UINT param_5,LCID param_6,int param_7);
void __fastcall FUN_00409484(void *param_1);
undefined4 FUN_00409496(void);
void FUN_004094d4(void);
void __cdecl FUN_004094fd(char *param_1);
void __cdecl __fassign(int flag,char *argument,char *number);
undefined1 * __cdecl FUN_004095fb(undefined8 *param_1,undefined1 *param_2,int param_3,int param_4);
undefined1 * __cdecl FUN_0040965c(undefined1 *param_1,int param_2,int param_3,int *param_4,char param_5);
char * __cdecl FUN_0040971e(undefined8 *param_1,char *param_2,size_t param_3);
char * __cdecl FUN_00409773(char *param_1,size_t param_2,int *param_3,char param_4);
void __cdecl FUN_0040981a(undefined8 *param_1,char *param_2,size_t param_3,int param_4);
errno_t __cdecl __cfltcvt(double *arg,char *buffer,size_t sizeInBytes,int format,int precision,int caps);
void __cdecl FUN_004098fe(char *param_1,int param_2);
uint * __cdecl FUN_00409930(uint *param_1,uint *param_2);
uint * __cdecl FUN_00409940(uint *param_1,uint *param_2);
void FUN_00409a20(void);
void FUN_00409a4e(void);
bool __cdecl FUN_00409cd5(int *param_1);
bool __cdecl FUN_00409cf6(int *param_1);
void __cdecl FUN_00409ea2(int param_1,int param_2,uint param_3,int param_4,int param_5,int param_6,int param_7,int param_8,int param_9,int param_10,int param_11);
uint __thiscall FUN_00409ff0(void *this,byte *param_1,byte *param_2);
DWORD __cdecl FUN_0040a0c0(uint param_1,LONG param_2,DWORD param_3);
DWORD __cdecl FUN_0040a125(uint param_1,LONG param_2,DWORD param_3);
int __cdecl FUN_0040a198(undefined *param_1,char *param_2,uint param_3);
int __cdecl FUN_0040a1fd(undefined *param_1,char *param_2,uint param_3);
void __cdecl FUN_0040a388(undefined4 *param_1);
byte __cdecl FUN_0040a3cc(uint param_1);
void __cdecl FUN_0040a4b1(uint param_1);
void __cdecl FUN_0040a4e0(int param_1,int param_2);
void __cdecl FUN_0040a503(uint param_1);
void __cdecl FUN_0040a532(int param_1,int param_2);
int __cdecl FUN_0040a555(LPSTR param_1,WCHAR param_2);
int __cdecl FUN_0040a5ae(LPSTR param_1,WCHAR param_2);
undefined8 __aulldiv(uint param_1,uint param_2,uint param_3,uint param_4);
undefined8 __aullrem(uint param_1,uint param_2,uint param_3,uint param_4);
void __cdecl FUN_0040a705(byte param_1);
undefined4 __cdecl FUN_0040a716(byte param_1,uint param_2,byte param_3);
int __cdecl FUN_0040a747(undefined4 param_1,undefined4 param_2,undefined4 param_3);
char * __cdecl _strncpy(char *_Dest,char *_Source,size_t _Count);
bool __cdecl FUN_0040a8ce(void *param_1,UINT_PTR param_2);
bool __cdecl FUN_0040a8ea(LPVOID param_1,UINT_PTR param_2);
bool __cdecl FUN_0040a906(FARPROC param_1);
void FUN_0040a91e(void);
uint __thiscall FUN_0040a935(void *this,uint param_1,uint param_2);
void __thiscall FUN_0040a96a(void *this,uint param_1,uint param_2);
uint __cdecl FUN_0040a980(uint param_1);
uint __cdecl FUN_0040aa12(uint param_1);
uint __cdecl FUN_0040aa9b(uint param_1);
uint __thiscall FUN_0040ab0a(void *this,uint param_1);
undefined4 __cdecl FUN_0040abd5(int param_1,int param_2);
void __cdecl FUN_0040ac1e(int param_1,int param_2);
undefined4 __cdecl FUN_0040ac74(int param_1,int param_2);
void __cdecl FUN_0040ad00(int param_1,undefined4 *param_2);
void __cdecl FUN_0040ad1b(undefined4 *param_1);
undefined4 __cdecl FUN_0040ad27(int *param_1);
void __cdecl FUN_0040ad42(uint *param_1,uint param_2);
undefined4 __cdecl FUN_0040adcf(ushort *param_1,uint *param_2,int *param_3);
void __cdecl FUN_0040af3b(ushort *param_1,uint *param_2);
void __cdecl FUN_0040af51(ushort *param_1,uint *param_2);
void __thiscall FUN_0040af67(void *this,uint *param_1,byte *param_2);
void __thiscall FUN_0040af94(void *this,uint *param_1,byte *param_2);
void __cdecl FUN_0040afc1(char *param_1,int param_2,int param_3);
int * __cdecl FUN_0040b038(undefined4 param_1,undefined4 param_2,int *param_3,uint *param_4);
void __cdecl FUN_0040b094(uint *param_1,uint *param_2);
void FUN_0040b14a(void);
int __cdecl FUN_0040b153(uchar *param_1);
undefined4 __cdecl FUN_0040b1d0(uint param_1);
undefined4 __cdecl FUN_0040b24f(uint param_1);
void __cdecl FUN_0040b291(uint param_1);
void __cdecl FUN_0040b2f0(uint param_1);
int __cdecl FUN_0040b393(int *param_1);
undefined4 __cdecl FUN_0040b3c1(int *param_1);
int __cdecl FUN_0040b426(int param_1);
undefined4 __cdecl FUN_0040b4ca(DWORD *param_1);
uint __cdecl FUN_0040b64c(int param_1,uint param_2);
undefined4 __cdecl FUN_0040b689(uint param_1,uint param_2,uint *param_3);
void __cdecl ___add_12(uint *param_1,uint *param_2);
void __cdecl FUN_0040b708(uint *param_1);
void __cdecl FUN_0040b736(uint *param_1);
void __cdecl FUN_0040b763(char *param_1,int param_2,uint *param_3);
undefined4 __thiscall FUN_0040b82a(void *this,ushort *param_1,int *param_2,byte *param_3,int param_4,int param_5,int param_6,int param_7);
undefined4 __cdecl FUN_0040bcfb(uint param_1,uint param_2,uint param_3,int param_4,byte param_5,short *param_6);
int __cdecl __mbsnbicoll(uchar *_Str1,uchar *_Str2,size_t _MaxCount);
undefined4 FUN_0040bfcd(void);
undefined4 __cdecl FUN_0040c040(byte *param_1,char *param_2,void *param_3);
undefined4 __cdecl FUN_0040c141(int *param_1);
undefined4 __cdecl FUN_0040c172(int *param_1);
undefined4 __cdecl FUN_0040c1be(uint param_1);
void __cdecl FUN_0040c251(int *param_1,int *param_2);
void __cdecl FUN_0040c471(int *param_1,uint param_2,int param_3);
int __cdecl FUN_0040c4ed(LCID param_1,DWORD param_2,byte *param_3,int param_4,byte *param_5,int param_6,UINT param_7);
undefined4 __cdecl FUN_0040c76a(uint *param_1,int param_2);
int __cdecl FUN_0040c8f1(uchar *param_1,size_t param_2);
undefined4 * __cdecl FUN_0040c949(int *param_1);
undefined4 __cdecl FUN_0040c9b0(uint param_1);
undefined4 __cdecl FUN_0040ca0d(uint param_1);
void __cdecl FUN_0040ca90(undefined4 *param_1);
void RtlUnwind(PVOID TargetFrame,PVOID TargetIp,PEXCEPTION_RECORD ExceptionRecord,PVOID ReturnValue);
LPARAM ReuseDDElParam(LPARAM lParam,UINT msgIn,UINT msgOut,UINT_PTR uiLo,UINT_PTR uiHi);
BOOL UnpackDDElParam(UINT msg,LPARAM lParam,PUINT_PTR puiLo,PUINT_PTR puiHi);
short GetFileTitleA(LPCSTR param_1,LPSTR Buf,WORD cchSize);
BOOL GetSaveFileNameA(LPOPENFILENAMEA param_1);
BOOL GetOpenFileNameA(LPOPENFILENAMEA param_1);
BOOL ClosePrinter(HANDLE hPrinter);
LONG DocumentPropertiesA(HWND hWnd,HANDLE hPrinter,LPSTR pDeviceName,PDEVMODEA pDevModeOutput,PDEVMODEA pDevModeInput,DWORD fMode);
BOOL OpenPrinterA(LPSTR pPrinterName,LPHANDLE phPrinter,LPPRINTER_DEFAULTSA pDefault);
HANDLE __cdecl FUN_0040cb00(HWND param_1);
HANDLE __cdecl FUN_0040cb20(HWND param_1,int param_2);
void __cdecl FUN_0040cb70(HWND param_1,LONG param_2);
void __cdecl FUN_0040cd10(undefined4 param_1,undefined4 param_2);
LRESULT __cdecl FUN_0040cd50(HWND param_1,UINT param_2,WPARAM param_3,LPARAM param_4,int param_5);
void __cdecl FUN_0040cdb0(undefined4 *param_1);
void FUN_0040cdd0(void);
void __cdecl FUN_0040ce00(HDC param_1,int *param_2);
void __cdecl FUN_0040ce30(HDC param_1,int *param_2,ushort param_3,ushort param_4,ushort param_5);
void __cdecl FUN_0040cf70(HDC param_1,int *param_2,ushort param_3);
void __cdecl FUN_0040d020(HDC param_1,char *param_2,LONG *param_3,LONG *param_4);
undefined4 FUN_0040d0d0(undefined4 param_1);
undefined4 FUN_0040d140(int param_1);
void FUN_0040d200(undefined4 param_1);
undefined4 FUN_0040d210(undefined4 param_1,uint param_2);
undefined4 FUN_0040d350(void);
undefined4 FUN_0040d380(void);
undefined4 FUN_0040d450(HWND param_1);
void __cdecl FUN_0040d5f0(HWND param_1,ushort param_2,undefined4 param_3);
undefined4 FUN_0040d6a0(HWND param_1,ushort param_2);
undefined4 FUN_0040d790(uint param_1,HDC param_2,HWND param_3);
LRESULT FUN_0040d850(HWND param_1,UINT param_2,WPARAM param_3,LPARAM param_4,int param_5);
void FUN_0040db00(void);
uint FUN_0040dba0(void);
void FUN_0040dd90(void);
undefined4 __cdecl FUN_0040de70(int param_1);
LRESULT FUN_0040e000(HWND param_1,uint param_2,HDC param_3,HWND param_4);
undefined4 __cdecl FUN_0040e330(HWND param_1);
void FUN_0040e370(int param_1,HWND param_2,int *param_3);
undefined4 __cdecl FUN_0040e520(undefined4 param_1,ushort param_2);
bool FUN_0040e550(void);
bool __cdecl FUN_0040e700(HWND param_1,ushort param_2,short param_3,undefined4 param_4);
void __cdecl FUN_0040e7f0(HWND param_1,int param_2);
void __cdecl FUN_0040e8b0(HWND param_1);
void __cdecl FUN_0040e920(HWND param_1,HDC param_2,RECT *param_3,char *param_4,int param_5,short param_6,int param_7);
void __cdecl FUN_0040ec60(HWND param_1,HDC param_2,uint param_3);
LRESULT FUN_0040f1b0(HWND param_1,uint param_2,HDC param_3,undefined4 *param_4);
void __cdecl FUN_0040f490(HWND param_1,int param_2,int param_3);
uint __cdecl FUN_0040f7d0(HWND param_1,uint param_2,WPARAM param_3,undefined4 *param_4,int param_5);
LRESULT __cdecl FUN_0040f950(HWND param_1,uint param_2,WPARAM param_3,LONG *param_4,int param_5);
void __cdecl FUN_0040fc00(HWND param_1,HDC param_2,LPRECT param_3,uint param_4);
void __cdecl FUN_0040fce0(HWND param_1,HDC param_2);
undefined4 __cdecl FUN_0040ffd0(undefined4 param_1,int param_2);
HBITMAP FUN_004100a0(HMODULE param_1,LPCSTR param_2,uint param_3,uint param_4,uint param_5,uint param_6,uint param_7,uint param_8);
void FUN_00410237(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
undefined4 FUN_0041024f(int param_1);
undefined4 FUN_004102a2(void);
undefined4 FUN_0041031e(void);
int __thiscall FUN_00410396(void *this,byte param_1);
void __thiscall FUN_004103b8(void *this,byte *param_1,size_t *param_2);
void __cdecl FUN_00410705(void *param_1,byte *param_2);
void __thiscall CSimpleException::InitString(CSimpleException *this);
undefined4 * FUN_00410784(undefined4 param_1,undefined4 param_2,undefined4 param_3,int param_4);
undefined4 * __thiscall FUN_0041079d(void *this,int param_1,int param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5,int param_6,undefined4 param_7);
undefined4 * __thiscall FUN_004107e9(void *this,ushort *param_1,undefined4 param_2);
undefined4 * __thiscall FUN_00410835(void *this,FILETIME *param_1,undefined4 param_2);
int * __thiscall FUN_00410881(void *this,int *param_1);
undefined4 * FUN_004108b0(void);
void * __thiscall CMiniDockFrameWnd::`scalar_deleting_destructor'(CMiniDockFrameWnd *this,uint param_1);
int __fastcall FUN_00410a12(CDialog *param_1);
undefined4 __thiscall FUN_00410b12(void *this,undefined4 param_1,undefined4 *param_2,undefined4 *param_3);
undefined4 FUN_00410bf6(HWND param_1,uint param_2,undefined4 param_3,uint param_4);
void __fastcall FUN_00410d8d(int *param_1);
void __thiscall FUN_00410db1(void *this,undefined4 param_1);
undefined * __thiscall FUN_00410dd4(void *this,byte param_1);
void __fastcall RemoveAll(int param_1);
void FUN_00410e10(void);
void __thiscall FUN_00410e39(void *this,undefined4 param_1,undefined4 param_2);
void __thiscall FUN_00410e91(void *this,undefined4 *param_1);
__POSITION * __thiscall CPtrList::AddTail(CPtrList *this,void *param_1);
int __fastcall FUN_00410ed3(void *param_1);
void __thiscall FUN_00410ef7(void *this,int *param_1);
undefined4 * __thiscall FUN_00410f2e(void *this,int param_1,undefined4 *param_2);
void FUN_00410f51(undefined4 *param_1,int param_2,int param_3);
void __fastcall FUN_00410f71(undefined4 *param_1);
void __thiscall CMap<>(void *this,undefined4 param_1);
undefined * __thiscall FUN_00410fae(void *this,byte param_1);
void __thiscall FUN_00410fca(void *this,int param_1,int param_2);
void __fastcall RemoveAll(int param_1);
void FUN_0041103a(void);
void __fastcall FUN_00411063(int param_1);
void __thiscall FUN_004110b0(void *this,undefined4 *param_1);
undefined4 * __thiscall FUN_004110c9(void *this,uint param_1,uint *param_2);
undefined4 __thiscall FUN_004110fb(void *this,uint param_1);
undefined4 * __thiscall FUN_0041112e(void *this,uint param_1);
undefined4 __thiscall FUN_0041117e(void *this,uint param_1);
void __thiscall FUN_004111c0(void *this,int *param_1,int *param_2,int *param_3);
undefined4 __cdecl FUN_00411232(undefined4 param_1,undefined4 param_2,undefined4 param_3);
undefined * FUN_0041123a(undefined *param_1);
void * __cdecl FUN_0041124c(size_t param_1);
void __cdecl FUN_00411275(undefined *param_1);
void FUN_004112a0(void);
void FUN_004112ad(void);
void FUN_004112de(void);
void FUN_004112eb(void);
void FUN_0041131c(void);
void FUN_00411329(void);
void FUN_0041135a(void);
void FUN_00411367(void);
undefined4 * __fastcall FUN_0041138e(undefined4 *param_1);
void * __thiscall CWnd::`scalar_deleting_destructor'(CWnd *this,uint param_1);
undefined4 * __thiscall FUN_004113cc(void *this,undefined4 param_1);
undefined4 FUN_004113f8(HWND param_1,int param_2,uint param_3,uint param_4,uint param_5);
void FUN_00411447(HWND param_1,uint param_2,uint param_3,uint param_4);
void FUN_00411461(HWND param_1,uint param_2,uint param_3,uint param_4);
void FUN_0041147b(int param_1,LPRECT param_2,undefined4 *param_3);
void FUN_0041149e(int *param_1,int *param_2,uint param_3);
void FUN_00411517(int param_1,WPARAM param_2,int param_3);
undefined4 FUN_00411578(int param_1,int param_2,int param_3);
undefined4 FUN_004115ee(void);
undefined * Catch@00411698(void);
undefined4 FUN_004116cc(void);
int FUN_004116eb(void);
void __fastcall FUN_00411720(int *param_1);
undefined4 FUN_00411747(void);
void * FUN_004117b9(void);
undefined4 FUN_004117e0(uint param_1);
bool __thiscall FUN_004117fe(void *this,uint param_1);
HWND__ * __thiscall CWnd::Detach(CWnd *this);
LRESULT FUN_00411865(HWND param_1,UINT param_2,WPARAM param_3,LPARAM param_4);
undefined * FUN_004118b0(void);
undefined4 FUN_004118b6(void);
undefined4 Catch@004119d9(void);
undefined4 FUN_00411a15(undefined4 param_1,int param_2,HDC param_3,HWND param_4);
LRESULT FUN_00411a91(int param_1,HWND param_2,int *param_3);
void FUN_00411c87(int param_1);
undefined4 FUN_00411cd3(void);
bool __thiscall FUN_00411d15(void *this,DWORD param_1,LPCSTR param_2,LPCSTR param_3,DWORD param_4,int param_5,int param_6,int param_7,int param_8,HWND param_9,HMENU param_10,LPVOID param_11);
undefined4 FUN_00411ddb(int param_1);
void __thiscall FUN_00411dfb(void *this,LPCSTR param_1,LPCSTR param_2,uint param_3,int *param_4,int param_5,HMENU param_6,LPVOID param_7);
void __thiscall CWnd::~CWnd(CWnd *this);
void __fastcall FUN_00411ec3(int *param_1);
void __fastcall FUN_00411ee1(CWnd *param_1);
BOOL __fastcall FUN_00412004(CWnd *param_1);
void __thiscall FUN_00412051(void *this,UINT param_1,WPARAM param_2,LPARAM param_3);
undefined4 __thiscall FUN_0041209c(void *this,undefined4 param_1);
uint __thiscall FUN_00412112(void *this,LONG param_1,LONG param_2,uint *param_3);
void __thiscall FUN_00412183(void *this,void *param_1);
void __thiscall FUN_004121cb(void *this,undefined4 param_1,int *param_2);
undefined4 __thiscall FUN_00412208(void *this,undefined4 param_1,undefined4 param_2);
void * __thiscall FUN_00412252(void *this,undefined4 param_1,void *param_2);
undefined4 FUN_00412358(void);
LPSTR Catch@004123e9(UINT param_1,int param_2,int param_3,int param_4);
LPSTR FUN_004123f9(UINT param_1,int param_2,int param_3,int param_4);
void __thiscall FUN_004124ad(void *this,undefined4 param_1,undefined4 param_2);
void FUN_004124f3(void);
AFX_MSGMAP_ENTRY *AfxFindMessageEntry(AFX_MSGMAP_ENTRY *param_1,uint param_2,uint param_3,uint param_4);
undefined4 __thiscall FUN_0041261b(void *this,undefined4 param_1,undefined4 param_2,undefined4 param_3);
undefined4 FUN_0041265f(void);
CCmdUI * __fastcall FUN_00412bd1(CCmdUI *param_1);
undefined4 __thiscall FUN_00412bfe(void *this,uint param_1,int param_2);
undefined4 __thiscall FUN_00412c8a(void *this,undefined4 param_1,undefined4 *param_2,undefined4 param_3);
int * __fastcall FUN_00412d04(int param_1);
HWND__ * AfxGetParentOwner(HWND__ *param_1);
void * __fastcall FUN_00412d87(int param_1);
bool __fastcall FUN_00412daf(int param_1);
int * __fastcall FUN_00412de3(int *param_1);
void * FUN_00412e24(HWND param_1,int param_2,int param_3);
void FUN_00412e9d(HWND param_1,UINT param_2,WPARAM param_3,LPARAM param_4,int param_5,int param_6);
void __thiscall FUN_00412f1a(void *this,int param_1,int param_2,BOOL param_3);
void __thiscall FUN_00412f4a(void *this,undefined4 param_1);
void __thiscall FUN_00412f72(void *this,int param_1,int param_2,int param_3,BOOL param_4);
void __thiscall FUN_00412fa5(void *this,int param_1,LPINT param_2,LPINT param_3);
void __thiscall FUN_00412fd5(void *this,int param_1,undefined4 param_2);
undefined4 __thiscall FUN_00413018(void *this,int param_1,LPCSCROLLINFO param_2,BOOL param_3);
BOOL __thiscall FUN_00413065(void *this,int param_1,LPSCROLLINFO param_2,UINT param_3);
int __thiscall FUN_004130b2(void *this,int param_1);
void __thiscall FUN_004130f9(void *this,int param_1,int param_2,RECT *param_3,RECT *param_4);
void __thiscall FUN_0041319f(void *this,uint param_1,uint param_2,uint param_3,int param_4,LPRECT param_5,int *param_6,int param_7);
void FUN_004132d9(int *param_1,HWND param_2,RECT *param_3);
void __thiscall FUN_00413373(void *this,LPRECT param_1,int param_2);
undefined4 FUN_0041339e(HWND param_1,undefined4 *param_2);
void __thiscall FUN_004133e0(void *this,undefined4 param_1);
undefined4 FUN_0041340d(void);
uint __thiscall FUN_004134b1(void *this,uint param_1,int *param_2,int param_3,int *param_4);
uint __thiscall FUN_0041350c(void *this,uint param_1,int *param_2,int param_3,int *param_4);
void __fastcall FUN_00413643(int *param_1);
void __fastcall FUN_004136c0(CWnd *param_1);
void __thiscall OnDevModeChange(void *this,LPSTR param_1);
undefined4 __fastcall FUN_0041375e(int *param_1);
long __thiscall CWnd::OnDisplayChange(CWnd *this,uint param_1,long param_2);
undefined4 __thiscall FUN_0041380b(void *this,undefined4 param_1,undefined4 param_2);
void __thiscall FUN_00413835(void *this,undefined4 param_1,undefined4 param_2,void *param_3);
void __fastcall FUN_00413856(int *param_1);
void * __thiscall FUN_004138a0(void *this,undefined4 param_1,void *param_2);
void * __thiscall FUN_004138c7(void *this,int param_1,void *param_2,int param_3);
undefined4 FUN_0041392a(HDC param_1,HWND param_2,int param_3,HANDLE param_4,COLORREF param_5);
void FUN_004139a7(void);
undefined * Catch@00413a05(void);
undefined * Catch@00413a0b(void);
undefined4 FUN_00413a2c(void);
void __thiscall FUN_00413a49(void *this,undefined4 param_1,undefined4 param_2);
void __thiscall FUN_00413a5f(void *this,int param_1);
int __thiscall FUN_00413c14(void *this,LPCSTR param_1);
int __thiscall FUN_00413c64(void *this,ushort *param_1);
undefined4 __thiscall FUN_00413d36(void *this,LPMSG param_1);
int __thiscall FUN_00413d66(void *this,byte param_1);
void AfxRegisterWithIcon(int param_1,undefined4 param_2,ushort param_3);
uint FUN_00413f31(undefined4 param_1,uint param_2);
bool FUN_00413fa8(uint param_1);
undefined4 __fastcall FUN_00414263(int param_1);
undefined4 __thiscall FUN_00414282(void *this,HWND param_1);
void __cdecl FUN_004142c5(undefined4 *param_1);
void __thiscall FUN_004142eb(void *this,int param_1);
void __thiscall FUN_00414315(void *this,LPMSG param_1);
void __fastcall FUN_00414348(int param_1);
void __fastcall FUN_00414362(int param_1);
void __thiscall FUN_0041437c(void *this,uint param_1,uint param_2,uint param_3);
void __thiscall FUN_004143ad(void *this,uint param_1,uint param_2,uint param_3);
void __thiscall FUN_004143de(void *this,LPCSTR param_1);
void __thiscall FUN_00414405(void *this,LONG param_1);
void __thiscall FUN_0041442e(void *this,int param_1,int param_2,int param_3,int param_4,int param_5,UINT param_6);
void __thiscall FUN_0041447d(void *this,int param_1);
void __fastcall FUN_004144a4(int param_1);
void __thiscall FUN_004144bf(void *this,BOOL param_1);
void __fastcall FUN_004144e6(int param_1);
void __thiscall FUN_00414507(void *this,int param_1);
void __fastcall FUN_00414544(int param_1);
void FUN_0041455e(void);
uint FUN_00414589(undefined4 param_1,undefined4 *param_2,undefined4 param_3,undefined *param_4,undefined4 *param_5,uint param_6,undefined4 *param_7);
uint __thiscall FUN_00414690(void *this,undefined4 *param_1,uint param_2,undefined4 *param_3,undefined4 *param_4);
void FUN_004147b0(void);
void FUN_004147c5(void);
void __fastcall FUN_004147f2(int *param_1);
void __thiscall CCmdUI::CCmdUI(CCmdUI *this);
void __thiscall FUN_0041485b(void *this,int param_1);
void __thiscall FUN_004148eb(void *this,WPARAM param_1);
void __thiscall FUN_0041494d(void *this,int param_1);
void __thiscall FUN_004149a3(void *this,LPCSTR param_1);
undefined4 __thiscall FUN_004149fa(void *this,int *param_1,int param_2);
CWinThread * AfxGetThread(void);
void FUN_00414a70(void);
void __fastcall FUN_00414ae1(int *param_1);
bool __thiscall FUN_00414bbd(void *this,int param_1);
undefined4 __thiscall FUN_00414cc8(void *this,int param_1);
long AfxInternalProcessWndProcException(CException *param_1,tagMSG *param_2);
undefined4 FUN_00414e1d(int param_1);
undefined4 FUN_00414e68(int param_1,undefined4 *param_2);
undefined4 __fastcall FUN_00414fcd(int *param_1);
int * __thiscall FUN_0041500d(void *this,int *param_1);
void FUN_0041504a(void);
void FUN_00415059(void);
void FUN_00415079(void);
void FUN_0041508b(void);
void FUN_004150ab(void);
void FUN_004150bd(void);
void FUN_004150dd(void);
void FUN_004150ef(void);
void __thiscall FUN_00415105(void *this,int param_1);
void __fastcall FUN_00415187(undefined4 *param_1);
void __fastcall FUN_004151cf(int *param_1);
void FUN_00415200(LONG *param_1);
void __fastcall FUN_00415223(int *param_1);
void __fastcall FUN_00415241(int *param_1);
void __thiscall FUN_0041526f(void *this,int param_1);
void __fastcall FUN_00415298(int *param_1);
void __thiscall FUN_004152c2(void *this,undefined4 *param_1,uint param_2,int param_3,int param_4);
undefined4 * __thiscall FUN_00415306(void *this,LPCSTR param_1);
void __thiscall FUN_00415358(void *this,uint param_1,undefined4 *param_2);
int * __thiscall FUN_00415385(void *this,int *param_1);
void * __thiscall FUN_004153d5(void *this,LPCSTR param_1);
void __thiscall FUN_004153fc(void *this,uint param_1,undefined4 *param_2,uint param_3,undefined4 *param_4);
void __thiscall FUN_0041543a(void *this,uint param_1,undefined4 *param_2);
void * __thiscall FUN_00415499(void *this,LPCSTR param_1);
void * __fastcall FUN_004154c0(void *param_1);
void * __thiscall FUN_004154d5(void *this,undefined4 *param_1);
int __thiscall FUN_004154ed(void *this,int param_1);
void __thiscall FUN_0041553c(void *this,int param_1);
int __thiscall FUN_00415564(void *this,int param_1);
void __thiscall FUN_00415584(void *this,byte param_1);
int __thiscall FUN_00415592(void *this,byte param_1,int param_2);
int __thiscall FUN_004155bf(void *this,byte *param_1);
void __fastcall FUN_004155df(int *param_1);
int __cdecl FUN_004155f1(LPWSTR param_1,LPCSTR param_2,int param_3);
void __fastcall FUN_0041562c(int *param_1);
void __thiscall FUN_0041564e(void *this,undefined4 param_1,undefined4 param_2);
bool __thiscall FUN_004156fc(void *this,int param_1);
void __thiscall FUN_00415766(void *this,LPSTR param_1);
void __fastcall FUN_00415813(int param_1);
void __fastcall FUN_00415857(int param_1);
void __thiscall FUN_004158b5(void *this,int param_1);
void * __cdecl FUN_004158c7(int param_1,void *param_2);
undefined4 FUN_004158e7(void);
undefined4 Catch@0041591f(void);
undefined4 __thiscall FUN_0041592d(void *this,int param_1);
bool FUN_00415946(UINT param_1);
void FUN_004159ca(UINT param_1,LPSTR param_2,int param_3);
undefined4 FUN_004159f1(int *param_1,byte *param_2,int param_3,char param_4);
undefined4 FUN_00415a69(void);
void FUN_00415adb(void);
undefined4 FUN_00415af0(uint param_1);
int __fastcall Detach(int param_1);
BOOL __fastcall FUN_00415b38(int param_1);
void __fastcall FUN_00415b4e(int param_1);
void __thiscall FUN_00415b58(void *this,undefined4 param_1);
void __fastcall FUN_00415b64(int *param_1);
void __thiscall FUN_00415b76(void *this,UINT param_1);
void FUN_00415bcb(void);
bool FUN_00415bd4(SIZE_T param_1);
undefined4 * FUN_00415cce(void);
int FUN_00415d33(void);
void Catch@00415de1(void);
void __fastcall FUN_00415df2(int param_1);
void __fastcall FUN_00415e57(undefined4 *param_1);
undefined * __thiscall FUN_00415e71(void *this,byte param_1);
void __thiscall FUN_00415e8d(void *this,undefined4 param_1);
void FUN_00415eac(void);
int * __fastcall FUN_00415ef4(HANDLE param_1);
DWORD __thiscall FUN_00415f69(void *this,LPCSTR param_1,uint param_2,int param_3);
DWORD __thiscall FUN_00416086(void *this,LPVOID param_1,DWORD param_2);
void __thiscall FUN_004160c0(void *this,LPCVOID param_1,DWORD param_2);
void __fastcall FUN_00416184(int param_1);
void __fastcall FUN_004161c5(int param_1);
void __thiscall FUN_00416237(void *this,undefined4 param_1);
undefined4 __fastcall FUN_00416263(int *param_1);
void FUN_00416295(LPCSTR param_1,LPCSTR param_2);
void FUN_004162b7(LPCSTR param_1);
int FUN_004162d5(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
int FUN_00416317(void);
void * FUN_004163b4(void *param_1,undefined4 *param_2);
bool FUN_00416423(HKEY param_1,void *param_2);
undefined4 FUN_004164cf(int param_1,LPCSTR param_2,undefined1 *param_3,undefined4 param_4);
undefined4 FUN_004165f1(void);
void FUN_004166c1(LPCSTR param_1,void *param_2);
undefined4 FUN_00416787(byte *param_1,LPCSTR param_2);
int FUN_0041684a(byte *param_1,LPSTR param_2,int param_3);
void FUN_004168a0(HMODULE param_1,void *param_2);
void FUN_004168fa(uint param_1);
undefined4 FUN_0041691b(void);
undefined4 FUN_004169bb(void);
undefined4 FUN_00416a26(uint param_1);
undefined4 FUN_00416d26(void);
void * __thiscall FUN_00416da8(void *this,void *param_1);
undefined4 __thiscall FUN_00416dd7(void *this,int *param_1);
undefined4 FUN_00416eb1(LPCSTR param_1,int *param_2);
void __cdecl FUN_00416f63(void *param_1,LPFILETIME param_2);
undefined4 FUN_00417016(uint param_1,int param_2);
undefined4 __thiscall FUN_004170ef(void *this,undefined4 *param_1,uint param_2,undefined4 *param_3,undefined4 *param_4);
CDialog * __thiscall FUN_00417174(void *this,byte param_1);
void __thiscall CDialog::~CDialog(CDialog *this);
void FUN_004171ce(LPCSTR param_1);
bool FUN_00417212(void);
undefined * Catch@0041739a(void);
bool FUN_004173b7(void);
undefined4 * __thiscall FUN_00417441(void *this,uint param_1,undefined4 param_2);
HWND__ * __thiscall CDialog::PreModal(CDialog *this);
void __thiscall CDialog::PostModal(CDialog *this);
undefined4 FUN_004174f6(void);
undefined * Catch@004175ef(void);
undefined4 FUN_00417609(void);
void __thiscall FUN_00417656(void *this,INT_PTR param_1);
int __fastcall FUN_0041769e(int *param_1);
undefined4 FUN_00417726(void);
undefined4 __fastcall FUN_0041777c(void *param_1);
void __fastcall FUN_004177e1(void *param_1);
undefined4 __fastcall FUN_00417802(int param_1);
undefined4 * __thiscall FUN_004178e3(void *this,uint *param_1);
undefined4 __thiscall FUN_00417912(void *this,undefined4 *param_1,int param_2);
void __fastcall FUN_00417972(undefined4 *param_1);
undefined4 __fastcall FUN_00417980(undefined4 *param_1);
void __cdecl FUN_00417986(int param_1);
int __cdecl FUN_004179dc(uint *param_1);
undefined4 __cdecl FUN_00417a94(uint *param_1,void *param_2,undefined2 *param_3);
undefined4 __thiscall FUN_00417b03(void *this,LPCSTR param_1,undefined2 param_2);
void FUN_00417c1d(short param_1);
undefined4 FUN_00417cae(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
int FUN_00417d24(void);
void FUN_00417d7e(void);
void __fastcall FUN_00417de9(int param_1);
void __thiscall FUN_00417e0a(void *this,LPCSTR param_1);
undefined4 __fastcall FUN_00417f2d(int *param_1);
void __thiscall FUN_00417f76(void *this,undefined4 param_1,int param_2);
void __fastcall FUN_00417ff2(int *param_1);
undefined4 __fastcall FUN_0041801f(int *param_1);
undefined4 FUN_0041805a(void);
undefined * Catch@0041816f(void);
undefined4 FUN_0041817f(void);
undefined4 FUN_004181db(void);
void FUN_004182dd(void);
undefined4 FUN_00418449(void);
DWORD FUN_004184ef(void);
void __fastcall FUN_00418696(int param_1);
void FUN_004186af(void);
int * FUN_0041888d(void);
void * __thiscall CParkingWnd::`scalar_deleting_destructor'(CParkingWnd *this,uint param_1);
void __thiscall CParkingWnd::~CParkingWnd(CParkingWnd *this);
undefined4 __fastcall FUN_00418979(int *param_1);
void FUN_0041899e(void);
undefined * Catch@00418ad7(void);
undefined4 Catch@00418b23(void);
void FUN_00418b4d(void);
void FUN_00418b68(void);
undefined * Catch@00418c84(void);
undefined4 Catch@00418cc9(void);
void FUN_00418cf3(void);
void __fastcall FUN_00418d0e(int *param_1);
void __thiscall CDocument::AddView(CDocument *this,CView *param_1);
void __thiscall FUN_00418d86(void *this,int param_1);
void __thiscall FUN_00418dcd(void *this,int *param_1,undefined4 param_2,undefined4 param_3);
undefined4 __thiscall FUN_00418e0e(void *this,undefined4 *param_1,uint param_2,undefined4 *param_3,undefined4 *param_4);
undefined4 * __fastcall FUN_00418e64(undefined4 *param_1);
undefined4 * __thiscall FUN_00418e8c(void *this,byte param_1);
void __fastcall FUN_00418ea8(undefined4 *param_1);
void __thiscall FUN_00418ee5(void *this,int param_1);
int * FUN_00418ef9(void);
void FUN_004190a6(void);
undefined4 * __thiscall FUN_0041910d(void *this,byte param_1);
void __fastcall thunk_FUN_00419a51(undefined4 *param_1);
undefined4 * __thiscall FUN_0041912e(void *this,ushort param_1);
undefined4 __thiscall FUN_00419152(void *this,undefined4 param_1,undefined4 param_2,uint param_3,int *param_4,undefined4 param_5,LONG param_6,int param_7);
void __fastcall FUN_00419262(int *param_1);
void __thiscall CFormView::OnActivateView(CFormView *this,int param_1,CView *param_2,CView *param_3);
undefined4 __fastcall FUN_004192b9(int param_1);
void __fastcall FUN_004192e4(int *param_1);
undefined4 __thiscall FUN_0041931e(void *this,LPMSG param_1);
undefined4 __fastcall FUN_0041938b(int *param_1);
undefined4 * __fastcall FUN_004193c8(undefined4 *param_1);
void FUN_004193d8(void);
undefined4 FUN_0041942b(int param_1);
undefined4 __thiscall OnCreate(void *this,int *param_1);
void __fastcall FUN_0041949a(int *param_1);
void FUN_00419552(void);
void __fastcall FUN_004195a6(int *param_1);
void __thiscall CView::OnActivateView(CView *this,int param_1,CView *param_2,CView *param_3);
void * FUN_0041967e(void *param_1,int param_2);
undefined4 __thiscall FUN_004196dc(void *this,int param_1);
void FUN_004197fd(undefined4 param_1,int *param_2);
void __thiscall FUN_00419828(void *this,undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,int *param_5);
LRESULT FUN_004198d1(void);
undefined4 * __fastcall FUN_00419a0e(undefined4 *param_1);
undefined4 * __thiscall FUN_00419a35(void *this,byte param_1);
void __fastcall FUN_00419a51(undefined4 *param_1);
void __thiscall FUN_00419a5c(void *this,int *param_1,int *param_2);
void __thiscall FUN_00419b3b(void *this,undefined4 param_1,undefined4 param_2);
void FUN_00419bc6(void);
void __thiscall FUN_00419cf8(void *this,int *param_1);
void __thiscall FUN_00419d71(void *this,int param_1,int param_2);
void __thiscall FUN_00419dc3(void *this,int param_1);
void __fastcall FUN_00419edd(int *param_1);
void __thiscall FUN_00419f05(void *this,int *param_1);
undefined4 __thiscall FUN_00419f5f(void *this,int *param_1,int *param_2);
void __thiscall FUN_00419fd4(void *this,int param_1,int param_2,uint *param_3,int *param_4,int *param_5,int param_6);
void __fastcall FUN_0041a099(void *param_1);
void __thiscall FUN_0041a20e(void *this,LPRECT param_1,int param_2);
void __thiscall FUN_0041a295(void *this,undefined1 param_1,undefined4 param_2,void *param_3);
void __thiscall FUN_0041a2d9(void *this,byte param_1,undefined4 param_2,void *param_3);
int __thiscall CScrollView::OnMouseWheel(CScrollView *this,uint param_1,short param_2);
int __thiscall FUN_0041a355(void *this,undefined4 param_1,short param_2);
int __thiscall FUN_0041a480(void *this,uint param_1,int param_2,int param_3);
undefined4 __thiscall FUN_0041a550(void *this,int param_1,int param_2,int param_3);
bool FUN_0041a64c(HWND param_1,uint param_2);
bool FUN_0041a696(HWND param_1,LPCSTR param_2);
HWND FUN_0041a6c1(HWND param_1,LONG param_2,LONG param_3);
void FUN_0041a736(HWND param_1,LPCSTR param_2);
void FUN_0041a78e(undefined4 *param_1);
void FUN_0041a7a7(HWND param_1);
void FUN_0041a81e(HGLOBAL param_1);
void __fastcall FUN_0041a8a6(undefined4 *param_1);
undefined * __thiscall FUN_0041a8ba(void *this,byte param_1);
undefined4 FUN_0041a8d6(void);
void FUN_0041a948(void);
bool __thiscall FUN_0041a95d(void *this,uint param_1);
HDC__ * __thiscall CDC::Detach(CDC *this);
void FUN_0041a9c5(void);
int __fastcall FUN_0041aa19(int param_1);
int __thiscall FUN_0041aa4a(void *this,int param_1);
void __thiscall FUN_0041aa88(void *this,int param_1);
void __thiscall FUN_0041aac4(void *this,int param_1);
COLORREF __thiscall FUN_0041ab0a(void *this,COLORREF param_1);
COLORREF __thiscall FUN_0041ab39(void *this,COLORREF param_1);
int __thiscall FUN_0041ab68(void *this,int param_1);
void __thiscall FUN_0041ab96(void *this,int *param_1,int param_2,int param_3);
void __thiscall FUN_0041abe2(void *this,int *param_1,int param_2,int param_3);
void __thiscall FUN_0041ac2e(void *this,int *param_1,int param_2,int param_3);
void __thiscall FUN_0041ac7a(void *this,int *param_1,int param_2,int param_3,int param_4,int param_5);
void __thiscall FUN_0041acd2(void *this,int *param_1,int param_2,int param_3);
void __thiscall FUN_0041ad1e(void *this,int *param_1,int param_2,int param_3,int param_4,int param_5);
void __thiscall FUN_0041ad86(void *this,LPPOINT param_1);
undefined4 * FUN_0041adc2(undefined4 param_1);
undefined * __thiscall FUN_0041ae18(void *this,byte param_1);
void FID_conflict:~CClientDC(void);
undefined4 * FUN_0041ae76(undefined4 param_1);
void * __thiscall CPaintDC::`scalar_deleting_destructor'(CPaintDC *this,uint param_1);
void __thiscall CPaintDC::~CPaintDC(CPaintDC *this);
undefined4 FUN_0041af2f(void);
void FUN_0041afa1(void);
int __fastcall Detach(int param_1);
BOOL __fastcall FUN_0041afe0(int param_1);
undefined4 * FUN_0041aff6(int *param_1,undefined4 param_2,int param_3,undefined4 param_4);
undefined4 * FUN_0041b00f(void);
void FUN_0041b0eb(void);
void __fastcall FUN_0041b131(int param_1);
void __fastcall FUN_0041b173(int param_1);
void __fastcall FUN_0041b181(int param_1);
int * __thiscall FUN_0041b1fd(void *this,char *param_1);
int __fastcall FUN_0041b33e(int param_1);
void * FUN_0041b384(void);
void __fastcall FUN_0041b481(int param_1);
void FUN_0041b529(void);
void __thiscall FUN_0041b59a(void *this,int param_1);
void FUN_0041b5a4(int param_1);
undefined4 FUN_0041b5af(void);
int __fastcall FUN_0041b664(int *param_1);
uint __thiscall FUN_0041b68b(void *this,undefined4 param_1,undefined4 param_2);
undefined4 __fastcall FUN_0041b708(int *param_1);
void __thiscall CDocTemplate::CloseAllDocuments(CDocTemplate *this,int param_1);
void __thiscall CDocTemplate::OnIdle(CDocTemplate *this);
void __thiscall FUN_0041b7a5(void *this,undefined4 *param_1,uint param_2,undefined4 *param_3,undefined4 *param_4);
void __fastcall FUN_0041b7f0(int param_1);
void __thiscall FUN_0041b80b(void *this,undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,undefined4 param_5);
void __fastcall FUN_0041b82c(int param_1);
void __thiscall FUN_0041b85e(void *this,int param_1);
void __thiscall FUN_0041b8f8(void *this,undefined4 param_1);
void FUN_0041b97d(undefined4 param_1);
int __thiscall FUN_0041b9ab(void *this,LPCSTR param_1,UINT param_2,int param_3);
void FUN_0041ba92(LPCSTR param_1,UINT param_2,int param_3);
undefined4 FUN_0041baca(void);
HWND FUN_0041bb23(HWND param_1,undefined4 *param_2);
undefined4 FUN_0041bbbf(void);
void FUN_0041bbcb(void);
void FUN_0041bc27(int *param_1,UINT param_2,int param_3,int param_4);
void FUN_0041bc61(int *param_1,byte *param_2,int param_3,int param_4);
void FUN_0041bd60(int *param_1,UINT param_2);
uint __thiscall FUN_0041bd77(void *this,LPCSTR param_1,LPCSTR param_2,undefined4 param_3);
void FUN_0041bdec(void);
undefined4 FUN_0041bec9(void);
void __fastcall FUN_0041bfd7(void *param_1);
void __thiscall FUN_0041c01f(void *this,int *param_1);
bool FUN_0041c0d5(void);
void __thiscall CMiniDockFrameWnd::~CMiniDockFrameWnd(CMiniDockFrameWnd *this);
int __fastcall FUN_0041c2af(int param_1);
undefined4 FUN_0041c2f1(void);
void FUN_0041c8d5(void);
void __fastcall FUN_0041c97a(CDialog *param_1);
CDialog * __thiscall FUN_0041c985(void *this,byte param_1);
void FUN_0041c9a1(void);
undefined4 * FUN_0041ca70(void);
undefined * __thiscall FUN_0041cb32(void *this,byte param_1);
void FUN_0041cb4e(void);
void __fastcall FUN_0041cbce(int param_1);
void __fastcall FUN_0041cbf2(int param_1);
bool __thiscall FUN_0041cc16(void *this,LPCSTR param_1);
void __thiscall FUN_0041cce3(void *this,undefined4 param_1);
undefined4 __fastcall FUN_0041ccff(int *param_1);
undefined4 __fastcall FUN_0041cd8b(int *param_1);
undefined4 __thiscall FUN_0041cdb5(void *this,undefined4 param_1,int param_2);
undefined4 __thiscall FUN_0041ce23(void *this,uint param_1,int param_2);
undefined4 FUN_0041ce9a(HWND__ *param_1,HWND__ *param_2);
void __fastcall FUN_0041cfd6(int param_1);
void __thiscall FUN_0041d045(void *this,int param_1);
void __thiscall FUN_0041d0dd(void *this,int param_1);
void __thiscall FUN_0041d193(void *this,uint param_1);
undefined4 FUN_0041d23d(int param_1);
undefined4 __thiscall FUN_0041d281(void *this,LPCSTR param_1,LPCSTR param_2,DWORD param_3,int *param_4,int param_5,LPCSTR param_6,DWORD param_7,LPVOID param_8);
int * FUN_0041d319(undefined4 param_1,undefined4 param_2);
undefined4 __thiscall FUN_0041d3c2(void *this,undefined4 param_1,undefined4 param_2);
LPSTR __thiscall GetIconWndClass(void *this,undefined4 param_1,ushort param_2);
undefined4 FUN_0041d494(void);
void __thiscall FUN_0041d594(void *this,int *param_1,int param_2);
void __fastcall FUN_0041d65a(int *param_1);
void __fastcall FUN_0041d751(int *param_1);
void __thiscall FUN_0041d92c(void *this,int param_1,int *param_2,int param_3);
void __thiscall FUN_0041da00(void *this,undefined4 param_1);
void __thiscall FUN_0041da37(void *this,uint param_1);
void __thiscall FUN_0041dacc(void *this,HDROP param_1);
undefined4 __fastcall FUN_0041db3e(int param_1);
undefined4 FUN_0041db9b(HWND param_1,undefined4 param_2);
undefined4 __thiscall FUN_0041dc5e(void *this,HWND param_1,LPARAM param_2);
undefined4 __fastcall FUN_0041dd14(int param_1);
void __thiscall CFrameWnd::SetActiveView(CFrameWnd *this,CView *param_1,int param_2);
void FUN_0041dda0(int *param_1,int param_2,int param_3);
void __thiscall FUN_0041de9b(void *this,undefined4 param_1);
void __thiscall FUN_0041deb9(void *this,int param_1,undefined4 param_2,int param_3);
void __thiscall FUN_0041e03a(void *this,uint param_1,uint param_2,undefined4 param_3);
undefined4 FUN_0041e1b2(void);
void __thiscall FUN_0041e28d(void *this,int param_1);
void __thiscall FUN_0041e2be(void *this,WPARAM param_1);
void FUN_0041e2d5(void);
undefined4 FUN_0041e402(void);
void __thiscall FUN_0041e53a(void *this,int *param_1);
void __thiscall CFrameWnd::OnUpdateFrameTitle(CFrameWnd *this,int param_1);
void __thiscall FUN_0041e5ad(void *this,LPCSTR param_1);
void __thiscall FUN_0041e6aa(void *this,int param_1,int *param_2);
void __fastcall FUN_0041e8d9(int *param_1);
void __thiscall FUN_0041e94b(void *this,int param_1);
undefined4 __thiscall FUN_0041ea38(void *this,int param_1,RECT *param_2);
void __thiscall FUN_0041eab2(void *this,int param_1);
LRESULT __thiscall FUN_0041eae7(void *this,int param_1,LPARAM param_2);
void __thiscall FUN_0041eb8a(void *this,int param_1);
void __thiscall CFrameWnd::BringToTop(CFrameWnd *this,int param_1);
int * __fastcall FUN_0041ec09(int param_1);
int __fastcall FUN_0041ec1a(int *param_1);
bool FUN_0041ec44(void);
void FUN_0041ec54(undefined4 param_1);
undefined4 FUN_0041ec63(void);
void FUN_0041ecd8(void);
CWnd * __thiscall FUN_0041ed50(void *this,byte param_1);
void __thiscall CWnd::~CWnd(CWnd *this);
void FUN_0041ed85(void);
void FUN_0041ed94(void);
void FUN_0041edef(void);
HLOCAL __thiscall FUN_0041ee35(void *this,byte param_1);
void FUN_0041ee50(void);
void * __thiscall CWinThread::`scalar_deleting_destructor'(CWinThread *this,uint param_1);
undefined4 * __thiscall CWinThread::CWinThread(CWinThread *this);
void __fastcall FUN_0041ef89(int param_1);
HLOCAL __thiscall FUN_0041efd6(void *this,byte param_1);
void __fastcall FUN_0041eff1(undefined4 *param_1);
HLOCAL __thiscall FUN_0041f008(void *this,byte param_1);
void FUN_0041f023(void);
void FUN_0041f097(void);
void FUN_0041f0b1(void);
void FUN_0041f0b2(void);
void __fastcall thunk_FUN_0041fe97(int *param_1);
void __thiscall FUN_0041f0cd(void *this,undefined1 param_1);
HLOCAL __thiscall FUN_0041f130(void *this,byte param_1);
void FUN_0041f14b(void);
void __fastcall FUN_0041f1c0(undefined4 *param_1);
HLOCAL __thiscall FUN_0041f1df(void *this,byte param_1);
void FUN_0041f1fa(void);
void FUN_0041f2b2(void);
void FUN_0041f2b3(void);
void FUN_0041f2c9(void);
AFX_MODULE_THREAD_STATE * AfxGetModuleThreadState(void);
void __thiscall CTypeLibCache::Unlock(CTypeLibCache *this);
HLOCAL __thiscall FUN_0041f363(void *this,byte param_1);
void thunk_FUN_0041f14b(void);
void __fastcall FUN_0041f383(undefined4 *param_1);
HLOCAL __thiscall FUN_0041f38c(void *this,byte param_1);
CWinThread * FUN_0041f3a7(void);
undefined * __thiscall FUN_0041f491(void *this,byte param_1);
void __fastcall FUN_0041f4f1(undefined4 *param_1);
undefined * __thiscall FUN_0041f530(void *this,byte param_1);
void FUN_0041f54c(void);
void __thiscall FUN_0041f5cc(void *this,LPCSTR param_1);
void __thiscall FUN_0041f68a(void *this,LPCSTR param_1);
void __thiscall FUN_0041f6da(void *this,int param_1);
void FUN_0041f709(void);
void __fastcall FUN_0041f83f(void *param_1);
undefined4 __fastcall FUN_0041f86f(void *param_1);
void FUN_0041f8b5(void);
void FUN_0041f8b6(void);
undefined4 FUN_0041f8d2(void);
void __thiscall FUN_0041f995(void *this,int param_1);
undefined4 __thiscall FUN_0041f9a8(void *this,int param_1);
HLOCAL FUN_0041f9ee(SIZE_T param_1,undefined4 param_2);
void FUN_0041fa0c(HLOCAL param_1);
DWORD * __thiscall FUN_0041fa20(void *this,undefined4 param_1,undefined4 param_2);
void __fastcall FUN_0041fa62(DWORD *param_1);
int __fastcall FUN_0041fab9(int param_1);
void __thiscall FUN_0041fbcb(void *this,int param_1);
void __thiscall FUN_0041fc28(void *this,int param_1,int param_2);
HLOCAL __thiscall FUN_0041fd12(void *this,byte param_1);
void FUN_0041fd2d(void);
void __thiscall FUN_0041fd2e(void *this,undefined4 *param_1,int param_2);
void __thiscall FUN_0041fdc7(void *this,int param_1,int param_2);
int __thiscall FUN_0041fe20(void *this,undefined *param_1);
void __fastcall FUN_0041fe97(int *param_1);
int FUN_0041feb5(void);
void Catch@0041ff00(void);
void FUN_0041ff35(int param_1,int param_2);
void FUN_0041ff81(void);
void FUN_0041ff8b(void);
void FUN_0041ffa1(void);
void FUN_0041ffd1(void);
int __fastcall FUN_0041fff3(int param_1);
undefined4 * __thiscall FUN_004200ca(void *this,byte param_1);
void FUN_004200ea(void);
void FUN_00420123(void);
void FUN_00420132(void);
void FUN_00420169(void);
void FUN_0042017b(void);
void FUN_004201a1(void);
void FUN_004201b3(void);
void FUN_004201cf(void);
void FUN_00420210(void);
void FUN_00420250(void);
void FUN_00420251(void);
void FUN_00420271(void);
void FUN_00420272(void);
bool FUN_0042028d(void);
int FUN_004202c0(void);
void FUN_00420305(void);
void FUN_00420353(int param_1);
void FUN_004203c3(int param_1);
void FUN_004203f4(void);
void FUN_00420406(void);
void FUN_0042042c(void);
void FUN_0042043e(void);
undefined4 * __thiscall FUN_004204c3(void *this,byte param_1);
void thunk_FUN_0041a9c5(void);
undefined4 * __thiscall FUN_0042050a(void *this,byte param_1);
void FUN_0042052a(void);
void FUN_00420563(void);
void FUN_00420572(void);
void FUN_004205a3(void);
void FUN_004205b2(void);
HKEY __fastcall FUN_004205e5(int param_1);
HKEY __thiscall GetSectionKey(void *this,LPCSTR param_1);
bool FUN_004206bf(HKEY param_1,BYTE *param_2,LPCSTR param_3);
undefined4 * FUN_00420740(void);
undefined * __thiscall FUN_00420774(void *this,byte param_1);
void FUN_00420790(void);
undefined4 FUN_00420bd9(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4);
void __fastcall FUN_00420c3c(int param_1);
int FUN_00420d59(byte *param_1,LPSTR param_2,int param_3);
void __thiscall CWinThread::~CWinThread(CWinThread *this);
void FUN_00420e04(void);
void AfxPostQuitMessage(int param_1);
void FUN_00420e5e(void);
void FUN_00420ec9(void);
void Unwind@00420f80(void);
void Unwind@00420f88(void);
void Unwind@00420f93(void);
void Unwind@00420fac(void);
void Unwind@00420fb4(void);
void Unwind@00420fbf(void);
void Unwind@00420fd8(void);
void Unwind@00420fec(void);
void Unwind@00421000(void);
void Unwind@00421014(void);
void Unwind@00421028(void);
void Unwind@0042103c(void);
void Unwind@00421050(void);
void Unwind@00421070(void);
void Unwind@00421090(void);
void Unwind@004210b0(void);
void Unwind@004210c4(void);
void Unwind@004210cc(void);
void Unwind@004210d4(void);
void Unwind@004210e8(void);
void Unwind@00421108(void);
void Unwind@0042111c(void);
void Unwind@00421130(void);
void Unwind@00421144(void);
void Unwind@00421158(void);
void Unwind@0042116c(void);
void Unwind@00421180(void);
void Unwind@00421194(void);
void Unwind@004211a8(void);
void Unwind@004211b0(void);
void Unwind@004211c8(void);
void Unwind@004211dc(void);
void Unwind@004211f3(void);
void Unwind@00421208(void);
void Unwind@0042121f(void);
void Unwind@00421234(void);
void Unwind@0042123c(void);
void Unwind@00421247(void);
void Unwind@0042125c(void);
void Unwind@00421264(void);
void Unwind@0042126f(void);
void Unwind@0042127a(void);
void Unwind@00421290(void);
void Unwind@00421298(void);
void Unwind@004212a0(void);
void Unwind@004212b4(void);
void Unwind@004212bc(void);
void Unwind@004212d0(void);
void Unwind@004212e4(void);
void Unwind@004212ec(void);
void Unwind@00421310(void);
void Unwind@00421318(void);
void Unwind@0042132c(void);
void Unwind@00421334(void);
void Unwind@0042133c(void);
void Unwind@00421350(void);
void Unwind@00421364(void);
void Unwind@00421378(void);
void Unwind@00421380(void);
void Unwind@00421388(void);
void Unwind@00421390(void);
void Unwind@00421398(void);
void Unwind@004213a0(void);
void Unwind@004213a8(void);
void Unwind@004213b0(void);
void Unwind@004213c4(void);
void Unwind@004213cc(void);
void Unwind@004213d4(void);
void Unwind@004213dc(void);
void Unwind@004213e4(void);
void Unwind@004213ec(void);
void Unwind@004213f4(void);
void Unwind@004213fc(void);
void Unwind@00421410(void);
void Unwind@00421424(void);
void Unwind@00421438(void);
void Unwind@0042144c(void);
void Unwind@00421454(void);
void Unwind@0042145f(void);
void Unwind@0042146a(void);
void Unwind@00421480(void);
void Unwind@00421494(void);
void Unwind@004214a8(void);
void Unwind@004214bc(void);
void Unwind@004214d0(void);
void Unwind@004214e4(void);
void Unwind@004214f8(void);
void Unwind@0042150c(void);
void Unwind@00421520(void);
void Unwind@00421534(void);
void Unwind@00421560(void);
void Unwind@00421574(void);
void Unwind@00421588(void);
void Unwind@0042159c(void);
void Unwind@004215a7(void);
void Unwind@004215c8(void);
void Unwind@004215d3(void);
void Unwind@004215e8(void);
void Unwind@004215fc(void);
void Unwind@00421610(void);
void Unwind@00421624(void);
void Unwind@00421638(void);
void Unwind@0042164c(void);
void Unwind@00421660(void);
void Unwind@00421674(void);
void Unwind@00421688(void);
void Unwind@0042169c(void);
void Unwind@004216b0(void);
void Unwind@004216c4(void);
void Unwind@004216e4(void);
void Unwind@004216ec(void);
void Unwind@00421704(void);
void Unwind@0042170c(void);
void Unwind@00421720(void);
void Unwind@00421734(void);
void Unwind@0042173c(void);
void Unwind@00421750(void);
void Unwind@00421759(void);
void Unwind@00421761(void);
void Unwind@00421778(void);
void Unwind@00421780(void);
void Unwind@004217a4(void);
void Unwind@004217ac(void);
void Unwind@004217d0(void);
void Unwind@004217e8(void);
void Unwind@00421800(void);
void Unwind@00421814(void);
void Unwind@0042181c(void);
void Unwind@00421824(void);
void Unwind@0042182c(void);
void Unwind@00421834(void);
void Unwind@0042183c(void);
void Unwind@00421844(void);
void Unwind@0042184c(void);
void Unwind@00421854(void);
void Unwind@0042185c(void);
void Unwind@00421870(void);
void Unwind@00421878(void);
void Unwind@0042188c(void);
void Unwind@004218a0(void);
void Unwind@004218ab(void);
void Unwind@004218b3(void);
void Unwind@004218bb(void);
void Unwind@004218c3(void);
void Unwind@004218cb(void);
void Unwind@004218e0(void);
void Unwind@004218f4(void);
void Unwind@004218fc(void);
void Unwind@00421904(void);
void Unwind@0042190c(void);
void Unwind@00421914(void);
void Unwind@0042191c(void);
void Unwind@00421924(void);
void Unwind@0042192c(void);
void Unwind@00421934(void);
void Unwind@0042193c(void);
void Unwind@00421944(void);
void Unwind@0042194c(void);
void Unwind@00421954(void);
void Unwind@0042195c(void);
void Unwind@00421964(void);
void Unwind@0042196c(void);
void Unwind@00421980(void);
void Unwind@00421994(void);
void Unwind@004219a8(void);
void Unwind@004219b0(void);
void Unwind@004219c8(void);
void Unwind@004219d0(void);
void Unwind@004219db(void);
void Unwind@004219e4(void);
void Unwind@004219f8(void);
void Unwind@00421a0c(void);
void Unwind@00421a20(void);
void Unwind@00421a34(void);
void Unwind@00421a3c(void);
void Unwind@00421a5c(void);
void Unwind@00421a64(void);

