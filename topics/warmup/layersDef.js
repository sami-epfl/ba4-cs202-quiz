// ============================================================
//  Layers explanation — CS202 Computer Networks key concepts
// ============================================================

registerTopic("Warmup - Layers understanding",

  // ── APPLICATION LAYER ─────────────────────────────────────

  {
    type: "flashcard",
    question: "What is the Application layer?",
    answer: "The application layer is the layer closest to the user. It provides network services directly to user applications and defines how applications communicate over the network.<hr><b>Step 1 — DNS:</b> The browser asks DNS:<pre>&quot;What is the IP address of www.google.com?&quot;</pre>DNS replies:<pre>www.google.com → 142.250.185.68</pre>Now the browser knows the URL (<code>www.google.com</code>) and the IP (<code>142.250.185.68</code>).<hr><b>Step 2 — HTTP:</b> The browser creates the HTTP request:<pre>GET / HTTP/1.1\nHost: www.google.com</pre>Notice: <code>www.google.com</code> appears in the HTTP header, but <code>142.250.185.68</code> does <b>not</b> appear anywhere in the HTTP message.<hr><b>Step 3 — Syscall:</b> The browser calls:<pre>send(\n  socket,\n  &quot;GET / HTTP/1.1\r\nHost: www.google.com\r\n\r\n&quot;,\n  destination_ip = 142.250.185.68\n);</pre>The HTTP message is the <b>payload</b>. The IP is <b>metadata given to the OS</b> — it is not inside the HTTP header.<hr>Both DNS and HTTP are application-layer protocols."
  },

  {
    type: "scq",
    question: "You type `www.google.com` in your browser. Which layer protocol is responsible for translating this hostname into an IP address?",
    options: [
      "Transport layer — TCP resolves hostnames",
      "Application layer — DNS resolves hostnames",
      "Network layer — IP routing resolves hostnames",
      "Link layer — ARP resolves hostnames"
    ],
    answer: 1,
    explanation: "DNS (Domain Name System) is an application-layer protocol. Before any HTTP request can be sent, the browser uses DNS to map the human-readable hostname to an IP address. The other layers do not handle hostname resolution."
  },

  {
    type: "tf",
    question: "The IP address of the destination server (e.g. 142.250.185.68) appears inside the HTTP request header.",
    answer: false,
    explanation: "The HTTP header only contains the hostname (Host: www.google.com), not the IP address. The IP address is given as metadata to the OS when calling send() — it will appear later in the Network-layer IP header, not in the application-layer HTTP message."
  },

  {
    type: "scq",
    question: "Which of the following is a Transport-layer protocol, NOT an application-layer protocol?",
    options: [
      "HTTP",
      "DNS",
      "ARP",
      "TCP"
    ],
    answer: 3,
    explanation: "TCP is a Transport-layer protocol — it handles reliable delivery between processes using port numbers. HTTP and DNS are application-layer protocols. ARP is a Link-layer protocol that maps IP addresses to MAC addresses."
  },

  // ── TRANSPORT LAYER ───────────────────────────────────────

  {
    type: "flashcard",
    question: "What is the Transport layer?",
    answer: "The transport layer ensures reliable or best-effort delivery of data between <b>processes</b> (not just hosts). It multiplexes multiple applications onto a single network connection using <b>port numbers</b>.<hr><b>What TCP receives from Application:</b><pre>Payload : GET / HTTP/1.1\\nHost: www.google.com\\n\\n\nDst IP  : 142.250.185.68   (metadata from the OS)</pre>TCP does <b>not</b> look at the HTTP content — it treats it as opaque bytes.<hr><b>What TCP adds — the segment:</b><pre>┌──────────────────────────────┐\n│  TCP Header                  │\n│  Src Port  = 54321           │\n│  Dst Port  = 443             │\n│  Seq / Ack / Flags / ...     │\n├──────────────────────────────┤\n│  Payload (the HTTP request)  │\n└──────────────────────────────┘</pre>TCP passes the segment + the destination IP <b>down</b> to the Network layer. The IP is still just metadata — TCP does not put it in its own header.<hr><b>Key idea:</b> Port numbers identify the <em>process</em> on a machine. IP addresses identify the <em>machine</em> itself."
  },

  {
    type: "scq",
    question: "A client sends an HTTP request to a web server on port 443. The client's TCP segment has source port 54321 and destination port 443. On the server side, which port does the response come FROM?",
    options: [
      "443 — the server always responds from the same port it received on",
      "54321 — the server responds from the client's source port",
      "80 — HTTP always uses port 80",
      "A random ephemeral port chosen by the server"
    ],
    answer: 0,
    explanation: "The server sends its response FROM port 443 (the well-known HTTPS port) TO the client's ephemeral port 54321. The source/destination ports simply swap: server src=443, dst=54321."
  },

  {
    type: "scq",
    question: "What is the main difference between TCP and UDP at the Transport layer?",
    options: [
      "TCP uses IP addresses; UDP uses MAC addresses",
      "TCP guarantees reliable, ordered delivery; UDP is best-effort with no ordering guarantee",
      "TCP is faster because it skips the handshake",
      "UDP operates at the Network layer, not Transport"
    ],
    answer: 1,
    explanation: "TCP provides reliable, ordered, error-checked delivery via acknowledgements, retransmissions, and flow control. UDP is a lightweight, best-effort protocol with no guarantees — useful when low latency matters more than reliability (e.g. video calls, DNS)."
  },

  {
    type: "tf",
    question: "The Transport layer uses port numbers to distinguish between different applications running on the same host.",
    answer: true,
    explanation: "Port numbers are the Transport layer's way of multiplexing: a single machine can run a web server (port 443), a mail server (port 25), and SSH (port 22) simultaneously. The IP address identifies the machine; the port number identifies the specific process."
  },

  {
    type: "scq",
    question: "After the Application layer hands a message to TCP, what does TCP put in its segment header?",
    options: [
      "Source and destination IP addresses",
      "Source and destination MAC addresses",
      "Source and destination port numbers",
      "The hostname from the HTTP Host header"
    ],
    answer: 2,
    explanation: "TCP adds source and destination port numbers to its segment header. IP addresses belong to the Network layer's header. MAC addresses belong to the Link layer. The hostname is application-layer data that TCP treats as opaque payload."
  },

  // ── NETWORK LAYER ─────────────────────────────────────────

  {
    type: "flashcard",
    question: "What is the Network layer?",
    answer: "The network layer routes <b>packets</b> from source host to destination host across multiple networks using <b>IP addresses</b>. This is where addressing and routing happen.<hr><b>What IP receives from Transport:</b><pre>TCP segment\nDst IP = 142.250.185.68   (still metadata)</pre><b>What IP adds — the packet:</b><pre>┌──────────────────────────────┐\n│  IP Header                   │\n│  Src IP = 128.179.x.x        │\n│  Dst IP = 142.250.185.68     │\n│  TTL / Protocol / ...        │\n├──────────────────────────────┤\n│  TCP Segment                 │\n│   └─ HTTP request            │\n└──────────────────────────────┘</pre>Only at this point does the destination IP address become part of the <b>packet header</b>. Routers read this header to decide where to forward the packet.<hr><b>Key idea:</b> Routers implement Layer 3 (Network) and below. They read the IP header but do not open the TCP segment or HTTP message."
  },

  {
    type: "scq",
    question: "A router receives an IP packet. Which header does it read to decide where to forward the packet?",
    options: [
      "The HTTP header — to find the destination hostname",
      "The TCP header — to find the destination port",
      "The IP header — to find the destination IP address",
      "The Ethernet frame header — to find the destination MAC address"
    ],
    answer: 2,
    explanation: "Routers operate at the Network layer (Layer 3). They read the IP header's destination IP address and consult their routing table to forward the packet. They do not open TCP segments or HTTP messages."
  },

  {
    type: "tf",
    question: "The destination IP address first appears inside the IP header — it is NOT inside the HTTP message or TCP segment.",
    answer: true,
    explanation: "Correct. The destination IP is passed as metadata from the application to the OS. It travels down the stack and is only written into a packet header at the Network layer (IP header). The HTTP and TCP headers contain hostnames and ports, not IP addresses."
  },

  {
    type: "scq",
    question: "Which of the following correctly describes how many layers a router implements?",
    options: [
      "All 5 layers — routers need to read HTTP to route correctly",
      "Layers 1–3 (Physical, Link, Network) — routers read IP headers",
      "Only Layer 3 (Network) — routers skip the physical and link layers",
      "Layers 1–2 only — routers use MAC addresses, not IP addresses"
    ],
    answer: 1,
    explanation: "Routers implement Layers 1 through 3. They must receive bits (Physical), parse frames (Link), and read IP headers (Network) to make forwarding decisions. They do not process Transport or Application layer headers."
  },

  // ── LINK LAYER ────────────────────────────────────────────

  {
    type: "flashcard",
    question: "What is the Link layer?",
    answer: "The link layer transfers <b>frames</b> between two directly connected nodes (one hop). It uses <b>MAC addresses</b> to identify devices on the same local network segment.<hr><b>What the Link layer receives from Network:</b><pre>IP packet\n  └─ TCP segment\n       └─ HTTP request</pre><b>What it adds — the frame:</b><pre>┌──────────────────────────────┐\n│  Ethernet Header             │\n│  Src MAC = AA:BB:CC:DD:EE:01 │\n│  Dst MAC = 11:22:33:44:55:66 │\n│  EtherType = 0x0800 (IPv4)   │\n├──────────────────────────────┤\n│  IP Packet                   │\n│   └─ TCP Segment             │\n│        └─ HTTP Request       │\n├──────────────────────────────┤\n│  Ethernet Trailer (FCS)      │\n└──────────────────────────────┘</pre><b>Important distinction:</b><br>• <b>IP addresses</b> identify the final <em>host</em> (end-to-end, global).<br>• <b>MAC addresses</b> identify the next <em>hop</em> (link-local, one segment).<br><br>At every router, the IP packet is <b>unwrapped</b> from the old frame and <b>re-wrapped</b> in a new frame with new MAC addresses for the next hop. The IP addresses inside remain unchanged.<hr>Protocols: Ethernet, Wi-Fi (802.11), PPP."
  },

  {
    type: "scq",
    question: "Your laptop sends a packet to Google (142.250.185.68). Your laptop's MAC address is AA:BB:CC and your router's MAC address is 11:22:33. What are the source and destination MAC addresses in the Ethernet frame your laptop sends?",
    options: [
      "Src: AA:BB:CC → Dst: Google's MAC address",
      "Src: AA:BB:CC → Dst: 11:22:33 (the router's MAC)",
      "Src: your public IP → Dst: 142.250.185.68",
      "Src: 11:22:33 → Dst: AA:BB:CC"
    ],
    answer: 1,
    explanation: "MAC addresses are link-local (one hop only). Your laptop wraps the IP packet in a frame addressed to your router (the next hop), not to Google. The IP header inside still has Google's IP as the destination — that stays unchanged. At the router, the frame is stripped and a new frame is created for the next hop."
  },

  {
    type: "tf",
    question: "MAC addresses in a frame change at every router hop, but the IP addresses in the packet inside stay the same throughout the journey.",
    answer: true,
    explanation: "Exactly. Each router decapsulates the frame (strips the Link-layer header), reads the destination IP, looks up the next hop, and creates a brand-new frame with new source/destination MAC addresses for that next link. The IP packet inside — with the original source and destination IPs — is forwarded unchanged."
  },

  {
    type: "scq",
    question: "Which layer protocol is responsible for delivering a frame between two directly connected devices (e.g. your laptop and your home router)?",
    options: [
      "Network layer — IP handles all delivery",
      "Transport layer — TCP handles all delivery",
      "Link layer — Ethernet or Wi-Fi handles hop-by-hop delivery",
      "Application layer — DNS handles local addressing"
    ],
    answer: 2,
    explanation: "The Link layer (e.g. Ethernet, Wi-Fi) handles one-hop delivery between directly connected devices. IP handles end-to-end delivery across many hops, but it relies on the Link layer to get the packet across each individual link."
  },

  {
    type: "scq",
    question: "How does a device find the MAC address of the next-hop router on its local network?",
    options: [
      "It is hard-coded in the IP header",
      "DNS provides MAC address mappings",
      "ARP (Address Resolution Protocol) maps an IP address to a MAC address",
      "The Transport layer provides this mapping via TCP"
    ],
    answer: 2,
    explanation: "ARP (Address Resolution Protocol) is a Link-layer protocol. When a device knows the IP of the next hop but needs its MAC address, it broadcasts an ARP request: 'Who has IP X? Tell me your MAC.' The owner of that IP replies with its MAC address."
  },

  // ── PHYSICAL LAYER ────────────────────────────────────────

  {
    type: "flashcard",
    question: "What is the Physical layer?",
    answer: "The physical layer transmits raw <b>bits</b> over a physical medium. It converts digital 0s and 1s into physical signals (electrical voltages, light pulses, radio waves) and back.<hr><b>What it does:</b><br>• Takes the complete frame from the Link layer<br>• Converts each bit into a physical signal on the medium<br>• At the receiver, converts signals back into bits<hr><b>Physical media examples:</b><pre>Medium          Signal type\n──────────────  ──────────────────────────\nCopper cable    Electrical voltage changes\nFiber optic     Light pulses\nWi-Fi / 5G      Radio waves\nBluetooth       Short-range radio waves</pre><b>Key idea:</b> The Physical layer knows nothing about frames, packets, or segments — it only sees a stream of bits. It is the lowest layer and directly touches the hardware.<hr>The Physical layer is why a Wi-Fi card and an Ethernet card are different devices even though they both connect you to the same Internet."
  },

  {
    type: "scq",
    question: "What exactly does the Physical layer transmit over the network medium?",
    options: [
      "IP packets with headers and payloads",
      "Ethernet frames with MAC addresses",
      "Raw bits encoded as physical signals (electrical, light, or radio)",
      "HTTP messages formatted as text"
    ],
    answer: 2,
    explanation: "The Physical layer converts bits into physical signals appropriate for the medium: voltage changes on copper, light pulses on fiber, radio waves in the air. It has no knowledge of frames, packets, or application data — it just moves bits."
  },

  {
    type: "tf",
    question: "A fiber optic cable and a Wi-Fi antenna both operate at the Physical layer, just using different signal types.",
    answer: true,
    explanation: "Both are Physical-layer media. Fiber uses light pulses; Wi-Fi uses radio waves. The Physical layer's job is the same in both cases: convert bits to signals for transmission and signals back to bits on reception."
  },

  {
    type: "scq",
    question: "Which layer is responsible for encoding the bit '1' as a specific voltage level on a copper cable?",
    options: [
      "Link layer",
      "Network layer",
      "Physical layer",
      "Transport layer"
    ],
    answer: 2,
    explanation: "Signal encoding — mapping binary values to physical signals — is a Physical layer function. The Link layer above it deals with frames and MAC addresses; the Physical layer converts those frames' bits into actual electrical, optical, or radio signals."
  },

  // ── PUTTING IT ALL TOGETHER ────────────────────────────────

  {
    type: "flashcard",
    question: "What happens to a message as it travels DOWN the sender's stack (encapsulation)?",
    answer: "Each layer wraps the data from the layer above in its own header (and sometimes trailer), adding its own addressing/control information.<pre>Application   HTTP message\n     ↓        [add TCP header]\nTransport     TCP segment  = TCP_hdr | HTTP\n     ↓        [add IP header]\nNetwork       IP packet    = IP_hdr  | TCP_hdr | HTTP\n     ↓        [add Ethernet header + trailer]\nLink          Eth frame    = Eth_hdr | IP_hdr | TCP_hdr | HTTP | FCS\n     ↓        [convert to bits/signals]\nPhysical      101011010110...</pre>At each layer, the layer below treats what it receives as opaque <b>payload</b> — it does not open or modify the layers above it."
  },

  {
    type: "flashcard",
    question: "What happens as a message travels UP the receiver's stack (decapsulation)?",
    answer: "Each layer reads and strips its own header, then passes the remaining payload up to the layer above.<pre>Physical      receives signals → converts to bits\n     ↑        [strip Eth header/trailer]\nLink          reads Eth frame → checks MAC, passes IP packet up\n     ↑        [strip IP header]\nNetwork       reads IP packet → checks dst IP, passes TCP segment up\n     ↑        [strip TCP header]\nTransport     reads TCP segment → checks port, reassembles, passes to app\n     ↑        [read payload]\nApplication   processes HTTP message</pre>Each layer only reads the header it owns — it never peeks inside the payload."
  },

  {
    type: "scq",
    question: "When a router in the middle of the Internet processes your packet, which headers does it read and strip?",
    options: [
      "All headers down to HTTP — the router reads everything",
      "Only the TCP header — to forward to the right port",
      "The Ethernet frame header and the IP header — then creates a new frame for the next hop",
      "Only the Ethernet frame header — the IP header is not touched"
    ],
    answer: 2,
    explanation: "A router implements layers 1–3. It strips the incoming Ethernet frame (Link layer), reads the IP header to find the next hop (Network layer), then re-wraps the IP packet in a new Ethernet frame addressed to the next-hop MAC. The TCP segment and HTTP message inside the IP packet are never touched."
  },

  {
    type: "scq",
    question: "Which statement best describes the relationship between IP addresses and MAC addresses?",
    options: [
      "They are redundant — you only need one or the other",
      "IP addresses identify the end-to-end destination host; MAC addresses identify the next hop on a single link",
      "MAC addresses are global and permanent; IP addresses change at every router",
      "IP addresses are used locally; MAC addresses are used for global routing"
    ],
    answer: 1,
    explanation: "IP addresses are global end-to-end identifiers: the source IP and destination IP stay the same across the entire journey. MAC addresses are local link identifiers: they change at every router hop to reflect the physical sender and receiver on that particular segment."
  },

  {
    type: "scq",
    question: "Which layer does a switch (not a router) operate at?",
    options: [
      "Physical layer only",
      "Link layer — it forwards frames based on MAC addresses",
      "Network layer — it routes based on IP addresses",
      "Transport layer — it manages ports"
    ],
    answer: 1,
    explanation: "A switch operates at Layer 2 (Link layer). It learns which MAC addresses are on which ports and forwards Ethernet frames accordingly. It does not look at IP addresses (that's the router's job at Layer 3)."
  },

  {
    type: "scq",
    question: "You are capturing packets on your laptop. You see a frame with: Src MAC = AA:BB:CC (your laptop), Dst MAC = 11:22:33 (your router), Src IP = 10.0.0.5, Dst IP = 142.250.185.68. What layer owns each set of addresses?",
    options: [
      "MAC addresses → Transport layer; IP addresses → Network layer",
      "MAC addresses → Link layer; IP addresses → Network layer",
      "MAC addresses → Physical layer; IP addresses → Link layer",
      "Both sets belong to the Network layer"
    ],
    answer: 1,
    explanation: "MAC addresses are Link-layer (Layer 2) addresses used for one-hop delivery. IP addresses are Network-layer (Layer 3) addresses used for end-to-end delivery. This is a key distinction: same packet, two different layers' addressing schemes working together."
  }

)
