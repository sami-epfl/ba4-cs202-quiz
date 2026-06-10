registerTopic("Study Guide - Review file systems lecture",

  {
    type: "flashcard",
    question: "What is persistence in computer science?",
    answer: "Characteristics of <b>state that outlives the process that created it</b>.<br><br>Without persistence, state would only exist in <b>DRAM</b> and would be lost when the RAM loses power (e.g. during a computer shutdown)."
  },

  {
    type: "flashcard",
    question: "What happens to state stored in DRAM when a process terminates?",
    answer: "It is <b>lost</b> — DRAM is volatile, so any state that is not persisted to storage disappears when the process ends or the machine loses power."
  },

  {
    type: "flashcard",
    question: "What is the purpose of a file system?",
    answer: "Given persistent blocks (e.g. blocks in a disk), a file system gives users four key capabilities:<br>• <b>Name</b> — human-readable identification (e.g. report.pdf)<br>• <b>Organize</b> — logical hierarchy and structure via folders<br>• <b>Share</b> — collaborative access to data<br>• <b>Protect</b> — security and integrity controls<br><br>Built on two fundamental building blocks: <b>files</b> (e.g. report.pdf, photo.jpg) and <b>directories</b> (e.g. /home/user/documents)."
  },

  {
    type: "flashcard",
    question: "What is a file?",
    answer: "A <b>named array of bytes</b> that persists across reboots.<br><br>Files are <b>untyped</b>: the OS doesn't interpret the contents — bytes are bytes.<br><br>A file has:<br>• <b>Data</b> — the raw bytes<br>• <b>Metadata</b> — number, size, owner, permissions, access/modified time"
  },

  {
    type: "flashcard",
    question: "What is an inode?",
    answer: "A <b>fixed-size on-disk record</b> holding a file's <b>metadata</b> and <b>pointers to its data blocks</b>.<br><br>There is <b>one inode per file</b> — created on file creation, recycled on deletion.<br><br>An inode contains the <b>file's metadata</b> (number, size, owner, permissions, access/modified time) <b>+ pointers to its data blocks</b>."
  },

  {
    type: "flashcard",
    question: "What is an inode table and how does it work?",
    answer: "Inodes live in a <b>fixed array on disk</b> (the inode table): inode N is at a known offset — similar to a <b>linear page table</b> (fixed lookup, indexed by offset).<br><br>A file's inode number is <b>assigned once and remains fixed</b> for the lifetime of the file."
  },

  {
    type: "flashcard",
    question: "Does an inode store the file name?",
    answer: "<b>No</b> — the inode does <b>NOT</b> store the file name. File names are stored in <b>directories</b>."
  },

  {
    type: "flashcard",
    question: "What is a directory?",
    answer: "A <b>special file</b> stored as a regular file, but:<br>• Marked with a <b>special flag</b> to distinguish it from regular files.<br>• The flag restricts the API (e.g., processes <b>cannot write</b> directly to a directory).<br><br>A directory contains an array of <b>{ filename, inode }</b> pairs."
  },

  {
    type: "flashcard",
    question: "How does path resolution work in a file system?",
    answer: "Directories are <b>special files</b> whose entries map <b>names to inodes</b>.<br><br>These entries can point to <b>files or other directories</b>.<br><br>To resolve a path, the OS follows entries <b>step-by-step</b>, opening each directory along the way until it reaches the final file or directory."
  },

  {
    type: "flashcard",
    question: "Why do we need file descriptors?",
    answer: "<b>Problem:</b> Without file descriptors, every <code>read()</code> call requires a full path walk.<br><br>Example: reading <code>/tmp/test.txt</code> requires 5 disk reads per <code>read()</code> call:<br>root inode → root data → tmp inode → tmp data → test.txt inode<br><br>Reading a <b>1 GB file in 4 KB blocks = 250,000 read() calls</b>.<br>If the path walk is redone each time: <b>250,000 × 5 = 1.25 million disk reads</b>.<br><br><b>Idea:</b> Do the path walk <b>once</b> at <code>open()</code> and cache the result in a per-process <b>file descriptor table</b>."
  },

  {
    type: "flashcard",
    question: "When you move a file from one directory to another, what happens?",
    answer: "The <b>inode does not change</b> — same inode number, same metadata, same data blocks.<br><br>Only the <b>directory entries are updated</b>:<br>• The <b>{ filename, inode } pair is removed</b> from the source directory<br>• The <b>{ filename, inode } pair is added</b> to the destination directory<br><br>It is a <b>metadata-only operation</b> — no data is copied (assuming the same filesystem). This is why <code>mv</code> is much faster than <code>cp</code> + <code>rm</code>."
  },

  {
    type: "flashcard",
    question: "What is a file descriptor table and how does it work?",
    answer: "Each process has its <b>own file descriptor (fd) table</b>.<br><br>The first three entries are fixed:<br>• <b>0</b> → STDIN (standard input)<br>• <b>1</b> → STDOUT (standard output)<br>• <b>2</b> → STDERR (standard error)<br><br>Each entry stores: <b>offset</b>, <b>inode</b>, and <b>device</b>.<br><br>Example: <code>open(\"/bin/ls\")</code> returns <b>fd = 3</b> (first available slot).<br>After <code>read(fd1, buf, 23)</code>, the <b>offset is updated from 0 to 23</b>."
  },

  {
    type: "flashcard",
    question: "What happens when you open the same file twice in the same process?",
    answer: "Each <code>open()</code> call creates a <b>new, independent entry</b> in the fd table — even for the same file.<br><br>Example:<br><code>int fd1 = open(\"/bin/ls\");</code> → returns <b>3</b>, offset = 0<br><code>read(fd1, buf, 23);</code> → fd1 offset updated to <b>23</b><br><code>int fd2 = open(\"/bin/ls\");</code> → returns <b>4</b>, offset = <b>0</b><br><br>Both fd1 and fd2 point to the <b>same inode and device</b>, but have <b>independent offsets</b>."
  },

  {
    type: "flashcard",
    question: "What is mounting a file system?",
    answer: "Mounting integrates a storage device into the existing directory tree, <b>without moving its contents</b>.<br><br>Example: when you plug in an external drive, it appears as <b>D:</b> — the OS has <b>mounted</b> that drive into the file system tree."
  },


  {
    type: "flashcard",
    question: "What is the layout of a file system on disk?",
    answer: "A disk is divided into one or more <b>partitions</b>.<br><br><b>Sector 0</b> of the disk contains the <b>Master Boot Record (MBR)</b>, which holds:<br>• <b>Bootstrap code</b> — loaded and executed by the firmware<br>• <b>Partition table</b> — addresses of where each partition starts and ends<br><br>The <b>first block of each partition</b> contains a <b>boot block</b>, loaded by the MBR and executed on boot.<br><br>Each partition is then laid out as:<br><b>Boot block</b> → <b>Superblock</b> → <b>Free lists (inode & data bitmaps)</b> → <b>Inodes</b> → <b>Data blocks</b>"
  },


  {
    type: "flashcard",
    question: "Are file descriptors shared between processes?",
    answer: "<b>No</b> — each process has its <b>own file descriptor table</b>.<br><br>File descriptors are <b>local to each process</b>: fd 3 in process A and fd 3 in process B are completely independent.<br><br>However, multiple distinct file descriptors — even across different processes — can <b>reference the same underlying file</b> (same inode), each with their own independent offset."
  },


  {
    type: "tf",
    question: "Inodes store metadata related to files.",
    answer: true,
    explanation: "Inodes store <b>permission bits, data block indices, access/modification times, size</b>, and other attributes."
  },

  {
    type: "tf",
    question: "An inode stores the name of the file it is related to.",
    answer: false,
    explanation: "File names are stored in <b>directory entries</b>, within the data blocks of their parent directories — <b>not</b> in the inode."
  },

  {
    type: "tf",
    question: "A process can insert entries directly into a directory inode using a write() syscall.",
    answer: false,
    explanation: "File creation must use <code>creat()</code> or <code>open()</code> with the <b>O_CREAT</b> flag. You can open a directory with <code>dirfd = open(..., O_DIRECTORY, ...)</code> and create a file using <code>openat(dirfd, ..., O_CREAT, ...)</code>, but <b>not</b> with <code>write()</code>."
  },

  {
    type: "flashcard",
    question: "How can you redirect STDOUT to a file in C (Method 1: close/open)?",
    answer: "<b>Key idea:</b> <code>printf</code> writes to fd 1 (STDOUT) — not directly to the terminal. If we change what fd 1 points to before <code>printf</code> runs, the output goes there instead.<br><br><b>Method 1 — close/open:</b><br>1. <code>close(1)</code> — detaches fd 1 from the terminal; slot 1 in the fd table is now free.<br>2. <code>open(\"hello.txt\", O_CREAT | O_RDWR | O_TRUNC, S_IRWXU)</code> — <code>open</code> always assigns the <b>lowest available fd</b>; since 1 is free, it gets reused for hello.txt.<br>3. <code>printf</code> now writes to fd 1, which means hello.txt.<br><br><pre>close(1);\nopen(\"hello.txt\", O_CREAT | O_RDWR | O_TRUNC, S_IRWXU);</pre>"
  },

  {
    type: "flashcard",
    question: "How can you redirect STDOUT to a file in C (Method 2: dup2)?",
    answer: "<b>Method 2 — dup2 (more idiomatic):</b><br><code>dup2(fd, 1)</code> does the rewiring directly: it makes fd 1 refer to the same file as <code>fd</code>. It's atomic and doesn't rely on the 'lowest free fd' trick.<br><br>Step by step:<br>1. Open the file normally → get some fd (e.g. 3).<br>2. <code>dup2(fd, 1)</code> — points fd 1 to the same file (if fd 1 was open, it's closed first automatically).<br>3. <code>close(fd)</code> — drops the now redundant handle.<br><br><pre>int fd = open(\"hello.txt\", O_CREAT | O_WRONLY | O_TRUNC, S_IRWXU);\ndup2(fd, 1);\nclose(fd);</pre>"
  },

);
