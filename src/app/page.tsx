"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Shield, Users } from "lucide-react";
import {
  roleCategories,
  allRoles,
  getUniquePermissionsForRole,
  groupPermissions,
  type Role,
  type Permission,
} from "@/lib/data";

type GroupByOption = "productCategory" | "taskCategory" | "actionType";

export default function RolesPermissionsPage() {
  const [selectedRole, setSelectedRole] = useState<Role>(allRoles[0]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(roleCategories.map((c) => c.name))
  );
  const [groupBy, setGroupBy] = useState<GroupByOption>("productCategory");

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryName)) {
        next.delete(categoryName);
      } else {
        next.add(categoryName);
      }
      return next;
    });
  };

  const rolePermissions = getUniquePermissionsForRole(selectedRole.id);
  const groupedPermissions = groupPermissions(rolePermissions, groupBy);

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Roles and permissions
          </h1>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors">
            New role
          </button>
        </div>
        {/* Wireframe description placeholder */}
        <div className="mt-3 space-y-2">
          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
        </div>
      </header>

      {/* Main content - 3 panels */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Roles List */}
        <aside className="w-64 border-r border-gray-200 overflow-y-auto flex-shrink-0">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Roles</h2>
              <Users className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-1">
              {roleCategories.map((category) => (
                <div key={category.name}>
                  {/* Category header */}
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      {expandedCategories.has(category.name) ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                      <span>{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                      {category.roles.length}
                    </span>
                  </button>

                  {/* Roles in category */}
                  {expandedCategories.has(category.name) && (
                    <div className="ml-6 space-y-0.5">
                      {category.roles.map((role) => (
                        <button
                          key={role.id}
                          onClick={() => setSelectedRole(role)}
                          className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                            selectedRole.id === role.id
                              ? "bg-indigo-50 text-indigo-700 font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {role.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Middle Panel - Role Details */}
        <section className="w-80 border-r border-gray-200 overflow-y-auto flex-shrink-0 bg-gray-50">
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedRole.name}
              </h2>
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                {rolePermissions.length}
              </span>
            </div>

            {/* Wireframe description */}
            <div className="space-y-2 mb-6">
              <div className="h-2 bg-gray-300 rounded w-full"></div>
              <div className="h-2 bg-gray-300 rounded w-4/5"></div>
            </div>

            {/* Can section */}
            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Can</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
              </div>
            </div>

            {/* Cannot section */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Cannot</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel - Permissions */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gray-500" />
                <h2 className="text-lg font-medium text-gray-900">Permissions</h2>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {rolePermissions.length}
                </span>
              </div>

              {/* Group by dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-500">Group by:</label>
                <select
                  value={groupBy}
                  onChange={(e) => setGroupBy(e.target.value as GroupByOption)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="productCategory">Product Category</option>
                  <option value="taskCategory">Task Category</option>
                  <option value="actionType">Action Type</option>
                </select>
              </div>
            </div>

            {/* Grouped permissions list */}
            <div className="space-y-6">
              {Object.entries(groupedPermissions)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([groupName, perms]) => (
                  <div key={groupName}>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      {groupName}
                    </h3>
                    <div className="space-y-2">
                      {perms.map((permission) => (
                        <PermissionCard
                          key={permission.id}
                          permission={permission}
                          roleId={selectedRole.id}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {rolePermissions.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <Shield className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No permissions assigned to this role</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function PermissionCard({
  permission,
  roleId,
}: {
  permission: Permission;
  roleId: string;
}) {
  const access = permission.roleAccess[roleId];
  const accessLabel =
    access === "read"
      ? "Read"
      : access === "write"
      ? "Write"
      : access?.includes("read") && access?.includes("write")
      ? "Read + Write"
      : access || "None";

  const sensitivityColors: Record<string, string> = {
    "Non-sensitive": "bg-gray-100 text-gray-600",
    "Payment credentials": "bg-amber-100 text-amber-700",
    "Contains PII": "bg-red-100 text-red-700",
    "Financial data": "bg-blue-100 text-blue-700",
    "Financial data + PII": "bg-purple-100 text-purple-700",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-900">
            {permission.name.replace(/_/g, " ")}
          </h4>
          <p className="text-xs text-gray-500 mt-0.5">{permission.description}</p>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${
            access === "write" || access?.includes("write")
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {accessLabel}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span
          className={`text-xs px-2 py-0.5 rounded ${
            sensitivityColors[permission.sensitivityLevel] ||
            "bg-gray-100 text-gray-600"
          }`}
        >
          {permission.sensitivityLevel}
        </span>
        <span className="text-xs text-gray-400">•</span>
        <span className="text-xs text-gray-500">{permission.actionType}</span>
      </div>
    </div>
  );
}
