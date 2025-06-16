// import React from "react";

// const page = () => {
//   return <div>About Page</div>;
// };

// export default page;

// app/about/page.tsx
export default async function AboutPage() {
  // simulate 2-second delay
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1>អំពីពួកយើង</h1>
      <p>នេះគឺជាក្រុម Dev ដែលស្រលាញ់ Next.js</p>
    </div>
  );
}
