import Logo from "./Logo"
import Button from "./Button"
import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <div>
                <div>
                    <Logo/>
                    <ul>
                        <li>
                            <Link href={""}>
                                <p>
                                    About Us
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <p>
                                    About Us
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <p>
                                    About Us
                                </p>
                            </Link>
                        </li>
                    </ul>
                    <Button/>
                </div>
            </div>
        </div>
    )
}