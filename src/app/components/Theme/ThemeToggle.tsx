// // components/ThemeToggle.tsx

// // "use client";

// // import { useTheme } from "next-themes";
// // import { useEffect, useState } from "react";

// // import { MdSunny } from "react-icons/md";
// // import { FaMoon } from "react-icons/fa";

// // export default function ThemeToggle() {
// //   const { theme, setTheme } = useTheme();
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   if (!mounted) return null;

// //   return (
// //     <div>
// //       <button
// //         className="text-black border-2"
// //         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
// //       >
// //         {theme}
// //         <FaMoon />
// //         <MdSunny />
// //       </button>
// //     </div>
// //   );
// // }

// // components/ThemeToggle.tsx
// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { MdSunny } from "react-icons/md";
// import { FaMoon } from "react-icons/fa";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <button
//       className="relative w-20 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       aria-label="Toggle theme"
//     >
//       <div className="absolute inset-0 flex items-center justify-between px-1">
//         <MdSunny className="text-yellow-500 w-5 h-5" />
//         <FaMoon className="text-blue-400 w-4 h-4" />
//       </div>
//       <div
//         className={`absolute top-[1.9px] w-7 h-7 rounded-full bg-white dark:bg-gray-300 shadow-md transform transition-transform duration-300 ${
//           theme === "light" ? "translate-x-0.5" : "translate-x-[50px]"
//         }`}
//       />
//     </button>
//   );
// }

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className=" cursor-pointer relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-300 shadow-sm transform transition-transform duration-300 ${
          theme === "light" ? "translate-x-0" : "translate-x-6"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-between px-1">
        <MdSunny className="text-yellow-500 w-3 h-3" />
        <FaMoon className="text-blue-400 w-3 h-3" />
      </div>
    </button>
  );
}
