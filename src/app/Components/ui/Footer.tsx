import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <section className="w-full">
            <div
                className="
            w-full border-t border-gray-800 
            px-6 md:px-0 lg:px-28
            py-6
            flex flex-col md:grid 
            md:grid-cols-3 md:items-center
            gap-6 md:gap-0

          "
            >
                 <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-center md:justify-start relative -left-24 md:left-0">
                    <Link
                        href="https://codepen.io/sujitkoji"
                    >
                        CODEPEN
                    </Link>
                    <Link
                        href="https://www.shadertoy.com/user/sujitkoji"
                    >
                        SHADER TOY
                    </Link>
                </div>

                 <div className="flex justify-center order-last md:order-none">
                    <p className="text-[#cacaca] text-sm md:text-base text-center">
                        © 2025 SUJITKOJI. All rights reserved.
                    </p>
                </div>

                 <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-center md:justify-end relative -right-24 md:right-0 -mt-20 md:mt-0">
                    <Link
                        href="https://github.com/sujitkumarrdev"
                    >
                        GITHUB
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/sujitkumarrdev"
                    >
                        LINKEDIN
                    </Link>

                    <Link
                        href="https://twitter.com/sujitkoji"
                    >
                        X / TWITTER
                    </Link>
                </div>
            </div>
        </section>
    )
}


