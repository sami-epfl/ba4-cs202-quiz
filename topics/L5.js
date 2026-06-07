registerTopic("L5 - Network & File Syscalls",

  {
    type: "flashcard",
    question: "What is the client-server model?",
    answer: "A model where two processes communicate over a network:<br>• <b>Client:</b> a process that makes <b>requests</b>.<br>• <b>Server:</b> a process that gives <b>responses</b>."
  },

  {
    type: "flashcard",
    question: "Which syscall creates a new socket?",
    answer: "<b>socket()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall assigns a local address and port to a socket?",
    answer: "<b>bind()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall marks a socket as passive, ready to receive incoming connections (server side)?",
    answer: "<b>listen()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall accepts an incoming connection on a listening socket?",
    answer: "<b>accept()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall initiates a connection to a remote server (client side)?",
    answer: "<b>connect()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall sends data on a <b>connected</b> socket?",
    answer: "<b>send()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall sends data on a <b>connectionless</b> socket (e.g. UDP), specifying the destination each time?",
    answer: "<b>sendto()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall receives data on a <b>connected</b> socket?",
    answer: "<b>recv()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall receives data on a <b>connectionless</b> socket (e.g. UDP), also returning the sender's address?",
    answer: "<b>recvfrom()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall opens a file and returns a file descriptor?",
    answer: "<b>open()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall moves the cursor to a specific position within an open file?",
    answer: "<b>lseek()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall reads data from an open file descriptor?",
    answer: "<b>read()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall writes data to an open file descriptor?",
    answer: "<b>write()</b>"
  },

  {
    type: "flashcard",
    question: "Which syscall releases a file descriptor (file or socket)?",
    answer: "<b>close()</b>"
  },

  {
    type: "flashcard",
    question: "What is a socket?",
    answer: "An <b>abstraction</b> through which a process can send and receive <b>bytes</b> to/from remote processes.<br><br>Each socket is bound to a local <b>IP address</b> and <b>port number</b> (= a global process name)."
  },

  {
    type: "flashcard",
    question: "What is connection-oriented communication?",
    answer: "A communication model where:<br>• <b>Server</b> calls <b>listen</b> on a socket to await connection requests from clients.<br>• <b>Client</b> calls <b>connect</b> on a socket to connect to a specific server.<br>• <b>Server</b> calls <b>accept</b> on the listening socket to create a <b>new socket</b> connected to a specific client.<br>• Process calls <b>recv</b> on a connected socket to await bytes from that specific remote process.<br>• Process calls <b>send</b> on a connected socket to send bytes to that specific remote process."
  },

  {
    type: "flashcard",
    question: "What is a directory tree?",
    answer: "An <b>abstraction</b> through which a process can <b>identify a specific file or directory</b>.<br><br>• Each <b>intermediate node</b> is a directory; each <b>leaf</b> is a file (or an empty directory).<br>• Each node has a <b>pathname</b> that is unique within the directory tree."
  },

  {
    type: "flashcard",
    question: "What are the permissions associated with each node in a directory tree?",
    answer: "Each node has a <b>user ID</b> and a <b>group ID</b>.<br><br>Each node has <b>three sets of permissions</b>: for the <b>user</b>, the <b>group</b>, and <b>others</b>.<br><br>There are <b>three types</b> of permission: <b>read</b>, <b>write</b>, <b>execute</b>."
  },

  {
    type: "flashcard",
    question: "What is a file descriptor?",
    answer: "An <b>abstraction</b> through which a process can view a specific file as a <b>sequence of bytes</b> and read or update these bytes.<br><br>Has an associated <b>offset</b>: the byte position at which the next <b>read</b> or <b>write</b> will start."
  },

  {
    type: "flashcard",
    question: "How does a process access a file?",
    answer: "• Calls <b>open</b> to create a new <b>file descriptor</b> associated with a specific file.<br>• Calls <b>read</b> and <b>write</b> to read and update the file's bytes.<br>• Calls <b>lseek</b> to update the <b>offset</b> associated with the file descriptor."
  },

  {
    type: "flashcard",
    question: "What is a connected socket?",
    answer: "An <b>abstraction</b> through which a process can send and receive <b>bytes</b> to/from a <b>specific</b> remote process.<br><br>It is <b>ephemeral</b>: it lives only while the process wants to communicate with that specific remote process."
  },

  {
    type: "flashcard",
    question: "What is a listening socket?",
    answer: "An <b>abstraction</b> through which a <b>server</b> process listens for and can accept new <b>connection requests</b>.<br><br>It lives while the server process wants to accept new connection requests."
  },

  {
    type: "flashcard",
    question: "What is connectionless communication?",
    answer: "A communication model where:<br>• A process calls <b>recvfrom</b> on a socket to await bytes from remote processes.<br>• A process calls <b>sendto</b> on a socket to send bytes to a remote process.<br>• A process can use the <b>same socket</b> to communicate with <b>multiple remote processes</b>."
  },

  {
    type: "tf",
    question: "In connectionless communication, can one socket talk to multiple remote processes?",
    answer: true,
    explanation: "A process can use the same socket to send/receive bytes to/from multiple remote processes."
  },

);
