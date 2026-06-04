registerTopic("Network layer & IP - Auto generated",

  // --- IP addressing ---
  {
    question: "An IPv4 address is 32 bits long.",
    type: "tf",
    answer: true,
    explanation: "IPv4 uses 32-bit addresses, written as four decimal octets (e.g. 192.168.1.1). This gives a theoretical address space of 2³² ≈ 4.3 billion addresses."
  },
  {
    question: "An IPv6 address is 64 bits long.",
    type: "tf",
    answer: false,
    explanation: "IPv6 addresses are 128 bits long, written as eight groups of four hex digits. This was designed to solve IPv4 address exhaustion."
  },
  {
    question: "The subnet mask /24 means the first 24 bits identify the network and the last 8 bits identify the host.",
    type: "tf",
    answer: true,
    explanation: "CIDR notation /24 means the first 24 bits are the network prefix. The remaining 8 bits allow up to 256 addresses (254 usable hosts, since the network address and broadcast address are reserved)."
  },
  {
    question: "Two hosts can communicate directly (without going through a router) if and only if they are in the same IP subnet.",
    type: "tf",
    answer: true,
    explanation: "Hosts in the same subnet share the same network prefix. They can reach each other at layer 2 (via a switch/ARP). Traffic to a different subnet must be sent to the default gateway (router)."
  },
  {
    question: "The IP address 192.168.0.0/16 is a private address range.",
    type: "tf",
    answer: true,
    explanation: "RFC 1918 defines three private ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. These are not routable on the public Internet and are used inside private networks (homes, offices)."
  },

  // --- IP header / forwarding mechanics ---
  {
    question: "The IP TTL (Time-To-Live) field is decremented by each router that forwards the packet.",
    type: "tf",
    answer: true,
    explanation: "Each router decrements the TTL by 1 before forwarding. If the TTL reaches 0, the router drops the packet and sends an ICMP Time Exceeded message back to the source. This prevents packets from looping forever."
  },
  {
    question: "IP provides a reliable, in-order delivery service.",
    type: "tf",
    answer: false,
    explanation: "IP is a best-effort, connectionless service. It does not guarantee delivery, ordering, or duplicate suppression. Reliability is the responsibility of higher-layer protocols like TCP."
  },
  {
    question: "What is the role of ICMP (Internet Control Message Protocol)?",
    type: "mcq",
    options: [
      "To establish reliable connections between hosts.",
      "To carry error messages and diagnostic information (e.g. ping, traceroute).",
      "To translate domain names to IP addresses.",
      "To assign IP addresses dynamically to hosts."
    ],
    answer: 1,
    explanation: "ICMP is used by routers and hosts to report errors (e.g. TTL exceeded, destination unreachable) and for diagnostics. The <code>ping</code> command sends ICMP Echo Request messages; <code>traceroute</code> exploits ICMP Time Exceeded messages to discover the path."
  },
  {
    question: "IP fragmentation occurs when a packet is larger than the MTU (Maximum Transmission Unit) of the outgoing link.",
    type: "tf",
    answer: true,
    explanation: "If a packet exceeds the MTU of the next link, the router splits it into smaller fragments. Each fragment is forwarded independently and reassembled at the final destination. Fragmentation is costly, which is why path MTU discovery is preferred."
  },

  // --- Subnetting ---
  {
    question: "How many usable host addresses does the subnet 10.0.0.0/28 provide?",
    type: "mcq",
    options: [
      "14",
      "16",
      "30",
      "254"
    ],
    answer: 0,
    explanation: "/28 leaves 32 − 28 = 4 host bits → 2⁴ = 16 total addresses. Subtract 2 (network address 10.0.0.0 and broadcast 10.0.0.15) = <strong>14 usable hosts</strong>."
  },
  {
    question: "The broadcast address of the subnet 172.16.5.0/24 is 172.16.5.255.",
    type: "tf",
    answer: true,
    explanation: "/24 means 8 host bits. Setting all host bits to 1 gives 172.16.5.255. Packets sent to this address are delivered to all hosts in the subnet."
  },
  {
    question: "CIDR (Classless Inter-Domain Routing) allows IP address blocks of any prefix length, replacing the old class A/B/C system.",
    type: "tf",
    answer: true,
    explanation: "Before CIDR, addresses were split into fixed classes (A=/8, B=/16, C=/24). CIDR allows arbitrary prefix lengths (e.g. /19, /23), enabling more efficient allocation and route aggregation."
  },

  // --- Routing protocols ---
  {
    question: "OSPF (Open Shortest Path First) is an intra-AS routing protocol based on Dijkstra's link-state algorithm.",
    type: "tf",
    answer: true,
    explanation: "OSPF routers flood link-state advertisements (LSAs) so every router builds a complete topology map of the AS. Each router then runs Dijkstra's algorithm locally to compute shortest paths to all destinations."
  },
  {
    question: "BGP (Border Gateway Protocol) is a distance-vector protocol.",
    type: "tf",
    answer: false,
    explanation: "BGP is a <em>path-vector</em> protocol. Instead of just advertising a distance metric, each BGP router advertises the full AS-path to a prefix (e.g. AS1 → AS3 → AS7). This allows loop detection and policy-based routing."
  },
  {
    question: "RIP (Routing Information Protocol) uses hop count as its metric and has a maximum hop count of 15.",
    type: "tf",
    answer: true,
    explanation: "RIP is a classic distance-vector protocol. Hop count is simple but ignores bandwidth. A metric of 16 means 'unreachable', so RIP is limited to small networks (≤ 15 hops diameter)."
  },
  {
    question: "Which routing protocol is used between Autonomous Systems on the Internet?",
    type: "mcq",
    options: [
      "OSPF",
      "RIP",
      "BGP",
      "IS-IS"
    ],
    answer: 2,
    explanation: "BGP (Border Gateway Protocol) is the de-facto inter-AS (exterior) routing protocol. OSPF and IS-IS are intra-AS (interior) protocols. RIP is an older, small-scale intra-AS protocol."
  },

  // --- NAT ---
  {
    question: "A NAT gateway translates private IP addresses to a public IP address, allowing multiple internal hosts to share a single public IP.",
    type: "tf",
    answer: true,
    explanation: "NAT (Network Address Translation) maps (private IP, port) pairs to (public IP, port) pairs in a translation table. Replies from the Internet are demultiplexed using the port number to reach the correct internal host."
  },
  {
    question: "NAT breaks the end-to-end principle of the Internet.",
    type: "tf",
    answer: true,
    explanation: "The end-to-end principle says that intelligence should be at the endpoints, not in the network. NAT violates this because the network must inspect and rewrite port/IP information, making it impossible to initiate connections from outside to inside without special configuration (port forwarding)."
  },
  {
    question: "With NAT, a host inside the private network can always be reached directly from the public Internet.",
    type: "tf",
    answer: false,
    explanation: "By default, NAT only allows outgoing connections from inside to outside. Unsolicited incoming connections from the Internet are dropped unless explicit port-forwarding rules are configured."
  },

  // --- Autonomous Systems ---
  {
    question: "Each Autonomous System is identified by a unique AS Number (ASN).",
    type: "tf",
    answer: true,
    explanation: "ASNs are 16-bit (originally) or 32-bit numbers assigned by regional Internet registries (ARIN, RIPE, etc.). They uniquely identify each AS in BGP routing. Examples: AS15169 = Google, AS3333 = RIPE NCC."
  },
  {
    question: "All routers within an AS must use the same intra-AS routing protocol.",
    type: "tf",
    answer: false,
    explanation: "An AS can internally use any routing protocol it chooses (OSPF, IS-IS, RIP, EIGRP…), and can even use multiple protocols in different parts of the network with route redistribution between them. The choice is entirely internal and invisible to other ASes."
  },

  // --- Longest prefix match ---
  {
    question: "A router has entries for 192.168.0.0/16 and 192.168.1.0/24. A packet arrives for 192.168.1.5. Which prefix is matched?",
    type: "mcq",
    options: [
      "192.168.0.0/16, because it was added first.",
      "192.168.1.0/24, because it is the longest (most specific) matching prefix.",
      "Both are used simultaneously."
    ],
    answer: 1,
    explanation: "Longest-prefix match always wins. 192.168.1.0/24 matches 24 bits of 192.168.1.5, while 192.168.0.0/16 matches only 16 bits. The router chooses the /24 entry."
  },
  {
    question: "A default route (0.0.0.0/0) matches every destination IP address.",
    type: "tf",
    answer: true,
    explanation: "The default route has a prefix length of 0, so it matches all 2³² addresses. It has the lowest priority under longest-prefix match — any more specific prefix wins. It is used as a catch-all for traffic whose destination doesn't match any other entry."
  }
);
