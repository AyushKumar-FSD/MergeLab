"use client";

import { Search } from "lucide-react";

const WorkspaceHeader = () => {
    return (
        <header className="h-16 w-full border-b border-slate-200 bg-white"> <div className="flex h-full items-center justify-between px-6 lg:px-10">

        {/* Workspace Title */}
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            User's Workspace
        </h1>

        {/* Search */}
        <div className="relative w-full max-w-xs">
            <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                type="text"
                placeholder="Search workspace..."
                className="h-10 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
        </div>

    </div>
    </header>

);
};

export default WorkspaceHeader;
