import React from "react";

export default function DashboardChart() {
  return (
    <section>
      <div class="w-[] mt-6">
        <div>
          <canvas id="chart-line" height="200" className="bg-red-500"></canvas>
        </div>
      </div>
    </section>
  );
}
