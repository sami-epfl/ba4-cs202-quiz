// ============================================================
//  FlashCards — CS202 Computer Networks key concepts
// ============================================================

registerTopic("FlashCards",
  // From L1
  {
    type: "flashcard",
    question: "What is an end-system ?",
    answer: "A computer connected to the Internet."
  },

  {
    type: "flashcard",
    question: "What is a Packet switch?",
    answer: "A device that helps interconnect end-systems."
  },

  {
    type: "flashcard",
    question: "What is a Network link?",
    answer: "A physical medium that connects two devices."
  },

  {
    type: "flashcard",
    question: "What is the difference between a program and a process?",
    answer: "A program is a static entity stored as one or more files on disk. A process is the dynamic instance created in main memory when that program is invoked."
  },

  {
    type: "flashcard",
    question: "What is a thread, and what is its relationship to a process?",
    answer: "A thread is the unit of execution within a process. A process consists of one or more threads, all sharing the same memory space but running independently."
  },

  {
    type: "flashcard",
    question: "What is a distributed application?",
    answer: "A distributed application is made of different processes, running on potentially different computers, all working toward a common goal. Example: a web browser (on your laptop) and a web server (in a data center) are two separate processes on different machines, cooperating to display a webpage."
  },

  {
    type: "flashcard",
    question: "What is a communication protocol?",
    answer: "A communication protocol is:<br>• A specification of all possible message sequences that may be exchanged between the communicating parties.<br>• The interface between the communicating parties.<br>• An abstraction of one party presented to the other."
  },

  {
    type: "flashcard",
    question: "What are system calls (syscalls)?",
    answer: "System calls are:<br>• Special calls that a process makes to access computer resources like storage and network.<br>• The interface between processes and computer resources.<br>• An abstraction of computer resources presented to processes."
  },

  {
    type: "flashcard",
    question: "What is an interface?",
    answer: "An agreement between two parties about how they will interact."
  },

  {
    type: "flashcard",
    question: "What is a layer in a networked system?",
    answer: "A layer is a collection of entities that conceptually play the same role. Each entity communicates with the layer below/above through a well-defined interface."
  },

  {
    type: "flashcard",
    question: "Why do we use interfaces & layers?",
    answer: "• They provide abstraction, which enables separation of concerns.<br>• They improve simplicity and flexibility.<br>• In principle, they do NOT improve performance."
  },

  {
    type: "flashcard",
    question: "What are the Internet layers, and which devices implement them?",
    answer: "The 5 Internet layers (top to bottom): Application, Transport, Network, Link, Physical.<br>• Computers implement all 5 layers.<br>• Packet switches implement only the lowest 2 or 3.<br>• Each layer can understand and should interpret only its own header."
  },

  {
    type: "flashcard",
    question: "What is the Application layer?",
    answer: "The application layer is the layer closest to the user. It provides network services directly to user applications and defines how applications communicate over the network.<br><br>Example — when you type <code>www.google.com</code> in your browser:<br>1. The browser process uses the DNS protocol to obtain the IP address corresponding to <code>www.google.com</code>.<br>2. The DNS reply returns the IP address to the browser process.<br>3. The browser process creates an HTTP request: <pre>GET / HTTP/1.1\nHost: www.google.com</pre>4. The browser process calls <code>send(...)</code> to send this HTTP message.<br>5. The operating system and the lower network layers prepare the message for transmission and send it across the Internet.<br><br>Both DNS and HTTP are application-layer protocols."
  },

  {
    type: "flashcard",
    question: "What is the Transport layer?",
    answer: "The transport layer ensures reliable or best-effort data delivery between systems. It segments data into smaller units, handles flow control, and manages error checking. Protocols like TCP ensure data arrives intact and in order, while UDP provides faster, connectionless delivery."
  },

  {
    type: "flashcard",
    question: "What are the two types of interfaces in Internet layers?",
    answer: "• Same layer, cross-device: entities at the same layer on different devices communicate via a protocol — messages are embedded in the header.<br>• Cross-layer, same device: adjacent layers on the same device communicate through a well-defined interface."
  },
  
);
