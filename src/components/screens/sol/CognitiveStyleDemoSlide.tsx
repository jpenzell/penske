import { StaticAIResult } from "@/components/StaticAIResult";

export const CognitiveStyleDemoSlide = () => (
  <div className="flex-1 flex flex-col items-center justify-center animate-fade-in px-6 py-2">
    <div className="w-full max-w-7xl space-y-4">
      <div className="text-center space-y-2">
        <p className="slide-kicker text-accent">Role framing</p>
        <h1 className="slide-title font-display font-light text-foreground">
          You don't need a different language. <span className="italic text-primary">Just a different role.</span>
        </h1>
      </div>

      <StaticAIResult
        variant="split"
        panelA={{
          label: "No role",
          prompt: "A new training program has low completion after three weeks. What's the first thing we should do?",
          cached:
            "Review the completion data, send reminders, and ask managers to reinforce the deadline.",
        }}
        panelB={{
          label: "With a role",
          prompt:
            "As an L&D leader focused on learner performance, a new training program has low completion after three weeks. What's the first thing we should do?",
          cached:
            "Talk with learners and managers, find the barrier in the workflow, and redesign the experience around the moment of need.",
        }}
      />

      <p className="text-center slide-body text-muted-foreground max-w-3xl mx-auto">
        Same model, same facts — the role changes what comes first.
      </p>
    </div>
  </div>
);
