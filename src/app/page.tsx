"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Shield, Search, MoreHorizontal, CheckCircle, XCircle } from "lucide-react";

// Office/Org icon SVG
function OrgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2.75C0 1.23122 1.23122 0 2.75 0H8C9.51878 0 10.75 1.23122 10.75 2.75V3C10.75 3.41421 10.4142 3.75 10 3.75C9.58579 3.75 9.25 3.41421 9.25 3V2.75C9.25 2.05964 8.69036 1.5 8 1.5H2.75C2.05964 1.5 1.5 2.05964 1.5 2.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H4.25C4.66421 14.5 5 14.8358 5 15.25C5 15.6642 4.66421 16 4.25 16H1.75C0.783502 16 0 15.2165 0 14.25V2.75ZM10.8525 5.864C11.0957 5.712 11.4043 5.712 11.6475 5.864L15.6475 8.364C15.8668 8.50105 16 8.74141 16 9V14.25C16 15.2165 15.2165 16 14.25 16H8.25C7.2835 16 6.5 15.2165 6.5 14.25V9C6.5 8.74141 6.63321 8.50105 6.8525 8.364L10.8525 5.864ZM8 9.41569V14.25C8 14.3881 8.11193 14.5 8.25 14.5H10.5V13C10.5 12.5858 10.8358 12.25 11.25 12.25C11.6642 12.25 12 12.5858 12 13V14.5H14.25C14.3881 14.5 14.5 14.3881 14.5 14.25V9.41569L11.25 7.38444L8 9.41569Z" fill="#6C7688"/>
      <path d="M3 4.5C3 3.94772 3.44772 3.5 4 3.5C4.55228 3.5 5 3.94772 5 4.5C5 5.05228 4.55228 5.5 4 5.5C3.44772 5.5 3 5.05228 3 4.5Z" fill="#6C7688"/>
      <path d="M3 8C3 7.44772 3.44772 7 4 7C4.55228 7 5 7.44772 5 8C5 8.55228 4.55228 9 4 9C3.44772 9 3 8.55228 3 8Z" fill="#6C7688"/>
      <path d="M6 4.5C6 3.94772 6.44772 3.5 7 3.5C7.55228 3.5 8 3.94772 8 4.5C8 5.05228 7.55228 5.5 7 5.5C6.44772 5.5 6 5.05228 6 4.5Z" fill="#6C7688"/>
      <path d="M3 11.5C3 10.9477 3.44772 10.5 4 10.5C4.55228 10.5 5 10.9477 5 11.5C5 12.0523 4.55228 12.5 4 12.5C3.44772 12.5 3 12.0523 3 11.5Z" fill="#6C7688"/>
    </svg>
  );
}
import {
  roleCategories,
  allRoles,
  getUniquePermissionsForRole,
  groupPermissions,
  type Role,
  type Permission,
} from "@/lib/data";

type GroupByOption = "productCategory" | "taskCategory" | "actionType";

// Wireframe nav item component
function NavItem({ hasIcon = true }: { hasIcon?: boolean }) {
  return (
    <div className="flex items-center gap-2 w-full">
      {hasIcon && (
        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
          <div className="w-4 h-4 rounded-full bg-[#EBEEF1]" />
        </div>
      )}
      <div className="py-1.5">
        <div className="h-2 bg-[#EBEEF1] rounded-lg w-[93px]" />
      </div>
    </div>
  );
}

// Global Top Bar Component
function Topbar() {
  return (
    <header className="bg-white flex items-center justify-between py-3 flex-shrink-0">
      {/* Search field placeholder */}
      <div className="flex items-center gap-6">
        <div className="bg-[#F5F6F8] h-9 w-[360px] rounded-lg opacity-80" />
      </div>
      
      {/* Right icons */}
      <div className="flex items-center gap-4">
        <div className="w-4 h-4 rounded-full bg-[#EBEEF1]" />
        <div className="w-4 h-4 rounded-full bg-[#EBEEF1]" />
      </div>
    </header>
  );
}

// Side Navigation Component
function SideNav() {
  return (
    <aside className="w-[240px] h-full flex flex-col justify-between px-5 py-4 bg-white border-r border-[rgba(0,39,77,0.08)] flex-shrink-0">
      {/* Top section */}
      <div className="flex flex-col gap-[42px]">
        {/* Account Switcher */}
        <div className="flex items-center gap-2 h-9">
          <div className="w-6 h-6 bg-[#F5F6F8] rounded flex items-center justify-center">
            <OrgIcon />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-[#353A44] leading-4 tracking-[-0.024px]">
                Acme, Inc.
              </span>
              <ChevronDown className="w-3 h-3 text-[#6C7688]" />
            </div>
            <span className="text-xs text-[#596171] leading-4 truncate">
              Organization
            </span>
          </div>
        </div>

        {/* Nav sections */}
        <div className="flex flex-col gap-6">
          {/* First nav group */}
          <div className="flex flex-col gap-1.5">
            <NavItem />
            <NavItem />
            <NavItem />
          </div>

          {/* Second nav group with section header */}
          <div className="flex flex-col gap-1.5">
            {/* Section header (no icon) */}
            <div className="h-6 flex items-center py-1.5">
              <div className="h-2 bg-[#EBEEF1] rounded-full w-[93px]" />
            </div>
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
          </div>
        </div>
      </div>

      {/* Bottom nav item */}
      <NavItem />
    </aside>
  );
}

export default function RolesPermissionsPage() {
  const [selectedRole, setSelectedRole] = useState<Role>(allRoles[0]);
  // Only one category can be expanded at a time (accordion behavior)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(roleCategories[0]?.name || null);
  const [groupBy, setGroupBy] = useState<GroupByOption>("productCategory");

  const toggleCategory = (categoryName: string) => {
    // If clicking the already expanded category, collapse it; otherwise expand clicked category
    setExpandedCategory((prev) => prev === categoryName ? null : categoryName);
  };

  const rolePermissions = getUniquePermissionsForRole(selectedRole.id);
  const groupedPermissions = groupPermissions(rolePermissions, groupBy);

  return (
    <div className="h-screen flex bg-white">
      {/* Side Navigation - full height */}
      <SideNav />

      {/* Right side: Topbar + Content */}
      <div className="flex-1 flex flex-col gap-5 px-8 pb-8 overflow-hidden">
        {/* Global Top Bar */}
        <Topbar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-8 overflow-hidden">
        {/* Header */}
        <header className="flex-shrink-0">
          <div className="flex flex-col gap-2">
            {/* Title row */}
            <div className="flex items-center gap-2">
              <h1 className="flex-1 text-[28px] font-bold text-[#353A44] leading-9 tracking-[0.38px]">
                Roles and permissions
              </h1>
              <button className="px-3 py-1.5 bg-[#635BFF] text-white text-sm font-semibold rounded-md hover:bg-[#5851DB] transition-colors shadow-[0_1px_1px_rgba(47,14,99,0.32)]">
                Add role
              </button>
            </div>
            {/* Wireframe description placeholder */}
            <div className="flex flex-col gap-2.5 py-1.5 w-[640px]">
              <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
              <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
            </div>
          </div>
        </header>

        {/* Main content - 3 panels */}
        <div className="flex flex-1 gap-6 overflow-hidden">
        {/* Left Panel - Roles List */}
        <aside className="w-[240px] overflow-y-auto flex-shrink-0 pt-6">
          {/* Header */}
          <div className="flex items-center gap-2.5 pb-4 border-b border-[#EBEEF1]">
            <h2 className="flex-1 text-[16px] font-bold text-[#353A44] leading-6 tracking-[-0.31px]">Roles</h2>
            <Search className="w-4 h-4 text-[#474E5A]" />
          </div>

          {/* Categories */}
          <div className="flex flex-col">
            {roleCategories.map((category) => {
              const isExpanded = expandedCategory === category.name;
              return (
                <div 
                  key={category.name} 
                  className={`border-b border-[#EBEEF1] ${isExpanded ? 'py-4' : 'py-1'}`}
                >
                  {/* Category header */}
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center gap-2 px-2 py-1 rounded-md hover:bg-[#F5F6F8] transition-colors"
                  >
                    <span className="flex-1 text-left text-[14px] font-semibold text-[#353A44] leading-5 tracking-[-0.15px]">
                      {category.name}
                    </span>
                    <span className="text-[12px] text-[#596171] leading-4 min-w-[16px] px-1 text-center">
                      {category.roles.length}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#474E5A]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#474E5A]" />
                    )}
                  </button>

                  {/* Roles in category */}
                  {isExpanded && (
                    <div className="flex flex-col gap-px mt-px">
                      {category.roles.map((role) => (
                        <button
                          key={role.id}
                          onClick={() => setSelectedRole(role)}
                          className={`w-full text-left px-2 py-1 text-[14px] leading-5 tracking-[-0.15px] rounded-md transition-colors ${
                            selectedRole.id === role.id
                              ? "bg-[#F7F5FD] text-[#533AFD]"
                              : "text-[#353A44] hover:bg-[#F5F6F8]"
                          }`}
                        >
                          {role.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Shared Container for Role Details + Permissions */}
        <div className="flex-1 flex gap-4 p-2 bg-[#F5F6F8] rounded-xl overflow-hidden">
          {/* Role Details Panel */}
          <section className="flex-1 flex flex-col gap-6 p-4 overflow-y-auto">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h2 className="flex-1 text-[16px] font-bold text-[#353A44] leading-6 tracking-[-0.31px]">
                  {selectedRole.name}
                </h2>
                <span className="bg-white text-[12px] text-[#596171] leading-4 min-w-[16px] px-1 rounded-full text-center">
                  {rolePermissions.length}
                </span>
                <MoreHorizontal className="w-6 h-6 text-[#474E5A]" />
              </div>
              {/* Wireframe description */}
              <div className="flex flex-col gap-2.5 py-1.5">
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
              </div>
            </div>

            {/* Can section */}
            <div className="bg-white rounded-lg p-4 h-36">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#474E5A]" />
                <span className="text-[14px] font-semibold text-[#353A44] leading-5 tracking-[-0.15px]">Can</span>
              </div>
              <div className="flex flex-col gap-2.5 py-1.5">
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
              </div>
            </div>

            {/* Cannot section */}
            <div className="bg-white rounded-lg p-4 h-36">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-[#474E5A]" />
                <span className="text-[14px] font-semibold text-[#353A44] leading-5 tracking-[-0.15px]">Cannot</span>
              </div>
              <div className="flex flex-col gap-2.5 py-1.5">
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
                <div className="h-2 bg-[#EBEEF1] rounded-lg w-full"></div>
              </div>
            </div>
          </section>

          {/* Permissions Panel */}
          <main className="flex-1 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-[0px_3px_6px_rgba(0,0,0,0.12),0px_7px_14px_rgba(48,49,61,0.08)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#474E5A]" />
              <h2 className="flex-1 text-[16px] font-bold text-[#353A44] leading-6 tracking-[-0.31px]">Permissions</h2>
              <span className="bg-[#F5F6F8] text-[12px] text-[#596171] leading-4 min-w-[16px] px-1 rounded-full text-center">
                {rolePermissions.length}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <select
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value as GroupByOption)}
                className="text-[14px] border border-[#D8DEE4] rounded-md px-2 py-1 bg-white text-[#353A44] focus:outline-none"
              >
                <option value="productCategory">Product</option>
                <option value="taskCategory">Task</option>
                <option value="actionType">Action</option>
              </select>
              <div className="flex-1 flex items-center gap-2 border border-[#D8DEE4] rounded-md px-2 py-1">
                <Search className="w-4 h-4 text-[#818DA0]" />
                <span className="text-[14px] text-[#818DA0] leading-5 tracking-[-0.15px]">Search</span>
              </div>
            </div>

            {/* Grouped permissions list */}
            <div className="flex-1 overflow-y-auto flex flex-col gap-4">
              {Object.entries(groupedPermissions)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([groupName, perms]) => (
                  <div key={groupName} className="flex flex-col gap-2">
                    <h3 className="text-[12px] font-semibold text-[#353A44] leading-4 tracking-[-0.024px]">
                      {groupName}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {perms.map((permission) => (
                        <PermissionItem
                          key={permission.id}
                          permission={permission}
                          roleId={selectedRole.id}
                        />
                      ))}
                    </div>
                  </div>
                ))}

              {rolePermissions.length === 0 && (
                <div className="text-center py-12 text-[#596171]">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-[#EBEEF1]" />
                  <p>No permissions assigned to this role</p>
                </div>
              )}
            </div>
          </main>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

function PermissionItem({
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
      : access || "—";

  return (
    <div className="bg-[#F5F6F8] rounded px-4 py-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-[14px] font-medium text-[#353A44] leading-5 tracking-[-0.15px] capitalize">
            {permission.name.replace(/_/g, " ")}
          </h4>
          <p className="text-[12px] text-[#596171] leading-4 mt-0.5 truncate">
            {permission.description}
          </p>
        </div>
        <span
          className={`text-[12px] font-medium px-2 py-0.5 rounded flex-shrink-0 ${
            access === "write" || access?.includes("write")
              ? "bg-[#D3F8DF] text-[#1D7C4D]"
              : "bg-[#D4E5FF] text-[#0055BC]"
          }`}
        >
          {accessLabel}
        </span>
      </div>
    </div>
  );
}
