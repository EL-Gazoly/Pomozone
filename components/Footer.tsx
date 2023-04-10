import Image from "next/image";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
    return ( 
        <footer className="footer grid grid-col text-center gap-y-4 absolute bottom-20">
            <span className={`${inter.className} font-medium text-sm ml-3`} >Crafted with passion by Adham ElGazoly</span>
            <div className="social flex flex-row gap-x-3 justify-self-center">
                <a href="https://www.linkedin.com/in/adham-el-gazoly-075385190/" target="_blank">
                    <Image src="/linkedin.svg" width={24} height={24} alt="linkedin" quality={100}/>
                </a>

                <a href="https://github.com/EL-Gazoly" target="_blank">
                    <Image src="/github.svg" width={24} height={24} alt="github" quality={100}/>
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;
