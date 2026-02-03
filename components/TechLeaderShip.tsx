"use client";

import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { NumberTicker } from "./ui/NumberTicker";
import { SimpleBentoGrid, SimpleBentoItem } from "./ui/SimpleBentoGrid";
import { Spotlight } from "./ui/Spotlight";
import { SpotlightCard } from "./ui/SpotlightCard";

export const TechLeadership = () => {
  return (
    <section className="w-full pt-32 pb-20" id="leadership">
      <div className="flex flex-col items-center">
        {/* Heading with subtle spotlight */}
        <div className="w-full flex flex-col items-center">
          <h1 className="heading lg:max-w-[75vw] text-center">
            Tech Lead & <span className="text-purple">System Architect</span>
          </h1>

          <p className="text-white-200 md:mt-8 my-5 max-w-[60ch] text-center">
            I lead with clarity and empathy – designing scalable systems,
            mentoring developers, and driving architectural decisions that last.
            My focus is on building predictable, observable, and secure systems
            that teams can trust and grow with.
          </p>
        </div>

        {/* Leadership Pillars */}
        <div className="mt-14 w-full max-w-[70rem]">
          <SimpleBentoGrid className="grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leadership Pillars */}
            <SimpleBentoItem
              title="Architecture Ownership"
              description="I design clear domain boundaries, scalable APIs, and cloud setups that are cost-aware, observable, and easy to extend."
              className="bg-white/5 backdrop-blur-sm border border-white/10"
            />
            <SimpleBentoItem
              title="Code Quality & Reviews"
              description="I review PRs with intention – focusing on clarity, maintainability, and long-term impact rather than just green builds."
              className="bg-white/5 backdrop-blur-sm border border-white/10"
            />
            <SimpleBentoItem
              title="Team Enablement"
              description="I unblock developers, clarify requirements, and create structures that let others move fast without breaking the system."
              className="bg-white/5 backdrop-blur-sm border border-white/10"
            />
            <SimpleBentoItem
              title="Predictable Delivery"
              description="Every feature ships with a rollback strategy, observability, and clear ownership – so teams can deliver with confidence."
              className="bg-white/5 backdrop-blur-sm border border-white/10"
            />
          </SimpleBentoGrid>
        </div>

        {/* GitHub Contributions */}
        <h2 className="heading lg:max-w-[75vw] pt-20 text-center">
          GitHub Contributions
        </h2>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-10 mt-12 text-white-200">
          <SpotlightCard className="p-6 rounded-xl bg-white/5 border border-white/10 w-40 flex flex-col items-center">
            <span className="text-4xl font-bold text-purple">
              <NumberTicker value={93} />
            </span>
            <p className="text-sm uppercase tracking-wide mt-1">Commits</p>
            <p className="text-xs text-white-300 mt-1 text-center">
              Consistent delivery across backend & frontend.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 rounded-xl bg-white/5 border border-white/10 w-40 flex flex-col items-center">
            <span className="text-4xl font-bold text-purple">
              <NumberTicker value={18} />
            </span>
            <p className="text-sm uppercase tracking-wide mt-1">PR Reviews</p>
            <p className="text-xs text-white-300 mt-1 text-center">
              Guiding architecture, quality, and team alignment.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 rounded-xl bg-white/5 border border-white/10 w-40 flex flex-col items-center">
            <span className="text-4xl font-bold text-purple">
              <NumberTicker value={4} />
            </span>
            <p className="text-sm uppercase tracking-wide mt-1">Major PRs</p>
            <p className="text-xs text-white-300 mt-1 text-center">
              Real-time messaging, API design, and system setup.
            </p>
          </SpotlightCard>
        </div>

        {/* Case Study */}
        <SpotlightCard className="max-w-[70ch] mt-16 p-8 bg-white/5 border border-white/10 text-white-200 text-center rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-purple">
            PulseCare Messaging Platform
          </h3>
          <p className="text-sm md:text-base">
            Led backend and frontend development of real-time messaging
            features. Designed conversation and chat APIs, coordinated
            architecture decisions, and reviewed PRs to ensure scalability,
            clarity, and a smooth developer experience across the system.
          </p>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default TechLeadership;
