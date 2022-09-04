import Link from "next/link";
import srhtLogo from "../../public/images/sourcehut.webp";
import ghLogo from "../../public/images/github.webp";
import Image from "next/image";

export default function ForgeMenu() {
  return (
    <div>
      <div className="flex flex-wrap place-items-center justify-center gap-4 pb-2">
        Click on a logo to see projects from that forge.
      </div>
      <div className="flex flex-wrap place-items-center justify-center gap-4">
        <Link href="/projects/srht">
          <a className="hover:bg-gray-200 dark:hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
            <div className="content-center logo-color">
              <Image
                src={srhtLogo}
                alt="Sourcehut Logo"
                className="rounded-lg object-scale"
                priority
                width={140}
                height={140}
                placeholder="blur"
              />
            </div>
          </a>
        </Link>
        <Link href="/projects/gh">
          <a className="hover:bg-gray-200 dark:hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
            <div className="content-center logo-color">
              <Image
                src={ghLogo}
                alt="GitHub Logo"
                className="rounded-lg object-scale"
                priority
                width={140}
                height={140}
                placeholder="blur"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
