registerTopic("Review",

  // --- Network devices & TCP ---

  {
    type: "flashcard",
    question: "Do network devices (packet switches) participate in TCP?",
    answer: "No. A packet switch <b>never(*) reads TCP headers</b>, <b>never sends an ACK</b>, and <b>never implements TCP congestion control</b>.<br><br>TCP is an <b>end-to-end</b> protocol — only the two communicating hosts (endpoints) participate. Packet switches only operate at the Network layer (IP) and below."
  },

  {
    type: "tf",
    question: "A packet switch reads TCP headers to forward packets.",
    answer: false,
    explanation: "Packet switches operate at the Network layer and below — they look at IP headers to make forwarding decisions. They never(*) read TCP headers, never send ACKs, and never implement TCP congestion control. TCP is strictly an end-to-end protocol."
  },

  {
    type: "mcq",
    question: "Which of the following does a packet switch do?",
    options: [
      "Read TCP headers and forward accordingly.",
      "Send ACKs to the sender to acknowledge received segments.",
      "Implement TCP congestion control on behalf of the endpoints.",
      "None of the above — packet switches never(*) participate in TCP."
    ],
    answer: 3,
    explanation: "Packet switches are network-layer devices. They only process IP headers (and below) to forward packets. TCP — including its headers, ACKs, and congestion control — is handled exclusively by the end hosts."
  },

  {
    type: "mcq",
    question: "Why don't packet switches participate in TCP?",
    options: [
      "Because they lack the memory to store TCP state.",
      "Because TCP is an end-to-end protocol — only the communicating hosts implement it.",
      "Because congestion control is handled by the application layer.",
      "Because packet switches only support UDP, not TCP."
    ],
    answer: 1,
    explanation: "TCP is designed as an end-to-end protocol: the two endpoints (client and server) maintain TCP state, exchange ACKs, and run congestion control. Intermediate packet switches operate at the IP layer and below — they have no role in TCP."
  },

  // --- TCP + delay computation ---

  {
    type: "flashcard",
    question: "What is the method for computing TCP transfer delay?",
    answer: "Break down the total duration into:<br><b>entire round-trips + transfer of the last batch of segments</b>.<br><br>You do <b>not</b> need to account for the transfer time of the other (non-last) batches — those transmissions are hidden inside the round-trip time, since the sender is waiting for ACKs anyway."
  },

  {
    type: "mcq",
    question: "How do you compute the total delay for a TCP transfer?",
    options: [
      "Sum the transmission time of every individual segment.",
      "Multiply the RTT by the total number of segments.",
      "Count the number of full round-trips plus the transmission time of the last batch of segments.",
      "Divide the object size by the link bandwidth."
    ],
    answer: 2,
    explanation: "TCP delay = (number of full round-trips × RTT) + transmission time of the last batch. The transfer times of intermediate batches are absorbed inside each round-trip — only the last batch's transmission time must be added separately."
  },

  {
    type: "tf",
    question: "When computing TCP transfer delay, you must add the transmission time of every batch of segments, not just the last one.",
    answer: false,
    explanation: "Only the last batch's transmission time needs to be added. For all previous batches, the sender is waiting for ACKs anyway — their transmission time is hidden inside the RTT and does not add to the total delay."
  },

  {
    type: "mcq",
    question: "Why don't we add the transmission time of intermediate segment batches when computing TCP delay?",
    options: [
      "Because intermediate segments are sent at infinite speed.",
      "Because the sender is already waiting for ACKs during those round-trips — the transmission time is hidden inside the RTT.",
      "Because TCP sends all segments simultaneously in one burst.",
      "Because intermediate batches are handled by the network layer, not TCP."
    ],
    answer: 1,
    explanation: "During each full round-trip, the sender transmits a batch and then waits for the ACK. The transmission time of that batch overlaps with the waiting period, so it is absorbed into the RTT. Only the final batch has transmission time that extends beyond the last ACK wait."
  },

  // --- MSS vs Sender Window ---

  {
    type: "flashcard",
    question: "What does the application layer do with data before it reaches the transport layer?",
    answer: "The application layer <b>pushes down data</b> to the transport layer."
  },

  {
    type: "flashcard",
    question: "How does the transport layer organize data received from the application layer?",
    answer: "It splits the data into <b>segments, each at most MSS</b> (Maximum Segment Size) bytes."
  },

  {
    type: "flashcard",
    question: "What is MSS (Maximum Segment Size)?",
    answer: "The maximum amount of data (in bytes) that the transport layer can place in a single TCP segment."
  },

  {
    type: "flashcard",
    question: "How much data can the transport layer send at once?",
    answer: "Up to <b>min{congestion window, receiver window}</b> bytes — the sender is limited by both flow control (receiver window) and congestion control (congestion window)."
  },

  {
    type: "mcq",
    question: "Which formula correctly describes the maximum amount of unacknowledged data the sender can have in flight?",
    options: [
      "max{congestion window, receiver window}",
      "min{congestion window, receiver window}",
      "congestion window + receiver window",
      "congestion window × MSS"
    ],
    answer: 1,
    explanation: "The sender can have at most min{congestion window, receiver window} bytes in flight — it must respect both the network's capacity (congestion window) and the receiver's buffer capacity (receiver window)."
  },

  {
    type: "mcq",
    question: "What is the difference between MSS and the sender window?",
    options: [
      "MSS is the maximum size of a single segment; the sender window is the maximum total unacknowledged bytes in flight.",
      "MSS is the total bytes the sender can send; the sender window limits each individual segment.",
      "They are the same — MSS and the sender window always have the same value.",
      "MSS is set by the receiver; the sender window is set by the network."
    ],
    answer: 0,
    explanation: "MSS limits the size of a single segment. The sender window (= min{congestion window, receiver window}) limits how many total bytes can be outstanding (sent but not yet acknowledged) at once."
  },

  // --- Segment count calculation ---

  {
    type: "flashcard",
    question: "MSS = 1000 bytes, sender window = 3 MB. The Proxy sends a 2 MB cached object to the Client. How many TCP segments does the Proxy send?",
    answer: "<b>2000 segments.</b><hr><b>Step 1 — Convert units:</b><pre>Object size  = 2 MB = 2 × 1,000,000 = 2,000,000 bytes\nMSS          = M   = 1,000 bytes\nSender window        = 3 MB = 3,000,000 bytes</pre><hr><b>Step 2 — Check the sender window:</b><br>The sender can have up to <b>min{congestion window, receiver window}</b> = <b>3 MB</b> of unacknowledged data in flight.<br>The object is only 2 MB &lt; 3 MB, so the entire object fits inside one window — the Proxy can send it all without waiting for ACKs.<hr><b>Step 3 — Count segments:</b><br>Each segment carries at most MSS = 1,000 bytes:<pre>Number of segments = Object size / MSS\n                   = 2,000,000 / 1,000\n                   = <b>2000 segments</b></pre>The sender window is <b>not</b> the bottleneck here — MSS alone determines the segment count."
  },

  {
    type: "mcq",
    question: "MSS = 1000 bytes. The Proxy's sender window = 3 MB. A client requests a 2 MB web object from the Proxy's cache. How many TCP segments does the Proxy send?",
    options: [
      "1000",
      "2000",
      "3000",
      "2048"
    ],
    answer: 1,
    explanation: "2 MB = 2,000,000 bytes. Each segment is at most MSS = 1000 bytes, giving 2,000,000 / 1,000 = 2000 segments. The sender window (3 MB > 2 MB) is not the bottleneck."
  },

  {
    type: "tf",
    question: "The transport layer can send as many segments as it wants as long as each one is at most MSS bytes.",
    answer: false,
    explanation: "Even if each segment respects MSS, the total amount of unacknowledged data in flight is bounded by min{congestion window, receiver window}. The sender cannot exceed this limit."
  },

  {
    type: "mcq",
    question: "Which two windows together determine how much data the transport layer can send at once?",
    options: [
      "Sliding window and receive window",
      "Congestion window and receiver window",
      "MSS window and sender window",
      "Slow-start window and fast-retransmit window"
    ],
    answer: 1,
    explanation: "The sender is constrained by both the <b>congestion window</b> (network capacity, set by congestion control) and the <b>receiver window</b> (receiver buffer space, advertised by the receiver). The effective limit is their minimum."
  }

);
