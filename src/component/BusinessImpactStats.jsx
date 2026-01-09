import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const BusinessImpactStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const stats = [
    { value: 250, suffix: "+", label: "Live Projects Delivered" },
    { value: 92, suffix: "%", label: "Client Retention Rate" },
    { value: 3.2, suffix: "x", label: "Average Conversion Lift" },
    { value: 98, suffix: "/100", label: "Lighthouse Performance Score" },
  ];

  return (
    <section className="bg-slate-950 py-20 px-6 md:px-12 lg:px-20">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Design That Creates{" "}
            <span className="text-blue-500">Real Business Impact</span>
          </h2>

          <p className="text-lg text-slate-300 mb-3">
            We don’t measure success by aesthetics.
          </p>
          <p className="text-lg text-slate-300">
            We measure it by growth, conversions, and performance.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-2">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
                {stat.suffix}
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactStats;
