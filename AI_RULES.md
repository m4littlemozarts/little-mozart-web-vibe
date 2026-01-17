# AI Rules for Lovable Project

This document outlines the technical stack and specific library usage guidelines for this project. Adhering to these rules ensures consistency, maintainability, and leverages the strengths of our chosen technologies.

## Tech Stack Overview

*   **Vite**: Our fast build tool for development and production bundling.
*   **TypeScript**: The primary language for all application code, providing type safety and improved developer experience.
*   **React**: The core library for building user interfaces.
*   **Tailwind CSS**: Our utility-first CSS framework for styling all components and layouts.
*   **shadcn/ui**: A collection of beautifully designed, accessible, and customizable UI components built on Radix UI and styled with Tailwind CSS.
*   **React Router**: Used for declarative routing within the application.
*   **TanStack Query (React Query)**: For managing server state, including data fetching, caching, and synchronization.
*   **Zod & React Hook Form**: `Zod` for schema validation and `React Hook Form` for efficient form management.
*   **Lucide React**: A library providing a consistent set of SVG icons.
*   **Sonner**: Our preferred library for displaying elegant and accessible toast notifications.

## Library Usage Guidelines

To maintain a cohesive and efficient codebase, please follow these guidelines for library usage:

*   **UI Components**:
    *   **Always** prioritize `shadcn/ui` components for common UI elements (buttons, inputs, cards, dialogs, etc.).
    *   If a `shadcn/ui` component does not exist or requires significant deviation from its intended design, create a **new component** in `src/components/`.
    *   **Never** modify files within `src/components/ui/` directly.
*   **Styling**:
    *   **Exclusively** use **Tailwind CSS** utility classes for all styling. Custom CSS should be minimal and limited to `src/index.css` for global styles or specific overrides if absolutely necessary.
    *   Ensure designs are **responsive** by utilizing Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`).
*   **Routing**:
    *   Use `react-router-dom` for all client-side navigation.
    *   Define all primary application routes within `src/App.tsx`.
*   **Forms & Validation**:
    *   For form creation and state management, use `react-hook-form`.
    *   For defining form schemas and validating input, use `zod`.
*   **Data Management**:
    *   Use `TanStack Query` for fetching, caching, and updating server-side data. This helps manage loading states, error handling, and data synchronization efficiently.
*   **Icons**:
    *   Use icons from the `lucide-react` library.
*   **Toast Notifications**:
    *   Use `sonner` for displaying all toast notifications to the user.
*   **Utility Functions**:
    *   For combining Tailwind CSS classes conditionally, use the `cn` utility function from `src/lib/utils.ts`.
*   **Date Handling**:
    *   For any date manipulation or formatting, use `date-fns`.
*   **File Structure**:
    *   Place main application views in `src/pages/`.
    *   Place reusable UI components in `src/components/`.
    *   Place utility functions in `src/lib/`.
    *   Place custom React hooks in `src/hooks/`.