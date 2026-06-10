registerTopic("Warmup - C questions",

  // Basics
  {
    type: "scq",
    question: "What is the correct way to declare an integer variable in C?",
    options: [
      "int x;",
      "integer x;",
      "var int x;",
      "x int;"
    ],
    answer: 0,
    explanation: "In C, integer variables are declared with the <code>int</code> keyword followed by the variable name: <code>int x;</code>"
  },

  {
    type: "scq",
    question: "What is the purpose of the main function in C?",
    options: [
      "It is the entry point of the program",
      "It is an optional function",
      "It is only used for printing text",
      "It compiles the program"
    ],
    answer: 0,
    explanation: "<code>main()</code> is the <b>entry point</b> of every C program — execution always starts there."
  },

  {
    type: "scq",
    question: "What is the result of 5 / 2 in C (integer division)?",
    options: [
      "2",
      "2.5",
      "3",
      "0"
    ],
    answer: 0,
    explanation: "In C, dividing two integers performs <b>integer division</b> — the fractional part is truncated. 5 / 2 = <b>2</b>."
  },

  {
    type: "scq",
    question: "What is the correct format specifier for printing an integer in C?",
    options: [
      "%d",
      "%f",
      "%c",
      "%s"
    ],
    answer: 0,
    explanation: "<code>%d</code> is the format specifier for a decimal integer. <code>%f</code> is for float, <code>%c</code> for char, <code>%s</code> for string."
  },

  {
    type: "scq",
    question: "Which keyword is used to create a loop in C?",
    options: [
      "while",
      "loop",
      "repeat",
      "iterate"
    ],
    answer: 0,
    explanation: "C supports <code>while</code>, <code>for</code>, and <code>do...while</code> loops. <code>loop</code>, <code>repeat</code>, and <code>iterate</code> are not C keywords."
  },

  {
    type: "scq",
    question: "What does malloc do in C?",
    options: [
      "Allocates dynamic memory",
      "Frees memory",
      "Declares a variable",
      "Compiles the program"
    ],
    answer: 0,
    explanation: "<code>malloc(n)</code> allocates <code>n</code> bytes of memory on the <b>heap</b> and returns a pointer to it (or NULL on failure)."
  },

  {
    type: "scq",
    question: "What is the correct operator to compare two values in C?",
    options: [
      "==",
      "=",
      "!=!",
      "<>"
    ],
    answer: 0,
    explanation: "<code>==</code> is the equality comparison operator. <code>=</code> is assignment, not comparison."
  },

  {
    type: "scq",
    question: "What does the return statement do in a function?",
    options: [
      "It returns a value and terminates the function",
      "It prints a value",
      "It creates a variable",
      "It repeats the function"
    ],
    answer: 0,
    explanation: "<code>return</code> exits the current function and optionally passes a value back to the caller."
  },

  {
    type: "scq",
    question: "What is the typical size of an int in C on most modern systems?",
    options: [
      "4 bytes",
      "2 bytes",
      "8 bytes",
      "1 byte"
    ],
    answer: 0,
    explanation: "On most modern 32-bit and 64-bit systems, <code>int</code> is <b>4 bytes</b> (32 bits)."
  },

  {
    type: "scq",
    question: "Which header file is required to use printf?",
    options: [
      "#include <stdio.h>",
      "#include <stdlib.h>",
      "#include <string.h>",
      "#include <math.h>"
    ],
    answer: 0,
    explanation: "<code>printf</code> is declared in <code>&lt;stdio.h&gt;</code> (standard input/output)."
  },

  // Pointers
  {
    type: "scq",
    question: "What does a pointer store in C?",
    options: [
      "A memory address",
      "A data type name",
      "A compiled instruction",
      "A function return value"
    ],
    answer: 0,
    explanation: "A pointer stores a <b>memory address</b> — the location of another variable in memory."
  },

  {
    type: "scq",
    question: "Which operator is used to get the address of a variable?",
    options: [
      "&",
      "*",
      "->",
      "%"
    ],
    answer: 0,
    explanation: "The <b>address-of</b> operator <code>&</code> returns the memory address of a variable. E.g. <code>&x</code> gives the address of <code>x</code>."
  },

  {
    type: "scq",
    question: "Which operator is used to dereference a pointer?",
    options: [
      "*",
      "&",
      "->",
      "$"
    ],
    answer: 0,
    explanation: "The <b>dereference</b> operator <code>*</code> accesses the value stored at the address held by a pointer."
  },

  {
    type: "scq",
    question: "What is the correct declaration of a pointer to int?",
    options: [
      "int *p;",
      "int p*;",
      "pointer int p;",
      "*int p;"
    ],
    answer: 0,
    explanation: "<code>int *p;</code> declares a pointer to an <code>int</code>. The <code>*</code> goes between the type and the variable name."
  },

  {
    type: "scq",
    question: "What does NULL represent in pointer context?",
    options: [
      "A pointer pointing to nothing",
      "A pointer to zero",
      "A memory address 0x1",
      "An uninitialized variable"
    ],
    answer: 0,
    explanation: "<code>NULL</code> is a special constant representing a pointer that points to <b>nothing</b> (address 0). Dereferencing it is undefined behavior."
  },

  {
    type: "scq",
    question: "What happens in pointer arithmetic (e.g., p++)?",
    options: [
      "It moves to the next memory block of the pointed type",
      "It adds 1 byte only",
      "It multiplies the value by 2",
      "It resets the pointer"
    ],
    answer: 0,
    explanation: "<code>p++</code> advances the pointer by <code>sizeof(*p)</code> bytes — not necessarily 1 byte. E.g. for an <code>int*</code>, it moves 4 bytes forward."
  },

  {
    type: "scq",
    question: "What is the relationship between arrays and pointers in C?",
    options: [
      "Array name acts as a pointer to the first element",
      "Arrays are unrelated to pointers",
      "Arrays store pointer types only",
      "Pointers cannot access arrays"
    ],
    answer: 0,
    explanation: "In most contexts, an array name <b>decays</b> to a pointer to its first element. E.g. <code>int tab[5]</code> → <code>tab</code> is equivalent to <code>&tab[0]</code>."
  },

  {
    type: "scq",
    question: "What does malloc return in C?",
    options: [
      "A void pointer to allocated memory",
      "An integer size",
      "A null-terminated string",
      "A compiled address label"
    ],
    answer: 0,
    explanation: "<code>malloc</code> returns a <code>void*</code> pointing to the allocated memory block, or <code>NULL</code> if the allocation fails."
  },

  {
    type: "scq",
    question: "What is a double pointer (int **p)?",
    options: [
      "A pointer to another pointer",
      "A pointer to an integer array only",
      "A function pointer",
      "A null pointer"
    ],
    answer: 0,
    explanation: "<code>int **p</code> is a pointer to a pointer to an <code>int</code>. <code>*p</code> gives an <code>int*</code>, and <code>**p</code> gives the <code>int</code> value."
  },

  {
    type: "scq",
    question: "What does const int *p mean?",
    options: [
      "The value pointed to cannot be modified through p",
      "The pointer itself cannot change address",
      "p is a constant integer",
      "p is a null pointer"
    ],
    answer: 0,
    explanation: "<code>const int *p</code>: the <b>value</b> pointed to is read-only through <code>p</code>. The pointer itself can still be reassigned. For a constant pointer: <code>int * const p</code>."
  },

  // Advanced pointers
  {
    type: "scq",
    question: "What is the result of dereferencing a NULL pointer in C?",
    options: [
      "Undefined behavior",
      "It returns 0",
      "It returns NULL safely",
      "It compiles but does nothing"
    ],
    answer: 0,
    explanation: "Dereferencing a NULL pointer is <b>undefined behavior</b> — it typically causes a Segmentation Fault at runtime."
  },

  {
    type: "scq",
    question: "What is a function pointer in C used for?",
    options: [
      "Storing the address of a function to call it indirectly",
      "Allocating dynamic memory for functions",
      "Returning multiple values from a function",
      "Defining recursive functions only"
    ],
    answer: 0,
    explanation: "A function pointer holds the <b>address of a function</b>, allowing it to be called indirectly. Useful for callbacks and generic programming (e.g. <code>qsort</code>)."
  },

  {
    type: "scq",
    question: "What does the expression *(p + i) represent?",
    options: [
      "The value at index i from pointer p",
      "The address of p shifted by i bytes only",
      "The function at position i",
      "A compilation error always"
    ],
    answer: 0,
    explanation: "<code>*(p + i)</code> is equivalent to <code>p[i]</code> — it accesses the value at index <code>i</code> from the pointer <code>p</code>."
  },

  {
    type: "scq",
    question: "What happens if you call free() twice on the same pointer?",
    options: [
      "Undefined behavior",
      "It safely ignores the second call",
      "It resets the pointer to NULL automatically",
      "It reallocates memory"
    ],
    answer: 0,
    explanation: "Calling <code>free()</code> twice on the same pointer is a <b>double free</b> — undefined behavior that can corrupt the heap or cause crashes."
  },

  {
    type: "scq",
    question: "What is pointer aliasing?",
    options: [
      "Multiple pointers referencing the same memory location",
      "A pointer pointing to another pointer only",
      "A pointer with invalid type",
      "A pointer initialized to zero"
    ],
    answer: 0,
    explanation: "<b>Pointer aliasing</b> occurs when two or more pointers point to the same memory location. It can cause subtle bugs when one pointer modifies the value unexpectedly seen by another."
  },

  {
    type: "scq",
    question: "What does realloc() do in C?",
    options: [
      "Resizes a previously allocated memory block",
      "Frees all allocated memory",
      "Creates a new variable on stack",
      "Converts pointer to integer"
    ],
    answer: 0,
    explanation: "<code>realloc(ptr, newsize)</code> resizes the previously allocated block pointed to by <code>ptr</code>. It may move the block to a new location and returns the new pointer."
  },

  {
    type: "scq",
    question: "What is the risk of returning the address of a local variable?",
    options: [
      "The pointer becomes dangling",
      "The variable becomes global",
      "Memory is automatically copied to heap",
      "The compiler fixes it automatically"
    ],
    answer: 0,
    explanation: "Local variables are destroyed when their function returns. Returning their address creates a <b>dangling pointer</b> — pointing to memory that is no longer valid."
  },

  {
    type: "scq",
    question: "What does const int *p guarantee?",
    options: [
      "The value pointed to cannot be modified through p",
      "The pointer address cannot change",
      "Both pointer and value are immutable",
      "The pointer is stored in ROM"
    ],
    answer: 0,
    explanation: "<code>const int *p</code> means the <b>value at the pointed address</b> cannot be modified through <code>p</code>. The pointer itself can still point elsewhere."
  },

  {
    type: "scq",
    question: "What is the strict aliasing rule in C related to?",
    options: [
      "Accessing the same memory through incompatible pointer types",
      "Faster loops in arrays",
      "Function overloading",
      "Memory allocation speed"
    ],
    answer: 0,
    explanation: "The <b>strict aliasing rule</b> states that accessing the same memory location through pointers of incompatible types is undefined behavior. Compilers use this to optimize code."
  },

  {
    type: "scq",
    question: "What is the alignment requirement in pointer usage mainly about?",
    options: [
      "Memory addresses must match type alignment constraints",
      "Pointers must always be 8 bytes",
      "All pointers must be initialized to NULL",
      "Alignment only affects arrays, not pointers"
    ],
    answer: 0,
    explanation: "<b>Alignment</b> means that a variable of a given type must be stored at a memory address that is a multiple of its size (e.g. <code>int</code> at a multiple of 4). Misaligned access can cause crashes or performance penalties."
  },

);
