registerTopic("L2 - Intro II",
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
  }

);
