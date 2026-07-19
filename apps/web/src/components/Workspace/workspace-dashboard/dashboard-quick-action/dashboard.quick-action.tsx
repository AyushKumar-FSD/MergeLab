"use client";

import { FolderOpen, Plus } from "lucide-react";

export default function QuickActions() {
  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Start something new or continue working on an existing project.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {/* Create New Project */}
        <button
          type="button"
          className="group flex min-h-44 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Plus size={24} strokeWidth={2} />
            </div>

            <span className="text-sm font-medium text-slate-400 transition-colors group-hover:text-slate-900">
              Create →
            </span>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Create New Project
            </h3>

            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
              Start a new project from scratch and begin building immediately.
            </p>
          </div>
        </button>

        {/* Open Local Project */}
        <button
          type="button"
          className="group flex min-h-44 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
              <FolderOpen size={24} strokeWidth={2} />
            </div>

            <span className="text-sm font-medium text-slate-400 transition-colors group-hover:text-slate-900">
              Open →
            </span>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Open Local Project
            </h3>

            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
              Import an existing project from your local computer and continue
              where you left off.
            </p>
          </div>
        </button>

      </div>
    </section>
  );
}