registerTopic("Moodle - Q03 Client/server & web",

  // Q1
  {
    question: "Which of the following are global process names/addresses?<br>(It could be many.)",
    type: "mcq",
    options: [
      "https",
      "www.epfl.ch:443",
      "172.67.2.106",
      "104.20.228.42:80"
    ],
    answer: [1, 3],
    explanation: "A global process name requires both an <b>IP address (or DNS name)</b> and a <b>port number</b>.<br>• <code>www.epfl.ch:443</code> ✓ — DNS name + port<br>• <code>104.20.228.42:80</code> ✓ — IP address + port<br>• <code>https</code> ✗ — protocol name, not a process name<br>• <code>172.67.2.106</code> ✗ — IP address only, no port"
  },

  // Q2
  {
    question: "A process has name 16.2.5.1:80. Based on what we said in class, which of the following statements are true?<br>Assume that the process behaves as expected.<br>(Many may be true.)",
    type: "mcq",
    options: [
      "This process could be a web-server or a web-client process.",
      "This can only be a web-server process.",
      "This process is communicating with another process that is running on a computer with IP address 16.2.5.1.",
      "This process is running on a computer that has a network interface with IP address 16.2.5.1."
    ],
    answer: [1, 3],
    explanation: "Port 80 is the well-known port for HTTP web servers, so this can <b>only</b> be a web-server process ✓<br>The IP address 16.2.5.1 is the address of the <b>machine running the process</b>, not a remote host ✓<br>Option c is wrong: the IP is the local address, not the address of a remote communicant."
  },

  // Q3
  {
    question: "You type a URL into your web client. Based on what we said in class, which of the following are possible results of your action?<br>(Many may be possible.)",
    type: "mcq",
    options: [
      "Your web client generates a DNS query and sends it to a local web server.",
      "Your web client has locally cached the object with the given URL and can display it to you immediately, without generating any HTTP GET request.",
      "Your web client asks the DNS client running on your computer to translate a DNS name to an IP address.",
      "Your web client generates multiple HTTP GET requests.",
      "Your web client generates an HTTP GET request and sends it to a local DNS server, which computes the IP address of the target web server and forwards to it the HTTP GET request."
    ],
    answer: [1, 2, 3],
    explanation: "• Cached response: if the object is cached, no HTTP GET needed ✓<br>• DNS resolution: the web client always asks the local DNS client to resolve the hostname ✓<br>• Multiple HTTP GET: a web page often embeds many resources (images, scripts...) ✓<br>• Option a is wrong: DNS queries go to a DNS server, not a web server ✗<br>• Option e is wrong: DNS servers resolve names but do NOT forward HTTP requests ✗"
  },

  // Q4
  {
    question: "You type in your web client the following URL: <code>https://www.epfl.ch/labs/nal/publications</code><br>Your web client extracts from this URL the DNS name of the corresponding web server. Which is the DNS name?",
    type: "scq",
    options: [
      "www.epfl.ch/labs",
      "www.epfl.ch",
      "https://www.epfl.ch",
      "ch"
    ],
    answer: 1,
    explanation: "The DNS name is the part that starts after \"//\" and ends right before the first \"/\". In <code>https://www.epfl.ch/labs/nal/publications</code>, that is <b>www.epfl.ch</b>."
  },

  // Q5
  {
    question: "Based on what we said in class, which of the following statements are true?<br>(Many may be true.)",
    type: "mcq",
    options: [
      "Every web client needs to be configured to know the IP address of at least one web server.",
      "Every local DNS server needs to be configured to know the IP address of at least one root DNS server.",
      "Every Internet end-system needs to be configured to know the IP address of at least one (local) DNS server.",
      "Every Internet end-system needs to be configured to know the IP address of at least one root DNS server."
    ],
    answer: [1, 2],
    explanation: "• Every <b>local DNS server</b> must know a root DNS server's IP to resolve unknown names ✓<br>• Every <b>end-system</b> must know a local DNS server's IP to make DNS queries ✓<br>• Web clients don't need to pre-configure a web server IP — that's what DNS is for ✗<br>• End-systems don't need to know root DNS servers directly — they use local DNS ✗"
  },

  // Q6
  {
    question: "Which of the following entities are <u>guaranteed</u> to know the IP address of www.20min.ch, without asking any other DNS server?<br>(It could be many.)",
    type: "mcq",
    options: [
      "A local DNS server.",
      "A root DNS server.",
      "A 20min.ch authoritative DNS server.",
      "A .ch Top-level domain (TLD) DNS server."
    ],
    answer: [2],
    explanation: "A <b>20min.ch authoritative DNS server</b> is the authoritative source for all *.20min.ch DNS names — it always knows their IP addresses without asking anyone else ✓<br>A local DNS server may or may not have it cached. Root and TLD servers only know who to delegate to, not the final IP."
  },

  // Q7
  {
    question: "You type <code>https://www.epfl.ch/labs/nal/publications</code> — your web client takes 20 msec to display it.<br>A few minutes later you type <code>https://www.epfl.ch/schools/ic</code> — your web client takes 5 msec.<br>Which of the following is a/are plausible reason(s) for the difference?<br>(Many may be plausible.)",
    type: "mcq",
    options: [
      "After you type in the first URL, your DNS client caches www.epfl.ch's IP address. As a result, after you type in the second URL, your DNS client can give www.epfl.ch's IP address to your web client immediately (it does not need to communicate with a local DNS server).",
      "After you type in the first URL, your web client needs to translate \"www.epfl.ch/labs/nal/publications\" to an IP address. The former is longer, so it takes longer to translate.",
      "The first URL is stored in a web server that is further away from your web client. Hence, obtaining the first URL takes longer."
    ],
    answer: [0],
    explanation: "The DNS client <b>caches</b> www.epfl.ch's IP address after the first lookup. For the second URL (same hostname), no DNS query is needed — the IP is served from cache immediately ✓<br>DNS translates only the <b>hostname</b> (www.epfl.ch), not the full path — path length is irrelevant ✗"
  }

);
