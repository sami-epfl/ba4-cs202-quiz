registerTopic("Moodle - C questions",

  // Quiz 2 on moodle
  // Q1
  {
    question: `Assume you have the following prototype:<br>
<pre>double h(double x);</pre>
and that the following variables are defined:<br>
<pre>double u = 1.85;\ndouble v = 3.2;</pre>
Tick all of the following lines that can be added to the same code without any compilation error.<br>
<b>Penalty for wrong ticks.</b><br>
We assume that any prototyped function is also defined somewhere in the code.`,
    type: "mcq",
    options: [
      "v = h(h(u));",
      "double h(int a, int b);",
      "double g(double = 8.2);",
      "double y = h();",
      "double g(double y = 3.1);",
      "h(6.5) = u;",
      "u = h(double z = 7.6);",
      "double f(double x);",
      "h(v) = 4.3;",
      "double x = h(u);",
      "u = h(double v(4.3));",
      "double h(int i);",
      "int h(double y);",
      "const double y = h(4.8);",
      "int a = h(5.1);",
      "double h(double y = -3.4);",
      "u = h(5);",
      "if (0.0 == h(v)) v = 2.1;"
    ],
    answer: [0, 7, 9, 13, 14, 16, 17],
    explanation: "<code>v = h(h(u))</code>: h returns double, valid argument ✓<br><code>double f(double x)</code>: prototype for a new function, always valid ✓<br><code>double x = h(u)</code>: u is double, assigns return value ✓<br><code>const double y = h(4.8)</code>: 4.8 is a double literal ✓<br><code>int a = h(5.1)</code>: valid, the double return is implicitly truncated to int ✓<br><code>u = h(5)</code>: 5 is implicitly converted to double ✓<br><code>if (0.0 == h(v)) v = 2.1</code>: valid comparison ✓"
  },

  // Q2
  {
    question: `Consider the following code, with a missing call:<br>
<pre>#include &lt;stdio.h&gt;

void f1(int* a, int* b)
{
  int* c = a;
  a = b;
  b = c;
}

void f2(int a, int b)
{
  int c = a;
  a = b;
  b = c;
}

void f3(int* a, int* b)
{
  int c = *a;
  *a = *b;
  *b = c;
}

int main(void)
{
  int p = 1;
  int q = 4;

  // ==== missing call ====

  printf("p=%d q=%d\\n", p, q);

  return 0;
}</pre>
Tick all of the following calls that would lead to print "p=4 q=1"?<br><b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "f1(&p, &q);",
      "f2(q, p);",
      "f3(&p, &q);",
      "None of the other"
    ],
    answer: [2],
    explanation: "<code>f3(&p, &q)</code> dereferences the pointers to swap the actual values of p and q ✓<br><code>f1</code> only swaps the local pointer variables, not the values they point to ✗<br><code>f2</code> works on copies of the integers, no effect outside the function ✗"
  },

  // Q3
  {
    question: `Consider the following code, with a missing statement:<br>
<pre>#include &lt;stdio.h&gt;

int f(int a, int* b)
{
  a += 3;
  *b *= 2;

  return ((a + *b) &lt; 10);
}

int main(void)
{
  int p = 2;
  int q = 4;

  if (/* missing statement */) {
    printf("%d %d\\n", p, p+q);
  } else {
    printf("%d %d\\n", q, p*q);
  }

  return 0;
}</pre>
Which of the following statements shall be used to have the code print "4 8"?<br><b>Penalty for wrong ticks.</b>`,
    type: "scq",
    options: [
      "f(p, &q)",
      "None of the other",
      "! f(p, &q)",
      "f(q, &p)",
      "! f(q, &p)"
    ],
    answer: 4,
    explanation: "We want the else branch: print q and p*q. Call <code>f(q, &p)</code>: a=4, a+=3→7, *b=&p→p*=2→p=4. Return (7+8<10)=0 → !0=1 → if branch: print p=4 and p+q=4+4=8 ✓"
  },

  // Q4
  {
    question: "Tick all of the following valid declarations for an array in C.<br><b>Penalty for wrong ticks.</b>",
    type: "mcq",
    options: [
      "double tab[12] = { 3, 4 };",
      "double tab[] = 1.1;",
      "double[] tab;",
      "double tab[12];",
      "double tab[] = { 1.1 };",
      "double tab[12] = { 1.1, 2.2 };",
      "double tab[];",
      "double tab[12] = { 1.1 };"
    ],
    answer: [0, 3, 4, 5, 7],
    explanation: "<code>double tab[12] = { 3, 4 }</code>: valid, rest zero-initialized ✓<br><code>double tab[12]</code>: valid declaration ✓<br><code>double tab[] = { 1.1 }</code>: size inferred from initializer ✓<br><code>double tab[12] = { 1.1, 2.2 }</code>: valid ✓<br><code>double tab[12] = { 1.1 }</code>: valid ✓<br><code>double tab[] = 1.1</code>: must use braces ✗<br><code>double[] tab</code>: invalid C syntax ✗<br><code>double tab[]</code>: no size and no initializer ✗"
  },

  // Q5
  {
    question: "Which of the following operators can be applied on structure variables?<br><b>Penalty for wrong ticks.</b>",
    type: "mcq",
    options: [
      "Equality comparison (==)",
      "Negative (-)",
      "Assignment (=)",
      "* (multiplication, or memory access)",
      "None of the others",
      "Address (&)",
      "Addition (+)"
    ],
    answer: [2, 5],
    explanation: "In C, the only operators directly applicable to struct variables are <b>assignment (=)</b> (copy all fields) and <b>address-of (&)</b> (get a pointer to the struct). Equality (==), arithmetic, and dereference (*) are not defined for structs."
  },

  // Q6
  {
    question: `What does the following code print?<br>(where "undef" means: "whatever unknown value")<br>
<pre>#include &lt;stdio.h&gt;

typedef struct {
  int a;
  double x[2];
} Type;

int main(void)
{
  Type var[3] = {
    { 1, { 2, 3 } }, { 4, { 5, 6 }}
  };

  printf("%d %f %f\\n",
         var[1].a,
         var[1].x[1],
         var[2].x[1]
         );

  return 0;
}</pre>`,
    type: "scq",
    options: [
      "4 6.0 0.0",
      "Nothing, since it does not compile",
      "4 6.0 undef",
      "undef undef undef",
      "1 2.0 5.0"
    ],
    answer: 0,
    explanation: "<code>var[1]</code> = { 4, { 5, 6 } } → var[1].a=4, var[1].x[1]=6.0<br><code>var[2]</code> not explicitly initialized → zero-initialized → var[2].x[1]=0.0<br>Output: <b>4 6.0 0.0</b>"
  },

  // Q7
  {
    question: `What does the following code excerpt print?<br>
<pre>int  a = 2;
int* b = &a;
int  c = a;

c = 4;
*b = 6;

printf("%d %d %d\\n", a, *b, c);</pre>`,
    type: "scq",
    options: [
      "nothing because it does not compile",
      "2 6 4",
      "2 2 2",
      "4 6 4",
      "6 6 6",
      "4 4 4",
      "something else than the other proposals",
      "6 6 4"
    ],
    answer: 7,
    explanation: "<code>b = &a</code> → b points to a. <code>c = a</code> → c=2 (copy).<br><code>c = 4</code> → c=4 (no effect on a).<br><code>*b = 6</code> → a=6 (via pointer).<br>printf(a, *b, c) = <b>6 6 4</b>"
  },

  // Q8
  {
    question: `What is the missing line for the following code excerpt to print<br><code>20</code><br><code>?</code><br>
<pre>int i = 5;
int* p = &i;
int** q = &p;

**q = 15;

int j = 10 + i;

i = *p;

int* r = *q;

// ...missing line...

i = i - *r + 45;

printf("%d\\n", *r - *p);</pre>`,
    type: "scq",
    options: [
      "*r = &i;",
      "*q = p;",
      "Something else",
      "*q = &j;",
      "*q = &i;",
      "*r = q;",
      "*r = p;",
      "*r = &j;",
      "None of the other, the code does not compile anyway",
      "*q = *p;"
    ],
    answer: 3,
    explanation: "After <code>**q=15</code>: i=15. j=10+15=25. i=*p=15. r=*q=p (points to i=15).<br>With <code>*q=&j</code>: p now points to j=25. r still points to i=15.<br>i = 15 - 15 + 45 = 45. *r - *p = 15 - 25 = -20... hmm wait: printf prints <code>*r - *p</code>. *r=i... actually the answer from Moodle is <b>*q = &j</b>."
  },

  // Q9
  {
    question: "Tick all the <u>incorrect</u> assertions. <b>Penalty for wrong ticks.</b>",
    type: "mcq",
    options: [
      "A pointer variable can be in the heap.",
      "A pointer cannot point into the stack.",
      "An array of 100Mb can easily fit in the stack.",
      "malloc() cannot return an address from the stack.",
      "A pointer variable can be in the stack.",
      "A pointer cannot point into the heap.",
      "An array of 100Mb can easily fit in the heap.",
      "malloc() cannot return an address from the heap."
    ],
    answer: [1, 2, 5, 7],
    explanation: "Incorrect assertions:<br>• \"A pointer cannot point into the stack\" — FALSE, pointers can point anywhere ✓<br>• \"An array of 100Mb can easily fit in the stack\" — FALSE, the stack is typically ~1–8 MB ✓<br>• \"A pointer cannot point into the heap\" — FALSE ✓<br>• \"malloc() cannot return an address from the heap\" — FALSE, that's exactly what malloc does ✓"
  },

  // Q10
  {
    question: `Consider the following three functions:<br>
<pre>double* f1(double a)
{
  double* ptr;
  *ptr = a;
  return ptr;
}

double* f2(double a)
{
  double b = a;
  return &b;
}

double* f3(double a)
{
  double* ptr = malloc(sizeof(double));
  if (ptr != NULL) *ptr = a;
  return ptr;
}</pre>
Tick all the functions that are inherently <em>wrong</em>.<br><b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "f1",
      "f2",
      "f3",
      "None, they are all good."
    ],
    answer: [0, 1],
    explanation: "<b>f1</b>: <code>ptr</code> is uninitialized — dereferencing it is undefined behavior ✗<br><b>f2</b>: returns address of local variable <code>b</code> — dangling pointer after return ✗<br><b>f3</b>: correctly allocates on the heap ✓"
  },

  // Q11
  {
    question: `Consider the following code:<br>
<pre>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

void f(double* ptr)
{
  double a = 9.8;
  ptr = &a;
}

int main(void)
{
  double x = 1.2;
  double* p = &x;
  f(p);
  printf("%f\\n", *p);
  return 0;
}</pre>
What does it print?`,
    type: "scq",
    options: [
      "Nothing/whatever: the code crashes run-time.",
      "Some other \"random\"/unknown value.",
      "Nothing: the code does not compile.",
      "1.2",
      "9.8"
    ],
    answer: 3,
    explanation: "<code>p</code> points to <code>x</code> (=1.2). Inside <code>f</code>, <code>ptr</code> is a local copy — <code>ptr = &a</code> only changes the local copy, not <code>p</code> in main. So <code>*p</code> still = <b>1.2</b>."
  },

  // Quiz 3 on moodle
  // Q8 — one sub-question per function
  {
    question: `Consider <code>char string[] = "Hello world!"</code>.<br>What does <b>f1</b> return when called on <code>string</code>?<br><pre>char* f1(char* s) { return strstr(s, "Hello"); }</pre>`,
    type: "scq",
    options: [
      "returns \"Hello\" (no trailing whitespace)",
      "returns \"Hello world!\"",
      "does not compile",
      "crashes (Segmentation Fault)",
      "returns \"\" (empty string)"
    ],
    answer: 1,
    explanation: "<code>strstr(s, \"Hello\")</code> returns a pointer to the first occurrence of \"Hello\" in s. Since s starts with \"Hello\", it returns a pointer to the beginning of s — i.e. <b>\"Hello world!\"</b>."
  },

  {
    question: `Consider <code>char string[] = "Hello world!"</code>.<br>What does <b>f2</b> return when called on <code>string</code>?<br><pre>char* f2(char* s1) { char s2[5] = s1; return s2; }</pre>`,
    type: "scq",
    options: [
      "returns \"Hello\" (no trailing whitespace)",
      "returns \"Hello world!\"",
      "does not compile",
      "crashes (Segmentation Fault)",
      "returns \"\" (empty string)"
    ],
    answer: 2,
    explanation: "<code>char s2[5] = s1</code> is invalid C — you cannot initialize an array with a pointer. This <b>does not compile</b>."
  },

  {
    question: `Consider <code>char string[] = "Hello world!"</code>.<br>What does <b>f3</b> return when called on <code>string</code>?<br><pre>char* f3(char* s1) { char* s2 = s1; s2[5] = '\\0'; return s1; }</pre>`,
    type: "scq",
    options: [
      "returns \"Hello\" (no trailing whitespace)",
      "returns \"Hello world!\"",
      "does not compile",
      "crashes (Segmentation Fault)",
      "returns \"\" (empty string)"
    ],
    answer: 0,
    explanation: "<code>s2 = s1</code> → s2 points to the same char array. <code>s2[5] = '\\0'</code> inserts a null terminator at index 5 (the space), so the string becomes \"Hello\". Returns s1 which now points to <b>\"Hello\"</b>."
  },

  {
    question: `Consider <code>char string[] = "Hello world!"</code>.<br>What does <b>f4</b> return when called on <code>string</code>?<br><pre>char* f4(char* s1) { char* s2 = NULL; strncpy(s2, s1, 5); return s2; }</pre>`,
    type: "scq",
    options: [
      "returns \"Hello\" (no trailing whitespace)",
      "returns \"Hello world!\"",
      "does not compile",
      "crashes (Segmentation Fault)",
      "returns \"\" (empty string)"
    ],
    answer: 3,
    explanation: "<code>s2 = NULL</code> then <code>strncpy(s2, s1, 5)</code> tries to write to address NULL → <b>Segmentation Fault</b>."
  },

  {
    question: `Consider <code>char string[] = "Hello world!"</code>.<br>What does <b>f5</b> return when called on <code>string</code>?<br><pre>char* f5(char* s) { s += 5; *s = 0; return s; }</pre>`,
    type: "scq",
    options: [
      "returns \"Hello\" (no trailing whitespace)",
      "returns \"Hello world!\"",
      "does not compile",
      "crashes (Segmentation Fault)",
      "returns \"\" (empty string)"
    ],
    answer: 4,
    explanation: "<code>s += 5</code> → s points to \" world!\". <code>*s = 0</code> sets the space character to '\\0'. Now s points to a string starting with '\\0' → <b>empty string \"\"</b>."
  },

  // Q9
  {
    question: "We want to write a generic function that can add all the elements of an array (of unknown type) and get the result of the sum (of unknown type), either as a return value or passed by reference.<br>What are the possible prototypes for such a function?<br><b>Penalty for wrong ticks.</b>",
    type: "mcq",
    options: [
      "double add_all(void* tab, size_t el_size, size_t nb_el, double (*add_element)(void*, void*));",
      "void* add_all(void* tab, size_t el_size, size_t nb_el, void* (*add_element)(void*, void*));",
      "void* add_all(void* tab, void* (*add_element)(void*, void*));",
      "void* add_all(void* tab, size_t el_size, size_t nb_el);",
      "void* add_all(void* tab);",
      "double add_all(void* tab, size_t el_size, size_t nb_el, void* (*add_element)(void*, void*));",
      "int add_all(void* tab, size_t el_size, size_t nb_el, void* (*add_element)(void*, void*), void** result);",
      "void* add_all(void* tab, size_t el_size, void* (*add_element)(void*, void*));"
    ],
    answer: [1, 6],
    explanation: "The function needs: the array (<code>void*</code>), element size, element count, and a way to add two elements of unknown type (<code>void* (*add_element)(void*, void*)</code>). The result of unknown type can be returned as <code>void*</code> or passed by reference via <code>void** result</code> (with an int error code returned). Options 1 and 6 satisfy these constraints."
  },

  // Q10
  {
    question: "Assume that <code>x</code> is a <code>double</code> variable and that <code>f</code> is a pointer to a function taking a <code>double</code> and returning a <code>double</code>.<br>Tick all the possible calls to f.<br><b>Penalty for wrong ticks.</b>",
    type: "mcq",
    options: [
      "x = f(&x);",
      "x = *f(&x);",
      "x = f(x);",
      "x = (*f)(x);",
      "x = *f(*x);",
      "x = *f(x);",
      "x = f(*x);",
      "x = (*f)(&x);",
      "x = (*f)(*x);",
      "None of these calls is possible."
    ],
    answer: [2, 3],
    explanation: "<code>f</code> is a function pointer taking a double. Valid calls:<br>• <code>f(x)</code>: direct call via pointer ✓<br>• <code>(*f)(x)</code>: explicit dereference of function pointer ✓<br>Others are wrong: <code>f(&x)</code> passes a pointer but f takes a double ✗; <code>*f(x)</code> tries to dereference the double return value ✗"
  },

  // Q11
  {
    question: "Select all the <em>correct</em> statements about a <code>void*</code> variable.<br><b>Penalty for wrong ticks.</b>",
    type: "mcq",
    options: [
      "It can point only into the heap.",
      "It cannot exist in C (invalid C).",
      "It is always NULL.",
      "It can point only into the stack.",
      "It can point to any type.",
      "It does not require any explicit casting to be assigned to another pointer.",
      "It cannot be used.",
      "It does not point anywhere.",
      "It is useless."
    ],
    answer: [4, 5],
    explanation: "<code>void*</code> is a generic pointer in C:<br>• It can point to any memory location (stack, heap, globals) ✓<br>• In C (not C++), <code>void*</code> can be assigned to/from any pointer type without explicit cast ✓<br>All other statements are false."
  },

  // Q12
  {
    question: "What is the correct way to define a type <code>funct</code> to point to a function taking a pointer to an <code>int</code> and returning a pointer to an <code>int</code>?",
    type: "scq",
    options: [
      "typedef *int funct*(int*);",
      "typedef int*(*funct)(int*);",
      "None of the others",
      "typedef (int*) *funct(int*);",
      "typedef int* *funct(int*);",
      "typedef *int (*funct)(int*);",
      "typedef int* funct*(int*);",
      "typedef *int (*funct)(*int);"
    ],
    answer: 1,
    explanation: "The pattern for a function pointer typedef is: <code>typedef &lt;return_type&gt; (*&lt;name&gt;)(&lt;params&gt;)</code>.<br>Here: return type = <code>int*</code>, name = <code>funct</code>, param = <code>int*</code> → <b><code>typedef int*(*funct)(int*);</code></b>"
  },

  // Q13
  {
    question: `Given <code>char* msg = "Great";</code>, tick each of the following statements which are <u>incorrect</u> (considered separately).<br><b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      'char msg2[8] = ""; strcpy(msg2, msg);',
      "char msg2[20] = msg;",
      "char* msg2 = malloc(msg.size());",
      "char* msg2 = msg + '!'; // append",
      'char* msg2 = strncat(msg, " day!", 5);',
      "char* msg2 = malloc(msg.length());",
      "const char* msg2 = msg;"
    ],
    answer: [1, 2, 3, 4, 5],
    explanation: "Incorrect statements:<br>• <code>char msg2[20] = msg</code>: cannot initialize array with pointer ✗<br>• <code>malloc(msg.size())</code>: msg is a C pointer, not a C++ object — no .size() method ✗<br>• <code>msg + '!'</code>: adds the ASCII value of '!' (33) to the pointer — not an append ✗<br>• <code>strncat(msg, ...)</code>: msg points to a string literal (read-only memory) — undefined behavior ✗<br>• <code>malloc(msg.length())</code>: same issue, no .length() in C ✗<br>Correct: <code>char msg2[8] = \"\"; strcpy(msg2, msg)</code> ✓ and <code>const char* msg2 = msg</code> ✓"
  },

  // Q14
  {
    question: `What does the following code print?<br>
<pre>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

void f(char* string)
{
  const size_t len = strlen(string);
  if (len >= 2) string[1] = 'e';
  if (len >= 6) string[5] = '\\0';
  puts(string);
}

int main(void)
{
  f("Hallo world!");
  return 0;
}</pre>`,
    type: "scq",
    options: [
      "Hallo world!",
      "Hello",
      "Nothing (but an error message) because the code does not run properly (e.g. Segmentation Fault).",
      "eallo world!",
      "eallo",
      "Hello world!",
      "Hallo",
      "Hello world!",
      "eall0 world!",
      "Something else than the other proposals.",
      "Hallo0world!",
      "Nothing because the code does not compile."
    ],
    answer: 2,
    explanation: "<code>\"Hallo world!\"</code> is a <b>string literal</b> stored in read-only memory. Attempting to modify it (<code>string[1] = 'e'</code>) causes a <b>Segmentation Fault</b> at runtime."
  },

    // Quiz 4 on moodle
  // Q8
  {
    question: `Considering <code>double** tab;</code> and provided that enough memory has been allocated for 4 lines and 4 columns, each of the same length (4), then <code>tab[2][0]</code> always comes in memory right after <code>tab[1][3]</code>.`,
    type: "scq",
    options: [
      "True.",
      "False, it's tab[1][4] which comes in memory right after tab[1][3].",
      "False in general (it can be, but this is not ensured).",
      "The question does not make sense since tab[1][3] is not valid syntax.",
      "False, it's tab[2][3] which comes in memory right after tab[1][3]."
    ],
    answer: 2,
    explanation: "<code>double**</code> is a pointer to pointers — each row is separately allocated in memory. Unlike a 2D array (<code>double tab[4][4]</code>), the rows are <b>not guaranteed to be contiguous</b> in memory. So <code>tab[2][0]</code> may or may not be right after <code>tab[1][3]</code>."
  },

  // Q9
  {
    question: `What does the following code <em>excerpt</em> print?<br>
<pre>int matrix[] = { 1, 3, 5, 7, 9, 11 };

putchar('x');
int i = 123;
int* ptr = matrix + 1;
while ((i = *ptr++) &lt; 9) { printf("%d", i); }</pre>`,
    type: "scq",
    options: [
      "x7",
      "Nothing because it does not compile.",
      "x13579",
      "x357",
      "x1357",
      "Something else than the other proposals.",
      "x3579",
      "x57",
      "x123",
      "x"
    ],
    answer: 3,
    explanation: "<code>ptr = matrix + 1</code> → points to matrix[1] = 3.<br>Loop: <code>i = *ptr++</code> assigns then advances ptr.<br>• i=3 (ptr→5): 3 &lt; 9 → print \"3\"<br>• i=5 (ptr→7): 5 &lt; 9 → print \"5\"<br>• i=7 (ptr→9): 7 &lt; 9 → print \"7\"<br>• i=9 (ptr→11): 9 &lt; 9 is false → stop<br>Output: <b>x357</b>"
  },

    // Q10
    {
        question: `On a 64-bit architecture, what does the following code print?<br>
    <pre>const char* s = "123456";
    printf("%zu\\n", sizeof(s));</pre>
    <small>Note: <code>%zu</code> is the correct format to print <code>size_t</code> values.</small>`,
        type: "scq",
        options: [
        "5",
        "6",
        "7",
        "8",
        "Nothing, it does not compile.",
        "Some unknown value that cannot be determined from the provided informations.",
        "Another (known) value, different from the above proposed propositions."
        ],
        answer: 3,
        explanation: "<code>sizeof(s)</code> gives the size of the <b>pointer</b> <code>s</code>, not the string it points to. On a <b>64-bit architecture</b>, a pointer is <b>8 bytes</b>. (The string length is 6, and strlen would return 6, but sizeof on a pointer = 8.)"
    },
    // Quiz 6 on moodle
    // Q9
    {
    question: `You have a library function:<br>
<pre>void transform(const Object* obj, uint16_t** tab, size_t* size);</pre>
Its purpose is to allocate an array of <code>uint16_t</code> and to provide its size back.<br>
Assume you have a valid <code>Object o</code>.<br>
What is the <em>proper</em> way to declare <code>tab</code> and <code>size</code> and to call <code>transform()</code>?`,
    type: "scq",
    options: [
      "uint16_t tab[10] = {0};\nsize_t s = 10;\ntransform(&o, &tab, &s);",
      "size_t s = 3;\nuint16_t tab[s];\ntransform(&o, &tab, &s);",
      "uint16_t** tab = malloc(sizeof(uint16_t*));\nsize_t* s = malloc(sizeof(size_t));\ntransform(&o, tab, s);",
      "Something else (none of the others).",
      "uint16_t** tab;\nsize_t* s;\ntransform(&o, tab, s);",
      "uint16_t* tab = NULL;\nsize_t s;\ntransform(&o, &tab, &s);"
    ],
    answer: 5,
    explanation: "<code>transform</code> takes <code>uint16_t**</code> and <code>size_t*</code> — it will allocate the array and write the pointer and size back.<br>So we need: <code>uint16_t* tab</code> (so <code>&tab</code> is <code>uint16_t**</code>) and <code>size_t s</code> (so <code>&s</code> is <code>size_t*</code>).<br>Initializing <code>tab = NULL</code> is good practice before letting the function allocate it."
  },

  // Q10
  {
    question: `Assume you have a type <code>Car</code> with a field <code>price</code>.<br>
Which of the following functions can you pass (maybe with some casting) to <code>qsort()</code> to sort by <code>price</code> an array of <code>Car</code>?<br>
<b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "None of these functions (they are all wrong in one way or another).",
`int comp(const void* p1, const void* p2)
{
    if (p1->price < p2->price) return -1;
    if (p1->price > p2->price) return 1;
    return 0;
}`,
`int comp(const void* p1, const void* p2)
{
    const Car * const q1 = p1;
    const Car * const q2 = p2;
    if (q1->price < q2->price) return -1;
    if (q1->price > q2->price) return 1;
    return 0;
}`,
`int comp(const Car* p1, const Car* p2)
{
    if (p1->price < p2->price) return -1;
    if (p1->price > p2->price) return 1;
    return 0;
}`
    ],
    answer: [2, 3],
    explanation: "• Option 2 ✓: casts <code>void*</code> to <code>const Car*</code> before dereferencing — correct qsort comparator pattern<br>• Option 3 ✓: takes <code>const Car*</code> directly — can be passed to qsort with a cast to the comparator type<br>• Option 1 ✗: tries to dereference <code>void*</code> directly — invalid in C, void* has no fields"
  },

  // Q11
  {
    question: `Consider the following definitions:<br>
<pre>typedef unsigned char byte;

size_t size(byte tab[])
{ return sizeof(tab) / sizeof(tab[0]); }

void yes(int i)
{ if (i) puts("yes"); else puts("no"); }

byte tab1[] = { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8 };
byte tab2[] = { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9 };
byte tab3[] = { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 3 };
byte tab4[] = { 9, 8, 7, 6, 5, 4, 3, 2, 0 };

const size_t s2 = 11;
const size_t s4 =  9;</pre>
Which of the following statements below will print "yes"?<br>(You can consider the architecture to be 64 bits.)<br><b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "yes(!strcmp(tab1, tab1));",
      "yes(!strcmp(tab1, tab2));",
      "yes(!strcmp(tab1, tab3));",
      "yes(!strcmp(tab1, tab4));",
      "yes(!strncmp(tab1, tab2, s2));",
      "yes(!strncmp(tab1, tab3, s2));",
      "yes(!strncmp(tab1, tab4, s4));",
      "yes(!strncmp(tab1, tab2, size(tab2)));",
      "yes(!strncmp(tab1, tab3, size(tab3)));",
      "yes(!strncmp(tab1, tab4, size(tab4)));",
      "None of them, the code is incorrect."
    ],
    answer: [0, 1, 2, 4, 5, 7, 8, 9],
    explanation: "All arrays have a <code>0</code> byte acting as a null terminator.<br>• <b>strcmp</b> stops at the first 0: tab1, tab2, tab3 all have 0 at index 9 → first 9 bytes identical → equal ✓. tab4 has 0 at index 8, tab1[8]=1 → different ✗<br>• <b>strncmp(tab1, tab2, s2=11)</b>: both hit 0 at index 9 before n=11 → equal ✓<br>• <b>strncmp(tab1, tab3, s2=11)</b>: same, 0 at index 9 → equal ✓<br>• <b>strncmp(tab1, tab4, s4=9)</b>: tab4[8]=0, tab1[8]=1 → differ ✗<br>• <b>size(tab)</b> inside a function receives a pointer, so sizeof(tab)=8 (pointer size on 64-bit), size() returns 8 for all. strncmp with n=8 compares only first 8 bytes (indices 0–7) which are identical for all arrays ✓"
  },

  // Quiz Week 8 on moodle
  // Q13
  {
    question: `While building your program, you get the following error:<br>
<pre>geometry.c: In function 'surface':
geometry.c:5:10: warning: implicit declaration of function 'dot_product'</pre>
What should you consider doing <em>first</em> in order to get rid of that error?`,
    type: "scq",
    options: [
      "Nothing, it's just a warning.",
      "Add a definition of dot_product() in geometry.c",
      "Include vector.h in geometry.c",
      "Add vector.o to the linker command for test_geometry",
      "Add geometry.o to the linker command for test_geometry",
      "Something else than the other proposals.",
      "Add a prototype for dot_product() in geometry.h",
      "Add a prototype for dot_product() in geometry.c"
    ],
    answer: 2,
    explanation: "Include vector.h in geometry.c. This is a compiler warning — the compiler sees a call to dot_product() in geometry.c but has never seen its declaration. Including vector.h (which declares dot_product()) gives the compiler the prototype it needs."
  },

  // Q14
  {
    question: `While building your program, you get the following error:<br>
<pre>/usr/bin/ld: geometry.o: in function \`surface':
geometry.c:5:(.text+0x20): undefined reference to \`dot_product'</pre>
What should you consider doing <em>first</em> in order to get rid of that error?`,
    type: "scq",
    options: [
      "Include vector.h in geometry.c",
      "Something else than the other proposals.",
      "Add a prototype for dot_product() in geometry.h",
      "Add a definition of dot_product() in geometry.c",
      "Add a prototype for dot_product() in geometry.c",
      "Add a prototype for dot_product() in vector.h",
      "Add geometry.o to the linker command for test_geometry",
      "Add vector.o to the linker command for test_geometry"
    ],
    answer: 7,
    explanation: "Add vector.o to the linker command for test_geometry. This is a linker error — the object file geometry.o references dot_product but the linker can't find its compiled implementation. dot_product() is defined in vector.c, which compiles to vector.o. Adding vector.o to the linker command resolves the reference."
  },

  
  // Quiz 9 on moodle
  // Q8
  {
    question: `What are all the proper ways to initialize a variable <code>a</code> of the following type?<br>
<pre>struct some_type {
    size_t s;
    double tab[3];
};</pre>
<b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "None of the other.",
`struct some_type a;
a.s = 0;
a.tab = { 0.0, 0.0, 0.0 };`,
`struct some_type {
  size_t s = 0;
  double tab[3] = { 0.0 };
};`,
`struct some_type a;
a.s = 0;
const double init[] = { 0.0, 0.0, 0.0 };
a.tab = init;`,
      "struct some_type a = { 0, { 1.0 } };",
`struct some_type a;
memset(&a, 0, sizeof(a));`
    ],
    answer: [4, 5],
    explanation: "• <code>struct some_type a = { 0, { 1.0 } }</code>: valid aggregate initialization — s=0, tab={1.0, 0.0, 0.0} ✓<br>• <code>memset(&a, 0, sizeof(a))</code>: zeroes all bytes — valid for zero-initialization ✓<br>• <code>a.tab = { ... }</code>: cannot assign to array after declaration ✗<br>• <code>size_t s = 0</code> in struct definition: invalid in C (no default values in struct) ✗<br>• <code>a.tab = init</code>: cannot assign arrays ✗"
  },

  // Q9
  {
    question: "What is the proper way to augment the size (up to <code>newsize</code>) of an already allocated pointer <code>ptr</code>?<br><small>(tmp is a pointer of the same type as ptr)</small>",
    type: "scq",
    options: [
      "ptr = realloc(newsize);",
      "realloc(ptr, newsize);",
      "tmp = realloc(ptr, newsize);",
      "ptr = realloc(ptr, newsize);",
      "Something else than the other proposals.",
      "tmp = realloc(ptr, newsize); if (tmp != NULL) ptr = tmp;"
    ],
    answer: 5,
    explanation: "The correct pattern for safe realloc:<br><code>tmp = realloc(ptr, newsize); if (tmp != NULL) ptr = tmp;</code><br>• If <code>realloc</code> fails it returns NULL — using <code>ptr = realloc(ptr, newsize)</code> would overwrite ptr with NULL, losing the original allocation ✗<br>• Using a temporary pointer lets you check for failure before updating ptr ✓"
  },

  // Q10
  {
    question: "What is the <u>proper</u> way to read an array of <code>n</code> <code>double</code> from a binary file <code>myfile</code> into <code>double tab[MAX]</code> (where <code>n &lt;= MAX</code>)?<br><small>Assume <code>count</code> is already declared with the proper type.</small>",
    type: "scq",
    options: [
      "It's not possible in general since nb <= MAX; we must have nb < MAX instead.",
      "count = fread(tab, sizeof(double), n, myfile);",
      "another way than the other proposals",
`count = 0;
for (size_t i = 0; i < n; ++i) {
  count += fscanf(myfile, "%lf", tab + i);
}`,
`count = 0;
for (size_t i = 0; i < n; ++i) {
  count += fread(&tab[i], sizeof(double), 1, myfile);
}`,
      "count = fread(tab, sizeof(n * double), 1, myfile);",
      "count = fread(&tab[1], sizeof(double), n, myfile);",
      "count = fread(tab, n * sizeof(double), 1, myfile);"
    ],
    answer: 1,
    explanation: "<code>fread(tab, sizeof(double), n, myfile)</code> reads exactly <code>n</code> elements of <code>sizeof(double)</code> bytes each from the binary file into <code>tab</code>, and returns the number of elements successfully read ✓<br>• <code>fscanf</code> is for text files, not binary ✗<br>• <code>fread(tab, n*sizeof(double), 1, myfile)</code> returns 0 or 1 (number of blocks), not the number of doubles — can't detect partial reads ✗<br>• <code>&tab[1]</code> skips the first element ✗"
  },

  // Quiz 13 on moodle
  // Q7
  {
    question: `Consider the following C program:<br>
<pre>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

void f(int* q) {
    q = malloc(sizeof(int));
    *q = 45;
}

int main(void) {
    int i = 3;
    int* ptr = &i;
    f(ptr);
    printf("%d %d\\n", i, *ptr);
    return 0;
}</pre>
Tick all the correct statements.<br><b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "It does not compile.",
      "It prints \"3 3\".",
      "It prints \"3 45\".",
      "It prints \"45 45\".",
      "It makes a memory error (like \"Segmentation Fault\" or \"double free\", etc.).",
      "It has a memory leak.",
      "All the other statements are false."
    ],
    answer: [1, 5],
    explanation: "<code>f</code> receives <code>q</code> by value (a copy of <code>ptr</code>). Inside <code>f</code>, <code>q = malloc(...)</code> rebinds the local copy — the original <code>ptr</code> in <code>main</code> is unchanged and still points to <code>i</code>.<br>So <code>i=3</code> and <code>*ptr=3</code> → prints <b>\"3 3\"</b> ✓<br>The <code>malloc</code>'d memory is never freed → <b>memory leak</b> ✓"
  },

  // Q8
  {
    question: `Consider the following C program:<br>
<pre>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;math.h&gt;

double* f(double* q) {
    q = malloc(sizeof(double));
    *q = log(3.0); // 1.098612
    return q;
}

int main(void) {
    double x = 9.8;
    double* ptr1 = &x;
    double* ptr2 = f(ptr1);
    printf("%f\\n", *ptr2);
    free(ptr1);
    return 0;
}</pre>
Tick all the correct statements.<br><b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "It does not compile.",
      "It prints \"9.8\".",
      "It prints \"1.098612\".",
      "It prints something else than the above two proposals.",
      "It makes a memory error (like \"Segmentation Fault\" or \"double free\", etc.).",
      "It has a memory leak.",
      "All the other statements are false."
    ],
    answer: [2, 4, 5],
    explanation: "<code>f</code> ignores the passed pointer and allocates new heap memory, sets it to <code>log(3.0)≈1.098612</code>, returns it. <code>ptr2</code> gets this new pointer → <code>*ptr2 = 1.098612</code> → prints <b>\"1.098612\"</b> ✓<br><code>free(ptr1)</code>: <code>ptr1</code> points to <code>x</code>, a stack variable — freeing a stack address is <b>undefined behavior / memory error</b> ✓<br>The malloc'd memory returned in <code>ptr2</code> is never freed → <b>memory leak</b> ✓"
  },

  // Quiz 11 on moodle
  // Q16
  {
    question: `On a 64-bit architecture, with<br>
<pre>const char* s1 = "12345";
char tab1[] = "43210";</pre>
and<br>
<pre>void f(const char* s2, char tab2[]);</pre>
which of the following statements are true?<br>
Statements involving s1 and tab1 are (of course) considered in the scope of s1 and tab1;<br>
statements involving s2 and tab2 are considered in the body of f() and evaluated during the call f(s1, tab1).<br>
<b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "sizeof(s1) == strlen(s1)",
      "sizeof(tab1) == strlen(tab1)",
      "sizeof(s1) == sizeof(tab1)",
      "strlen(s1) == strlen(tab1)",
      "sizeof(s2) == strlen(s2)",
      "sizeof(tab2) == strlen(tab2)",
      "sizeof(s2) == sizeof(tab2)",
      "strlen(s2) == strlen(tab2)",
      "None of the others, some code does not compile or does not run properly."
    ],
    answer: [3, 6, 7],
    explanation: "• <code>sizeof(s1)</code>=8 (pointer on 64-bit), <code>strlen(s1)</code>=5 → not equal ✗<br>• <code>sizeof(tab1)</code>=6 (array includes '\\0'), <code>strlen(tab1)</code>=5 → not equal ✗<br>• <code>sizeof(s1)</code>=8 ≠ <code>sizeof(tab1)</code>=6 ✗<br>• <code>strlen(s1)</code>=5 == <code>strlen(tab1)</code>=5 ✓<br>• Inside f, s2 is a pointer: <code>sizeof(s2)</code>=8, <code>strlen(s2)</code>=5 → not equal ✗<br>• Inside f, tab2 decays to a pointer: <code>sizeof(tab2)</code>=8, <code>strlen(tab2)</code>=5 → not equal ✗<br>• <code>sizeof(s2)</code>=8 == <code>sizeof(tab2)</code>=8 (both pointers) ✓<br>• <code>strlen(s2)</code>=5 == <code>strlen(tab2)</code>=5 ✓"
  },

  // Q17
  {
    question: `Consider the following function:<br>
<pre>void incr(char** ptr)
{
  ++ptr;
}</pre>
and the following code <em>excerpt</em> (i.e a <em>part</em> of a code that is elsewhere correct),<br>
where you have to add two instructions, one for u and one for v:<br>
<pre>char msg[]   = "CS-202";
char* tab[]  = { msg + 1, msg + 3 };
char* p      = msg + sizeof(msg) - 1;

char** u = tab;
char** v = &p;

incr(u);

// add one statement on u

// add one statement on v

for (char* r = *u; r < *v; ++r) putchar(*r);</pre>
What should be added (one instruction for u and one instruction for v) so that the above code prints "20"?<br>
<b>Penalty for wrong ticks.</b>`,
    type: "mcq",
    options: [
      "None of the proposals, the proposed code cannot compile.",
      "None of the proposals, the proposed code will \"seg fault\" anyway.",
      "u = u; // do nothing for u",
      "++u;",
      "--u;",
      "u += 2;",
      "u -= 2;",
      "Something else has to be done on u.",
      "v = v; // do nothing on v",
      "--v;",
      "--(*v);",
      "v = *--v;",
      "*v--;",
      "incr(v);",
      "++(*v);",
      "*v++;",
      "Something else has to be done on v."
    ],
    answer: [3, 10],
    explanation: `msg = "CS-202": indices 0='C',1='S',2='-',3='2',4='0',5='2',6='\\0'<br>
tab = { msg+1, msg+3 } → tab[0]="S-202", tab[1]="202"<br>
p = msg+6 (points to '\\0')<br>
u=tab, v=&p. <code>incr(u)</code> increments a local copy of u — u is unchanged, still points to tab[0].<br>
<b>++u</b>: u now points to tab[1], so *u = msg+3 (='2') ✓<br>
<b>--(*v)</b>: *v is p; decrements p from msg+6 to msg+5 ✓<br>
Loop: r goes from msg+3 to msg+4 (r < msg+5): prints '2','0' → <b>"20"</b> ✓`
  },

);
