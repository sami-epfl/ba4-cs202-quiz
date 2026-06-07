registerTopic("Network layer & IP",

  // Quiz Week 8 on moodle
  // Q1
  {
    question: "Based on what we said in class, which of the following statements about circuit-switched and packet-switched networks are true? (Many may be true.)",
    type: "mcq",
    options: [
      "In a packet-switched network, each router keeps state about each ongoing connection (communication from a given source to a given destination) that goes through this router.",
      "In a circuit-switched network, each router keeps state about each ongoing connection (communication from a given source to a given destination) that goes through this router.",
      "The Internet network layer uses circuit switching, because it provides performance guarantees.",
      "The TCP protocol can only run on top of a circuit-switched network (a packet-switched network cannot support TCP connections).",
      "The Internet network layer uses packet switching."
    ],
    answer: [1, 4],
    explanation: "Correct answers: (b) and (e). In a circuit-switched network, each router keeps state about each ongoing connection. The Internet network layer uses packet switching."
  },

  // Q2
  {
    question: "Based on what we said in class, which of the following statements about forwarding and routing are true? (Many may be true.)",
    type: "mcq",
    options: [
      "Forwarding and routing are the same thing.",
      "Routing determines the contents of forwarding tables.",
      "A forwarding operation takes place every time a router receives a packet.",
      "The output of routing is necessary for forwarding."
    ],
    answer: [1, 2, 3],
    explanation: "Correct answers: (b), (c), and (d). Routing determines the contents of forwarding tables. A forwarding operation takes place every time a router receives a packet. The output of routing is necessary for forwarding."
  },

  // Q3
  {
    question: "Which of the following IP prefixes contain IP address 1.1.1.1? (Many answers may be true.)<br><small>1.1.1.1 in binary: <code>00000001 00000001 00000001 00000001</code></small>",
    type: "mcq",
    options: [
      "1.1.1.0/31",
      "1.0.0.0/8",
      "1.0.0.0/24",
      "1.0.0.0/16"
    ],
    answer: [0, 1],
    explanation: "Correct answers: (a) 1.0.0.0/8 and (b) 1.1.1.0/31. — 1.0.0.0/8 matches the first 8 bits (00000001); 1.1.1.1 starts with 00000001 ✓. — 1.1.1.0/31 matches the first 31 bits; range is 1.1.1.0–1.1.1.1, so 1.1.1.1 is included ✓. — 1.0.0.0/24 requires first 24 bits = 00000001.00000000.00000000 but 1.1.1.1 has 00000001 in 2nd octet ✗. — 1.0.0.0/16 requires first 16 bits = 00000001.00000000 but 1.1.1.1 has 00000001 in 2nd octet ✗."
  },

  // Q4
  {
    question: "Based on what we said in class, which of the following sources of information does an Internet router use to determine where to send a packet next (which is the correct output link for the packet)? When answering this question, don't worry about Network Address Translation -- pretend it doesn't exist. (Many answers may be true.)",
    type: "mcq",
    options: [
      "The source IP address in the packet's network-layer header.",
      "The content of the packet, e.g., whether it is an HTTP GET request/response or a DNS query/response.",
      "The destination IP address in the packet's network-layer header.",
      "The router's forwarding table."
    ],
    answer: [2, 3],
    explanation: "Correct answers: (c) and (d). The router uses the destination IP address and its forwarding table (longest-prefix match) to decide the output link. Source IP and packet content are not used in standard IP forwarding."
  },

  // Q5
  {
    question: "Which of the following statements about IP forwarding tables are true? (Many may be true.)",
    type: "mcq",
    options: [
      "A router that is not a border router does not have any entries for foreign ASes in its forwarding table.",
      "A forwarding table contains one entry (or a small number of entries) per foreign AS (among other things).",
      "A border router does not have any entries for local IP subnets in its forwarding table.",
      "Given any global IP address X, any forwarding table contains at least one entry -- an IP prefix -- that matches X.",
      "A forwarding table contains one entry per local IP subnet (among other things)."
    ],
    answer: [1, 3, 4],
    explanation: "Correct answers: (b), (d), and (e). A forwarding table contains one entry (or a few) per foreign AS, one entry per local IP subnet, and a default route ensuring every global IP address matches at least one entry."
  },

  // Q6
  {
    question: "An Internet router has the following entries in its forwarding table:<br><ul><li>IP prefix 5.0.0.0/8 --> output link 1.</li><li>IP prefix 5.0.0.0/24 --> output link 2.</li></ul>A packet arrives at the router with destination IP address 5.0.0.10. Which output link will the router choose?",
    type: "mcq",
    options: [
      "It could choose any of the two links, because they both match the destination IP address.",
      "Link 1, because 5.0.0.0/8 is the bigger of the two matching IP prefixes.",
      "Link 2, because 5.0.0.0/24 exactly matches more bits of the destination IP address."
    ],
    answer: 2,
    explanation: "5.0.0.10 in binary: 00000101 00000000 00000000 00001010. 5.0.0.0/8 matches the first 8 bits. 5.0.0.0/24 matches the first 24 bits. The second prefix is the longest match → Link 2."
  },

  // Q7
  {
    question: "What would happen if IP addresses were flat, hence not location-dependent?",
    type: "mcq",
    options: [
      "A router would not be able to perform IP forwarding.",
      "IP forwarding tables would be significantly bigger.",
      "DNS would not be able to translate DNS names to IP addresses."
    ],
    answer: 1,
    explanation: "IP forwarding tables would be significantly bigger. Location-dependent (hierarchical) addresses allow prefix aggregation — one entry covers an entire network. With flat addresses every individual host would need its own entry."
  },

  // Q8
  {
    question: "Is it possible that two packets with the same destination IP address are going to (are intended for) two different destination end-systems? If multiple answers make sense, choose the single best one. To answer this question, do consider Network Address Translation (NAT).",
    type: "mcq",
    options: [
      "Yes, if the two destination end-systems are located in the same IP subnet.",
      "Yes, if the two destination end-systems are located behind the same NAT (Network Address Translation) gateway.",
      "No, because every destination IP address is unique."
    ],
    answer: 1,
    explanation: "Yes, if the two destination end-systems are located behind the same NAT gateway. Many private hosts share one public IP; the NAT device uses the destination port to demultiplex packets to the correct internal host."
  },

  // Q9
  {
    question: "How does link-state routing differ from distance-vector routing?",
    type: "mcq",
    options: [
      "They are the same thing.",
      "They try to achieve the same goal but using different types of algorithms.",
      "They try to achieve different goals."
    ],
    answer: 1,
    explanation: "They try to achieve the same goal (find best paths to all destinations) but using different types of algorithms. Link-state uses Dijkstra on a full topology map; distance-vector uses Bellman-Ford with neighbour-advertised distances."
  },

  // Q10
  {
    question: "Which of the following quantities affect the size of a router's forwarding table? The router is NOT a NAT gateway. (Penalty for incorrect answers.)",
    type: "mcq",
    options: [
      "The number of Autonomous Systems (ASes) in the Internet.",
      "The number of IP subnets in the local Autonomous System (AS).",
      "The number of IP subnets in the Internet.",
      "The number of ongoing TCP connections that go through the router."
    ],
    answer: [0, 1],
    explanation: "Correct answers: (a) and (b). Each AS contributes one or a few prefix entries; each local subnet contributes one entry. Remote subnets are aggregated per AS, not listed individually. TCP connections don't affect the forwarding table."
  },

  // Q11
  {
    question: "Based on what we said in class, which of the following statements are true? (Many may be true.)",
    type: "mcq",
    options: [
      "An Autonomous System (AS) typically contains multiple IP subnets.",
      "An IP subnet is attached to at least one router (which acts as the subnet's first-hop router).",
      "An Autonomous System (AS) is the same thing as an IP subnet.",
      "An IP subnet typically contains multiple Autonomous Systems (ASes)."
    ],
    answer: [0, 1],
    explanation: "Correct answers: (a) and (b). An AS is a large administrative domain (e.g. a university, ISP) typically containing many IP subnets. Each IP subnet has at least one first-hop router. An AS is not the same as a subnet, and subnets don't contain multiple ASes."
  },

  // Q12
  {
    question: "Which of the following statements are true? (Many may be true.)",
    type: "mcq",
    options: [
      "The first-hop routers of all IP subnets in the Internet run the inter-AS routing protocol (BGP).",
      "All the routers of each Autonomous System (AS) run the AS's intra-AS routing protocol.",
      "All the routers in the Internet must run the same routing protocol, otherwise global connectivity cannot be achieved.",
      "The border routers of all Autonomous Systems (ASes) in the Internet run the inter-AS routing protocol (BGP)."
    ],
    answer: [1, 3],
    explanation: "Correct answers: (b) and (d). All routers within an AS run the intra-AS routing protocol (e.g. OSPF). The border routers of all ASes run BGP. Only border routers run BGP — not all first-hop routers. Different ASes can use different intra-AS protocols."
  }
);
