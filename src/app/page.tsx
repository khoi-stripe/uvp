"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react";

// Custom SVG Icons
function CheckCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.2803 5.21967C12.5732 5.51256 12.5732 5.98744 12.2803 6.28033L7.53033 11.0303C7.23744 11.3232 6.76256 11.3232 6.46967 11.0303L3.96967 8.53033C3.67678 8.23744 3.67678 7.76256 3.96967 7.46967C4.26256 7.17678 4.73744 7.17678 5.03033 7.46967L7 9.43934L11.2197 5.21967C11.5126 4.92678 11.9874 4.92678 12.2803 5.21967Z" fill="#474E5A"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 14.5C11.5903 14.5 14.5 11.5903 14.5 7.99999C14.5 4.40834 11.6 1.5 8 1.5C4.4097 1.5 1.5 4.40969 1.5 7.99999C1.5 11.5903 4.4097 14.5 8 14.5ZM8 16C12.4187 16 16 12.4187 16 7.99999C16 3.58126 12.4297 0 8 0C3.58127 0 0 3.58126 0 7.99999C0 12.4187 3.58127 16 8 16Z" fill="#474E5A"/>
    </svg>
  );
}

function CancelCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L6.93934 8L4.46967 10.4697C4.17678 10.7626 4.17678 11.2374 4.46967 11.5303C4.76256 11.8232 5.23744 11.8232 5.53033 11.5303L8 9.06066L10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L9.06066 8L11.5303 5.53033C11.8232 5.23744 11.8232 4.76256 11.5303 4.46967C11.2374 4.17678 10.7626 4.17678 10.4697 4.46967L8 6.93934L5.53033 4.46967Z" fill="#474E5A"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 7.99999C16 12.4187 12.4187 16 8 16C3.58127 16 0 12.4187 0 7.99999C0 3.58126 3.58127 0 8 0C12.4297 0 16 3.58126 16 7.99999ZM14.5 7.99999C14.5 11.5903 11.5903 14.5 8 14.5C4.4097 14.5 1.5 11.5903 1.5 7.99999C1.5 4.40969 4.4097 1.5 8 1.5C11.6 1.5 14.5 4.40834 14.5 7.99999Z" fill="#474E5A"/>
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.88334 9.08539C7.06854 9.6615 6.0738 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 6.07379 9.66151 7.06852 9.08542 7.88331L11.7511 10.549C11.9187 10.7166 12.0017 10.9368 12 11.1564C11.9984 11.3718 11.9154 11.5867 11.7511 11.751C11.5847 11.9174 11.3665 12.0004 11.1485 12C10.9315 11.9996 10.7146 11.9166 10.549 11.751L7.88334 9.08539ZM8.3 5C8.3 6.82254 6.82254 8.3 5 8.3C3.17746 8.3 1.7 6.82254 1.7 5C1.7 3.17746 3.17746 1.7 5 1.7C6.82254 1.7 8.3 3.17746 8.3 5Z" fill="currentColor"/>
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.358 6.18917C11.6005 5.85338 11.5249 5.38456 11.1891 5.14205C10.8533 4.89953 10.3845 4.97514 10.142 5.31094L7.43596 9.05776L5.80748 7.24833C5.53038 6.94045 5.05617 6.91549 4.74828 7.19258C4.4404 7.46968 4.41544 7.9439 4.69254 8.25178L6.94254 10.7518C7.09418 10.9203 7.31388 11.0111 7.54024 10.999C7.76659 10.9868 7.9753 10.8729 8.10802 10.6892L11.358 6.18917Z" fill="#474E5A"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.82822 14.2188L7.08401 15.7227C7.35528 15.9035 7.67401 16 8.00003 16C8.32606 16 8.64479 15.9035 8.91606 15.7227L11.1718 14.2188C13.267 12.822 14.5822 10.5203 14.7219 8.00617L14.9707 3.52775C14.9866 3.24115 14.7588 2.9985 14.4766 2.94568C12.7465 2.62173 9.96846 0.936793 8.91934 0.271047C8.64407 0.096362 8.32606 0 8.00003 0C7.67401 0 7.356 0.0963626 7.08072 0.271048C6.03161 0.936798 3.25355 2.62174 1.52342 2.94568C1.24128 2.99851 1.01343 3.24115 1.02935 3.52775L1.27815 8.00617C1.41783 10.5203 2.73308 12.822 4.82822 14.2188ZM2.77584 7.92296L2.57044 4.22569C3.47509 3.94652 4.43732 3.49215 5.25264 3.06572C6.34631 2.49371 7.34214 1.88169 7.88443 1.53756C7.92989 1.50871 7.97084 1.5 8.00003 1.5C8.02923 1.5 8.07017 1.50871 8.11564 1.53756C8.65793 1.88169 9.65376 2.4937 10.7474 3.06571C11.5628 3.49215 12.525 3.94651 13.4296 4.22569L13.2242 7.92296C13.1107 9.96573 12.0421 11.8359 10.3398 12.9707L8.084 14.4746C8.05914 14.4912 8.02992 14.5 8.00003 14.5C7.97015 14.5 7.94093 14.4912 7.91606 14.4746L5.66027 12.9707C3.95797 11.8359 2.88933 9.96573 2.77584 7.92296Z" fill="#474E5A"/>
    </svg>
  );
}

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
            <SearchIcon className="text-[#474E5A]" />
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
                <CheckCircleIcon />
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
                <CancelCircleIcon />
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
              <ShieldCheckIcon />
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
                <SearchIcon className="text-[#818DA0]" />
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
                  <div className="w-12 h-12 mx-auto mb-4 text-[#EBEEF1]"><ShieldCheckIcon /></div>
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
