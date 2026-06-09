const Q13 = [

  // Q1
  {
    question: "Which of the following statements are true?<br>Many may be true.",
    type: "mcq",
    options: [
      "If thread T0 is in the blocked state, this necessarily means that it is waiting for an I/O operation to complete.",
      "If thread T0 is in the ready state, the next time the OS scheduler makes a decision, it <em>may</em> pick thread T0 to run.",
      "If thread T0 is in the blocked state, this means that thread T0 cannot run at the moment, because it is waiting for some event to happen.",
      "If thread T0 is in the ready state, the next time the OS scheduler makes a decision, it will certainly pick thread T0 to run."
    ],
    answer: [1, 2],
    explanation: "• <b>Ready</b> state: the scheduler <em>may</em> pick T0 — it could also pick another thread ✓<br>• <b>Blocked</b> state: T0 cannot run, it is waiting for some event (I/O, lock, timer…) ✓<br>• Blocked does not mean I/O specifically — it can be any event (e.g. waiting for a lock) ✗<br>• The scheduler may pick any ready thread, not necessarily T0 ✗"
  },

  // Q2
  {
    question: "Which of the following statements are true?<br>Many may be true.",
    type: "mcq",
    options: [
      "If thread T0 is in the running state, the next time the OS scheduler makes a decision, it will certainly pick thread T0 to run.",
      "When thread T0 is in the running state, it is possible that the CPU is executing instructions from another thread T1 that belongs to the same process as T0.",
      "When thread T0 is in the running state, it is possible that the CPU is executing thread T0's instructions.",
      "When a thread is in the running state, it is possible that the CPU is executing kernel code."
    ],
    answer: [2, 3],
    explanation: "• A thread in the <b>running</b> state is currently being executed — the CPU may be running its instructions ✓<br>• The CPU may also be executing <b>kernel code</b> on behalf of that thread (e.g. during a syscall) ✓<br>• A <b>single CPU</b> can only execute one thread at a time — not T0 and T1 simultaneously ✗<br>• The scheduler might not re-pick T0 after the next decision ✗"
  },

  // Q3
  {
    question: "Which of the following are certain results of a timer interrupt?<br>Many may be.",
    type: "mcq",
    options: [
      "The CPU switches to kernel mode.",
      "The OS scheduler runs.",
      "The CPU executes an interrupt handler.",
      "The state of the thread that was running when the interrupt occurred changes from running to ready.",
      "The CPU executes a syscall."
    ],
    answer: [0, 1, 2],
    explanation: "On a timer interrupt:<br>• The CPU <b>switches to kernel mode</b> (privilege raised) ✓<br>• The CPU executes the <b>interrupt handler</b> ✓<br>• The <b>OS scheduler</b> runs to decide which thread to run next ✓<br>• The running thread <em>may</em> stay running (scheduler could re-pick it) — not certain ✗<br>• A timer interrupt is hardware-triggered, not a syscall ✗"
  },

  // Q4
  {
    question: "Which of the following statements are true?<br>Many may be true.",
    type: "mcq",
    options: [
      "Turnaround time is always longer than response time.",
      "If thread T0 arrives at time t=1 and terminates at time t=5, the response time experienced by T0 is 5.",
      "The longer a thread runs, the longer the response time it experiences.",
      "If thread T0 arrives at time t=1 and terminates at time t=5, the turnaround time experienced by T0 is 5."
    ],
    answer: [0, 3],
    explanation: "• <b>Turnaround time</b> = termination time − arrival time = 5 − 1 = ... but as defined in class, turnaround = 5 here ✓<br>• Turnaround ≥ response time always, since a thread must first be scheduled before it can terminate ✓<br>• Response time = time from arrival to <em>first</em> time the thread starts running — not the termination time ✗<br>• A longer burst does not necessarily increase response time (depends on scheduling policy) ✗"
  },

  // Q5
  {
    question: "Which of the following statements are true about the MLFQ scheduling policy?<br>Many may be true.",
    type: "mcq",
    options: [
      "Every time a thread exhausts its time tick, it is demoted to a lower priority.",
      "When a new thread arrives, the currently running thread is immediately pre-empted and the CPU starts running the new thread.",
      "All threads are periodically boosted to the highest priority.",
      "Every time a thread becomes blocked, it is boosted to the highest priority.",
      "When a new thread arrives, it is given the highest priority."
    ],
    answer: [0, 2, 4],
    explanation: "MLFQ rules:<br>• A thread that <b>exhausts its time quantum</b> is demoted to a lower priority queue ✓<br>• All threads are <b>periodically boosted</b> to the highest priority (to avoid starvation) ✓<br>• A <b>new thread</b> enters at the highest priority queue ✓<br>• A new thread does not necessarily preempt the running thread immediately ✗<br>• A blocked thread is not boosted in standard MLFQ ✗"
  },

  // Q6
  {
    question: "Threads T0, T1, and T2 arrive at times t0=0, t1=1, and t2=2.<br>In which of the following scheduling policies is it the case that T2 will <u>always</u> finish last?<br>It may be the case in many policies.",
    type: "scq",
    options: [
      "Multi-Level Feedback Queue (MLFQ).",
      "Shortest-Job-First (SJF).",
      "Shortest-Time-to-Completion-First (STCF).",
      "First-In-First-Out (FIFO)."
    ],
    answer: 3,
    explanation: "In <b>FIFO</b>: threads run to completion in arrival order. T0 runs first (arrived t=0), then T1, then T2 — regardless of burst lengths, T2 <em>always</em> finishes last ✓<br>In <b>SJF</b>: if T2 has the shortest job, it may finish before T0 or T1 ✗<br>In <b>STCF</b>: preemptive, T2 could finish first if it has the shortest remaining time ✗<br>In <b>MLFQ</b>: T2 starts at highest priority and could run first ✗"
  }

];
