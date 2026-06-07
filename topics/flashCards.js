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
    question: "What are the two types of interfaces in Internet layers?",
    answer: "• Same layer, cross-device: entities at the same layer on different devices communicate via a protocol — messages are embedded in the header.<br>• Cross-layer, same device: adjacent layers on the same device communicate through a well-defined interface."
  },
  

  // From L2
  {
    type: "flashcard",
    question: "What is an Operating System (OS)?",
    answer: "A special program that exists to enable other programs to run. It is loaded in memory soon after the computer boots.<br><br>The OS acts as an <b>intermediary</b> between processes and computer resources:<br>• Reacts to <b>notifications</b> from computer resources. (ex: Mouse/Keyboard)<br>• Reacts to <b>syscalls</b> = requests from processes to use computer resources. (ex: HDD/SSD)"
  },

  {
    type: "flashcard",
    question: "What is I/O and how is it structured?",
    answer: "I/O = process-device interaction. It goes through the OS, but in layers:<br>• <b>Process-storage:</b> File System (device-agnostic) + device driver (device-specific).<br>• <b>Process-network:</b> network subsystem + device driver (device-specific).<br><br>The OS interacts with the <b>device controller</b>, sets up data transfer between the device and main memory. Data transfer proceeds <b>independently from the CPU</b>."
  },

  {
    type: "flashcard",
    question: "How is the Internet core structured?",
    answer: "• ISPs form a loose <b>hierarchy</b>.<br>• Two directly connected ISPs have a <b>customer-provider</b> or <b>peering</b> relationship.<br>• Direct connections between ISPs happen at <b>Internet eXchange Points (IXPs)</b>."
  },

  {
    type: "flashcard",
    question: "What is happening to the Internet core with large content providers?",
    answer: "Some content providers (e.g. Google, Meta) have created a large network infrastructure, peer with ISPs, and are starting to offer ISP services — <b>blurring the line between ISP and content provider</b>."
  },

);
