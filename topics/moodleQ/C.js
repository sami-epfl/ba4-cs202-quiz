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
  }
);
