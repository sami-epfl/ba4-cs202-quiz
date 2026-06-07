registerTopic("Moodle - Q06 - TCP & UDP",

  // Q1
  {
    question: "Alice's client process sends a TCP connection setup (SYN) segment to Bob's server process.<br>You are an attacker who can change something in Alice's TCP segment while it is traversing the network (including the checksum).<br>What must you change in order for Alice's TCP segment to reach <u>another process running on Bob's computer</u> (instead of the intended server process)?",
    type: "scq",
    options: [
      "The sequence number (SEQ) in the TCP header.",
      "Something in the application-layer header.",
      "The destination IP address in the IP header.",
      "The destination port number in the TCP header."
    ],
    answer: 3,
    explanation: "The IP address identifies the <b>computer</b> (Bob's machine). The <b>port number</b> identifies the <b>process</b> on that machine. To redirect to a different process on the same computer, only the destination port needs to change."
  },

  // Q2
  {
    question: "Suppose the Internet never corrupted packets (but it still occasionally dropped packets).<br>Which of the following TCP header fields would be unnecessary?<br>(Many answers may be true.)",
    type: "mcq",
    options: [
      "SYN.",
      "ACK number.",
      "Checksum.",
      "SEQ number."
    ],
    answer: [2],
    explanation: "The <b>checksum</b> exists only to detect corruption. If corruption never happens, it is unnecessary.<br>SYN, ACK, and SEQ are still needed to handle packet drops and reordering."
  },

  // Q3
  {
    question: "Suppose the Internet never lost or unpredictably delayed packets (but it still occasionally corrupted packets).<br>Which of the following TCP elements or header fields would be unnecessary?<br>(Many answers may be true.)",
    type: "mcq",
    options: [
      "ACK number.",
      "Timeout.",
      "Checksum.",
      "SEQ number."
    ],
    answer: [1],
    explanation: "The <b>timeout</b> mechanism exists to detect lost/delayed packets and trigger retransmission. If packets are never lost or unpredictably delayed, timeouts are unnecessary.<br>Checksum, ACK, and SEQ are still needed to handle corruption."
  },

  // Q4
  {
    question: "Process P1 is sending data to process P2 over an established TCP connection (Tahoe congestion control). P2 does not send back any application-layer data.<br>Is it possible that several TCP segments are lost, yet P1's transport layer does not experience any timeout?",
    type: "scq",
    options: [
      "It is possible because the lost TCP segments may be retransmitted by a packet switch between P1 and P2.",
      "It is possible if the lost TCP segments are segments going from P2 to P1 (that do not carry any application-layer data).",
      "It is not possible — in the congestion-control algorithm any packet loss always leads to a timeout."
    ],
    answer: 1,
    explanation: "P2 still sends <b>ACK segments</b> back to P1 (even with no app-layer data). If those ACK segments are lost, P1 does not receive them but also does not timeout — it will eventually receive a later cumulative ACK. Packet switches do not retransmit segments."
  },

  // Q5
  {
    question: "What is \"self clocking\" in the context of TCP congestion control?",
    type: "scq",
    options: [
      "A TCP sender infers on its own when the receiver can accept data at a higher or lower rate, based on the ACKs it receives.",
      "TCP periodically adjusts the clock of the local computer.",
      "A TCP sender infers on its own when to increase and when to decrease its congestion window, based on the ACKs it receives."
    ],
    answer: 2,
    explanation: "<b>Self clocking</b>: the TCP sender uses incoming ACKs as a signal to pace itself — each ACK triggers sending more data. The sender independently adjusts its congestion window (cwnd) up or down based on whether ACKs arrive smoothly or a loss is detected."
  },

  // Q6
  {
    question: "Which of the following statements related to flow control and congestion control are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "A TCP sender infers on its own how many unacknowledged bytes it can send without overwhelming the receiver, based on the ACKs that the receiver sends.",
      "The network explicitly tells a TCP sender how many unacknowledged bytes the sender can send over the network by setting a \"congestion window\" field inside the TCP header.",
      "A TCP sender infers on its own how many unacknowledged bytes it can send without causing network congestion, based on the ACKs it receives.",
      "A TCP receiver explicitly tells the sender how many unacknowledged bytes the sender can send to the receiver, by setting a \"receiver window\" field inside the TCP header."
    ],
    answer: [2, 3],
    explanation: "• <b>Congestion control</b>: the sender <b>infers</b> the congestion window (cwnd) on its own from ACK patterns — no explicit signal from the network ✓<br>• <b>Flow control</b>: the receiver <b>explicitly</b> advertises the receiver window (rwnd) in the TCP header ✓<br>• Option a is wrong: the sender does NOT infer the receiver window — the receiver explicitly sends it ✗<br>• Option b is wrong: there is no \"congestion window\" field in the TCP header ✗"
  },

  // Q7
  {
    question: "Process P1 is sending data to Process P2 over an established TCP connection.<br>P2's receiver window has value 10 MB. The RTT between P1 and P2 is 800 msec.<br>Which of the following statements are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "P2's sender window cannot be more than 10 MB.",
      "P1's sender window may be smaller than 10 MB.",
      "P1's sender window may be larger than 10 MB.",
      "The average throughput from P1 to P2 cannot be more than 100 Mbps."
    ],
    answer: [1, 3],
    explanation: "• <b>P1's sender window</b> = min(cwnd, rwnd) = min(congestion window, 10 MB). Due to congestion control, cwnd may be smaller → P1's sender window may be <b>smaller than 10 MB</b> ✓<br>• <b>Max throughput</b>: P1 can send at most 10 MB per RTT = 10 MB / 0.8 s = 100 Mbps ✓<br>• P2's sender window is independent of P1's receiver window ✗<br>• P1's sender window cannot exceed rwnd = 10 MB ✗"
  },

  // Q8
  {
    question: "Process P1 has a large file to send to process P2. The two processes may communicate over UDP or TCP.<br>Assume there is no packet corruption and no cross-traffic on the path between them.<br>Which of the following statements are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "To communicate over TCP, both processes need to make more syscalls.",
      "If they communicate over UDP, P2 will start receiving data from P1's process faster.",
      "If they communicate over UDP, the average throughput of their communication will be higher.",
      "Since there is no corruption and no network congestion, their communication pattern will be exactly the same whether they communicate over UDP or TCP."
    ],
    answer: [0, 1, 2],
    explanation: "• <b>More syscalls for TCP</b>: TCP requires connection setup (connect/accept) and teardown ✓<br>• <b>UDP starts faster</b>: UDP has no handshake — P1 can send data immediately ✓<br>• <b>Higher UDP throughput</b>: TCP's slow start limits initial rate; UDP sends at full rate immediately ✓<br>• <b>Not identical patterns</b>: TCP slow start, flow control, and connection overhead make the patterns different ✗"
  }

);
