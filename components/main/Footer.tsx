import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Sondarva Sanjay. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), ThreeJS, TypeScript, Tailwind CSS,
        Framer Motion,SVG animation, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer