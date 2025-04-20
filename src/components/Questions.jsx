export const questions = [
  {
    question: "What does ABAP stand for?",
    options: [
      "Advanced Business Application Programming",
      "Automated Business Application Protocol",
      "Application Business Analysis Program",
      "Advanced Business Analysis Protocol",
    ],
    answer: "Advanced Business Application Programming",
    explanation:
      "ABAP is SAP's proprietary programming language, originally standing for Allgemeiner Berichts-Aufbereitungs-Prozessor (German for 'generic report preparation processor'), but now commonly referred to as Advanced Business Application Programming.",
  },
  {
    question: "Which transaction code is used to create a report in ABAP?",
    options: ["SE38", "SE11", "SE80", "SE16"],
    answer: "SE38",
    explanation:
      "SE38 is the transaction code for ABAP Editor where you can create and maintain reports and other ABAP programs.",
  },
  {
    question: "What is the purpose of the DATA statement in ABAP?",
    options: [
      "To declare variables",
      "To retrieve data from database",
      "To define screen elements",
      "To create database tables",
    ],
    answer: "To declare variables",
    explanation:
      "The DATA statement is used to declare variables in ABAP programs.",
  },
  {
    question: "Which ABAP statement is used to read data from database tables?",
    options: ["SELECT", "READ", "GET", "FETCH"],
    answer: "SELECT",
    explanation:
      "The SELECT statement is used to read data from database tables in ABAP.",
  },
  {
    question: "What is the purpose of the MOVE statement in ABAP?",
    options: [
      "To transfer data between variables",
      "To move program execution to another line",
      "To relocate database records",
      "To shift screen elements",
    ],
    answer: "To transfer data between variables",
    explanation:
      "The MOVE statement (or the = operator) is used to assign values from one variable to another in ABAP.",
  },
  {
    question: "Which ABAP keyword is used to define a loop?",
    options: ["DO", "FOR", "LOOP", "WHILE"],
    answer: "DO",
    explanation:
      "The DO statement is used to create loops in ABAP. Other loop statements include WHILE and LOOP AT.",
  },
  {
    question: "What is the purpose of the WRITE statement in ABAP?",
    options: [
      "To output data to the screen",
      "To write data to a database table",
      "To create a file",
      "To update memory",
    ],
    answer: "To output data to the screen",
    explanation:
      "The WRITE statement is used to display data on the screen in ABAP reports.",
  },
  {
    question:
      "Which transaction code is used to create a table in ABAP Dictionary?",
    options: ["SE11", "SE38", "SE80", "SE16"],
    answer: "SE11",
    explanation:
      "SE11 is the transaction code for ABAP Dictionary where you can create and maintain database tables.",
  },
  {
    question: "What is an internal table in ABAP?",
    options: [
      "A temporary table in program memory",
      "A system table in the database",
      "A configuration table",
      "A physical database table",
    ],
    answer: "A temporary table in program memory",
    explanation:
      "An internal table is a temporary table that exists only during the runtime of an ABAP program, used to process datasets.",
  },
  {
    question: "Which statement is used to append a row to an internal table?",
    options: ["APPEND", "INSERT", "ADD", "MOVE"],
    answer: "APPEND",
    explanation:
      "The APPEND statement adds a row to the end of an internal table.",
  },
  {
    question: "What is the purpose of the PERFORM statement in ABAP?",
    options: [
      "To call a subroutine",
      "To execute a transaction",
      "To run a background job",
      "To measure performance",
    ],
    answer: "To call a subroutine",
    explanation:
      "The PERFORM statement is used to call a subroutine (form) in ABAP.",
  },
  {
    question: "Which ABAP statement is used for conditional processing?",
    options: ["IF", "WHEN", "CASE", "CHECK"],
    answer: "IF",
    explanation:
      "The IF statement is the primary conditional processing statement in ABAP.",
  },
  {
    question: "What is a BAPI in SAP?",
    options: [
      "Business Application Programming Interface",
      "Basic Application Protocol Interface",
      "Business Analysis Programming Interface",
      "Binary Application Programming Interface",
    ],
    answer: "Business Application Programming Interface",
    explanation:
      "BAPI stands for Business Application Programming Interface, which provides standardized access to SAP business processes.",
  },
  {
    question: "Which transaction code is used to debug ABAP programs?",
    options: ["SE38", "SE80", "SE11", "SE51"],
    answer: "SE80",
    explanation:
      "While SE38 is for ABAP Editor, SE80 (Object Navigator) provides more comprehensive debugging capabilities.",
  },
  {
    question: "What is the purpose of the COMMIT WORK statement in ABAP?",
    options: [
      "To save database changes",
      "To submit a background job",
      "To commit memory changes",
      "To finalize a program",
    ],
    answer: "To save database changes",
    explanation:
      "COMMIT WORK saves all database changes made since the last commit.",
  },
  {
    question: "Which ABAP statement is used to handle exceptions?",
    options: ["TRY-CATCH", "CATCH-ENDCATCH", "ON ERROR", "EXCEPTION"],
    answer: "TRY-CATCH",
    explanation:
      "ABAP uses TRY-CATCH blocks for exception handling (since newer versions). Older versions use CATCH SYSTEM-EXCEPTIONS.",
  },
  {
    question: "What is the purpose of the AUTHORITY-CHECK statement?",
    options: [
      "To verify user authorizations",
      "To check database consistency",
      "To validate input data",
      "To audit program execution",
    ],
    answer: "To verify user authorizations",
    explanation:
      "AUTHORITY-CHECK verifies if a user has specific authorization objects.",
  },
  {
    question: "Which ABAP keyword is used to define a structure?",
    options: ["TYPES", "DATA", "STRUCTURE", "DEFINE"],
    answer: "TYPES",
    explanation:
      "The TYPES statement is used to define structures and other data types in ABAP.",
  },
  {
    question:
      "What is the purpose of the MODIFY statement for internal tables?",
    options: [
      "To update existing rows",
      "To change table structure",
      "To modify table permissions",
      "To alter table indexes",
    ],
    answer: "To update existing rows",
    explanation:
      "MODIFY updates existing rows in an internal table based on the table key.",
  },
  {
    question: "Which transaction code is used to create a function module?",
    options: ["SE37", "SE38", "SE80", "SE11"],
    answer: "SE37",
    explanation:
      "SE37 is the transaction code for Function Builder where you can create and maintain function modules.",
  },
  {
    question: "What is the purpose of the EXPORT TO MEMORY statement?",
    options: [
      "To store data in SAP memory",
      "To write data to a file",
      "To send data to another system",
      "To export data to Excel",
    ],
    answer: "To store data in SAP memory",
    explanation:
      "EXPORT TO MEMORY stores data in SAP memory that can be accessed by other programs.",
  },
  {
    question: "Which ABAP statement is used to sort an internal table?",
    options: ["SORT", "ORDER BY", "ARRANGE", "SEQUENCE"],
    answer: "SORT",
    explanation:
      "The SORT statement sorts an internal table by specified fields.",
  },
  {
    question: "What is the purpose of the AT NEW event in ABAP?",
    options: [
      "To trigger when a control break occurs",
      "To handle new database entries",
      "To process new memory allocations",
      "To detect new program versions",
    ],
    answer: "To trigger when a control break occurs",
    explanation:
      "AT NEW is a control break statement that triggers when the value of the specified field changes in a loop.",
  },
  {
    question: "Which ABAP keyword is used to define a class?",
    options: ["CLASS", "DEFINE CLASS", "OBJECT", "CLASS-DEFINITION"],
    answer: "CLASS",
    explanation: "The CLASS keyword is used to define classes in ABAP Objects.",
  },
  {
    question: "What is the purpose of the FIELD-SYMBOLS in ABAP?",
    options: [
      "To create pointers to data objects",
      "To define database fields",
      "To declare screen fields",
      "To specify memory locations",
    ],
    answer: "To create pointers to data objects",
    explanation:
      "FIELD-SYMBOLS are similar to pointers that can point to any data object in ABAP.",
  },
  {
    question: "Which transaction code is used to create a screen in ABAP?",
    options: ["SE51", "SE38", "SE80", "SE11"],
    answer: "SE51",
    explanation:
      "SE51 is the transaction code for Screen Painter where you can create and maintain screens (dynpros).",
  },
  {
    question: "What is the purpose of the TABLES statement in ABAP?",
    options: [
      "To declare table work areas",
      "To create database tables",
      "To define internal tables",
      "To specify table joins",
    ],
    answer: "To declare table work areas",
    explanation:
      "The TABLES statement declares a table work area that is used in dialog programs and selection screens.",
  },
  {
    question:
      "Which ABAP statement is used to read a single record from a database table?",
    options: ["SELECT SINGLE", "READ TABLE", "GET", "FETCH"],
    answer: "SELECT SINGLE",
    explanation:
      "SELECT SINGLE reads a single record from a database table based on the specified key fields.",
  },
  {
    question:
      "What is the purpose of the COLLECT statement for internal tables?",
    options: [
      "To sum numeric fields with the same key",
      "To gather all table entries",
      "To collect statistics",
      "To combine multiple tables",
    ],
    answer: "To sum numeric fields with the same key",
    explanation:
      "COLLECT adds a row to an internal table or sums numeric fields if a row with the same key already exists.",
  },
  {
    question: "Which ABAP keyword is used to define a method in a class?",
    options: ["METHODS", "FUNCTION", "SUBROUTINE", "FORM"],
    answer: "METHODS",
    explanation:
      "The METHODS statement is used to define methods in ABAP classes.",
  },
  {
    question: "What is the purpose of the SET PARAMETER statement?",
    options: [
      "To store values in SAP memory",
      "To set system parameters",
      "To configure program options",
      "To define selection parameters",
    ],
    answer: "To store values in SAP memory",
    explanation:
      "SET PARAMETER stores values in the SAP memory (parameter ID) that persist beyond the program execution.",
  },
  {
    question:
      "Which transaction code is used to analyze ABAP program performance?",
    options: ["SE30", "ST05", "SE38", "SU01"],
    answer: "SE30",
    explanation:
      "SE30 is the ABAP Runtime Analysis transaction used to analyze program performance.",
  },
  {
    question: "What is the purpose of the CONDENSE statement in ABAP?",
    options: [
      "To remove leading/trailing spaces",
      "To compress data",
      "To reduce memory usage",
      "To shorten text fields",
    ],
    answer: "To remove leading/trailing spaces",
    explanation:
      "CONDENSE removes leading and trailing spaces from a character field and replaces multiple spaces between words with a single space.",
  },
  {
    question: "Which ABAP statement is used to concatenate strings?",
    options: ["CONCATENATE", "JOIN", "MERGE", "COMBINE"],
    answer: "CONCATENATE",
    explanation: "The CONCATENATE statement joins multiple strings into one.",
  },
  {
    question: "What is the purpose of the DESCRIBE TABLE statement?",
    options: [
      "To get information about an internal table",
      "To document a database table",
      "To explain table relationships",
      "To analyze table performance",
    ],
    answer: "To get information about an internal table",
    explanation:
      "DESCRIBE TABLE provides information about an internal table (number of lines, line size, etc.).",
  },
  {
    question: "Which ABAP keyword is used to define a selection screen?",
    options: ["SELECTION-SCREEN", "PARAMETERS", "SCREEN", "SELECT-OPTIONS"],
    answer: "SELECTION-SCREEN",
    explanation:
      "The SELECTION-SCREEN keyword begins the definition of a selection screen in ABAP reports.",
  },
  {
    question:
      "What is the purpose of the REFRESH statement for internal tables?",
    options: [
      "To clear all rows",
      "To reload data from database",
      "To reset table structure",
      "To update table indexes",
    ],
    answer: "To clear all rows",
    explanation:
      "REFRESH clears all rows from an internal table but maintains the memory space.",
  },
  {
    question: "Which transaction code is used to create a package in ABAP?",
    options: ["SE80", "SE21", "SE38", "SE11"],
    answer: "SE21",
    explanation:
      "SE21 is the transaction code for Package Builder where you can create and maintain development packages.",
  },
  {
    question: "What is the purpose of the AT SELECTION-SCREEN event?",
    options: [
      "To validate selection screen input",
      "To display the selection screen",
      "To initialize selection parameters",
      "To format selection screen output",
    ],
    answer: "To validate selection screen input",
    explanation:
      "AT SELECTION-SCREEN triggers when the user executes the selection screen, typically used for input validation.",
  },
  {
    question: "Which ABAP statement is used to split a string?",
    options: ["SPLIT", "DIVIDE", "SEPARATE", "BREAK"],
    answer: "SPLIT",
    explanation:
      "The SPLIT statement divides a string into parts based on a delimiter.",
  },
  {
    question: "What is the purpose of the GET PARAMETER statement?",
    options: [
      "To retrieve values from SAP memory",
      "To read system parameters",
      "To get program options",
      "To fetch selection parameters",
    ],
    answer: "To retrieve values from SAP memory",
    explanation:
      "GET PARAMETER retrieves values stored in SAP memory (parameter ID).",
  },
  {
    question: "Which ABAP keyword is used to define an interface?",
    options: ["INTERFACE", "DEFINE INTERFACE", "CLASS-INTERFACE", "INTF"],
    answer: "INTERFACE",
    explanation:
      "The INTERFACE keyword is used to define interfaces in ABAP Objects.",
  },
  {
    question: "What is the purpose of the TRANSLATE statement in ABAP?",
    options: [
      "To convert text case or characters",
      "To translate text to other languages",
      "To convert data types",
      "To transform data structures",
    ],
    answer: "To convert text case or characters",
    explanation:
      "TRANSLATE is used to convert text to upper/lower case or replace characters based on a pattern.",
  },
  {
    question: "Which transaction code is used to create a lock object?",
    options: ["SE11", "SM12", "SE80", "SE13"],
    answer: "SE11",
    explanation:
      "Lock objects are created in the ABAP Dictionary (SE11) under the Lock Objects category.",
  },
  {
    question: "What is the purpose of the AT LINE-SELECTION event?",
    options: [
      "To handle user double-clicks on list output",
      "To process line items in a table",
      "To select lines for processing",
      "To format list output lines",
    ],
    answer: "To handle user double-clicks on list output",
    explanation:
      "AT LINE-SELECTION triggers when a user double-clicks a line in list output.",
  },
  {
    question: "Which ABAP statement is used to create a popup dialog?",
    options: ["CALL SCREEN", "POPUP", "MODAL DIALOG", "MESSAGE"],
    answer: "CALL SCREEN",
    explanation:
      "CALL SCREEN with the STARTING AT and ENDING AT additions creates a popup dialog.",
  },
  {
    question: "What is the purpose of the FIND statement in ABAP?",
    options: [
      "To search for patterns in strings",
      "To locate database records",
      "To find programs in the system",
      "To search memory locations",
    ],
    answer: "To search for patterns in strings",
    explanation:
      "FIND searches for patterns or substrings within character strings.",
  },
  {
    question: "Which ABAP keyword is used to define a constant?",
    options: ["CONSTANTS", "DEFINE", "FIXED", "STATIC"],
    answer: "CONSTANTS",
    explanation:
      "The CONSTANTS statement defines a named constant with a fixed value.",
  },
  {
    question: "What is the purpose of the SET USER-COMMAND statement?",
    options: [
      "To trigger a PAI module with a command",
      "To change user authorizations",
      "To set up user defaults",
      "To configure user parameters",
    ],
    answer: "To trigger a PAI module with a command",
    explanation:
      "SET USER-COMMAND triggers a PAI (Process After Input) module with a specified command code.",
  },
  {
    question: "Which transaction code is used to create a search help?",
    options: ["SE11", "SE80", "SE37", "SE93"],
    answer: "SE11",
    explanation:
      "Search helps are created in the ABAP Dictionary (SE11) under the Search Help category.",
  },
  {
    question: "What is the purpose of the AT USER-COMMAND event?",
    options: [
      "To handle toolbar or menu function codes",
      "To process user authorizations",
      "To execute user-specific commands",
      "To validate user input",
    ],
    answer: "To handle toolbar or menu function codes",
    explanation:
      "AT USER-COMMAND triggers when a user selects a function from the toolbar or menu.",
  },
  {
    question: "Which ABAP statement is used to format numeric output?",
    options: ["WRITE", "FORMAT", "CONVERT", "MOVE"],
    answer: "WRITE",
    explanation:
      "The WRITE statement with formatting options controls how numeric values are displayed.",
  },
  {
    question: "What is the purpose of the SHIFT statement in ABAP?",
    options: [
      "To move the contents of a field left or right",
      "To change work shifts in HR",
      "To alternate between programs",
      "To switch database tables",
    ],
    answer: "To move the contents of a field left or right",
    explanation:
      "SHIFT moves the contents of a field left or right, optionally filling with spaces or deleting characters.",
  },
  {
    question: "Which ABAP keyword is used to define a global class?",
    options: ["CLASS", "GLOBAL CLASS", "CLASS-POOL", "CLASS DEFINITION GLOBAL"],
    answer: "CLASS",
    explanation:
      "Global classes are defined in class pools using the CLASS keyword in the Class Builder (SE24).",
  },
  {
    question: "What is the purpose of the SET SCREEN statement?",
    options: [
      "To specify the next screen to display",
      "To configure screen attributes",
      "To set up screen resolution",
      "To initialize screen fields",
    ],
    answer: "To specify the next screen to display",
    explanation:
      "SET SCREEN determines which screen will be displayed next in the screen sequence.",
  },
  {
    question:
      "Which transaction code is used to create a table maintenance dialog?",
    options: ["SE54", "SE11", "SE80", "SE16"],
    answer: "SE54",
    explanation:
      "SE54 is used to generate table maintenance dialogs for custom tables.",
  },
  {
    question: "What is the purpose of the AT PFnn event?",
    options: [
      "To handle function key presses",
      "To process performance factors",
      "To configure printer functions",
      "To analyze program flow",
    ],
    answer: "To handle function key presses",
    explanation:
      "AT PFnn events (like AT PF03) handle specific function key presses in list processing.",
  },
  {
    question: "Which ABAP statement is used to convert data types?",
    options: ["MOVE", "CONVERT", "CAST", "TRANSFER"],
    answer: "MOVE",
    explanation:
      "The MOVE statement (or = operator) performs type conversions between compatible data types.",
  },
  {
    question: "What is the purpose of the SET TITLEBAR statement?",
    options: [
      "To set the window title",
      "To configure menu titles",
      "To define report headers",
      "To create title bars for screens",
    ],
    answer: "To set the window title",
    explanation:
      "SET TITLEBAR sets the title of the current window using a predefined title bar from the GUI status.",
  },
  {
    question: "Which ABAP keyword is used to define a local class?",
    options: ["CLASS", "LOCAL CLASS", "CLASS DEFINITION", "DEFINE CLASS"],
    answer: "CLASS",
    explanation:
      "Local classes are defined within a program using the CLASS keyword, similar to global classes but with local visibility.",
  },
  {
    question: "What is the purpose of the SET CURSOR statement?",
    options: [
      "To position the cursor on a screen field",
      "To define cursor shapes",
      "To configure cursor behavior",
      "To store cursor positions",
    ],
    answer: "To position the cursor on a screen field",
    explanation:
      "SET CURSOR positions the cursor on a specific screen field when the screen is displayed.",
  },
  {
    question: "Which transaction code is used to create a logical database?",
    options: ["SE36", "SE38", "SE11", "SE80"],
    answer: "SE36",
    explanation: "SE36 is the Logical Database Builder transaction.",
  },
  {
    question: "What is the purpose of the SET PARAMETER ID statement?",
    options: [
      "To store values in SAP memory",
      "To configure system parameters",
      "To set up selection parameters",
      "To define parameter tables",
    ],
    answer: "To store values in SAP memory",
    explanation:
      "SET PARAMETER ID stores values in SAP memory that can be retrieved by other programs using GET PARAMETER ID.",
  },
  {
    question:
      "Which ABAP statement is used to handle screen fields dynamically?",
    options: ["MODULE", "FIELD", "CHAIN", "PROCESS"],
    answer: "FIELD",
    explanation:
      "The FIELD statement in PBO/PAI modules allows dynamic processing of screen fields.",
  },
  {
    question: "What is the purpose of the SET BLANK LINES statement?",
    options: [
      "To control display of blank lines in lists",
      "To initialize empty fields",
      "To configure printer settings",
      "To handle empty database records",
    ],
    answer: "To control display of blank lines in lists",
    explanation:
      "SET BLANK LINES ON/OFF controls whether completely blank lines are displayed in list output.",
  },
  {
    question: "Which ABAP keyword is used to define an event handler method?",
    options: ["METHODS", "EVENTS", "HANDLER", "CLASS-METHODS"],
    answer: "METHODS",
    explanation:
      "Event handler methods are defined using METHODS with the FOR EVENT addition.",
  },
  {
    question: "What is the purpose of the SET MARGIN statement?",
    options: [
      "To set the left margin for list output",
      "To configure screen margins",
      "To define report boundaries",
      "To set printer margins",
    ],
    answer: "To set the left margin for list output",
    explanation:
      "SET MARGIN sets the left margin for list output in character positions.",
  },
  {
    question:
      "Which transaction code is used to create a Web Dynpro application?",
    options: ["SE80", "SE38", "SE24", "SE11"],
    answer: "SE80",
    explanation:
      "Web Dynpro applications are created in the Object Navigator (SE80).",
  },
  {
    question: "What is the purpose of the SET COUNTRY statement?",
    options: [
      "To set country-specific formatting",
      "To filter data by country",
      "To configure country parameters",
      "To define country codes",
    ],
    answer: "To set country-specific formatting",
    explanation:
      "SET COUNTRY determines country-specific formatting for dates, numbers, and currencies.",
  },
  {
    question: "Which ABAP statement is used to define a selection option?",
    options: ["SELECT-OPTIONS", "PARAMETERS", "RANGES", "OPTIONS"],
    answer: "SELECT-OPTIONS",
    explanation:
      "SELECT-OPTIONS defines complex selection criteria on selection screens.",
  },
  {
    question: "What is the purpose of the SET LOCALE LANGUAGE statement?",
    options: [
      "To set the language for text elements",
      "To configure system language",
      "To define multilingual support",
      "To translate program code",
    ],
    answer: "To set the language for text elements",
    explanation:
      "SET LOCALE LANGUAGE determines the language for text elements in the current program.",
  },
  {
    question: "Which ABAP keyword is used to raise an event?",
    options: ["RAISE EVENT", "TRIGGER", "SEND", "FIRE"],
    answer: "RAISE EVENT",
    explanation: "RAISE EVENT triggers an event in ABAP Objects.",
  },
  {
    question: "What is the purpose of the SET PF-STATUS statement?",
    options: [
      "To set the GUI status (menu/toolbar)",
      "To configure printer status",
      "To define performance factors",
      "To initialize program flags",
    ],
    answer: "To set the GUI status (menu/toolbar)",
    explanation:
      "SET PF-STATUS activates a GUI status (menu bar, toolbar) for the current screen.",
  },
  {
    question: "Which transaction code is used to create a BDC session?",
    options: ["SM35", "SE38", "SHDB", "SE80"],
    answer: "SHDB",
    explanation:
      "SHDB is the transaction for recording and creating Batch Input sessions (though SM35 is for managing them).",
  },
  {
    question: "What is the purpose of the SET LANGUAGE statement?",
    options: [
      "To change the logon language",
      "To set the language for text elements",
      "To configure multilingual support",
      "To define translation languages",
    ],
    answer: "To set the language for text elements",
    explanation:
      "SET LANGUAGE determines the language for text elements in the current program (similar to SET LOCALE LANGUAGE).",
  },
  {
    question:
      "Which ABAP statement is used to define a checkbox on a selection screen?",
    options: ["PARAMETERS", "SELECT-OPTIONS", "CHECKBOX", "OPTION"],
    answer: "PARAMETERS",
    explanation:
      "PARAMETERS with the AS CHECKBOX addition creates a checkbox on a selection screen.",
  },
  {
    question: "What is the purpose of the SET HANDLER statement?",
    options: [
      "To register event handlers",
      "To configure exception handlers",
      "To define cursor handlers",
      "To set up memory handlers",
    ],
    answer: "To register event handlers",
    explanation:
      "SET HANDLER registers instance or static methods as handlers for events.",
  },
  {
    question: "Which ABAP keyword is used to define a static method?",
    options: [
      "CLASS-METHODS",
      "STATIC METHODS",
      "METHODS STATIC",
      "DEFINE STATIC",
    ],
    answer: "CLASS-METHODS",
    explanation: "CLASS-METHODS defines static methods in ABAP classes.",
  },
  {
    question: "What is the purpose of the SET RUN TIME statement?",
    options: [
      "To limit program execution time",
      "To schedule background jobs",
      "To measure runtime performance",
      "To configure time-dependent processing",
    ],
    answer: "To limit program execution time",
    explanation:
      "SET RUN TIME limits the execution time of the current program in milliseconds.",
  },
  {
    question: "Which transaction code is used to create an ALV report?",
    options: ["SE38", "SE80", "SE11", "SE51"],
    answer: "SE38",
    explanation:
      "ALV reports are programmed in the ABAP Editor (SE38), though you can use reusable components from SE80.",
  },
  {
    question: "What is the purpose of the SET EXTENDED CHECK statement?",
    options: [
      "To activate extended syntax checks",
      "To configure additional validations",
      "To enable thorough data checking",
      "To set up extended memory checks",
    ],
    answer: "To activate extended syntax checks",
    explanation:
      "SET EXTENDED CHECK activates extended program checks during runtime.",
  },
  {
    question:
      "Which ABAP statement is used to define a radio button group on a selection screen?",
    options: [
      "PARAMETERS",
      "SELECT-OPTIONS",
      "RADIOBUTTON GROUP",
      "OPTION GROUP",
    ],
    answer: "PARAMETERS",
    explanation:
      "PARAMETERS with the RADIOBUTTON GROUP addition creates radio buttons on a selection screen.",
  },
  {
    question: "What is the purpose of the SET UPDATE TASK LOCAL statement?",
    options: [
      "To execute update tasks in the same work process",
      "To configure local task updates",
      "To define update task scope",
      "To set up task priorities",
    ],
    answer: "To execute update tasks in the same work process",
    explanation:
      "SET UPDATE TASK LOCAL forces update tasks to execute in the same work process rather than being passed to update tasks.",
  },
  {
    question: "Which ABAP keyword is used to define an exception in a method?",
    options: ["EXCEPTIONS", "RAISING", "ERRORS", "CLASS-EXCEPTIONS"],
    answer: "EXCEPTIONS",
    explanation:
      "The EXCEPTIONS addition in the METHODS declaration defines exceptions that can be raised by the method.",
  },
  {
    question: "What is the purpose of the SET DATASET statement?",
    options: [
      "To assign a file to a dataset",
      "To configure database sets",
      "To define data clusters",
      "To set up memory datasets",
    ],
    answer: "To assign a file to a dataset",
    explanation:
      "SET DATASET assigns a physical file to a dataset handle for file operations.",
  },
  {
    question:
      "Which transaction code is used to create an enhancement implementation?",
    options: ["SE18", "SE19", "SE80", "SE38"],
    answer: "SE19",
    explanation:
      "SE19 is used to create enhancement implementations after defining the enhancement spot in SE18.",
  },
  {
    question: "What is the purpose of the SET PROPERTY statement?",
    options: [
      "To set properties of OLE objects",
      "To configure class properties",
      "To define screen properties",
      "To initialize object properties",
    ],
    answer: "To set properties of OLE objects",
    explanation: "SET PROPERTY sets properties of OLE Automation objects.",
  },
  {
    question:
      "Which ABAP statement is used to define a dropdown box on a selection screen?",
    options: ["PARAMETERS", "SELECT-OPTIONS", "DROPDOWN", "LISTBOX"],
    answer: "PARAMETERS",
    explanation:
      "PARAMETERS with the AS LISTBOX addition creates a dropdown box on a selection screen.",
  },
  {
    question: "What is the purpose of the SET SCREEN GROUP statement?",
    options: [
      "To assign screens to groups",
      "To configure screen clusters",
      "To define screen hierarchies",
      "To set up screen navigation",
    ],
    answer: "To assign screens to groups",
    explanation:
      "SET SCREEN GROUP assigns the current screen to a screen group for later reference.",
  },
  {
    question: "Which ABAP keyword is used to define a constructor?",
    options: ["CONSTRUCTOR", "METHODS constructor", "CREATE", "INIT"],
    answer: "METHODS constructor",
    explanation:
      "The constructor method is defined using METHODS constructor in a class definition.",
  },
  {
    question: "What is the purpose of the SET BIT statement?",
    options: [
      "To manipulate individual bits in a byte",
      "To configure binary settings",
      "To define bit patterns",
      "To set up binary flags",
    ],
    answer: "To manipulate individual bits in a byte",
    explanation: "SET BIT sets or clears individual bits in a byte field.",
  },
  {
    question: "Which transaction code is used to create a BAdI implementation?",
    options: ["SE18", "SE19", "SE24", "SE80"],
    answer: "SE19",
    explanation:
      "SE19 is used to create BAdI implementations after defining the BAdI in SE18.",
  },
  {
    question: "What is the purpose of the SET MASK statement?",
    options: [
      "To define input/output masks",
      "To configure screen masks",
      "To set up bit masks",
      "To initialize mask parameters",
    ],
    answer: "To define input/output masks",
    explanation:
      "SET MASK defines input and output masks for fields in list processing.",
  },
  {
    question:
      "Which ABAP statement is used to define a pushbutton on a selection screen?",
    options: ["PARAMETERS", "SELECT-OPTIONS", "PUSHBUTTON", "BUTTON"],
    answer: "PARAMETERS",
    explanation:
      "PARAMETERS with the AS PUSHBUTTON addition creates a pushbutton on a selection screen.",
  },
  {
    question: "What is the purpose of the SET LEFT SCROLL-BOUNDARY statement?",
    options: [
      "To set the left scrolling limit for lists",
      "To configure screen boundaries",
      "To define scrollable areas",
      "To initialize scroll positions",
    ],
    answer: "To set the left scrolling limit for lists",
    explanation:
      "SET LEFT SCROLL-BOUNDARY sets the leftmost column that can be scrolled to in list output.",
  },
  {
    question: "Which ABAP keyword is used to define a destructor?",
    options: ["DESTRUCTOR", "METHODS destructor", "DELETE", "FREE"],
    answer: "METHODS destructor",
    explanation:
      "The destructor method is defined using METHODS destructor in a class definition.",
  },
  {
    question: "What is the purpose of the SET HOLD DATA statement?",
    options: [
      "To retain list data across transactions",
      "To configure data retention",
      "To define persistent data",
      "To set up data caching",
    ],
    answer: "To retain list data across transactions",
    explanation:
      "SET HOLD DATA retains list data when navigating from one transaction to another.",
  },
  {
    question: "Which transaction code is used to create an OData service?",
    options: ["SEGW", "SE80", "SE38", "SE11"],
    answer: "SEGW",
    explanation:
      "SEGW is the Gateway Service Builder for creating OData services.",
  },
  {
    question: "What is the purpose of the SET CLIENT statement?",
    options: [
      "To switch the current client",
      "To configure client settings",
      "To define client-specific behavior",
      "To initialize client parameters",
    ],
    answer: "To switch the current client",
    explanation:
      "SET CLIENT changes the current client in multi-client systems (requires authorization).",
  },
  {
    question:
      "Which ABAP statement is used to define a frame on a selection screen?",
    options: ["SELECTION-SCREEN", "FRAME", "BOX", "GROUP"],
    answer: "SELECTION-SCREEN",
    explanation:
      "SELECTION-SCREEN with the BEGIN/END OF FRAME additions creates frames on selection screens.",
  },
  {
    question: "What is the purpose of the SET TIMEZONE statement?",
    options: [
      "To set the time zone for time conversions",
      "To configure system time",
      "To define time zone parameters",
      "To initialize time settings",
    ],
    answer: "To set the time zone for time conversions",
    explanation:
      "SET TIMEZONE determines the time zone for converting between local time and UTC.",
  },
  {
    question: "Which ABAP keyword is used to define a friend class?",
    options: ["FRIENDS", "CLASS-FRIENDS", "DEFINE FRIEND", "FRIEND CLASSES"],
    answer: "FRIENDS",
    explanation:
      "The FRIENDS addition in a class definition grants special access privileges to other classes.",
  },
  {
    question: "What is the purpose of the SET BITMASK statement?",
    options: [
      "To define a bit mask for field comparisons",
      "To configure binary masks",
      "To set up bit patterns",
      "To initialize mask parameters",
    ],
    answer: "To define a bit mask for field comparisons",
    explanation:
      "SET BITMASK defines a bit mask for comparing bit patterns in fields.",
  },
  {
    question: "Which transaction code is used to create a CDS view?",
    options: ["SE11", "SE80", "SE38", "Eclipse (ADT)"],
    answer: "Eclipse (ADT)",
    explanation:
      "Core Data Services (CDS) views are typically created in Eclipse with ABAP Development Tools (ADT), though some can be created in SE80.",
  },
];
