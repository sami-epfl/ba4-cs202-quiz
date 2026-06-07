// ============================================================
//  Layers explanation — CS202 Computer Networks key concepts
// ============================================================

registerTopic("Layers explanation",

  {
    type: "flashcard",
    question: "What are the Internet layers, and which devices implement them?",
    answer: "The 5 Internet layers (top to bottom): Application, Transport, Network, Link, Physical.<br>• Computers implement all 5 layers.<br>• Packet switches implement only the lowest 2 or 3.<br>• Each layer can understand and should interpret only its own header."
  },

  {
    type: "flashcard",
    question: "What is the Application layer?",
    answer: "The application layer is the layer closest to the user. It provides network services directly to user applications and defines how applications communicate over the network.<hr><b>Step 1 — DNS:</b> The browser asks DNS:<pre>&quot;What is the IP address of www.google.com?&quot;</pre>DNS replies:<pre>www.google.com → 142.250.185.68</pre>Now the browser knows the URL (<code>www.google.com</code>) and the IP (<code>142.250.185.68</code>).<hr><b>Step 2 — HTTP:</b> The browser creates the HTTP request:<pre>GET / HTTP/1.1\nHost: www.google.com</pre>Notice: <code>www.google.com</code> appears in the HTTP header, but <code>142.250.185.68</code> does <b>not</b> appear anywhere in the HTTP message.<hr><b>Step 3 — Syscall:</b> The browser calls:<pre>send(\n  socket,\n  &quot;GET / HTTP/1.1\r\nHost: www.google.com\r\n\r\n&quot;,\n  destination_ip = 142.250.185.68\n);</pre>The HTTP message is the <b>payload</b>. The IP is <b>metadata given to the OS</b> — it is not inside the HTTP header.<hr>Both DNS and HTTP are application-layer protocols."
  },

  {
    type: "flashcard",
    question: "What is the Transport layer?",
    answer: "The transport layer ensures reliable or best-effort data delivery between processes. It adds its own header (ports) to route data to the right application.<hr><b>Step 1 — TCP:</b> TCP receives:<pre>Payload:\nGET / HTTP/1.1\nHost: www.google.com\n\nDestination IP: 142.250.185.68</pre>TCP does not care what the IP means. It adds its own header:<pre>Source Port = 54321\nDestination Port = 443</pre>and passes everything down."
  },

  {
    type: "flashcard",
    question: "What is the Network layer?",
    answer: "The network layer routes packets from source to destination using IP addresses.<hr><b>Step 1 — IP:</b> Now IP receives:<pre>TCP segment\nDestination IP = 142.250.185.68</pre>Only now does the network layer use the IP. It adds its own header:<pre>IP Header\n----------\nSource IP      = 128.179.x.x\nDestination IP = 142.250.185.68</pre>and creates the IP packet."
  }
)