registerTopic("Moodle - Q04 Sockets, Files & Syscalls",

  // Q1
  {
    question: "Which of the following statements about sockets are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "A socket is an abstraction through which a process can communicate with one or more remote processes.",
      "From the point of view of a process, a socket is an integer returned by a successful \"socket\" syscall.",
      "A socket is a message that a process sends to a remote process in order to initiate communication with it.",
      "A socket is a piece of software or hardware that generates packets.",
      "A socket is a CPU instruction that enables a process to communicate with one or more remote processes."
    ],
    answer: [0, 1],
    explanation: "• A socket is an <b>abstraction</b> for process communication ✓<br>• From a process's perspective, a socket is an <b>integer</b> (file descriptor) returned by the <code>socket()</code> syscall ✓<br>• A socket is not a message, not hardware, and not a CPU instruction ✗"
  },

  // Q2
  {
    question: "Process A wants to communicate with Process B. The two processes run on different computers. Which of the following statements are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "Process A makes a \"bind\" syscall to associate its local socket with a local IP address and port number.",
      "Process A makes a \"socket\" syscall to create a new socket in the computer hosting Process A *and* a new socket in the computer hosting Process B.",
      "Process B makes a \"recvfrom\" syscall to indicate that it is ready to receive data from remote processes.",
      "Process B makes a \"recvfrom\" syscall to notify Process A that A should now send data to B.",
      "Process A makes a \"socket\" syscall to create a new socket in the computer hosting Process A.",
      "Process A makes a \"bind\" syscall to associate its local socket to the IP address and port number of Process B."
    ],
    answer: [0, 2, 4],
    explanation: "• <code>socket()</code> creates a socket <b>only on the local machine</b> (Process A's computer) ✓<br>• <code>bind()</code> associates the socket with a <b>local</b> IP address and port ✓<br>• <code>recvfrom()</code> on Process B indicates it is ready to <b>receive</b> data ✓<br>• <code>socket()</code> does not create sockets on remote machines ✗<br>• <code>bind()</code> binds to a local address, not the remote process's address ✗"
  },

  // Q3
  {
    question: "What is the minimum number of sockets that a server process needs in order to communicate with (many) remote processes?",
    type: "scq",
    options: [
      "One socket.",
      "Two sockets: a listening socket and a connection socket.",
      "Two sockets: one to receive and one to send data."
    ],
    answer: 0,
    explanation: "In <b>connectionless</b> (UDP) communication, a server can use a <b>single socket</b> to communicate with many remote processes — using <code>recvfrom</code> and <code>sendto</code> with different addresses."
  },

  // Q4
  {
    question: `The following is part of the output of invoking "ls -l" from the "/" directory:<br>
<code>drwxr-x--x root wheel 1248 Feb 1 07:03 bin</code><br><br>
User "mahdi" belongs to the group "wheel".<br>
User "katerina" does not belong to the group "wheel".<br><br>
Which of the following statements are true?<br>(Many may be true.)`,
    type: "mcq",
    options: [
      "A process with user ID \"mahdi\" can delete a file that's inside \"/bin\".",
      "\"/bin\" is a directory.",
      "A process with user ID \"root\" can read and update the contents of \"/bin\".",
      "A process with user ID \"katerina\" can cd (change directory) into \"/bin\".",
      "A process with user ID \"katerina\" can cd (change directory) into \"/bin\" and do \"ls\" to view the contents of \"/bin\"."
    ],
    answer: [1, 2, 3],
    explanation: "Permissions: <code>drwxr-x--x</code> → owner=rwx, group=r-x, others=--x<br>• <b>/bin is a directory</b> (starts with 'd') ✓<br>• <b>root</b> (owner) has rwx → can read and update ✓<br>• <b>katerina</b> (others) has --x → execute on a directory means <b>can cd into it</b> ✓, but cannot list (no 'r') ✗<br>• <b>mahdi</b> (group) has r-x → no write permission → cannot delete files inside ✗<br>• katerina cannot do 'ls' (requires 'r' permission) ✗"
  },

  // Q5
  {
    question: "Which of the following statements about file descriptors are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "A file descriptor is an abstraction that enables a process to view a file as a sequence of bytes and read and/or update these bytes.",
      "If two different processes open the same file at the same time, this means that they are accessing the same file descriptor.",
      "If there are 1000 files stored on your computer's disk, there exist at least 1000 file descriptors in your computer — one per file.",
      "If a process has opened 10 different files (and has not closed or deleted any of them), then it must have created at least 10 file descriptors.",
      "A file descriptor enables a process to see where exactly each byte of a file is stored on disk.",
      "Each file descriptor belongs to one process."
    ],
    answer: [0, 3, 5],
    explanation: "• A file descriptor is an <b>abstraction</b> presenting a file as a sequence of bytes ✓<br>• Each process that opens a file gets its <b>own separate</b> file descriptor ✓<br>• 10 open files → at least 10 file descriptors ✓<br>• Each file descriptor belongs to <b>one process</b> ✓<br>• File descriptors do not exist independently of processes — they're created on <code>open()</code> ✗<br>• File descriptors are abstractions — they hide the physical disk layout ✗"
  },

  // Q6
  {
    question: `A friend says: "The 'lseek' syscall is very dangerous! Suppose file A consists of 100 bytes. A process opens file A, accidentally makes an 'lseek' syscall moving the offset by 200 bytes (past the end of file A!). Then it makes a 'write' syscall and updates a few bytes. As a result, the process ends up updating file B (which happens to be stored next to file A on disk)!"<br><br>Which of the following statements are true?`,
    type: "scq",
    options: [
      "This may or may not be a valid concern, depending on the permissions of file B.",
      "This is a valid concern! If a process sets the offset past the end of file A, the offset may end up pointing to file B.",
      "This is not a valid concern. The file descriptor (and the associated offset) is only an abstraction. The offset is not related to the file's actual location on disk."
    ],
    answer: 2,
    explanation: "The file descriptor offset is an <b>abstraction</b> — it represents a byte position <b>within the file</b>, not an absolute disk address. Writing past the end of a file extends that file (with zero-filled gaps), it never overwrites another file. The OS manages physical disk layout transparently."
  },

  // Q7
  {
    question: `Consider the following sequence of events:<br>
<ul>
<li>Process A opens file F.</li>
<li>Process B deletes file F.</li>
<li>Process A updates file F.</li>
<li>Process A closes file F.</li>
<li>Process A tries to open file F again.</li>
</ul>
Based on the lecture slides, which of the following is true about Process A's last action?`,
    type: "scq",
    options: [
      "Process A successfully opens file F.",
      "Process A fails to open file F, because the file has been deleted.",
      "Any of the above may happen, depending on how soon Process A tries to open the file again."
    ],
    answer: 1,
    explanation: "The OS keeps a <b>reference count</b> of open file descriptors. When B deletes F while A still has it open (count > 0), the OS does not actually remove the file from storage — A can still use it. When A closes F, the count reaches 0 and the OS <b>actually deletes</b> the file. So when A tries to open F again, it <b>fails</b> — the file no longer exists on disk."
  }

);
