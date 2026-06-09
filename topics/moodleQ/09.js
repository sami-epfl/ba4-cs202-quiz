const Q09 = [

  // Q1
  {
    question: "If an application needs reliable data delivery, it can use TCP at the transport layer. Why should the link layer <em>also</em> provide reliable data delivery?<br><small>(*) The link layer provides reliable data delivery only for error-prone links, e.g., wireless links.</small><br>(Many answers may apply.)",
    type: "mcq",
    options: [
      "Reliable data delivery at the link layer can improve application throughput.",
      "It does not make any sense! If TCP recovers from packet loss/corruption, there is no reason for the link layer to provide the same type of service.",
      "Reliable data delivery at the link layer can recover from packet loss/corruption without TCP timing out and resetting its congestion window.",
      "There are certain packet losses from which TCP cannot recover, but the link layer can."
    ],
    answer: [0, 2],
    explanation: "• If the link layer recovers locally from errors, TCP never sees the loss → no timeout, no congestion window reset → <b>higher throughput</b> ✓<br>• Local recovery avoids TCP's slow start penalty ✓<br>• TCP can always eventually recover from any packet loss ✗<br>• It does make sense for performance reasons ✗"
  },

  // Q2
  {
    question: "Which of the following statements about MAC addresses are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "MAC addresses are location-dependent.",
      "MAC addresses are flat.",
      "A MAC address identifies a network interface.",
      "A MAC address is exactly the same thing as an IP address."
    ],
    answer: [1, 2],
    explanation: "• MAC addresses are <b>flat</b> (no hierarchy, not location-based) ✓<br>• A MAC address identifies a specific <b>network interface</b> (NIC) ✓<br>• MAC addresses are NOT location-dependent — unlike IP addresses ✗<br>• MAC and IP are different types of addresses at different layers ✗"
  },

  // Q3
  {
    question: "Which of the following statements about forwarding tables are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "The forwarding table of a link-layer switch contains the IP addresses of all end-systems and routers from the local IP subnet that are sending (or recently sent) traffic through this switch.",
      "The forwarding table of a router contains roughly one IP prefix per local IP subnet and a small number of aggregate IP prefixes that belong to foreign Autonomous Systems (ASes).",
      "The forwarding table of a link-layer switch contains all the MAC addresses in the world.",
      "The forwarding table of a link-layer switch contains the MAC addresses of all end-systems and routers from the local IP subnet that are sending (or recently sent) traffic through this switch."
    ],
    answer: [1, 3],
    explanation: "• A <b>router's</b> forwarding table: one entry per local subnet + aggregated entries for foreign ASes ✓<br>• A <b>link-layer switch's</b> forwarding table: MAC addresses of devices it has recently seen traffic from (self-learning) ✓<br>• Switches use MAC addresses, not IP addresses ✗<br>• Switches only know local MAC addresses, not all MACs in the world ✗"
  },

  // Q4
  {
    question: "In which case(s) does a link-layer switch broadcast a packet?<br>(Many answers may be true.)",
    type: "mcq",
    options: [
      "When it receives a packet with destination IP address X, and there is no IP prefix that matches X in the switch's forwarding table.",
      "When it receives a packet whose destination MAC address is the broadcast MAC address.",
      "When it receives a packet with destination MAC address D, and there is no entry for D in the switch's forwarding table.",
      "When it receives a packet whose destination IP address is the broadcast IP address of an IP subnet."
    ],
    answer: [1, 2],
    explanation: "Link-layer switches operate at the <b>MAC layer</b> — they do not look at IP addresses.<br>• <b>Broadcast MAC address</b> (FF:FF:FF:FF:FF:FF): switch floods to all ports ✓<br>• <b>Unknown MAC address</b>: switch floods (broadcasts) since it doesn't know which port to use ✓<br>• Switches don't examine IP addresses → options a and d are wrong ✗"
  },

  // Q5
  {
    question: "Which of the following statements about the Address Resolution Protocol (ARP) are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "ARP's purpose is to map IP addresses to MAC addresses.",
      "Link-layer switches run ARP (i.e., generate and respond to ARP messages).",
      "End-systems run ARP (i.e., generate and respond to ARP messages).",
      "Routers run ARP (i.e., generate and respond to ARP messages).",
      "ARP's purpose is to map DNS names to IP addresses."
    ],
    answer: [0, 2, 3],
    explanation: "• ARP maps <b>IP addresses → MAC addresses</b> ✓<br>• <b>End-systems</b> and <b>routers</b> run ARP (they have IP stacks and need to resolve next-hop MAC addresses) ✓<br>• <b>Link-layer switches</b> do NOT run ARP — they operate below the IP layer ✗<br>• DNS maps names to IP addresses, not ARP ✗"
  },

  // Q6
  {
    question: "Why might an end-system send an Address Resolution Protocol (ARP) message?<br>(Many answers may be true.)",
    type: "mcq",
    options: [
      "To discover the MAC address of another end-system from a remote IP subnet.",
      "To discover the MAC address of its own default gateway.",
      "To discover the IP address of another end-system.",
      "To discover the MAC address of another end-system from the local IP subnet.",
      "To discover its own MAC address."
    ],
    answer: [1, 3],
    explanation: "ARP is used to find the MAC address of a device on the <b>same local IP subnet</b>:<br>• MAC address of a <b>local end-system</b> ✓<br>• MAC address of the <b>default gateway</b> (which is on the local subnet) ✓<br>• For remote subnets, the end-system ARPs for its gateway, not the remote host ✗<br>• ARP does not discover IP addresses or one's own MAC ✗"
  },

  // Q7
  {
    question: "What would happen if the entire Internet was a single IP subnet?<br>(Many answers may apply.)",
    type: "mcq",
    options: [
      "Switches would not have forwarding tables.",
      "There would not exist any routers, only link-layer switches.",
      "The first time an end-system sent a packet, that packet would be broadcast such that it would reach every other end-system in the world.",
      "All the switches would participate in an intra-domain routing protocol.",
      "A switch seeing concurrent traffic from millions of end-systems would have millions of entries in its forwarding table."
    ],
    answer: [1, 2, 4],
    explanation: "In a single global IP subnet:<br>• No need for routers (routing is between subnets) → only link-layer switches ✓<br>• First packet to an unknown MAC → switch broadcasts to ALL devices in the world ✓<br>• Switches learn from traffic → with billions of devices, forwarding tables would be enormous ✓<br>• Switches do not run routing protocols ✗<br>• Switches always have forwarding tables ✗"
  }

];
