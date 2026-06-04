registerTopic("C Training - Auto generated",

  // --- Compilation pipeline ---
  {
    question: "The four stages of building a C program (in order) are: preprocessing → compiling → assembling → linking.",
    type: "tf",
    answer: true,
    explanation: "<ol><li><strong>Preprocessing</strong>: expands macros, processes <code>#include</code> and <code>#define</code> directives (output: .i file).</li><li><strong>Compiling</strong>: translates C to assembly (output: .s file).</li><li><strong>Assembling</strong>: translates assembly to machine code (output: .o object file).</li><li><strong>Linking</strong>: combines object files and libraries into the final executable.</li></ol>"
  },
  {
    question: "The C preprocessor expands <code>#include</code> directives by replacing them with the full content of the included file.",
    type: "tf",
    answer: true,
    explanation: "The preprocessor is a simple text substitution tool. <code>#include &lt;stdio.h&gt;</code> is replaced by the entire content of stdio.h before the compiler ever sees the code. This is why include guards (<code>#ifndef</code>/<code>#define</code>/<code>#endif</code>) are necessary to avoid double-inclusion."
  },
  {
    question: "An object file (.o) produced by the assembler contains fully resolved addresses for all function calls.",
    type: "tf",
    answer: false,
    explanation: "Object files contain <em>relocatable</em> machine code. Calls to functions defined in other translation units are left as unresolved references (with placeholder addresses). The linker resolves these references by combining all object files."
  },
  {
    question: "What does the linker do?",
    type: "mcq",
    options: [
      "It converts C source code into assembly language.",
      "It expands macros and #include directives.",
      "It combines object files and resolves cross-file symbol references to produce an executable.",
      "It optimises the binary at runtime."
    ],
    answer: 2,
    explanation: "The linker takes one or more .o files (and library archives) and resolves all undefined references between them. It also assigns final memory addresses and produces the executable (or shared library)."
  },

  // --- Header files ---
  {
    question: "A header file (.h) typically contains function <em>definitions</em> (i.e. the function body with its implementation).",
    type: "tf",
    answer: false,
    explanation: "Header files normally contain <em>declarations</em> (prototypes), type definitions, macros, and <code>extern</code> variable declarations — not function bodies. Putting full definitions in headers causes 'multiple definition' linker errors if the header is included in more than one .c file. (Inline and static functions are the exception.)"
  },
  {
    question: "A function prototype tells the compiler the function's return type and parameter types without providing the implementation.",
    type: "tf",
    answer: true,
    explanation: "A prototype (e.g. <code>double dot_product(struct vector a, struct vector b);</code>) is a declaration. It lets the compiler type-check calls to the function even before it has seen the definition. The actual body is compiled separately, typically in a different .c file."
  },
  {
    question: "If a function is called without a prior declaration in C89/C90, the compiler assumes it returns <code>int</code>.",
    type: "tf",
    answer: true,
    explanation: "C89 had 'implicit int' rules: an undeclared function was assumed to return <code>int</code> and accept any arguments. This was removed in C99. Modern compilers issue an 'implicit declaration' warning (or error) and you should always declare functions before use."
  },
  {
    question: "What is the purpose of include guards (e.g. <code>#ifndef MY_HEADER_H / #define MY_HEADER_H / … / #endif</code>)?",
    type: "mcq",
    options: [
      "To speed up compilation by caching parsed headers.",
      "To prevent a header file from being included more than once in the same translation unit.",
      "To restrict header visibility to C++ compilers only.",
      "To define platform-specific macros."
    ],
    answer: 1,
    explanation: "If a header is included multiple times (directly or transitively), its declarations would appear twice, causing 'redefinition' errors. Include guards use the preprocessor to skip the file's content on the second inclusion. <code>#pragma once</code> is a non-standard but widely supported alternative."
  },

  // --- Static vs dynamic linking ---
  {
    question: "With static linking, the library code is copied into the executable at link time.",
    type: "tf",
    answer: true,
    explanation: "Static libraries (.a files on Linux, .lib on Windows) are archives of .o files. The linker copies the needed object code directly into the final executable. The result is self-contained but larger."
  },
  {
    question: "With dynamic linking, the library code is loaded and linked at runtime.",
    type: "tf",
    answer: true,
    explanation: "Dynamic/shared libraries (.so on Linux, .dll on Windows) are loaded by the dynamic linker at program startup (or on demand). Multiple programs can share one copy of the library in memory, saving RAM and disk space. Updates to the library are picked up without relinking the program."
  },
  {
    question: "A statically linked executable can run on a machine where the required shared libraries are not installed.",
    type: "tf",
    answer: true,
    explanation: "Because all library code is embedded in the executable, there are no external dependencies at runtime. This makes deployment simpler but the binary larger."
  },

  // --- gcc flags ---
  {
    question: "The gcc flag <code>-c</code> compiles source files to object files without linking.",
    type: "tf",
    answer: true,
    explanation: "<code>gcc -c foo.c</code> runs preprocessing, compiling, and assembling to produce <code>foo.o</code>, but stops before linking. This is used in Makefiles to compile each .c file independently."
  },
  {
    question: "What does the gcc flag <code>-o output_name</code> do?",
    type: "mcq",
    options: [
      "Enables compiler optimisations.",
      "Specifies the name of the output file.",
      "Links against a library named output_name.",
      "Generates debug information."
    ],
    answer: 1,
    explanation: "<code>-o</code> sets the output file name. Without it, gcc produces <code>a.out</code> by default. Example: <code>gcc main.o utils.o -o myprogram</code> produces an executable named <code>myprogram</code>."
  },
  {
    question: "The gcc flag <code>-Wall</code> turns all warnings into errors.",
    type: "tf",
    answer: false,
    explanation: "<code>-Wall</code> enables a large set of commonly useful warnings (unused variables, implicit declarations, etc.), but they remain warnings — the compiler still produces output. To turn warnings into errors, use <code>-Werror</code>."
  },
  {
    question: "To link against the math library (libm) when compiling with gcc, you add <code>-lm</code> to the command.",
    type: "tf",
    answer: true,
    explanation: "The <code>-l&lt;name&gt;</code> flag tells the linker to search for <code>lib&lt;name&gt;.so</code> (or <code>lib&lt;name&gt;.a</code>). <code>-lm</code> links against <code>libm</code>, which provides <code>sin()</code>, <code>cos()</code>, <code>sqrt()</code> etc. On modern Linux this is often implicit, but it's good practice to include it."
  },

  // --- Makefiles ---
  {
    question: "In a Makefile, a target is rebuilt only if one of its prerequisites has a modification time newer than the target.",
    type: "tf",
    answer: true,
    explanation: "Make compares timestamps. If a .c or .h file is newer than the corresponding .o, Make reruns the compilation rule. This avoids recompiling unchanged files, which is crucial for large projects."
  },
  {
    question: "The <code>make</code> command always recompiles all source files, regardless of whether they have changed.",
    type: "tf",
    answer: false,
    explanation: "Make only rebuilds targets whose prerequisites are newer than themselves (or that don't exist yet). Running <code>make</code> a second time without changing any files prints 'Nothing to be done'."
  },

  // --- Memory / pointers ---
  {
    question: "In C, passing a variable to a function by value means the function receives a copy — modifying it inside the function does not affect the original.",
    type: "tf",
    answer: true,
    explanation: "C is strictly pass-by-value. To let a function modify a variable in the caller, you must pass a pointer to it (pass the address), and the function dereferences the pointer to modify the original."
  },
  {
    question: "The expression <code>*p++</code> in C first dereferences the pointer <code>p</code>, then increments the pointer.",
    type: "tf",
    answer: true,
    explanation: "Postfix <code>++</code> has higher precedence than <code>*</code>, but postfix increment returns the <em>original</em> value before incrementing. So <code>*p++</code> reads <code>*p</code> (dereference), then advances <code>p</code> to the next element. It is a common C idiom for iterating through arrays."
  },
  {
    question: "What is a segmentation fault?",
    type: "mcq",
    options: [
      "A compile-time error caused by a missing semicolon.",
      "A runtime error caused by accessing memory the program is not allowed to access.",
      "A linker error caused by an undefined function.",
      "An arithmetic error caused by dividing by zero."
    ],
    answer: 1,
    explanation: "A segfault (SIGSEGV) is raised by the OS when a program accesses memory outside its permitted regions — e.g. dereferencing a NULL pointer, reading past the end of an array, or writing to read-only memory. The OS terminates the process to protect system integrity."
  }
);
