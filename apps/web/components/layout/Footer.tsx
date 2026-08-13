import Link from "next/link";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap-reverse justify-between gap-6">
          <div>Copyright &copy; 2026. All right reserved</div>
          <div className="flex gap-4 text-sm opacity-60">
            <Link href={"#"}>Terms & Conditions</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Contact</Link>
          </div>
        </div>
      </div>
      <Separator className="opacity-40" />
      <div className="px-4 py-10 text-center">
        <span className="select-none font-bold font-heading text-[10vw] leading-none opacity-60">
          LOGO
        </span>
      </div>
    </footer>
  );
};

export default Footer;
