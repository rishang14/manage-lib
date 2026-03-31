

import Link from "next/link" 
import { FaGithub,FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="p-3">
        <div
          className="border-t  pt-2 flex items-center gap-2 justify-center"
        >
          <div className="flex items-center space-x-4">
            <div >
              <Link
                href="https://github.com/rishang14"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub/>
              </Link>
            </div>
            <div >
              <Link
                href="https://www.linkedin.com/in/rishang-kumar/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn/>
              </Link>
            </div>
          </div>
        </div>
            </footer>
  )
}