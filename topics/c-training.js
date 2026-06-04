registerTopic("C Training",

  // Quiz Week 8 on moodle
  // Q13
  {
    question: `While building your program, you get the following error:<br>
<pre>geometry.c: In function 'surface':
geometry.c:5:10: warning: implicit declaration of function 'dot_product'</pre>
What should you consider doing <em>first</em> in order to get rid of that error?`,
    type: "mcq",
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
    type: "mcq",
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
