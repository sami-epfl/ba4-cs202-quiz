registerTopic("Moodle - Q11 - Files, CPU & OS",

  // Q1
  {
    question: "Which of the following statements are true?<br>Many may be true.",
    type: "mcq",
    options: [
      "A full pathname is unique within a computer system.",
      "The OS uses full pathnames to identify files.",
      "A full pathname is unique in the entire world.",
      "This is an example of a full pathname: /usr/bin/ls",
      "This is an example of a full pathname: /",
      "A full pathname identifies exactly one file (or one directory)."
    ],
    answer: [0, 3, 4, 5],
    explanation: "• A full pathname is <b>unique within a computer system</b> ✓<br>• <b>/usr/bin/ls</b> is a full pathname (starts from root) ✓<br>• <b>/</b> is the root — also a valid full pathname ✓<br>• A full pathname <b>identifies exactly one file or directory</b> ✓<br>• The OS uses <b>inode numbers</b>, not full pathnames, to identify files ✗<br>• Full pathnames are not globally unique (two computers can have /usr/bin/ls) ✗"
  },

  // Q2
  {
    question: "Which of the following statements are true?<br>Many may be true.",
    type: "mcq",
    options: [
      "A file descriptor is a number used by the OS to identify a file, and it is unique within a computer system.",
      "If a process closes a file descriptor, the file that the file descriptor was referring to gets deleted from storage.",
      "A process uses a file descriptor to refer to a file that it (the process) has opened.",
      "If a process has opened 10 files, it has at least 10 file descriptors in its file-descriptor table.",
      "A file's inode also stores the file's file descriptor."
    ],
    answer: [2, 3],
    explanation: "• A process uses a <b>file descriptor</b> to refer to a file it has opened ✓<br>• Opening 10 files means at least 10 entries in the file-descriptor table (plus stdin/stdout/stderr) ✓<br>• A file descriptor is local to a process, not unique system-wide ✗<br>• Closing a fd does not delete the file (only unlink does) ✗<br>• Inodes store metadata about the file, not file descriptors ✗"
  },

  // Q3
  {
    question: "Which of the following statements are true?<br>Many may be true.",
    type: "mcq",
    options: [
      "A file always contains a text, data, heap, and stack segment.",
      "A file always contains an executable program.",
      "A file is persistent.",
      "A file is an array of bytes.",
      "A file contains both data and metadata."
    ],
    answer: [2, 3, 4],
    explanation: "• A file is <b>persistent</b> — it survives process termination and reboots ✓<br>• A file is an <b>array of bytes</b> ✓<br>• A file contains both <b>data</b> (its content) and <b>metadata</b> (size, permissions, timestamps…) ✓<br>• Text/data/heap/stack segments belong to a <b>process</b>, not a file ✗<br>• A file can contain anything — not necessarily an executable ✗"
  },

  // Q4
  {
    question: "Which of the following statements are true?<br>Many may be true.",
    type: "mcq",
    options: [
      "A directory's inode points to data blocks that contain the directory's files.",
      "A directory has an inode and contents, like a regular file.",
      "A directory's inode contains a mapping from file names to inodes.",
      "A directory is a special type of file.",
      "A directory's contents contain a mapping from file names to inodes."
    ],
    answer: [1, 3, 4],
    explanation: "• A directory <b>has an inode and contents</b>, just like a regular file ✓<br>• A directory is a <b>special type of file</b> ✓<br>• A directory's <b>contents</b> (data blocks) contain the mapping from file names to inodes ✓<br>• The inode does not store this mapping — it stores metadata and block pointers ✗<br>• A directory's data blocks contain entries (name → inode), not the files themselves ✗"
  },

  // Q5
  {
    question: "If you open a file and add some data to it, which of the following information may be updated in the file's inode?",
    type: "mcq",
    options: [
      "The file size.",
      "The inode number.",
      "The permissions.",
      "The access time.",
      "The block pointers."
    ],
    answer: [0, 3, 4],
    explanation: "When data is added to a file:<br>• <b>File size</b> increases ✓<br>• <b>Access time</b> (and modification time) is updated ✓<br>• <b>Block pointers</b> may be updated if new disk blocks are allocated ✓<br>• The <b>inode number</b> never changes — it is permanent for the lifetime of the file ✗<br>• <b>Permissions</b> are not affected by writing data ✗"
  },

  // Q6
  {
    question: "Which of the following statements are true?<br>Many may be true.",
    type: "mcq",
    options: [
      "An inode contains metadata about a single file.",
      "An inode is a data structure that is stored on disk.",
      "An inode specifies where on disk a file's contents are stored.",
      "An inode contains \"block pointers,\" each pointing to a different file.",
      "An inode contains a file's pathname and content.",
      "An inode can be created or deleted, but an inode's contents can never change."
    ],
    answer: [0, 1, 2],
    explanation: "• An inode contains <b>metadata about a single file</b> (size, permissions, timestamps…) ✓<br>• An inode is a <b>data structure stored on disk</b> ✓<br>• An inode specifies <b>where on disk</b> the file's contents are (via block pointers) ✓<br>• Block pointers point to the <b>file's own data blocks</b>, not to other files ✗<br>• An inode does <b>not</b> contain the file's pathname (that's in the directory) ✗<br>• Inode contents change frequently (e.g. file size, timestamps) ✗"
  },

  // Q7
  {
    question: "Multi-level indexing in a file system is used to manage large files efficiently by breaking index structures into multiple levels.",
    type: "scq",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Multi-level indexing allows a file system to support large files: instead of one flat index of data blocks, a hierarchy of index blocks is used, so even very large files can be addressed with a small inode."
  },

  // Q8
  {
    question: "In a three-level indexing system, the first level contains pointers to the second-level index blocks, which in turn point directly to data blocks.",
    type: "scq",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    explanation: "In a <b>three-level</b> system: level 1 → level 2 index blocks → level 3 index blocks → data blocks. The second level does <b>not</b> point directly to data blocks — it points to a third level of index blocks. A two-level system would have level 1 → level 2 → data."
  },

  // Q9
  {
    question: "Which statement(s) is/are TRUE regarding the structure of two-level indexing?",
    type: "mcq",
    options: [
      "The file's data blocks reside in the first-level index.",
      "There is a first-level index that points to a second-level index.",
      "Two-level indexing is limited to only 1 KB file sizes.",
      "The second-level index typically holds pointers to the actual data blocks."
    ],
    answer: [1, 3],
    explanation: "In two-level indexing:<br>• The <b>first-level index</b> contains pointers to second-level index blocks ✓<br>• The <b>second-level index</b> holds pointers to the actual data blocks ✓<br>• Data blocks are not in the first-level index — only pointers are ✗<br>• Two-level indexing supports files far larger than 1 KB ✗"
  },

  // Q10
  {
    question: "Which of the following statements are true?<br>One or more may be true.",
    type: "scq",
    options: [
      "The term \"CPU privilege\" describes the overall quality of a CPU, e.g., its performance and overall capabilities.",
      "The CPU's current privilege level is stored inside the CPU itself.",
      "The CPU is split into two parts: one for executing privileged instructions and one for executing non-privileged instructions.",
      "The CPU's current privilege level is stored in main memory."
    ],
    answer: 1,
    explanation: "The CPU's current <b>privilege level</b> (e.g. ring 0 / ring 3 on x86) is stored in a <b>dedicated CPU register</b> — it is part of the CPU's internal state, not in main memory. \"CPU privilege\" refers to the execution mode (kernel vs user), not performance."
  },

  // Q11
  {
    question: "How does a computer system ensure that the CPU is shared safely and fairly?<br>Many answers may apply.",
    type: "mcq",
    options: [
      "A normal thread can be interrupted at any time, if the OS needs to take care of something else.",
      "Whenever a thread starts running, it sets a timer of a few milliseconds. As soon as the timer expires, the thread makes a syscall to give up the CPU to another thread.",
      "The CPU never executes directly an instruction read from a process's text segment. The CPU passes each such instruction to the kernel, which checks that the instruction is safe to execute.",
      "A normal thread always runs with low privilege, which means that it cannot do anything it wants.",
      "The OS scheduler runs regularly and decides which thread should run such that all threads share the CPU fairly."
    ],
    answer: [0, 3, 4],
    explanation: "• Normal threads <b>can be interrupted</b> at any time by the OS (preemption) ✓<br>• Normal threads run with <b>low privilege</b> — they cannot execute privileged instructions ✓<br>• The <b>OS scheduler</b> periodically runs and picks which thread to run next ✓<br>• The timer is set by the OS/hardware, not the thread itself — and it causes an interrupt, not a voluntary syscall ✗<br>• The CPU executes instructions directly; it does not route them through the kernel first ✗"
  },

  // Q12
  {
    question: "Which of the following statements are true?<br>One or more may be true.",
    type: "mcq",
    options: [
      "The OS runs on a special part of the CPU, which is reserved for executing OS instructions.",
      "The OS consists of code and data that are stored in main memory.",
      "The OS is just a normal thread (it can do no more things than a normal thread can do).",
      "The OS runs on the same CPU as the normal threads."
    ],
    answer: [1, 3],
    explanation: "• The OS is code and data <b>stored in main memory</b> like any other program ✓<br>• The OS runs on the <b>same physical CPU</b> as normal threads, but at a higher privilege level ✓<br>• There is no special reserved CPU part — it's the same CPU ✗<br>• The OS runs with <b>high privilege</b> and can do things normal threads cannot ✗"
  },

  // Q13
  {
    question: "Which of the following statements are true?<br>None, one or many may be true.",
    type: "scq",
    options: [
      "The main thread of any process always runs with high privilege.",
      "The OS always runs with high privilege.",
      "Consider a process that consists of many worker threads and a single manager thread. This process (and all its threads) were created in response to a user invoking a program. It is a reasonable assumption that the worker threads run with low privilege, whereas the manager thread runs with high privilege.",
      "The kernel always runs with high privilege."
    ],
    answer: 3,
    explanation: "The <b>kernel always runs with high privilege</b> (ring 0 on x86) ✓<br>• All threads of a user process — including the main thread and any manager thread — run with <b>low privilege</b> ✗<br>• The OS code runs with high privilege when invoked (e.g. via syscall), but between invocations no \"OS thread\" is running ✗"
  },

  // Q14
  {
    question: "What do syscalls, exceptions/traps, and interrupts have in common?<br>One or more may be true.",
    type: "mcq",
    options: [
      "They cause CPU privilege to be raised.",
      "They are all synchronous events, triggered by the CPU itself while executing an instruction of a normal thread.",
      "They cause the kernel to run.",
      "They are all asynchronous events, triggered by an entity that is external to the running thread.",
      "They cause the values of some CPU registers to be saved and restored (i.e., they cause a \"partial context switch\")."
    ],
    answer: [0, 2, 4],
    explanation: "All three mechanisms share:<br>• CPU <b>privilege is raised</b> so the kernel can run ✓<br>• The <b>kernel runs</b> to handle the event ✓<br>• Some CPU registers are <b>saved and restored</b> (partial context switch) ✓<br>• Syscalls and exceptions are <b>synchronous</b>; only interrupts are asynchronous ✗<br>• They are not all asynchronous ✗"
  },

  // Q15
  {
    question: "Which of the following statements are true?<br>One or more may be true.",
    type: "scq",
    options: [
      "Based on what we said in class, if a user invokes a program (e.g., by double-clicking on an icon), that triggers an interrupt.",
      "If the running thread tries to divide by 0, the CPU replaces the 0 with a reasonable value and continues running the thread.",
      "If the running thread makes a syscall, the CPU starts executing privileged instructions from the text segment of the thread's process.",
      "If the running thread tries to invoke a privileged instruction, the CPU raises privilege and executes the instruction."
    ],
    answer: 0,
    explanation: "• Invoking a program (e.g. double-clicking) causes the OS to be notified via an <b>interrupt</b> (from the I/O device / window system) ✓<br>• Dividing by 0 causes a <b>trap/exception</b> — the CPU does not fix the value ✗<br>• A syscall jumps to the <b>kernel's</b> text segment, not the thread's own text segment ✗<br>• A privileged instruction by a low-privilege thread causes a <b>trap</b> — the CPU does not raise privilege for it ✗"
  }

);
